import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Star, Shield, MapPin, Leaf, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/src/components/ui/Button';

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative flex min-h-[calc(100vh-80px)] overflow-hidden bg-white">
        <div className="mx-auto flex w-full max-w-7xl flex-col lg:flex-row">
          
          {/* Left Column */}
          <div className="relative flex w-full flex-col justify-center px-4 py-16 lg:w-[55%] lg:px-8 lg:py-20">
            <div className="absolute left-10 top-10 -z-10 h-64 w-64 rounded-full bg-green-50 opacity-60 blur-3xl"></div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-6 flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="h-8 w-8 rounded-full border-2 border-white bg-charcoal-200"></div>
                  <div className="h-8 w-8 rounded-full border-2 border-white bg-charcoal-300"></div>
                  <div className="h-8 w-8 rounded-full border-2 border-white bg-charcoal-400"></div>
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-charcoal-400">Locally Trusted • 5-Star Rated</span>
              </div>
              
              <h1 className="mb-6 text-balance text-5xl font-extrabold leading-[1.05] text-charcoal-900 sm:text-6xl lg:text-7xl">
                Premium Lawn Care <br />
                <span className="font-serif italic font-normal text-green-500">Kept Perfect.</span>
              </h1>
              
              <p className="mb-10 max-w-md text-lg leading-relaxed text-charcoal-500">
                Reliable lawn maintenance, landscaping, fertilization, and seasonal cleanup for the most beautiful properties in the region.
              </p>
              
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                <a href="tel:8142151371">
                  <Button variant="secondary" className="px-8 py-7 text-base font-bold">
                    Call (814) 215-1371
                  </Button>
                </a>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal-400">Emergency service</span>
                  <span className="text-sm font-bold text-green-500">Available 24/7</span>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="mt-16 grid grid-cols-2 gap-8">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-500/10">
                    <CheckCircle2 className="h-3 w-3 text-green-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-charcoal-900">Eco-Friendly</h4>
                    <p className="text-xs text-charcoal-400">Safe for pets & family</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-500/10">
                    <Shield className="h-3 w-3 text-green-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-charcoal-900">Licensed & Insured</h4>
                    <p className="text-xs text-charcoal-400">Total peace of mind</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="flex w-full flex-col gap-6 bg-charcoal-50 px-4 py-16 lg:w-[45%] lg:px-10 lg:py-10">
            <div className="flex flex-1 flex-col rounded-[40px] border border-charcoal-100 bg-white p-8 shadow-sm">
              <div className="mb-8 flex items-center justify-between">
                <h3 className="text-xl font-bold tracking-tight text-charcoal-900">Our Specializations</h3>
                <Link to="/services" className="text-xs font-bold text-green-500 underline">View All Services</Link>
              </div>
              
              <div className="custom-scroll flex-1 pr-2 overflow-y-auto grid grid-cols-1 gap-4">
                <Link to="/services" className="group flex cursor-pointer items-center justify-between rounded-3xl bg-green-500 p-4 text-white">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 text-xl">✂️</div>
                    <div>
                      <h4 className="font-bold">Mowing & Edging</h4>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-white/60">From $45/visit</p>
                    </div>
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-white">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>

                <Link to="/services" className="group flex cursor-pointer items-center justify-between rounded-3xl border border-charcoal-100 bg-white p-4 transition-colors hover:border-green-500">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-xl text-green-500">🌱</div>
                    <div>
                      <h4 className="font-bold text-charcoal-900">Fertilization</h4>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-charcoal-400">Starting at $89</p>
                    </div>
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-charcoal-200 text-charcoal-300">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>

                <Link to="/services" className="group flex cursor-pointer items-center justify-between rounded-3xl border border-charcoal-100 bg-white p-4 transition-colors hover:border-green-500">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-xl text-green-500">🌲</div>
                    <div>
                      <h4 className="font-bold text-charcoal-900">Landscaping</h4>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-charcoal-400">Custom Quotes</p>
                    </div>
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-charcoal-200 text-charcoal-300">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              </div>

              <div className="mt-8 border-t border-charcoal-50 pt-6">
                <div className="flex items-center gap-4 rounded-2xl bg-charcoal-50 p-4">
                  <div className="flex flex-1 flex-col">
                    <span className="text-xs font-bold text-charcoal-900">Seasonal Cleanup Special</span>
                    <span className="text-[10px] text-charcoal-400">Book now and save 15% on Fall leaf removal</span>
                  </div>
                  <Link to="/contact">
                    <button className="rounded-lg bg-charcoal-900 px-3 py-2 text-[10px] font-bold text-white">CLAIM</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex h-[140px] gap-4">
              <div className="flex flex-1 flex-col justify-between rounded-[32px] bg-charcoal-900 p-6 text-white">
                <span className="text-xs uppercase tracking-widest text-white/50">Recent Project</span>
                <h5 className="font-serif text-sm font-bold italic leading-tight">Westwood Estates Transformation</h5>
                <div className="flex gap-1 text-yellow-400">
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                </div>
              </div>
              <div className="flex w-[140px] flex-col items-center justify-center gap-2 rounded-[32px] bg-green-500 p-4 text-center">
                <span className="text-3xl font-black text-white">98%</span>
                <span className="text-[9px] font-bold uppercase tracking-tighter text-white/70">Customer Retention</span>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-charcoal-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-charcoal-900 sm:text-4xl">Our Professional Services</h2>
            <p className="mt-4 text-lg text-charcoal-600 max-w-2xl mx-auto">
              Comprehensive care for beautiful, healthy outdoor spaces.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Lawn Mowing', desc: 'Precision mowing, edging, and blowing for a pristine finish.', img: 'https://d3p2r6ofnvoe67.cloudfront.net/fit-in/1200x1200/filters:strip_exif()/filters:no_upscale()/media/77620d93-f5d7-4e5b-93cc-2616a20a2b7d.jpeg' },
              { title: 'Fertilization & Weed Control', desc: 'Custom nutrient plans to keep your grass thick and weed-free.', img: 'https://myelitelawncare.com/media/images/imported/2022/12/elite-lawn-care-lawn-fertilizer-service-3.2-1024x683.jpg' },
              { title: 'Landscaping', desc: 'Design, installation, and refreshing of garden beds and hardscapes.', img: 'https://www.goodyearlandscapingpros.com/images/residential-landscape-traditional.jpg' },
            ].map((service, i) => (
              <motion.div 
                key={service.title}
                whileHover={{ y: -10 }}
                className="group overflow-hidden rounded-3xl bg-white shadow-md transition-all hover:shadow-xl"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={service.img} alt={service.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-charcoal-900 mb-3">{service.title}</h3>
                  <p className="text-charcoal-600 mb-6">{service.desc}</p>
                  <Link to={`/services`} className="inline-flex items-center font-medium text-green-600 hover:text-green-700">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/services">
              <Button variant="secondary" size="lg">View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-green-900 py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Choose Greenlawn?</h2>
              <p className="mt-6 text-lg text-green-100">
                We don't just cut grass; we cultivate beautiful outdoor living spaces. Our commitment to quality, reliability, and customer satisfaction sets us apart in the industry.
              </p>
              
              <div className="mt-10 space-y-6">
                {[
                  { title: 'Reliable Scheduling', desc: 'We show up when we say we will. Weather permitting, you can count on us.' },
                  { title: 'Professional Crew', desc: 'Uniformed, trained, and courteous team members on every property.' },
                  { title: 'Premium Equipment', desc: 'We use commercial-grade, regularly maintained equipment for the best results.' },
                  { title: 'Satisfaction Guaranteed', desc: 'If you are not happy, we will make it right. No questions asked.' }
                ].map((item, i) => (
                  <div key={i} className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500">
                        <CheckCircle2 className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="mt-2 text-green-100">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-green-800/50 transform rotate-3"></div>
              <img 
                src="https://greenackors.com/hs-fs/hubfs/Residential%20landscape%20maintenance%20crew%20mowing%20backyard%20green%20lawn%20.jpg" 
                alt="Our professional team at work" 
                className="relative rounded-3xl shadow-2xl object-cover aspect-[4/5] w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-24">
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-charcoal-900 sm:text-4xl">Loved By Our Community</h2>
            <div className="mt-16 grid gap-8 sm:grid-cols-3">
               {[
                 { text: "I'm really glad that I found Greenlawn through a friend's recommendation. Tony and his crew always do a great job on my lawn! I never have to worry that anything will be...", author: "Local Homeowner", area: "Hollidaysburg" },
                 { text: "...yard. A great job from a great guy! If you have been struggling getting your lawn care done, call Tony. Your struggles will end when you see him arrive.", author: "Local Homeowner", area: "16602 Area" },
                 { text: "They really value the customer. Not only are they prompt and reliable but also very detailed and great at their work.", author: "Local Homeowner", area: "Hollidaysburg" }
               ].map((review, i) => (
                 <div key={i} className="rounded-3xl bg-charcoal-50 p-8 text-left shadow-sm border border-charcoal-100 flex flex-col h-full hover:shadow-md transition-shadow">
                    <div className="flex text-yellow-400 space-x-1 mb-6">
                      {[...Array(5)].map((_, j) => <Star key={j} className="h-5 w-5 fill-current" />)}
                    </div>
                    <p className="italic text-charcoal-700 text-lg mb-6 flex-grow">"{review.text}"</p>
                    <div className="mt-auto">
                      <p className="font-bold text-charcoal-900">{review.author}</p>
                      <p className="text-sm text-charcoal-500">{review.area}</p>
                    </div>
                 </div>
               ))}
            </div>
            <div className="mt-12">
              <Link to="/reviews">
                <Button variant="outline">Read All 33 Reviews</Button>
              </Link>
            </div>
         </div>
      </section>

      {/* CTA Section */}
      <section className="bg-grass-texture relative overflow-hidden py-24 bg-green-50">
        <div className="relative z-10 mx-auto max-w-4xl text-center px-4">
          <h2 className="text-3xl font-extrabold tracking-tight text-charcoal-900 sm:text-5xl mb-6">Ready for a Better Lawn?</h2>
          <p className="text-xl text-charcoal-700 mb-10 max-w-2xl mx-auto">
            Contact us today for a free, no-obligation estimate. Let's make your property the envy of the neighborhood.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
             <Link to="/contact">
               <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg">Request Free Quote</Button>
             </Link>
             <a href="tel:8142151371">
                <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg bg-white">Call (814) 215-1371</Button>
             </a>
          </div>
        </div>
      </section>
    </div>
  );
}
