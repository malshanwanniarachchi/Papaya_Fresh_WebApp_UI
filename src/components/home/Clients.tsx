
import { useEffect } from 'react';

const Clients = () => {
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

  // These would be replaced with actual client logos
  const clients = [
    { name: "Sri Lankan Airlines", logo: "SL Airlines" },
    { name: "Shangri-La Colombo", logo: "Shangri-La" },
    { name: "Spar Supermarket", logo: "Spar" },
    { name: "Cinnamon Grand", logo: "Cinnamon" },
    { name: "Hilton Colombo", logo: "Hilton" },
    { name: "Keells Super", logo: "Keells" },
  ];

  const testimonials = [
    {
      content: "PapayaFresh has been our trusted supplier for over 3 years. Their consistent quality and reliability is unmatched in the market.",
      author: "Chef Samantha Silva",
      position: "Executive Chef, Shangri-La Colombo"
    },
    {
      content: "The papayas from PapayaFresh are of exceptional quality. Our customers appreciate the consistent flavor and perfect ripeness.",
      author: "Rajiv Mendis",
      position: "Procurement Manager, Spar Supermarket"
    }
  ];

  return (
    <section className="section-padding bg-secondary/50">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="bg-white inline-flex items-center rounded-full px-3 py-1 text-sm mb-4 reveal">
            <span>Our Valued Clients</span>
          </div>
          <h2 className="heading-lg mb-4 reveal delay-1">Trusted by Sri Lanka's Top Establishments</h2>
          <p className="paragraph reveal delay-2">
            We're proud to supply our premium fruits to some of the most prestigious hotels, airlines, and supermarkets across Sri Lanka.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-sm border border-border/10 flex items-center justify-center aspect-square reveal" 
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="text-xl font-bold text-papaya">{client.logo}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-sm border border-border/10 reveal" 
              style={{ animationDelay: `${0.2 * (index + 1)}s` }}
            >
              <div className="mb-6">
                <svg className="w-10 h-10 text-papaya/20" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 8v8H6v-8h4zm12 0v8h-4v-8h4zm-11 9v7l-1 1-1-1v-7h2zm12 0v7l-1 1-1-1v-7h2zm-6-9v8h-4v-8h4zm-1 9v7l-1 1-1-1v-7h2z"/>
                </svg>
              </div>
              <p className="text-lg mb-4 italic text-muted-foreground">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
