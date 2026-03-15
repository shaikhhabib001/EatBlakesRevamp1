import React from 'react';
import { ShoppingCart, User, ArrowRight, Star, Facebook, Instagram, Twitter, CheckCircle2, ShieldCheck, Leaf, Sprout, Sparkles } from 'lucide-react';

const TopBar = () => (
  <div className="bg-stone-900 text-stone-100 text-xs py-2 text-center tracking-widest uppercase">
    Welcome to our store
  </div>
);

const Navbar = () => (
  <nav className="border-b border-stone-200 bg-white sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        <div className="flex-shrink-0 flex items-center">
          <span className="font-serif text-2xl font-bold tracking-tight">BLAKE'S</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-stone-900 text-sm font-medium tracking-wide uppercase hover:text-stone-500">Shop</a>
          <a href="#" className="text-stone-900 text-sm font-medium tracking-wide uppercase hover:text-stone-500">Discover</a>
          <a href="#" className="text-stone-900 text-sm font-medium tracking-wide uppercase hover:text-stone-500">Find in Store</a>
        </div>
        <div className="flex items-center space-x-6">
          <User className="w-5 h-5 text-stone-900 cursor-pointer hover:text-stone-500" />
          <ShoppingCart className="w-5 h-5 text-stone-900 cursor-pointer hover:text-stone-500" />
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <div className="bg-stone-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 flex flex-col lg:flex-row items-center">
      <div className="lg:w-1/2 pr-0 lg:pr-16 mb-12 lg:mb-0">
        <h1 className="text-5xl lg:text-7xl font-serif font-medium text-stone-900 leading-tight mb-6">
          Crispy Treats
        </h1>
        <p className="text-xl text-stone-600 mb-10 font-light">
          Crispy delight in every bite. Allergy-friendly snacks made for everyone.
        </p>
        <button className="bg-stone-900 text-white px-8 py-4 text-sm tracking-widest uppercase font-medium hover:bg-stone-800 transition-colors">
          Shop Now
        </button>
      </div>
      <div className="lg:w-1/2 w-full">
        <img 
          src="https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&q=80&w=1200" 
          alt="Crispy Treats" 
          className="w-full h-[500px] object-cover rounded-sm"
        />
      </div>
    </div>
  </div>
);

const FeaturesBar = () => (
  <div className="border-y border-stone-200 bg-white py-6">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-8 md:gap-16 text-sm font-medium tracking-widest uppercase text-stone-900">
      <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Wholesome Ingredients</span>
      <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Non-GMO Verified</span>
      <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Gluten-Free</span>
    </div>
  </div>
);

const CategoryCard = ({ title, desc, img }: { title: string, desc: string, img: string }) => (
  <div className="group cursor-pointer">
    <div className="overflow-hidden mb-6 bg-stone-100 aspect-[4/5]">
      <img src={img} alt={title} className="w-full h-full object-cover" />
    </div>
    <h3 className="text-lg font-medium text-stone-900 mb-2">{title}</h3>
    <p className="text-stone-500 text-sm mb-4 line-clamp-2">{desc}</p>
    <div className="flex items-center text-sm font-medium tracking-widest uppercase text-stone-900 group-hover:text-stone-500 transition-colors">
      Shop Now <ArrowRight className="w-4 h-4 ml-2" />
    </div>
  </div>
);

const Categories = () => (
  <div className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <CategoryCard 
          title="Chewy Granola Bars" 
          desc="A soft-baked, snack-time staple made for busy days. An easy win for lunchboxes, backpacks, and on-the-go."
          img="https://images.unsplash.com/photo-1614548484966-caf1505a9a73?auto=format&fit=crop&q=80&w=800"
        />
        <CategoryCard 
          title="Crispy Treats" 
          desc="A school-safe twist on a classic favorite! All the gooey, crispy goodness kids love, made without the allergens you don't."
          img="https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&q=80&w=800"
        />
        <CategoryCard 
          title="Breakfast Bars + Protein" 
          desc="A no-fuss breakfast for busy mornings. Made to keep kids fueled and parents moving, just grab and go!"
          img="https://images.unsplash.com/photo-1528498033373-3c6c08e93d79?auto=format&fit=crop&q=80&w=800"
        />
      </div>
    </div>
  </div>
);

