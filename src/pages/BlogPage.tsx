import React, { useState } from 'react';
import { 
  Search, 
  BookOpen, 
  Clock, 
  Calendar, 
  User, 
  ArrowLeft, 
  Share2, 
  Sparkles,
  Tag,
  Phone
} from 'lucide-react';
import { BlogPost, PageTab } from '../types';
import { BLOG_POSTS } from '../data/blogs';

interface BlogPageProps {
  activeBlogId?: string | null;
  onSelectBlog: (id: string | null) => void;
  setActiveTab: (tab: PageTab) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ activeBlogId, onSelectBlog, setActiveTab }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Quranic Wisdom',
    'Tajweed Rules',
    'Hifz Tips',
    'Parenting & Kids',
    'Daily Duas',
    'Tafseer',
    'Islamic Manners',
    'Islamic Occasions'
  ];

  const currentArticle = activeBlogId 
    ? BLOG_POSTS.find(b => b.id === activeBlogId || b.slug === activeBlogId)
    : null;

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleShareWhatsApp = (title: string) => {
    const text = encodeURIComponent(`Read this inspiring Islamic article from Tazyeenul Quran Academy: "${title}"\nVisit: https://tazyeenulquran.com`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  // If viewing a single full article
  if (currentArticle) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        
        {/* Back Button */}
        <button
          onClick={() => onSelectBlog(null)}
          className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:text-accent-dark transition-colors bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Articles</span>
        </button>

        {/* Article Container */}
        <article className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden">
          
          {/* Featured Image */}
          <div className="relative h-64 sm:h-96 w-full">
            <img 
              src={currentArticle.image} 
              alt={currentArticle.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent"></div>
            
            <div className="absolute top-4 left-4">
              <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-accent text-primary-dark shadow">
                {currentArticle.category}
              </span>
            </div>

            {currentArticle.arabicExcerpt && (
              <div className="absolute bottom-6 left-6 right-6 text-right">
                <span className="font-serif text-accent-light text-2xl sm:text-3xl font-bold block drop-shadow-md">
                  {currentArticle.arabicExcerpt}
                </span>
              </div>
            )}
          </div>

          {/* Article Header */}
          <div className="p-6 sm:p-10 border-b border-gray-100 space-y-4">
            <h1 className="text-2xl sm:text-4xl font-serif font-extrabold text-primary leading-tight">
              {currentArticle.title}
            </h1>

            <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-charcoal/60 pt-2 border-t border-gray-100">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 font-medium text-primary">
                  <User className="w-3.5 h-3.5 text-accent" />
                  {currentArticle.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {currentArticle.publishedDate}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {currentArticle.readTime}
                </span>
              </div>

              <button
                onClick={() => handleShareWhatsApp(currentArticle.title)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 hover:bg-emerald-100 text-xs font-semibold border border-emerald-200 transition-colors"
              >
                <Share2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Share on WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Article Body */}
          <div className="p-6 sm:p-10 space-y-6 text-sm sm:text-base text-charcoal/80 leading-relaxed font-sans">
            {currentArticle.content.map((paragraph, pIdx) => (
              <p key={pIdx}>
                {paragraph}
              </p>
            ))}
          </div>

          {/* Tags */}
          <div className="p-6 sm:p-10 pt-0 flex flex-wrap items-center gap-2 border-t border-gray-100 mt-6">
            <span className="text-xs font-bold text-charcoal/60 flex items-center gap-1 mr-2">
              <Tag className="w-3.5 h-3.5" />
              Topics:
            </span>
            {currentArticle.tags.map((tag, tIdx) => (
              <span key={tIdx} className="text-xs bg-ivory text-primary px-3 py-1 rounded-full border border-accent/20">
                #{tag}
              </span>
            ))}
          </div>

          {/* Trial CTA within Article */}
          <div className="m-6 sm:m-10 p-6 rounded-2xl bg-primary text-white flex flex-col sm:flex-row items-center justify-between gap-4 border border-accent/40">
            <div>
              <h4 className="font-serif font-bold text-lg text-white">
                Learn this course 1-on-1 with our teachers
              </h4>
              <p className="text-xs text-ivory/80">
                Register for a free trial class at Tazyeenul Quran Academy today.
              </p>
            </div>
            <button
              onClick={() => setActiveTab('trial')}
              className="px-6 py-2.5 rounded-full bg-accent text-primary-dark font-bold text-xs shadow hover:bg-accent-light shrink-0"
            >
              Book Free Trial
            </button>
          </div>

        </article>
      </div>
    );
  }

  // Blog Listing View
  return (
    <div className="space-y-16 pb-20">
      
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-primary-dark via-primary to-primary text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-emerald-pattern opacity-15 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-accent bg-secondary/80 border border-accent/40 px-4 py-1 rounded-full">
            Knowledge & Inspiration
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-white">
            Islamic Educational Blog
          </h1>
          <p className="text-sm sm:text-base text-ivory/90 max-w-2xl mx-auto leading-relaxed">
            Deepen your understanding of the Holy Quran, Tajweed rules, memorization strategies, family parenting, and daily Sunnah supplications.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm space-y-4">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-charcoal/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Islamic topics..."
                className="w-full pl-10 pr-4 py-2.5 text-xs rounded-full border border-gray-200 focus:border-accent outline-none bg-ivory/50"
              />
            </div>

            {/* Total Articles Count */}
            <span className="text-xs text-charcoal/50">
              Showing {filteredPosts.length} published articles
            </span>

          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-gray-100">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-primary text-white shadow'
                    : 'bg-ivory hover:bg-gray-100 text-charcoal/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => onSelectBlog(post.id)}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold bg-primary text-white shadow">
                    {post.category}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-charcoal/50">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.publishedDate}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-primary group-hover:text-accent-dark transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs text-charcoal/70 line-clamp-3 leading-relaxed">
                    {post.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-primary">
                <span>Read Full Article →</span>
                <span className="text-charcoal/50 font-normal">By {post.author.split(' ')[0]}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
