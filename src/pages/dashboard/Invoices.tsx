import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Receipt } from "lucide-react";

const Invoices = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-heading font-bold mb-2">Invoices</h1>
        <p className="text-muted-foreground">
          View and download your payment invoices
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Invoices</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12">
            <Receipt className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-lg font-medium mb-2">
              Invoice feature coming soon
            </p>
            <p className="text-muted-foreground">
              You'll be able to view and download all your payment invoices here
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Invoices;
