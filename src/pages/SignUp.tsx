import { SignUp } from "@clerk/clerk-react";
import Layout from "@/components/Layout";

const SignUpPage = () => {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-background py-12 px-4">
        <SignUp
          routing="path"
          path="/sign-up"
          signInUrl="/sign-in"
          afterSignUpUrl="/payment"
        />
      </div>
    </Layout>
  );
};

export default SignUpPage;
