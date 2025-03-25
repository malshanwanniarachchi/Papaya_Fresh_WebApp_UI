
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
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <video 
          className="w-full h-full object-cover"
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source 
            src="https://player.vimeo.com/external/455119425.sd.mp4?s=9ee18f3e8f8c146ff6c735978fdd47789dc61dd4&profile_id=164&oauth2_token_id=57447761" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Content Layer */}
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="bg-secondary/80 backdrop-blur-sm text-sm inline-flex items-center rounded-full px-4 py-1 reveal">
              <span className="inline-block w-2 h-2 rounded-full bg-leaf mr-2"></span>
              <span>Premium Tropical Fruits</span>
            </div>
            <h1 className="heading-xl text-white reveal delay-1">
              Fresh <span className="text-papaya">Papaya</span> Grown with Care
            </h1>
            <p className="paragraph text-lg max-w-lg text-white/90 reveal delay-2">
              We supply the finest quality papayas and tropical fruits to Sri Lanka's top establishments, including Sri Lankan Airlines, Shangri-La Colombo, and Spar Supermarkets.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 reveal delay-3">
            <Link to="/products">
              <Button size="lg">Explore Our Products</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm hover:bg-white/20">Contact Us</Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-3 gap-4 reveal delay-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold text-papaya">10+</div>
              <p className="text-sm text-white">Years Experience</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold text-papaya">50+</div>
              <p className="text-sm text-white">Loyal Clients</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold text-papaya">100%</div>
              <p className="text-sm text-white">Organic Growth</p>
            </div>
          </div>
        </div>
        
        <div className="relative h-[500px] reveal delay-2 hidden lg:block">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[350px] h-[350px]">
              {/* Main image container with shadow and rotation */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-papaya/30 to-leaf/30 shadow-lg backdrop-blur-sm animate-rotate-slow"></div>
              
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
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-10">
        <span className="text-sm text-white mb-2">Scroll Down</span>
        <div className="w-5 h-10 rounded-full border-2 border-white/30 flex justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-white mt-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
