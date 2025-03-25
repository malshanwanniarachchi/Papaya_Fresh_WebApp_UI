import { useEffect, useState } from 'react';
import Button from '@/components/ui/Button';
import { Link } from 'react-router-dom';
import { Leaf, Package, ShieldCheck, Check } from 'lucide-react';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
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

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'papaya', name: 'Papaya' },
    { id: 'tropical', name: 'Tropical Fruits' },
    { id: 'seasonal', name: 'Seasonal' },
  ];

  const products = [
    {
      id: 1,
      name: 'Premium Red Papaya',
      category: 'papaya',
      image: 'https://images.unsplash.com/photo-1526318472351-c75fcf070305?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      description: 'Our signature red papaya, known for its sweet flavor and buttery texture.',
      features: ['Sweet and aromatic', 'Perfect ripeness', 'High vitamin content']
    },
    {
      id: 2,
      name: 'Yellow Papaya',
      category: 'papaya',
      image: 'https://images.unsplash.com/photo-1517282009859-f000ec3b26fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      description: 'Yellow papaya with a mild, sweet flavor ideal for salads and desserts.',
      features: ['Subtle sweetness', 'Firm texture', 'Long shelf life']
    },
    {
      id: 3,
      name: 'Green Papaya',
      category: 'papaya',
      image: 'https://images.unsplash.com/photo-1591073103087-138b2a06f39a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      description: 'Unripe green papaya, perfect for salads and savory dishes.',
      features: ['Crunchy texture', 'Mild flavor', 'Perfect for cooking']
    },
    {
      id: 4,
      name: 'Alphonso Mango',
      category: 'tropical',
      image: 'https://images.unsplash.com/photo-1572859730774-2cb70677d258?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2236&q=80',
      description: 'The king of mangoes, known for its rich, sweet flavor and smooth texture.',
      features: ['Intensely sweet', 'Aromatic', 'Fiber-free pulp']
    },
    {
      id: 5,
      name: 'Golden Pineapple',
      category: 'tropical',
      image: 'https://images.unsplash.com/photo-1550828520-4cb496926fc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2233&q=80',
      description: 'Sweet and tangy pineapples, perfect for desserts or refreshing drinks.',
      features: ['Juicy and sweet', 'Low acidity', 'Rich in vitamins']
    },
    {
      id: 6,
      name: 'Rambutan',
      category: 'tropical',
      image: 'https://images.unsplash.com/photo-1624811533744-f85d5325d49c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      description: 'Exotic fruit with a sweet and slightly acidic flavor, similar to lychee.',
      features: ['Unique appearance', 'Sweet and juicy', 'Rich in nutrients']
    },
    {
      id: 7,
      name: 'Seasonal Durian',
      category: 'seasonal',
      image: 'https://images.unsplash.com/photo-1588482415422-a061e6b6d073?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      description: 'The "king of fruits" with its unique smell and custard-like texture.',
      features: ['Distinctive aroma', 'Creamy texture', 'Rich flavor']
    },
    {
      id: 8,
      name: 'Seasonal Mangosteen',
      category: 'seasonal',
      image: 'https://images.unsplash.com/photo-1629078691977-dc51bfd37a19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      description: 'Known as the "queen of fruits" for its delicate, sweet flavor.',
      features: ['Sweet and tangy', 'Juicy segments', 'Antioxidant-rich']
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-secondary/50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white inline-flex items-center rounded-full px-3 py-1 text-sm mb-4 reveal">
              <span>Our Products</span>
            </div>
            <h1 className="heading-lg mb-6 reveal delay-1">Premium Tropical Fruits</h1>
            <p className="paragraph text-lg mb-8 reveal delay-2">
              Discover our range of fresh, high-quality tropical fruits, grown with care and delivered with excellence. Our papayas are our signature product, renowned for their sweetness and perfect ripeness.
            </p>
          </div>
        </div>
      </section>
      
      {/* Product Categories */}
      <section className="py-10 bg-white border-b border-border/10">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4 reveal">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-papaya text-white'
                    : 'bg-secondary/70 text-muted-foreground hover:bg-secondary'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Products Grid */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div 
                key={product.id} 
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-border/10 card-hover reveal" 
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                      product.category === 'papaya' 
                        ? 'bg-papaya/10 text-papaya-dark' 
                        : product.category === 'tropical'
                          ? 'bg-leaf/10 text-leaf-dark'
                          : 'bg-secondary text-muted-foreground'
                    }`}>
                      {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="paragraph mb-4">{product.description}</p>
                  <div className="mb-6">
                    <h4 className="text-sm font-medium mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check size={16} className="text-leaf shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link to="/contact">
                    <Button variant="outline" fullWidth>Inquire Now</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section className="section-padding bg-secondary/50">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal">
            <h2 className="heading-lg mb-4 reveal delay-1">Why Choose Our Fruits</h2>
            <p className="paragraph reveal delay-2">
              We take pride in the quality of our products and our commitment to sustainable farming practices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-border/10 card-hover reveal delay-1">
              <div className="w-12 h-12 rounded-full bg-papaya/20 flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6 text-papaya" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Organically Grown</h3>
              <p className="paragraph">
                Our fruits are grown using organic farming practices, free from harmful chemicals and pesticides, ensuring you get the purest flavor and nutrition.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border border-border/10 card-hover reveal delay-2">
              <div className="w-12 h-12 rounded-full bg-papaya/20 flex items-center justify-center mb-4">
                <Package className="w-6 h-6 text-papaya" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Carefully Packed</h3>
              <p className="paragraph">
                Each fruit is hand-picked at the perfect stage of ripeness and carefully packed to maintain freshness during transportation.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border border-border/10 card-hover reveal delay-3">
              <div className="w-12 h-12 rounded-full bg-papaya/20 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6 text-papaya" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
              <p className="paragraph">
                We stand behind the quality of our products. Our fruits undergo rigorous quality checks to ensure only the best reaches our customers.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Bulk Orders */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden reveal">
              <img 
                src="https://images.unsplash.com/photo-1577234286642-fc512a5f8f11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1970&q=80" 
                alt="Bulk Orders" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="space-y-6 reveal delay-1">
              <div className="bg-secondary inline-flex items-center rounded-full px-3 py-1 text-sm mb-4">
                <span>Bulk Orders</span>
              </div>
              <h2 className="heading-lg mb-4">Custom Orders for Businesses</h2>
              <p className="paragraph text-lg mb-4">
                We specialize in providing bulk orders to hotels, restaurants, airlines, and supermarkets. Our flexible ordering system can be tailored to meet your specific requirements.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-leaf shrink-0 mt-0.5" />
                  <span className="paragraph">Customized packaging solutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-leaf shrink-0 mt-0.5" />
                  <span className="paragraph">Flexible delivery schedules</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-leaf shrink-0 mt-0.5" />
                  <span className="paragraph">Volume discounts available</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-leaf shrink-0 mt-0.5" />
                  <span className="paragraph">Dedicated account manager</span>
                </li>
              </ul>
              <Link to="/contact">
                <Button size="lg">Request Bulk Quote</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-papaya/10 to-leaf/10">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center reveal">
            <h2 className="heading-lg mb-6 reveal delay-1">Ready to Order?</h2>
            <p className="paragraph text-lg mb-8 max-w-2xl mx-auto reveal delay-2">
              Contact us today to discuss your requirements and how we can supply your business with the finest tropical fruits in Sri Lanka.
            </p>
            <div className="flex flex-wrap gap-4 justify-center reveal delay-3">
              <Link to="/contact">
                <Button size="lg">Contact Us</Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg">Learn About Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
