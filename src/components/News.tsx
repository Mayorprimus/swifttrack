import { Newspaper, Calendar, ArrowRight } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    title: 'SwiftTrack Expands Global Air Cargo Routes to 40 New Destinations',
    excerpt: 'We are proud to announce a major expansion of our air freight network, cutting delivery times across three continents by up to 35%.',
    date: 'October 01, 2026',
    category: 'Expansion',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 2,
    title: 'Real-Time GPS Tracking Now Available on All Consignments',
    excerpt: 'Every package you ship with SwiftTrack can now be monitored live, from pickup to the final delivery scan.',
    date: 'September 18, 2026',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    title: 'Sustainable Fleet: 200 Electric Trucks Join Our Road Network',
    excerpt: 'Our green logistics initiative moves forward with a new fleet of electric trucks servicing major metro routes.',
    date: 'September 02, 2026',
    category: 'Sustainability',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 4,
    title: 'New Express Sea Freight Line Connects Lagos and Rotterdam',
    excerpt: 'Faster ocean transit times and daily departures make our new sea freight route a game changer for international trade.',
    date: 'August 21, 2026',
    category: 'Shipping',
    image: 'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 5,
    title: 'SwifTrack App Reaches 1 Million Downloads',
    excerpt: 'Thank you to our customers worldwide — our mobile app for tracking shipments and managing deliveries just hit a huge milestone.',
    date: 'August 05, 2026',
    category: 'Company',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 6,
    title: 'Warehouse Automation Speeds Up Sorting by 50%',
    excerpt: 'State-of-the-art robotics in our hubs means your parcels are sorted and dispatched faster than ever before.',
    date: 'July 28, 2026',
    category: 'Innovation',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80',
  },
];

export default function News() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/5 border border-primary/20 rounded-full mb-6">
          <Newspaper className="w-4 h-4 text-primary" />
          <span className="text-[10px] font-black text-primary uppercase tracking-widest">Latest Updates</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black tracking-tighter heading-display text-primary">SWIFTTRACK NEWS</h1>
        <p className="text-muted mt-4 max-w-2xl mx-auto">
          Stay up to date with the latest from our network — new routes, technology upgrades, and company milestones.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsItems.map((item) => (
          <article key={item.id} className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col group">
            <div className="overflow-hidden h-56">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full">
                  {item.category}
                </span>
                <span className="text-[10px] font-mono text-muted flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {item.date}
                </span>
              </div>
              <h2 className="text-lg font-black leading-snug text-text mb-3">{item.title}</h2>
              <p className="text-sm text-muted flex-1">{item.excerpt}</p>
              <button className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest hover:gap-3 transition-all">
                Read More <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
