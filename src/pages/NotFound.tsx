
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Button from "@/components/ui/Button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="max-w-md mx-auto text-center">
        <div className="mb-8">
          <div className="w-24 h-24 bg-secondary/70 rounded-full mx-auto flex items-center justify-center mb-6">
            <span className="text-5xl font-bold text-papaya">404</span>
          </div>
          <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
          <p className="paragraph mb-8">
            The page you are looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          <Link to="/">
            <Button size="lg">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <Link to="/products" className="p-4 bg-white rounded-lg shadow-sm border border-border/10 transition-all hover:shadow-md">
            <h3 className="font-medium mb-1">Our Products</h3>
            <p className="text-sm text-muted-foreground">Explore our fresh tropical fruits</p>
          </Link>
          
          <Link to="/contact" className="p-4 bg-white rounded-lg shadow-sm border border-border/10 transition-all hover:shadow-md">
            <h3 className="font-medium mb-1">Contact Us</h3>
            <p className="text-sm text-muted-foreground">Get in touch with our team</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
