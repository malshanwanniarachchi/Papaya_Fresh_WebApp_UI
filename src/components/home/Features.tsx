
import { ShieldCheck, Truck, Leaf, Award } from 'lucide-react';
import { useEffect } from 'react';

const Features = () => {
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

  const features = [
    {
      icon: <Leaf className="w-6 h-6 text-leaf" />,
      title: "100% Organic",
      description: "All our fruits are grown using organic farming practices, free from harmful chemicals and pesticides."
    },
    {
      icon: <Truck className="w-6 h-6 text-papaya" />,
      title: "Fast Delivery",
      description: "We ensure prompt delivery of fresh fruits directly to your doorstep or business establishment."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-leaf" />,
      title: "Quality Assurance",
      description: "Every fruit undergoes strict quality checks to ensure only the best reaches our customers."
    },
    {
      icon: <Award className="w-6 h-6 text-papaya" />,
      title: "Premium Selection",
      description: "Our papayas are carefully selected for optimal ripeness, size, and flavor consistency."
    }
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="bg-secondary inline-flex items-center rounded-full px-3 py-1 text-sm mb-4 reveal">
            <span>Why Choose Us</span>
          </div>
          <h2 className="heading-lg mb-4 reveal delay-1">Experience the Difference in Every Bite</h2>
          <p className="paragraph reveal delay-2">
            Our commitment to quality and sustainable farming practices sets us apart from the rest. Here's why our customers choose PapayaFresh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-sm border border-border/10 card-hover reveal" 
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="paragraph">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
