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

  const values = [
    {
      icon: <Leaf className="w-6 h-6 text-leaf" />,
      title: "Sustainability",
      description: "We are committed to sustainable farming practices that preserve the environment for future generations."
    },
    {
      icon: <Check className="w-6 h-6 text-papaya" />,
      title: "Quality",
      description: "We never compromise on quality, ensuring every fruit meets our rigorous standards."
    },
    {
      icon: <Users className="w-6 h-6 text-leaf" />,
      title: "Community",
      description: "We support local communities by providing employment and fair compensation."
    },
    {
      icon: <Clock className="w-6 h-6 text-papaya" />,
      title: "Reliability",
      description: "Our customers can depend on us for consistent quality and on-time delivery."
    }
  ];

  const milestones = [
    { year: 2010, event: "Founded PapayaFresh with a small farm in central Sri Lanka" },
    { year: 2013, event: "Expanded operations to include a variety of tropical fruits" },
    { year: 2015, event: "Secured our first major contract with Sri Lankan Airlines" },
    { year: 2017, event: "Implemented sustainable farming practices across all operations" },
    { year: 2019, event: "Started supplying to luxury hotels and resorts in Colombo" },
    { year: 2021, event: "Expanded distribution network to cover all major supermarkets" },
    { year: 2023, event: "Launched our organic certification program" }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-secondary/50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 reveal">
              <div className="bg-white inline-flex items-center rounded-full px-3 py-1 text-sm mb-4">
                <span>About Us</span>
              </div>
              <h1 className="heading-lg reveal delay-1">Our Story of Growth and Excellence</h1>
              <p className="paragraph text-lg reveal delay-2">
                PapayaFresh was founded with a vision to provide the finest tropical fruits to Sri Lanka's premier establishments. Our journey began with a small papaya farm and has since grown into a trusted supplier for the country's top hotels, airlines, and supermarkets.
              </p>
              <div className="pt-2 reveal delay-3">
                <Link to="/contact">
                  <Button size="lg">Get in Touch</Button>
                </Link>
              </div>
            </div>
            
            <div className="relative h-[400px] reveal delay-2">
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1621328406408-d06b01a74485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                  alt="Papaya Farm" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1543158966-01918e17d99e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Harvesting Papaya" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-border/10 reveal">
              <div className="w-12 h-12 rounded-full bg-papaya/20 flex items-center justify-center mb-4">
                <div className="w-6 h-6 rounded-full bg-papaya"></div>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="paragraph">
                To provide the freshest, highest quality tropical fruits to our customers while promoting sustainable farming practices and supporting local communities.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border border-border/10 reveal delay-1">
              <div className="w-12 h-12 rounded-full bg-leaf/20 flex items-center justify-center mb-4">
                <div className="w-6 h-6 rounded-full bg-leaf"></div>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="paragraph">
                To be the leading supplier of premium tropical fruits in Sri Lanka, recognized for our unwavering commitment to quality, sustainability, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="bg-secondary inline-flex items-center rounded-full px-3 py-1 text-sm mb-4 reveal">
              <span>Our Core Values</span>
            </div>
            <h2 className="heading-lg mb-4 reveal delay-1">What Drives Us Every Day</h2>
            <p className="paragraph reveal delay-2">
              Our values form the foundation of everything we do, from how we grow our fruits to how we interact with our customers and community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-secondary/30 rounded-xl p-6 border border-border/10 card-hover reveal" 
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="paragraph">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Journey */}
      <section className="section-padding bg-secondary/50">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="bg-white inline-flex items-center rounded-full px-3 py-1 text-sm mb-4 reveal">
              <span>Our Journey</span>
            </div>
            <h2 className="heading-lg mb-4 reveal delay-1">Growing Together Since 2010</h2>
            <p className="paragraph reveal delay-2">
              From humble beginnings to becoming a trusted supplier for Sri Lanka's top establishments, our journey has been one of continuous growth and improvement.
            </p>
          </div>
          
          <div className="relative max-w-3xl mx-auto">
            {/* Timeline */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-border"></div>
            
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className={`relative mb-12 flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} reveal`}
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className={`w-[45%] ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-border/10">
                    <div className="text-2xl font-bold text-papaya mb-2">{milestone.year}</div>
                    <p className="paragraph">{milestone.event}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 top-6 transform -translate-x-1/2 w-4 h-4 rounded-full bg-papaya border-4 border-white"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="bg-secondary inline-flex items-center rounded-full px-3 py-1 text-sm mb-4 reveal">
              <span>Our Team</span>
            </div>
            <h2 className="heading-lg mb-4 reveal delay-1">The People Behind PapayaFresh</h2>
            <p className="paragraph reveal delay-2">
              Our dedicated team of agricultural experts, logistics specialists, and customer service professionals work together to deliver excellence in every aspect of our business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-border/10 card-hover reveal" 
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="aspect-[3/4] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <img 
                    src={`https://randomuser.me/api/portraits/${index === 0 ? 'men' : index === 1 ? 'women' : 'men'}/${index + 1}.jpg`} 
                    alt="Team Member" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{index === 0 ? 'Rajiv Perera' : index === 1 ? 'Amali Fernando' : 'Vikram Singh'}</h3>
                  <p className="text-muted-foreground mb-4">{index === 0 ? 'Founder & CEO' : index === 1 ? 'Operations Director' : 'Farm Manager'}</p>
                  <p className="paragraph">
                    {index === 0 
                      ? 'With over 20 years of experience in agriculture, Rajiv leads our company with passion and expertise.' 
                      : index === 1 
                        ? 'Amali ensures that our operations run smoothly, from farm to delivery.'
                        : 'Vikram oversees our farming practices to ensure the highest quality fruits.'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-papaya/10 to-leaf/10">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center reveal">
            <h2 className="heading-lg mb-6 reveal delay-1">Join Our Journey</h2>
            <p className="paragraph text-lg mb-8 max-w-2xl mx-auto reveal delay-2">
              Whether you're looking for a reliable supplier or interested in learning more about our story, we'd love to hear from you.
            </p>
            <div className="flex flex-wrap gap-4 justify-center reveal delay-3">
              <Link to="/contact">
                <Button size="lg">Contact Us</Button>
              </Link>
              <Link to="/products">
                <Button variant="outline" size="lg">Our Products</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
