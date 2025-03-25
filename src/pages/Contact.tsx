
import { useEffect, useState } from 'react';
import Button from '@/components/ui/Button';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Your message has been sent!', {
        description: 'We\'ll get back to you as soon as possible.',
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-secondary/50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white inline-flex items-center rounded-full px-3 py-1 text-sm mb-4 reveal">
              <span>Get in Touch</span>
            </div>
            <h1 className="heading-lg mb-6 reveal delay-1">Contact Us</h1>
            <p className="paragraph text-lg mb-8 reveal delay-2">
              Have questions about our products or interested in placing an order? We'd love to hear from you. Reach out to us using the form below or contact us directly.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Info & Form */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 reveal">
              <div>
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                <p className="paragraph mb-8">
                  Feel free to reach out to us directly using the following contact details, or fill out the form and we'll get back to you as soon as possible.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-papaya/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-papaya" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Visit Us</h3>
                    <p className="paragraph">123 Fruit Farm Road, Colombo, Sri Lanka</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-papaya/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-papaya" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Call Us</h3>
                    <p className="paragraph">+94 123 456 789</p>
                    <p className="paragraph">+94 987 654 321</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-papaya/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-papaya" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email Us</h3>
                    <p className="paragraph">info@papayafresh.lk</p>
                    <p className="paragraph">sales@papayafresh.lk</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 rounded-xl bg-white shadow-sm border border-border/10">
                <h3 className="font-medium mb-4">Business Hours</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday:</span>
                    <span>8:30 AM - 5:30 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Saturday:</span>
                    <span>9:00 AM - 2:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-border/10 reveal delay-1">
              <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-papaya transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-papaya transition-all"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-papaya transition-all"
                      placeholder="Your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">Company (Optional)</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-papaya transition-all"
                      placeholder="Your company"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-papaya transition-all"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <Button type="submit" size="lg" fullWidth isLoading={isSubmitting}>
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-border/10 overflow-hidden reveal">
            <div className="aspect-[16/9] rounded-lg overflow-hidden">
              {/* This would be replaced with an actual map component */}
              <div className="w-full h-full bg-secondary/30 flex items-center justify-center">
                <p className="text-2xl font-semibold text-muted-foreground">Map Location</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section-padding bg-secondary/50">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="bg-white inline-flex items-center rounded-full px-3 py-1 text-sm mb-4 reveal">
              <span>FAQs</span>
            </div>
            <h2 className="heading-lg mb-4 reveal delay-1">Frequently Asked Questions</h2>
            <p className="paragraph reveal delay-2">
              Find answers to some of the most common questions we receive about our products and services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "Do you offer delivery services?",
                answer: "Yes, we offer delivery services across Colombo and surrounding areas. For locations outside our standard delivery zone, please contact us to discuss arrangements."
              },
              {
                question: "What is your minimum order quantity?",
                answer: "Our minimum order quantity varies depending on the product. For regular customers, we typically have a lower minimum order requirement. Please contact our sales team for specific details."
              },
              {
                question: "How do you ensure the freshness of your fruits?",
                answer: "We harvest our fruits at the optimal ripeness and have a robust cold chain system to maintain freshness throughout transportation and delivery."
              },
              {
                question: "Do you provide samples before bulk orders?",
                answer: "Yes, we can provide samples for potential business clients looking to place bulk orders. Please contact our sales team to arrange this."
              }
            ].map((faq, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-sm border border-border/10 reveal" 
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="paragraph">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-papaya/10 to-leaf/10">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center reveal">
            <h2 className="heading-lg mb-6 reveal delay-1">Ready to Experience the Freshness?</h2>
            <p className="paragraph text-lg mb-8 max-w-2xl mx-auto reveal delay-2">
              Join our growing list of satisfied customers and experience the premium quality of PapayaFresh products.
            </p>
            <Button size="lg" className="reveal delay-3">
              <Phone className="w-4 h-4 mr-2" />
              Call Us Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
