import { Star, ShieldCheck, ThumbsUp } from 'lucide-react';
import { Button } from '@/src/components/ui/Button';
import { Link } from 'react-router-dom';

const reviews = [
  {
    id: 1,
    name: "Local Homeowner",
    location: "Hollidaysburg",
    service: "Lawn Mowing & Maintenance",
    rating: 5,
    text: "I’m really glad that I found Greenlawn through a friend’s recommendation. Tony and his crew always do a great job on my lawn! I never have to worry that anything will be...",
    date: "A few weeks ago"
  },
  {
    id: 2,
    name: "Local Homeowner",
    location: "16602 Area",
    service: "Yard Work",
    rating: 5,
    text: "...yard. A great job from a great guy! If you have been struggling getting your lawn care done, call Tony. Your struggles will end when you see him arrive. You won't...",
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Local Homeowner",
    location: "Hollidaysburg",
    service: "Weed Control",
    rating: 5,
    text: "They really value the customer. Not only are they prompt and reliable but also very detailed and great at their work.",
    date: "2 months ago"
  },
  {
    id: 4,
    name: "Emily Chen",
    location: "Riverdale",
    service: "Lawn Mowing",
    rating: 5,
    text: "I hired them after my husband injured his back, and we haven't looked back since. The lawn is mowed perfectly every Tuesday like clockwork. Very affordable for the quality.",
    date: "3 months ago"
  },
  {
    id: 5,
    name: "Robert Barnes",
    location: "Maple Heights",
    service: "Seasonal Cleanup",
    rating: 5,
    text: "The fall leaf cleanup was incredible. We have 4 large oak trees and usually spend weekends raking. They came in with their equipment and had it pristine in hours. Worth every penny.",
    date: "5 months ago"
  },
  {
    id: 6,
    name: "Jessica Alarie",
    location: "Pine Valley",
    service: "Mulching",
    rating: 4,
    text: "Great mulch service. Yard looks fresh. Deducted one star just because scheduling took a bit of back and forth, but the actual service was top tier.",
    date: "6 months ago"
  }
];

export default function Reviews() {
  return (
    <div className="bg-charcoal-50 pb-24">
      {/* Header */}
      <div className="bg-green-900 py-24 text-center text-white">
         <div className="mx-auto max-w-4xl px-4">
            <h1 className="text-4xl font-extrabold sm:text-6xl mb-6">Customer Reviews</h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto mb-8">
              Don't just take our word for it. See what your neighbors have to say about working with Tony and the Greenlawn crew.
            </p>
            <div className="flex items-center justify-center space-x-2 text-2xl font-bold">
               <span className="text-yellow-400">4.6</span>
               <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className={`h-6 w-6 ${i === 4 ? "fill-yellow-400 opacity-50" : "fill-current"}`} />)}
               </div>
               <span className="text-lg text-green-200 font-normal ml-2">Based on 33 reviews</span>
            </div>
         </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16">
         <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
            <div className="flex items-center space-x-6">
               <div className="flex items-center text-charcoal-700">
                  <ShieldCheck className="h-5 w-5 text-green-600 mr-2" />
                  <span className="font-medium">Verified Customers</span>
               </div>
               <div className="flex items-center text-charcoal-700">
                  <ThumbsUp className="h-5 w-5 text-green-600 mr-2" />
                  <span className="font-medium">100% Satisfaction Guarantee</span>
               </div>
            </div>
            <Link to="/contact">
               <Button>Request Service</Button>
            </Link>
         </div>

         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map(review => (
               <div key={review.id} className="bg-white p-8 rounded-3xl shadow-sm border border-charcoal-100 flex flex-col h-full hover:shadow-md transition-shadow">
                  <div className="flex text-yellow-400 space-x-1 mb-4">
                     {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-5 w-5 ${i < review.rating ? "fill-current" : "opacity-30"}`} />
                     ))}
                  </div>
                  <p className="text-charcoal-700 leading-relaxed flex-grow mb-6">"{review.text}"</p>
                  <div className="border-t border-charcoal-100 pt-4 mt-auto">
                     <p className="font-bold text-charcoal-900">{review.name}</p>
                     <div className="flex justify-between items-center mt-1">
                        <p className="text-sm text-charcoal-500">{review.location}</p>
                        <p className="text-xs text-charcoal-400">{review.date}</p>
                     </div>
                     <p className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded inline-block mt-3">{review.service}</p>
                  </div>
               </div>
            ))}
         </div>
      </div>
    </div>
  );
}
