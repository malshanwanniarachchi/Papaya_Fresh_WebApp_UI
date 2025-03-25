
import { useEffect } from 'react';
import Button from '@/components/ui/Button';
import { Link } from 'react-router-dom';
import { Check, Clock, Users, Leaf, GanttChart } from 'lucide-react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

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
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-secondary/50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white inline-flex items-center rounded-full px-3 py-1 text-sm mb-4 reveal">
              <span>Our Story</span>
            </div>
            <h1 className="heading-lg mb-6 reveal delay-1">About Papaya Pure</h1>
            <p className="paragraph text-lg mb-8 reveal delay-2">
              We are a family-owned business dedicated to growing and supplying the finest tropical fruits in Sri Lanka, with papaya being our specialty.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden reveal">
              <img 
                src="https://images.unsplash.com/photo-1595228702420-d3f5eb25717f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                alt="Papaya Farm" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="space-y-6 reveal delay-1">
              <div className="bg-secondary inline-flex items-center rounded-full px-3 py-1 text-sm mb-4">
                <span>Our Story</span>
              </div>
              <h2 className="heading-lg mb-4">From Small Farm to Trusted Supplier</h2>
              <p className="paragraph text-lg mb-4">
                Papaya Pure began as a small family farm in 2010 with a vision to grow the finest tropical fruits using sustainable farming practices. Our dedication to quality quickly gained recognition among Sri Lanka's premium establishments.
              </p>
              <p className="paragraph mb-6">
                Today, we are proud to be the trusted supplier for Sri Lankan Airlines, Shangri-La Colombo, Spar Supermarkets, and other top establishments across the country, while still maintaining the family values and quality standards that defined us from day one.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-papaya/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-papaya" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold mb-1">Est. 2010</h3>
                    <p className="text-sm text-muted-foreground">Over a decade of excellence</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-papaya/10 flex items-center justify-center shrink-0">
                    <GanttChart className="w-5 h-5 text-papaya" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold mb-1">50+ Acres</h3>
                    <p className="text-sm text-muted-foreground">Of sustainably managed farms</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mission */}
      <section className="section-padding bg-gradient-to-r from-papaya/10 to-leaf/10">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <div className="bg-white inline-flex items-center rounded-full px-3 py-1 text-sm mb-4 reveal">
              <span>Our Mission</span>
            </div>
            <h2 className="heading-lg mb-4 reveal delay-1">Growing Quality with Care</h2>
            <p className="paragraph text-lg reveal delay-2">
              Our mission is to provide the freshest, highest-quality tropical fruits while maintaining sustainable and responsible farming practices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-border/10 card-hover reveal delay-1">
              <div className="w-12 h-12 rounded-full bg-papaya/20 flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6 text-papaya" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sustainable Farming</h3>
              <p className="paragraph">
                We implement eco-friendly farming methods that protect the environment while producing the finest fruits.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border border-border/10 card-hover reveal delay-2">
              <div className="w-12 h-12 rounded-full bg-papaya/20 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-papaya" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Support</h3>
              <p className="paragraph">
                We support local communities by providing fair employment and investing in rural development.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border border-border/10 card-hover reveal delay-3">
              <div className="w-12 h-12 rounded-full bg-papaya/20 flex items-center justify-center mb-4">
                <Check className="w-6 h-6 text-papaya" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
              <p className="paragraph">
                Every fruit that leaves our farm undergoes rigorous quality checks to ensure only the best reaches our customers.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <div className="bg-secondary inline-flex items-center rounded-full px-3 py-1 text-sm mb-4 reveal">
              <span>Our Team</span>
            </div>
            <h2 className="heading-lg mb-4 reveal delay-1">Meet the People Behind Papaya Pure</h2>
            <p className="paragraph text-lg reveal delay-2">
              Our dedicated team of professionals works tirelessly to ensure that we deliver only the best tropical fruits to our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-border/10 card-hover reveal delay-1">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                  alt="Team Member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg">Rajith Perera</h3>
                <p className="text-muted-foreground text-sm">Founder & CEO</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-border/10 card-hover reveal delay-2">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                  alt="Team Member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg">Amali Fernando</h3>
                <p className="text-muted-foreground text-sm">Operations Director</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-border/10 card-hover reveal delay-3">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                  alt="Team Member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg">Dinesh Jayawardena</h3>
                <p className="text-muted-foreground text-sm">Farm Manager</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-border/10 card-hover reveal delay-4">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                  alt="Team Member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg">Kumari Silva</h3>
                <p className="text-muted-foreground text-sm">Quality Control</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="section-padding bg-secondary/50">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <div className="bg-white inline-flex items-center rounded-full px-3 py-1 text-sm mb-4 reveal">
              <span>Testimonials</span>
            </div>
            <h2 className="heading-lg mb-4 reveal delay-1">What Our Clients Say</h2>
            <p className="paragraph text-lg reveal delay-2">
              Don't just take our word for it. Here's what some of our valued clients have to say about our fruits and service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-border/10 reveal delay-1">
              <div className="flex gap-1 text-papaya mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
              </div>
              <p className="paragraph mb-6">
                "The quality of papayas supplied by Papaya Pure has consistently exceeded our expectations. Their commitment to excellence has made them our preferred fruit supplier."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1961&q=80" 
                    alt="Client" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium">Samantha De Silva</h3>
                  <p className="text-sm text-muted-foreground">Procurement Manager, Shangri-La Colombo</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border border-border/10 reveal delay-2">
              <div className="flex gap-1 text-papaya mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
              </div>
              <p className="paragraph mb-6">
                "Reliability and consistency are what set Papaya Pure apart. Their fruits are always fresh, and their delivery is always on time, which is crucial for our operations."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                    alt="Client" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium">Nihal Gunawardena</h3>
                  <p className="text-sm text-muted-foreground">Catering Manager, Sri Lankan Airlines</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border border-border/10 reveal delay-3">
              <div className="flex gap-1 text-papaya mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
              </div>
              <p className="paragraph mb-6">
                "Our customers have noticed the superior quality of fruits from Papaya Pure. Their papayas are consistently sweet, fresh, and visually appealing - exactly what our shoppers demand."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                    alt="Client" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium">Priya Mendis</h3>
                  <p className="text-sm text-muted-foreground">Fresh Produce Buyer, Spar Supermarkets</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-papaya/10 to-leaf/10">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center reveal">
            <h2 className="heading-lg mb-6 reveal delay-1">Ready to Experience the Difference?</h2>
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

export default About;
