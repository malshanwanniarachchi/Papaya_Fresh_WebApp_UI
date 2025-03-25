
import { useEffect } from 'react';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import Clients from '@/components/home/Clients';
import Button from '@/components/ui/Button';
import { Link } from 'react-router-dom';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      
      {/* Product Showcase */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal">
            <div className="bg-secondary inline-flex items-center rounded-full px-3 py-1 text-sm mb-4">
              <span>Our Products</span>
            </div>
            <h2 className="heading-lg mb-4 reveal delay-1">Premium Tropical Fruits</h2>
            <p className="paragraph reveal delay-2">
              We specialize in growing and delivering the freshest tropical fruits, with papaya being our signature product.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="rounded-xl overflow-hidden shadow-sm border border-border/10 card-hover reveal delay-1">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1526318472351-c75fcf070305?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                  alt="Fresh Papaya" 
                  className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Premium Papaya</h3>
                <p className="paragraph mb-4">Our signature papaya is perfect for eating fresh or using in salads and desserts.</p>
                <Link to="/products">
                  <Button variant="outline" fullWidth>Learn More</Button>
                </Link>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-sm border border-border/10 card-hover reveal delay-2">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1572859730774-2cb70677d258?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2236&q=80" 
                  alt="Mango" 
                  className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Sweet Mangoes</h3>
                <p className="paragraph mb-4">Juicy mangoes with the perfect balance of sweetness and tanginess.</p>
                <Link to="/products">
                  <Button variant="outline" fullWidth>Learn More</Button>
                </Link>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-sm border border-border/10 card-hover reveal delay-3">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1550828520-4cb496926fc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2233&q=80" 
                  alt="Pineapple" 
                  className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Fresh Pineapples</h3>
                <p className="paragraph mb-4">Sweet and tangy pineapples, perfect for desserts or refreshing drinks.</p>
                <Link to="/products">
                  <Button variant="outline" fullWidth>Learn More</Button>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12 reveal delay-4">
            <Link to="/products">
              <Button size="lg">View All Products</Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Clients />
      
      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-papaya/10 to-leaf/10">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center reveal">
            <h2 className="heading-lg mb-6 reveal delay-1">Ready to Experience the Freshness?</h2>
            <p className="paragraph text-lg mb-8 max-w-2xl mx-auto reveal delay-2">
              Contact us today to discuss how we can supply your business with the finest tropical fruits in Sri Lanka.
            </p>
            <div className="flex flex-wrap gap-4 justify-center reveal delay-3">
              <Link to="/contact">
                <Button size="lg">Contact Us</Button>
              </Link>
              <Link to="/products">
                <Button variant="outline" size="lg">View Products</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
