import { useState } from "react";
import { useUser } from "@clerk/clerk-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Briefcase } from "lucide-react";

const BookService = () => {
  const { user } = useUser();
  const [hours, setHours] = useState(1);
  const [companyName, setCompanyName] = useState("");
  const [jobPosition, setJobPosition] = useState("");
  const [notes, setNotes] = useState("");

  const ratePerHour = 850;
  const totalAmount = hours * ratePerHour;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Payment integration will be added in next step
    console.log("Booking:", {
      hours,
      companyName,
      jobPosition,
      notes,
      totalAmount,
    });
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-heading font-bold mb-2">
          Book LMIA Service
        </h1>
        <p className="text-muted-foreground">
          Labour Market Impact Assessment - Professional immigration service
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Briefcase className="text-accent" />
            LMIA Service
          </CardTitle>
          <CardDescription className="text-base">
            End-to-end LMIA process including initial screening, interview
            preparation, application filing, and follow-up until approval
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6 p-4 bg-accent/5 border border-accent/20 rounded-lg">
            <p className="text-sm text-muted-foreground mb-1">Rate</p>
            <p className="text-2xl font-bold text-accent">
              £{ratePerHour}/hour
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="hours">Number of Hours *</Label>
              <Input
                id="hours"
                type="number"
                min="1"
                max="100"
                value={hours}
                onChange={(e) => setHours(parseInt(e.target.value) || 1)}
                required
              />
              <p className="text-sm text-muted-foreground">
                Minimum 1 hour, Maximum 100 hours
              </p>
            </div>

            <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">Total Amount</p>
              <p className="text-3xl font-bold text-primary">
                £{totalAmount.toLocaleString()}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                {hours} hour{hours > 1 ? "s" : ""} × £{ratePerHour}
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="companyName">Company Name *</Label>
              <Input
                id="companyName"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Enter your company name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="jobPosition">Job Position *</Label>
              <Input
                id="jobPosition"
                value={jobPosition}
                onChange={(e) => setJobPosition(e.target.value)}
                placeholder="e.g. Software Engineer, Marketing Manager"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Notes / Requirements</Label>
              <Textarea
                id="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Any specific requirements or additional information..."
                rows={4}
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-gradient-to-r from-accent to-amber-500 text-accent-foreground hover:from-accent/90 hover:to-amber-500/90 font-semibold"
            >
              Proceed to Payment - £{totalAmount.toLocaleString()}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookService;
