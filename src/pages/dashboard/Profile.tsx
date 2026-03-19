import { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Mail, Calendar, CheckCircle } from "lucide-react";

const Profile = () => {
  const { user } = useUser();
  const [bookingsCount, setBookingsCount] = useState(0);

  useEffect(() => {
    fetchBookingsCount();
  }, [user]);

  const fetchBookingsCount = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/bookings/my-bookings?clerkUserId=${user?.id}`,
      );
      const data = await response.json();

      if (data.success) {
        setBookingsCount(data.bookings.length);
      }
    } catch (error) {
      console.error("Error fetching bookings count:", error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-heading font-bold mb-2">Profile</h1>
        <p className="text-muted-foreground">
          Your account information and settings
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Account Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
              <User className="text-accent" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Full Name</p>
              <p className="text-lg font-medium">
                {user?.firstName} {user?.lastName}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
              <Mail className="text-accent" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Email Address</p>
              <p className="text-lg font-medium">
                {user?.primaryEmailAddress?.emailAddress}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
              <Calendar className="text-accent" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Member Since</p>
              <p className="text-lg font-medium">
                {user?.createdAt
                  ? new Date(user.createdAt).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })
                  : "-"}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center shrink-0">
              <CheckCircle className="text-green-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Account Status</p>
              <p className="text-lg font-medium text-green-600">
                Active - B2B Member
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Account Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-muted-foreground mb-1">
                Total Bookings
              </p>
              <p className="text-3xl font-bold">{bookingsCount}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">
                Registration Date
              </p>
              <p className="text-3xl font-bold">
                {user?.createdAt
                  ? new Date(user.createdAt).toLocaleDateString("en-GB", {
                      month: "short",
                      year: "numeric",
                    })
                  : "-"}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
