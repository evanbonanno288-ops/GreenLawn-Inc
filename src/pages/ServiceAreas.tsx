import { MapPin, Navigation } from 'lucide-react';
import { Button } from '@/src/components/ui/Button';
import { Link } from 'react-router-dom';

const areas = [
  { name: "Hollidaysburg", zipCodes: ["16602", "16648"], isHub: true },
  { name: "Altoona", zipCodes: ["16601", "16602", "16603"], isHub: false },
  { name: "Duncansville", zipCodes: ["16635"], isHub: false },
  { name: "Roaring Spring", zipCodes: ["16673"], isHub: false },
  { name: "Martinsburg", zipCodes: ["16662"], isHub: false }
];

export default function ServiceAreas() {
  return (
    <div className="bg-white pb-24">
      {/* Header */}
      <div className="bg-charcoal-950 py-24 text-center text-white">
         <div className="mx-auto max-w-4xl px-4">
            <h1 className="text-4xl font-extrabold sm:text-6xl mb-6">Service Areas</h1>
            <p className="text-xl text-charcoal-300 max-w-2xl mx-auto mb-8">
              We provide premium lawn care and landscaping services across the greater metro region. Proudly serving our local community since 2010.
            </p>
         </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16">
         <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
               <h2 className="text-3xl font-bold text-charcoal-900 mb-6">Local Experts in Your Neighborhood</h2>
               <p className="text-lg text-charcoal-600 mb-8 leading-relaxed">
                 Because we are locally owned and operated, we understand the specific soil types, weather patterns, and native plant life of our region. This ensures your property receives care that actually works for its unique environment.
               </p>
               
               <div className="grid sm:grid-cols-2 gap-4">
                  {areas.map(area => (
                     <div key={area.name} className="flex items-start p-4 border border-charcoal-100 rounded-xl bg-charcoal-50">
                        <MapPin className="h-5 w-5 text-green-600 mt-1 mr-3 shrink-0" />
                        <div>
                           <p className="font-bold text-charcoal-900">{area.name}</p>
                           <p className="text-sm text-charcoal-500 font-mono mt-1">{area.zipCodes.join(', ')}</p>
                        </div>
                        {area.isHub && <span className="ml-auto text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">Main Hub</span>}
                     </div>
                  ))}
               </div>
            </div>

            <div className="bg-charcoal-100 rounded-3xl aspect-square lg:aspect-auto lg:h-full flex items-center justify-center p-8 text-center border-2 border-dashed border-charcoal-300">
               <div>
                  <Navigation className="h-12 w-12 text-charcoal-400 mx-auto mb-4" />
                  <p className="text-charcoal-500">[Interactive Service Area Map Placeholder]</p>
               </div>
            </div>
         </div>
      </div>

      <div className="bg-green-50 py-24 mt-24 text-center">
         <div className="mx-auto max-w-2xl px-4">
            <h2 className="text-3xl font-bold text-charcoal-900 mb-6">Don't See Your Town Listed?</h2>
            <p className="text-lg text-charcoal-600 mb-8">
               We frequently expand our routes. If you live nearby any of these areas, please contact us. We may still be able to service your property or place you on our expansion list.
            </p>
            <Link to="/contact">
               <Button size="lg">Check My Address</Button>
            </Link>
         </div>
      </div>
    </div>
  );
}
