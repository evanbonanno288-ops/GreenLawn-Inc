import { motion } from 'motion/react';
import { Shield, Leaf, Award, Users, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white pb-24">
      {/* Header */}
      <div className="bg-charcoal-950 py-24 text-center text-white relative">
         <div className="absolute inset-0 z-0 opacity-20">
           <img src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover" alt="About Us Background" />
         </div>
         <div className="relative z-10 mx-auto max-w-4xl px-4">
            <h1 className="text-4xl font-extrabold sm:text-6xl mb-6">About Greenlawn Inc.</h1>
            <p className="text-xl text-charcoal-300 max-w-2xl mx-auto">
              Cultivating beautiful communities through honest work, expertise, and a passion for the outdoors.
            </p>
         </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24">
         <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
               <h2 className="text-3xl font-bold text-charcoal-900 mb-6">Our Story</h2>
               <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                 Founded in 2010, Greenlawn began with a simple mission: to provide a level of service and reliability that was missing in the local lawn care industry. We started with one truck, a push mower, and a commitment to showing up on time and doing the job right.
               </p>
               <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                 Over the years, we've grown from a one-man operation to a full-service team of landscaping professionals. Despite our growth, our core values remain unchanged. We still treat every lawn as if it were our own, and we still believe that a handshake means something.
               </p>
               <p className="text-lg text-charcoal-600 leading-relaxed border-l-4 border-green-500 pl-6 italic bg-charcoal-50 py-4 rounded-r-lg">
                 "Our goal isn't to be the biggest landscaping company; it's to be the one you recommend to your neighbors without hesitation."
               </p>
            </motion.div>
            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="relative"
            >
               <div className="absolute -inset-4 rounded-3xl bg-green-100 transform -rotate-3 z-0"></div>
               <img src="https://images.unsplash.com/photo-1589148906912-2592eb00dcf5?q=80&w=1200&auto=format&fit=crop" alt="Our Team" className="rounded-3xl shadow-xl relative z-10 object-cover aspect-[4/5] md:aspect-square w-full" />
            </motion.div>
         </div>
      </div>

      {/* Core Values */}
      <div className="bg-charcoal-50 py-24 mt-24">
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-bold text-charcoal-900">Why Trust Us?</h2>
               <p className="text-lg text-charcoal-600 mt-4 max-w-2xl mx-auto">We're built on principles that guarantee a great experience.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                 { icon: <Shield className="h-8 w-8 text-green-600" />, title: "Licensed & Insured", desc: "Full liability coverage and worker's comp for your total peace of mind." },
                 { icon: <Award className="h-8 w-8 text-green-600" />, title: "Expert Knowledge", desc: "Trained professionals who understand soil science, turf diseases, and agronomy." },
                 { icon: <Leaf className="h-8 w-8 text-green-600" />, title: "Eco-Conscious", desc: "We use organic-based fertilizers and minimize chemical runoff." },
                 { icon: <Users className="h-8 w-8 text-green-600" />, title: "Community First", desc: "Locally owned, locally operated, and active in supporting local charities." }
               ].map((item, i) => (
                 <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-charcoal-100 text-center hover:shadow-md transition-shadow">
                    <div className="mx-auto w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6">
                       {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-charcoal-900 mb-3">{item.title}</h3>
                    <p className="text-charcoal-600">{item.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
}