const ValueProps = () => (
  <div className="py-24 bg-stone-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-serif text-stone-900 mb-16">Wholesome snacks are better with Blake's</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
        <div className="flex flex-col items-center">
          <Leaf className="w-8 h-8 text-stone-900 mb-4" strokeWidth={1.5} />
          <h4 className="font-medium text-stone-900 mb-2 text-sm uppercase tracking-wider">Non GMO Verified</h4>
          <p className="text-stone-500 text-sm">Always made with real simple ingredients.</p>
        </div>
        <div className="flex flex-col items-center">
          <ShieldCheck className="w-8 h-8 text-stone-900 mb-4" strokeWidth={1.5} />
          <h4 className="font-medium text-stone-900 mb-2 text-sm uppercase tracking-wider">Top 9 Allergy-Friendly</h4>
          <p className="text-stone-500 text-sm">Made in a Nut-Free and Gluten-Free facility.</p>
        </div>
        <div className="flex flex-col items-center">
          <CheckCircle2 className="w-8 h-8 text-stone-900 mb-4" strokeWidth={1.5} />
          <h4 className="font-medium text-stone-900 mb-2 text-sm uppercase tracking-wider">Gluten-Free</h4>
          <p className="text-stone-500 text-sm">Certified Gluten-Free facility.</p>
        </div>
        <div className="flex flex-col items-center">
          <Sparkles className="w-8 h-8 text-stone-900 mb-4" strokeWidth={1.5} />
          <h4 className="font-medium text-stone-900 mb-2 text-sm uppercase tracking-wider">No Artificial</h4>
          <p className="text-stone-500 text-sm">No artificial preservatives, colors or flavors.</p>
        </div>
        <div className="flex flex-col items-center">
          <Sprout className="w-8 h-8 text-stone-900 mb-4" strokeWidth={1.5} />
          <h4 className="font-medium text-stone-900 mb-2 text-sm uppercase tracking-wider">Vegan Certified</h4>
          <p className="text-stone-500 text-sm">We use 100% Vegan ingredients.</p>
        </div>
      </div>
    </div>
  </div>
);

