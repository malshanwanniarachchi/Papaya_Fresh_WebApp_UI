import { useEffect } from 'react';
import Button from '@/components/ui/Button';
import { Link } from 'react-router-dom';
import { Tractor, Sprout, Users, Clock } from 'lucide-react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="reveal">
              <h1 className="heading-xl mb-4">
                Our Story: From Farm to Table
              </h1>
              <p className="paragraph mb-6">
                Learn about our journey, our values, and our commitment to delivering the freshest tropical fruits.
              </p>
              <Link to="/contact">
                <Button size="lg">Contact Us</Button>
              </Link>
            </div>
            <div className="reveal">
              <img
                src="https://images.unsplash.com/photo-1608737662978-c98f9d2033a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="About Us"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-secondary/10">
        <div className="container mx-auto">
          <div className="text-center mb-12 reveal">
            <h2 className="heading-lg mb-4">Our Core Values</h2>
            <p className="paragraph">
              We are guided by a set of core values that define who we are and how we operate.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md border border-border/10 reveal delay-1">
              <Tractor className="w-12 h-12 text-papaya mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
              <p className="paragraph">
                We are committed to sustainable farming practices that protect the environment.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md border border-border/10 reveal delay-2">
              <Sprout className="w-12 h-12 text-leaf mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p className="paragraph">
                We ensure the highest quality in every fruit we grow, from seed to harvest.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md border border-border/10 reveal delay-3">
              <Users className="w-12 h-12 text-papaya mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="paragraph">
                We support our local communities and promote fair labor practices.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md border border-border/10 reveal delay-4">
              <Clock className="w-12 h-12 text-leaf mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Tradition</h3>
              <p className="paragraph">
                We honor traditional farming methods while embracing modern innovations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12 reveal">
            <h2 className="heading-lg mb-4">Meet Our Team</h2>
            <p className="paragraph">
              Our team is made up of dedicated individuals who are passionate about tropical fruits.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center reveal delay-1">
              <img
                src="https://images.unsplash.com/photo-1570295999680-0b97926c0423?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1940&q=80"
                alt="Team Member 1"
                className="rounded-full w-40 h-40 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">John Doe</h3>
              <p className="paragraph">CEO</p>
            </div>
            <div className="text-center reveal delay-2">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1961&q=80"
                alt="Team Member 2"
                className="rounded-full w-40 h-40 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
              <p className="paragraph">Farm Manager</p>
            </div>
            <div className="text-center reveal delay-3">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Team Member 3"
                className="rounded-full w-40 h-40 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Emily White</h3>
              <p className="paragraph">Sales Director</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-secondary/10">
        <div className="container mx-auto text-center reveal">
          <h2 className="heading-lg mb-6">Ready to Learn More?</h2>
          <p className="paragraph mb-8">
            Contact us today to discuss how we can supply your business with the finest tropical fruits.
          </p>
          <Link to="/contact">
            <Button size="lg">Contact Us</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
