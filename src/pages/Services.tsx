import { motion } from 'motion/react';
import { ArrowRight, Check, Leaf, Scissors, Shield, Droplets, Wind, Home as HomeIcon, MapPin, Search } from 'lucide-react';
import { Button } from '@/src/components/ui/Button';
import { Link } from 'react-router-dom';

const services = [
  {
    id: "lawn-mowing",
    title: "Lawn Mowing & Maintenance",
    icon: <Scissors className="h-6 w-6 text-green-600" />,
    shortDesc: "Professional, precise mowing for a perfectly manicured lawn.",
    fullDesc: "Our weekly and bi-weekly mowing services include precision cutting, detailed string trimming around all obstacles, crisp edging along hardscapes, and thorough blowing of debris. We adjust mowing height based on the season and weather to ensure optimal turf health.",
    benefits: [
      "Consistent, professional appearance",
      "Promotes thicker, healthier grass",
      "Prevents weed intrusion",
      "Saves you hours of weekend labor"
    ],
    price: "Starting at $45/visit",
    img: "https://images.unsplash.com/photo-1592424001806-69623631be03?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: "landscaping",
    title: "Landscaping & Design",
    icon: <Leaf className="h-6 w-6 text-green-600" />,
    shortDesc: "Transforming outdoor spaces into beautiful living areas.",
    fullDesc: "Whether you need a complete yard makeover or a simple bed refresh, our landscape team delivers. We select native and thriving climate-appropriate plants, design elegant hardscapes, and create focal points that enhance your property's value and curb appeal.",
    benefits: [
      "Increases property value",
      "Creates functional outdoor living space",
      "Improves drainage and soil health",
      "Tailored to your aesthetic preferences"
    ],
    price: "Custom Quotes",
    img: "https://images.unsplash.com/photo-1558904541-efa843a96f0f?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: "fertilization",
    title: "Fertilization & Weed Control",
    icon: <Droplets className="h-6 w-6 text-green-600" />,
    shortDesc: "Scientifically formulated treatments for lush, weed-free grass.",
    fullDesc: "Our 6-step annual program provides your lawn with the exact nutrients it needs exactly when it needs them. We use premium, slow-release fertilizers and targeted weed control to eliminate crabgrass, broadleaf weeds, and pests while feeding the turf.",
    benefits: [
      "Deep, vibrant green color",
      "Stronger root system",
      "Elimination of dandelions and crabgrass",
      "Improved drought resistance"
    ],
    price: "Starting at $65/treatment",
    img: "https://images.unsplash.com/photo-1589926830571-0ceca20539ce?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: "aeration",
    title: "Aeration & Overseeding",
    icon: <Wind className="h-6 w-6 text-green-600" />,
    shortDesc: "Breathe life back into compacted soil and thin lawns.",
    fullDesc: "Core aeration removes small plugs of soil from your lawn, reducing compaction and allowing water, air, and nutrients to reach the roots. Combined with overseeding using premium grass seed blends, this is the most effective way to thicken a sparse lawn.",
    benefits: [
      "Relieves soil compaction",
      "Fills in bare patches",
      "Introduces resilient new grass varieties",
      "Breaks down thatch buildup"
    ],
    price: "Starting at $150",
    img: "https://images.unsplash.com/photo-1620021312384-be4ce11746f3?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: "seasonal-cleanup",
    title: "Seasonal Cleanup",
    icon: <Leaf className="h-6 w-6 text-green-600" />,
    shortDesc: "Spring prep and Fall leaf removal services.",
    fullDesc: "Transition smoothly between seasons. Our Spring cleanup clears winter debris and preps beds for new growth. Our Fall cleanup manages the heavy leaf drop, cutting back perennials, and preparing your property for winter dormancy to prevent snow mold.",
    benefits: [
      "Prevents disease and fungal growth",
      "Tidy appearance year-round",
      "Protects plants during extreme weather",
      "Saves back-breaking raking"
    ],
    price: "Starting at $199",
    img: "https://images.unsplash.com/photo-1508269707253-15be96f4325e?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: "commercial",
    title: "Commercial Property Maintenance",
    icon: <HomeIcon className="h-6 w-6 text-green-600" />,
    shortDesc: "Reliable, professional care for businesses and HOAs.",
    fullDesc: "We provide comprehensive, year-round maintenance for commercial properties, HOAs, and apartment complexes. Our team ensures your property always looks pristine, presenting a professional image to your clients, residents, and visitors.",
    benefits: [
      "Dedicated account manager",
      "Customized service schedules",
      "Fully licensed and heavily insured",
      "Proactive communication and reporting"
    ],
    price: "Custom Proposals",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop"
  }
];

export default function Services() {
  return (
    <div className="bg-charcoal-50 pb-24">
      {/* Header */}
      <div className="bg-charcoal-950 py-24 text-center text-white relative">
         <div className="absolute inset-0 z-0 opacity-20">
           <img src="https://images.unsplash.com/photo-1592424001806-69623631be03?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Services Background" />
         </div>
         <div className="relative z-10 mx-auto max-w-4xl px-4">
            <h1 className="text-4xl font-extrabold sm:text-6xl mb-6">Our Services</h1>
            <p className="text-xl text-charcoal-300 max-w-2xl mx-auto">
              Professional, reliable, and premium quality landscaping and lawn care solutions tailored to your property.
            </p>
         </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16">
         <div className="flex flex-col gap-24">
            {services.map((service, index) => (
              <motion.div 
                key={service.id} 
                id={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                 <div className="w-full lg:w-1/2">
                    <div className="rounded-3xl overflow-hidden shadow-xl aspect-video relative">
                       <img src={service.img} alt={service.title} className="w-full h-full object-cover" />
                       <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg font-bold text-green-700">
                          {service.price}
                       </div>
                    </div>
                 </div>
                 <div className="w-full lg:w-1/2">
                    <div className="flex items-center gap-3 mb-4">
                       <div className="p-3 bg-green-100 rounded-xl">
                          {service.icon}
                       </div>
                       <h2 className="text-3xl font-bold text-charcoal-900">{service.title}</h2>
                    </div>
                    <p className="text-xl font-medium text-charcoal-600 mb-4">{service.shortDesc}</p>
                    <p className="text-charcoal-600 leading-relaxed mb-8">{service.fullDesc}</p>
                    
                    <div className="mb-8">
                       <h4 className="font-bold text-charcoal-900 mb-4 uppercase tracking-wider text-sm">Key Benefits</h4>
                       <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                         {service.benefits.map((benefit, i) => (
                           <li key={i} className="flex items-start">
                             <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                             <span className="text-charcoal-700 text-sm leading-tight">{benefit}</span>
                           </li>
                         ))}
                       </ul>
                    </div>

                    <Link to="/contact">
                       <Button>Request a Quote <ArrowRight className="ml-2 h-4 w-4" /></Button>
                    </Link>
                 </div>
              </motion.div>
            ))}
         </div>
      </div>

      <section className="mx-auto max-w-4xl px-4 mt-32 text-center">
         <h2 className="text-3xl font-bold mb-8 text-charcoal-900">Don't see what you're looking for?</h2>
         <p className="text-xl text-charcoal-600 mb-8">We offer custom solutions for unique properties. Contact us to discuss your specific needs.</p>
         <Link to="/contact">
            <Button variant="outline" size="lg">Contact Us Today</Button>
         </Link>
      </section>
    </div>
  );
}