const Allergens = () => {
  const allergens = ['Peanut', 'Sesame', 'Shellfish', 'Milk', 'Egg', 'Soy', 'Tree Nut', 'Wheat', 'Fish'];
  return (
    <div className="py-24 bg-white border-t border-stone-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-serif text-stone-900 mb-4">Top 9 Allergy-Friendly</h2>
        <p className="text-stone-500 mb-12">Made in a Nut-Free and Gluten-Free Facility.</p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {allergens.map(a => (
            <div key={a} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border border-stone-200 flex items-center justify-center mb-3 text-stone-400">
                <span className="text-xs uppercase tracking-widest line-through decoration-stone-900 decoration-2">{a.substring(0,2)}</span>
              </div>
              <span className="text-xs font-medium tracking-widest uppercase text-stone-900">{a}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProductLineup = () => (
  <div className="py-24 bg-stone-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-serif text-stone-900 mb-16 text-center">Explore Our Snack Lineup</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "Crispy Treats", price: "$22.49", img: "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&q=80&w=600" },
          { title: "Breakfast Bars + Protein", price: "$26.99", img: "https://images.unsplash.com/photo-1528498033373-3c6c08e93d79?auto=format&fit=crop&q=80&w=600" },
          { title: "Chewy Granola Bars", price: "$22.49", img: "https://images.unsplash.com/photo-1614548484966-caf1505a9a73?auto=format&fit=crop&q=80&w=600" }
        ].map((p, i) => (
          <div key={i} className="bg-white p-6 flex flex-col items-center text-center group cursor-pointer">
            <div className="w-full aspect-square mb-6 overflow-hidden bg-stone-50">
              <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-lg font-medium text-stone-900 mb-2">{p.title}</h3>
            <p className="text-stone-500 mb-6">{p.price}</p>
            <button className="w-full border border-stone-900 text-stone-900 py-3 text-sm tracking-widest uppercase font-medium hover:bg-stone-900 hover:text-white transition-colors">
              Shop Now
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const About = () => (
  <div className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16">
      <div className="md:w-1/2">
        <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=1000" alt="Founder" className="w-full h-auto rounded-sm grayscale" />
      </div>
      <div className="md:w-1/2">
        <h2 className="text-4xl font-serif text-stone-900 mb-6">Welcome to Blake's</h2>
        <p className="text-stone-600 mb-6 font-light leading-relaxed">
          As a kid and accomplished athlete living with a severe nut allergy, snack time was always a challenge. I wanted something safe, tasty, and convenient, so I started experimenting in my own kitchen. Soon, friends, family, and teammates were asking for more.
        </p>
        <p className="text-stone-600 mb-8 font-light leading-relaxed">
          What began as a simple solution for myself became Blake's: delicious, allergy-friendly snacks for everyone, anytime, anywhere.
        </p>
        <p className="font-serif italic text-xl text-stone-900 mb-10">— Blake Sorensen</p>
        <button className="border-b border-stone-900 text-stone-900 pb-1 text-sm tracking-widest uppercase font-medium hover:text-stone-500 hover:border-stone-500 transition-colors">
          Learn More
        </button>
      </div>
    </div>
  </div>
);

const Retailers = () => (
  <div className="py-24 bg-stone-50 border-y border-stone-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-2xl font-serif text-stone-900 mb-4">Where to Buy</h2>
      <p className="text-stone-500 mb-12">Find us in over 3,000 stores Nationwide!</p>
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale">
        <span className="text-2xl font-bold tracking-widest">THRIVE</span>
        <span className="text-2xl font-serif italic">Wegmans</span>
        <span className="text-2xl font-light tracking-widest">SPROUTS</span>
        <span className="text-2xl font-bold lowercase">amazon</span>
      </div>
      <div className="mt-16">
        <button className="bg-stone-900 text-white px-8 py-4 text-sm tracking-widest uppercase font-medium hover:bg-stone-800 transition-colors">
          Find a Store Near You
        </button>
      </div>
    </div>
  </div>
);

const Reviews = () => (
  <div className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-serif text-stone-900 mb-16 text-center">The Reviews Are In</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "LOVE!", text: "My son's favorite go to snack. Mom approved ingredients!", author: "Olivia M." },
          { title: "PERFECT FOR KIDS AND ADULTS!", text: "They're perfect for a snack on the go. Great for adults and kids.", author: "Janet K." },
          { title: "ALL THE FLAVOR WITHOUT THE ALLERGENS", text: "My husband tried one and couldn't believe they were allergen free! Would be great for classrooms.", author: "Mary M." }
        ].map((r, i) => (
          <div key={i} className="bg-stone-50 p-8 flex flex-col">
            <div className="flex text-stone-900 mb-6">
              {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
            </div>
            <h4 className="font-medium text-stone-900 mb-4 tracking-wide uppercase text-sm">{r.title}</h4>
            <p className="text-stone-600 font-light leading-relaxed flex-grow mb-8">"{r.text}"</p>
            <p className="text-stone-400 text-sm italic">— {r.author}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Press = () => (
  <div className="py-16 bg-stone-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-sm tracking-widest uppercase text-stone-400 mb-8">As Seen On</h2>
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-80">
        <span className="text-2xl font-serif tracking-widest">VOGUE</span>
        <span className="text-xl font-bold tracking-tight">GOOD MORNING AMERICA</span>
        <span className="text-2xl font-bold tracking-tighter">E! NEWS</span>
      </div>
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-stone-100 pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-sm font-medium tracking-widest uppercase text-stone-900 mb-6">Stay in the know</h3>
          <p className="text-stone-500 text-sm mb-4">Get exclusive updates, coupons, and more!</p>
          <div className="flex border-b border-stone-300 pb-2">
            <input type="email" placeholder="Email address" className="bg-transparent w-full outline-none text-sm text-stone-900 placeholder-stone-400" />
            <button><ArrowRight className="w-4 h-4 text-stone-900" /></button>
          </div>
          <div className="flex gap-4 mt-8">
            <Facebook className="w-5 h-5 text-stone-400 hover:text-stone-900 cursor-pointer" />
            <Instagram className="w-5 h-5 text-stone-400 hover:text-stone-900 cursor-pointer" />
            <Twitter className="w-5 h-5 text-stone-400 hover:text-stone-900 cursor-pointer" />
          </div>
        </div>
        
        <div>
          <h3 className="text-sm font-medium tracking-widest uppercase text-stone-900 mb-6">Shop</h3>
          <ul className="space-y-4 text-sm text-stone-500">
            <li><a href="#" className="hover:text-stone-900">Breakfast Bars + Protein</a></li>
            <li><a href="#" className="hover:text-stone-900">Chewy Granola Bars</a></li>
            <li><a href="#" className="hover:text-stone-900">Crispy Treats</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-medium tracking-widest uppercase text-stone-900 mb-6">About</h3>
          <ul className="space-y-4 text-sm text-stone-500">
            <li><a href="#" className="hover:text-stone-900">Our Story</a></li>
            <li><a href="#" className="hover:text-stone-900">Allergy-Friendly</a></li>
            <li><a href="#" className="hover:text-stone-900">Wholesome Snacks</a></li>
            <li><a href="#" className="hover:text-stone-900">Store Locator</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-medium tracking-widest uppercase text-stone-900 mb-6">Support</h3>
          <ul className="space-y-4 text-sm text-stone-500">
            <li><a href="#" className="hover:text-stone-900">Account</a></li>
            <li><a href="#" className="hover:text-stone-900">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-stone-900">Accessibility</a></li>
            <li><a href="#" className="hover:text-stone-900">FAQs</a></li>
            <li><a href="#" className="hover:text-stone-900">Contact Us</a></li>
          </ul>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-stone-200 text-xs text-stone-400">
        <div className="flex gap-6 mb-4 md:mb-0">
          <a href="#" className="hover:text-stone-900">Privacy Policy</a>
          <a href="#" className="hover:text-stone-900">Terms & Conditions</a>
        </div>
        <p>© 2026 Blake's</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-stone-900 selection:bg-stone-900 selection:text-white">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <FeaturesBar />
        <Categories />
        <ValueProps />
        <Allergens />
        <ProductLineup />
        <About />
        <Retailers />
        <Reviews />
        <Press />
      </main>
      <Footer />
    </div>
  );
}
