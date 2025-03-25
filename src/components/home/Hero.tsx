
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-16"
      style={{
        background: 'linear-gradient(120deg, rgba(255,255,255,1) 0%, rgba(255,240,229,1) 100%)'
      }}
    >
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-papaya/10 z-10"></div>
        <video 
          className="absolute w-full h-full object-cover" 
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/GTYSdDW/videoblocks-fresh-fruits-falling-into-water-in-slow-motion-fresh-fruits-on-black-background_hcqx9_kax__97c9746a7a1dd7288e848232501f521b__P360.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden z-10">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-papaya/5 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-leaf/5 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full bg-papaya/10 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-20">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="bg-secondary/80 backdrop-blur-sm text-sm inline-flex items-center rounded-full px-4 py-1 reveal">
              <span className="inline-block w-2 h-2 rounded-full bg-leaf mr-2"></span>
              <span>Premium Tropical Fruits</span>
            </div>
            <h1 className="heading-xl reveal delay-1">
              Fresh <span className="text-papaya">Papaya</span> Grown with Care
            </h1>
            <p className="paragraph text-lg max-w-lg reveal delay-2">
              We supply the finest quality papayas and tropical fruits to Sri Lanka's top establishments, including Sri Lankan Airlines, Shangri-La Colombo, and Spar Supermarkets.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 reveal delay-3">
            <Link to="/products">
              <Button size="lg">Explore Our Products</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg">Contact Us</Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-3 gap-4 reveal delay-4">
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold text-papaya">10+</div>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold text-papaya">50+</div>
              <p className="text-sm text-muted-foreground">Loyal Clients</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold text-papaya">100%</div>
              <p className="text-sm text-muted-foreground">Organic Growth</p>
            </div>
          </div>
        </div>
        
        <div className="relative h-[500px] reveal delay-2 hidden lg:block">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[350px] h-[350px]">
              {/* Main image container with shadow and rotation */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-papaya/20 to-leaf/20 shadow-lg animate-rotate-slow"></div>
              
              {/* Product image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1526318472351-c75fcf070305?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                  alt="Fresh Papaya" 
                  className="h-[300px] object-contain drop-shadow-2xl animate-float"
                />
              </div>
            </div>
          </div>
          
          {/* Accent dots */}
          <div className="absolute top-1/4 right-10 w-4 h-4 rounded-full bg-papaya"></div>
          <div className="absolute bottom-1/4 left-10 w-6 h-6 rounded-full bg-leaf"></div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-20">
        <span className="text-sm text-muted-foreground mb-2">Scroll Down</span>
        <div className="w-5 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
