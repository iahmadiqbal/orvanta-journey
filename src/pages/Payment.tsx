import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, CreditCard } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const { user } = useUser();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setLoading(true);

    try {
      // Create payment intent
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/payments/create-signup-intent`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            clerkUserId: user?.id,
            email: user?.primaryEmailAddress?.emailAddress,
          }),
        },
      );

      const { clientSecret } = await response.json();

      // Confirm payment
      const { error, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: elements.getElement(CardElement)!,
            billing_details: {
              email: user?.primaryEmailAddress?.emailAddress,
              name: `${user?.firstName} ${user?.lastName}`,
            },
          },
        },
      );

      if (error) {
        toast({
          title: "Payment Failed",
          description: error.message,
          variant: "destructive",
        });
        setLoading(false);
        return;
      }

      if (paymentIntent.status === "succeeded") {
        // Confirm with backend
        await fetch(
          `${import.meta.env.VITE_API_URL}/api/payments/confirm-signup`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              clerkUserId: user?.id,
              email: user?.primaryEmailAddress?.emailAddress,
              firstName: user?.firstName,
              lastName: user?.lastName,
              paymentIntentId: paymentIntent.id,
            }),
          },
        );

        toast({
          title: "Payment Successful! 🎉",
          description: "Welcome to Orvanta B2B Portal",
        });

        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Payment error:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="p-4 border border-border rounded-lg bg-background">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
      </div>

      <Button
        type="submit"
        disabled={!stripe || loading}
        className="w-full bg-gradient-to-r from-accent to-amber-500 text-accent-foreground hover:from-accent/90 hover:to-amber-500/90 font-semibold h-12 text-base"
      >
        {loading ? (
          "Processing..."
        ) : (
          <>
            <CreditCard className="mr-2" size={18} />
            Pay £100 & Access Portal
          </>
        )}
      </Button>

      <p className="text-xs text-center text-muted-foreground">
        Secure payment powered by Stripe. Your card details are never stored on
        our servers.
      </p>
    </form>
  );
};

const Payment = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-background py-12 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-heading font-bold mb-3">
              Complete Your Registration
            </h1>
            <p className="text-lg text-muted-foreground">
              One-time registration fee to access the B2B portal
            </p>
          </div>

          <Card className="mb-6">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-3xl font-bold text-accent">
                £100
              </CardTitle>
              <CardDescription className="text-base">
                Registration Fee
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <Check className="text-accent mt-0.5 shrink-0" size={20} />
                  <span className="text-base">Full access to B2B portal</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-accent mt-0.5 shrink-0" size={20} />
                  <span className="text-base">LMIA services at £850/hour</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-accent mt-0.5 shrink-0" size={20} />
                  <span className="text-base">Dedicated account manager</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-accent mt-0.5 shrink-0" size={20} />
                  <span className="text-base">
                    Real-time application tracking
                  </span>
                </div>
              </div>

              <Elements stripe={stripePromise}>
                <PaymentForm />
              </Elements>
            </CardContent>
          </Card>

          <div className="text-center text-sm text-muted-foreground">
            <p>Need help? Contact us at info@orvantaadvisory.com</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Payment;
