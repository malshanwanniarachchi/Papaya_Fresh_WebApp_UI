
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t border-border/50">
      <div className="container mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-papaya/20 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-papaya"></div>
              </div>
              <span className="text-2xl font-bold tracking-tight">PapayaFresh</span>
            </Link>
            <p className="paragraph max-w-xs">
              We grow and deliver the freshest papayas and tropical fruits across Sri Lanka, from farm to table.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="paragraph hover:text-papaya transition-colors">Home</Link></li>
              <li><Link to="/about" className="paragraph hover:text-papaya transition-colors">About Us</Link></li>
              <li><Link to="/products" className="paragraph hover:text-papaya transition-colors">Our Products</Link></li>
              <li><Link to="/contact" className="paragraph hover:text-papaya transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-papaya shrink-0 mt-1" />
                <span className="paragraph">123 Fruit Farm Road, Colombo, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-papaya shrink-0" />
                <span className="paragraph">+94 123 456 789</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-papaya shrink-0" />
                <span className="paragraph">info@papayafresh.lk</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Subscribe</h3>
            <p className="paragraph mb-4">Stay updated with our latest products and offers.</p>
            <form className="space-y-2">
              <input 
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-papaya"
              />
              <button 
                type="submit"
                className="w-full bg-papaya hover:bg-papaya-dark text-white font-medium px-4 py-2 rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} PapayaFresh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
