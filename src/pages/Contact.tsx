import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, MessageSquare, AlertTriangle } from 'lucide-react';
import { Button } from '@/src/components/ui/Button';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Real implementation would send data here
  };

  return (
    <div className="bg-charcoal-50 pb-24">
      {/* Header */}
      <div className="bg-charcoal-950 py-24 text-center text-white relative">
         <div className="absolute inset-0 z-0 opacity-10 flex items-center justify-center">
            {/* Texture or faint map pattern could go here */}
         </div>
         <div className="relative z-10 mx-auto max-w-4xl px-4">
            <h1 className="text-4xl font-extrabold sm:text-6xl mb-6">Contact Us</h1>
            <p className="text-xl text-charcoal-300 max-w-2xl mx-auto">
              Get your free, no-obligation estimate today. Our team is ready to help you achieve the perfect property.
            </p>
         </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
         <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1 space-y-6">
               <div className="bg-white rounded-3xl p-8 shadow-md border border-charcoal-100">
                  <h3 className="text-2xl font-bold text-charcoal-900 mb-8">Get In Touch</h3>
                  
                  <div className="space-y-6">
                     <div className="flex items-start">
                        <Phone className="h-6 w-6 text-green-600 mt-1 mr-4 shrink-0" />
                        <div>
                           <p className="font-bold text-charcoal-900">Phone</p>
                           <a href="tel:8142151371" className="text-green-700 hover:text-green-800 text-lg font-medium">(814) 215-1371</a>
                           <p className="text-sm text-charcoal-500 mt-1">Accepts calls & SMS</p>
                        </div>
                     </div>
                     
                     <div className="flex items-start">
                        <Mail className="h-6 w-6 text-green-600 mt-1 mr-4 shrink-0" />
                        <div>
                           <p className="font-bold text-charcoal-900">Email</p>
                           <a href="mailto:info@greenlawn.com" className="text-charcoal-600 hover:text-green-700">info@greenlawn.com</a>
                        </div>
                     </div>

                     <div className="flex items-start">
                        <MapPin className="h-6 w-6 text-green-600 mt-1 mr-4 shrink-0" />
                        <div>
                           <p className="font-bold text-charcoal-900">Office</p>
                           <p className="text-charcoal-600">316 Walnut St<br/>Hollidaysburg, PA 16648</p>
                        </div>
                     </div>

                     <div className="flex items-start">
                        <Clock className="h-6 w-6 text-green-600 mt-1 mr-4 shrink-0" />
                        <div>
                           <p className="font-bold text-charcoal-900">Hours</p>
                           <p className="text-charcoal-600">Mon-Sun: 7:00 AM - 9:00 PM</p>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="bg-green-900 rounded-3xl p-8 shadow-md text-white">
                  <div className="flex items-center space-x-3 mb-4">
                     <AlertTriangle className="h-6 w-6 text-yellow-400" />
                     <h3 className="text-xl font-bold">Emergency Service</h3>
                  </div>
                  <p className="text-green-100 mb-6">Storm damage? Tree fall? We offer 24/7 rapid response for existing clients.</p>
                  <Button variant="outline" className="w-full bg-transparent border-white/20 text-white hover:bg-white/10" onClick={() => window.location.href="tel:8142151371"}>
                     Call Emergency Line
                  </Button>
               </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
               <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-md border border-charcoal-100">
                  {isSubmitted ? (
                     <div className="h-full flex flex-col items-center justify-center text-center py-16">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                           <MessageSquare className="h-8 w-8 text-green-600" />
                        </div>
                        <h3 className="text-3xl font-bold text-charcoal-900 mb-4">Request Received!</h3>
                        <p className="text-lg text-charcoal-600 max-w-md mx-auto mb-8">
                           Thank you for reaching out. A tailored quote and one of our property specialists will be in touch within 24 hours.
                        </p>
                        <Button onClick={() => setIsSubmitted(false)}>Submit Another Request</Button>
                     </div>
                  ) : (
                     <>
                        <h2 className="text-3xl font-bold text-charcoal-900 mb-8">Request a Free Estimate</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                              <div>
                                 <label htmlFor="firstName" className="block text-sm font-semibold text-charcoal-900 mb-2">First Name *</label>
                                 <input type="text" id="firstName" required className="w-full h-12 px-4 rounded-xl border border-charcoal-200 bg-charcoal-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors" />
                              </div>
                              <div>
                                 <label htmlFor="lastName" className="block text-sm font-semibold text-charcoal-900 mb-2">Last Name *</label>
                                 <input type="text" id="lastName" required className="w-full h-12 px-4 rounded-xl border border-charcoal-200 bg-charcoal-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors" />
                              </div>
                           </div>

                           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                              <div>
                                 <label htmlFor="email" className="block text-sm font-semibold text-charcoal-900 mb-2">Email Address *</label>
                                 <input type="email" id="email" required className="w-full h-12 px-4 rounded-xl border border-charcoal-200 bg-charcoal-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors" />
                              </div>
                              <div>
                                 <label htmlFor="phone" className="block text-sm font-semibold text-charcoal-900 mb-2">Phone Number *</label>
                                 <input type="tel" id="phone" required className="w-full h-12 px-4 rounded-xl border border-charcoal-200 bg-charcoal-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors" />
                              </div>
                           </div>

                           <div>
                              <label htmlFor="address" className="block text-sm font-semibold text-charcoal-900 mb-2">Property Address *</label>
                              <input type="text" id="address" required placeholder="Street Address, City, Zip" className="w-full h-12 px-4 rounded-xl border border-charcoal-200 bg-charcoal-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors" />
                           </div>

                           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                              <div>
                                 <label htmlFor="serviceType" className="block text-sm font-semibold text-charcoal-900 mb-2">Service Needed *</label>
                                 <select id="serviceType" required className="w-full h-12 px-4 rounded-xl border border-charcoal-200 bg-charcoal-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors text-charcoal-900">
                                    <option value="">Select a service...</option>
                                    <option value="mowing">Lawn Mowing & Maintenance</option>
                                    <option value="fertilization">Fertilization & Weed Control</option>
                                    <option value="landscaping">Landscaping & Design</option>
                                    <option value="cleanup">Seasonal Cleanup</option>
                                    <option value="aeration">Aeration & Overseeding</option>
                                    <option value="commercial">Commercial Maintenance</option>
                                    <option value="other">Other / Not Sure</option>
                                 </select>
                              </div>
                              <div>
                                 <label htmlFor="propertyType" className="block text-sm font-semibold text-charcoal-900 mb-2">Property Type *</label>
                                 <select id="propertyType" required className="w-full h-12 px-4 rounded-xl border border-charcoal-200 bg-charcoal-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors text-charcoal-900">
                                    <option value="residential">Residential Home</option>
                                    <option value="commercial">Commercial Building</option>
                                    <option value="hoa">HOA / Community</option>
                                 </select>
                              </div>
                           </div>

                           <div>
                              <label htmlFor="message" className="block text-sm font-semibold text-charcoal-900 mb-2">Additional Details</label>
                              <textarea id="message" rows={4} className="w-full p-4 rounded-xl border border-charcoal-200 bg-charcoal-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors box-border py-3"></textarea>
                           </div>

                           <Button type="submit" size="lg" className="w-full text-lg h-14">Get My Free Estimate</Button>
                        </form>
                     </>
                  )}
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
