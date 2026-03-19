import { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Briefcase, PoundSterling, Calendar } from "lucide-react";

const Overview = () => {
  const { user } = useUser();
  const [stats, setStats] = useState({
    totalHours: 0,
    activeApplications: 0,
    totalSpent: 0,
    memberSince: "",
  });
  const [recentBookings, setRecentBookings] = useState([]);

  useEffect(() => {
    fetchStats();
  }, [user]);

  const fetchStats = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/bookings/my-bookings?clerkUserId=${user?.id}`,
      );
      const data = await response.json();

      if (data.success) {
        const bookings = data.bookings;
        const totalHours = bookings.reduce(
          (sum: number, b: any) => sum + b.hours,
          0,
        );
        const totalSpent = bookings.reduce(
          (sum: number, b: any) => sum + b.amountGBP,
          0,
        );
        const activeApplications = bookings.filter(
          (b: any) => b.status === "pending" || b.status === "in_progress",
        ).length;

        setStats({
          totalHours,
          activeApplications,
          totalSpent,
          memberSince: user?.createdAt
            ? new Date(user.createdAt).toLocaleDateString("en-GB", {
                month: "short",
                year: "numeric",
              })
            : "",
        });

        setRecentBookings(bookings.slice(0, 3));
      }
    } catch (error) {
      console.error("Error fetching stats:", error);
    }
  };

  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div>
        <h1 className="text-3xl font-heading font-bold mb-2">
          Welcome back, {user?.firstName}!
        </h1>
        <p className="text-muted-foreground">
          Here's an overview of your B2B portal activity
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Hours Purchased
            </CardTitle>
            <Clock className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalHours}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Active Applications
            </CardTitle>
            <Briefcase className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.activeApplications}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Spent
            </CardTitle>
            <PoundSterling className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              £{stats.totalSpent.toLocaleString()}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Member Since
            </CardTitle>
            <Calendar className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.memberSince}</div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Bookings */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Bookings</CardTitle>
        </CardHeader>
        <CardContent>
          {recentBookings.length > 0 ? (
            <div className="space-y-4">
              {recentBookings.map((booking: any) => (
                <div
                  key={booking._id}
                  className="flex items-center justify-between p-4 border border-border rounded-lg"
                >
                  <div>
                    <p className="font-medium">{booking.service}</p>
                    <p className="text-sm text-muted-foreground">
                      {booking.hours} hours • £
                      {booking.amountGBP.toLocaleString()}
                    </p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      booking.status === "completed"
                        ? "bg-green-100 text-green-700"
                        : booking.status === "in_progress"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {booking.status.replace("_", " ")}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground py-8">
              No bookings yet. Book your first LMIA service!
            </p>
          )}
        </CardContent>
      </Card>

      {/* Quick Action */}
      <div className="flex justify-center">
        <Link to="/dashboard/book">
          <Button
            size="lg"
            className="bg-gradient-to-r from-accent to-amber-500 text-accent-foreground hover:from-accent/90 hover:to-amber-500/90 font-semibold"
          >
            <Briefcase className="mr-2" size={18} />
            Book LMIA Service
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Overview;
