import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const posts = [
  {
    id: 1,
    title: "5 Secrets to a Thicker, Greener Lawn This Spring",
    excerpt: "Spring is the most critical time for your lawn. These 5 actionable steps will ensure your grass wakes up strong and outcompetes weeds all season.",
    category: "Seasonal Guides",
    author: "Tim Harris",
    date: "Mar 12, 2024",
    img: "https://images.unsplash.com/photo-1592424001806-69623631be03?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Understanding Soil pH: Why Fertilizer Might Not Be Working",
    excerpt: "Applying fertilizer without knowing your soil's pH is like taking medicine without a diagnosis. Learn how soil acidity locks up nutrients.",
    category: "Lawn Care Tips",
    author: "Elena Rodriguez",
    date: "Feb 28, 2024",
    img: "https://images.unsplash.com/photo-1589926830571-0ceca20539ce?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Drought-Resistant Landscaping: Save Water and Look Great",
    excerpt: "Xeriscaping doesn't mean just rocks and cactus. Discover native plants that thrive in our region with minimal irrigation.",
    category: "Landscaping Ideas",
    author: "Sarah Barnes",
    date: "Feb 15, 2024",
    img: "https://images.unsplash.com/photo-1558904541-efa843a96f0f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "The Difference Between Core Aeration and Dethatching",
    excerpt: "Both relieve compaction, but they serve different purposes. Find out which one your ailing lawn actually needs.",
    category: "Homeowner Education",
    author: "Tim Harris",
    date: "Jan 10, 2024",
    img: "https://images.unsplash.com/photo-1620021312384-be4ce11746f3?q=80&w=800&auto=format&fit=crop"
  }
];

export default function Blog() {
  return (
    <div className="bg-white pb-24">
      {/* Header */}
      <div className="bg-charcoal-950 py-24 text-center text-white">
         <div className="mx-auto max-w-4xl px-4">
            <h1 className="text-4xl font-extrabold sm:text-6xl mb-6">Lawn Care Tips & Resources</h1>
            <p className="text-xl text-charcoal-300 max-w-2xl mx-auto mb-8">
              Expert advice, seasonal guides, and inspiration for maintaining a beautiful property.
            </p>
         </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16">
         <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
            {posts.map(post => (
               <article key={post.id} className="group cursor-pointer">
                  <div className="aspect-[16/9] overflow-hidden rounded-3xl mb-6">
                     <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="flex items-center text-sm text-charcoal-500 mb-3 space-x-4">
                     <span className="text-green-600 font-semibold uppercase tracking-wider">{post.category}</span>
                     <div className="flex items-center">
                        <Calendar className="mr-1 h-4 w-4" />
                        {post.date}
                     </div>
                  </div>
                  <h2 className="text-2xl font-bold text-charcoal-900 mb-3 group-hover:text-green-600 transition-colors">{post.title}</h2>
                  <p className="text-charcoal-600 leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-6">
                     <div className="flex items-center text-sm text-charcoal-700">
                        <User className="mr-2 h-4 w-4 bg-charcoal-100 rounded-full p-0.5" />
                        {post.author}
                     </div>
                     <span className="text-green-600 font-medium flex items-center group-hover:underline">Read Article <ArrowRight className="ml-1 h-4 w-4" /></span>
                  </div>
               </article>
            ))}
         </div>
      </div>
    </div>
  );
}
