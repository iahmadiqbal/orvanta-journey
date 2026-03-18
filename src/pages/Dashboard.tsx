import { useUser } from "@clerk/clerk-react";
import Layout from "@/components/Layout";

const Dashboard = () => {
  const { user } = useUser();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-heading font-bold mb-4">
          Welcome to Your Dashboard
        </h1>
        <p className="text-lg text-muted-foreground">
          Hello {user?.firstName}! Your B2B portal is ready.
        </p>
      </div>
    </Layout>
  );
};

export default Dashboard;
