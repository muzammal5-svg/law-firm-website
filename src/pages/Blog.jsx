import { Link } from 'react-router-dom'
import { useState, useMemo } from 'react'
import PageMeta from '../components/ui/PageMeta'
import AnimateOnScroll from '../components/ui/AnimateOnScroll'
import MaterialIcon from '../components/ui/MaterialIcon'
import CTABanner from '../components/layout/CTABanner'
import blogPosts from '../data/blogPosts.json'

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  // Get unique categories
  const categories = useMemo(() => {
    const cats = [...new Set(blogPosts.map(p => p.category))]
    return cats.sort()
  }, [])

  // Filter posts
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesCategory = !selectedCategory || post.category === selectedCategory
      const matchesSearch = !searchTerm || 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchTerm])

  return (
    <>
      <PageMeta
        title="Blog"
        description="Expert legal insights and articles on property law, family law, criminal defense, business law, and cyber crime."
      />

      {/* Luxury Hero */}
      <section className="bg-luxe-cream py-stack-lg px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto text-center">
          <AnimateOnScroll animation="fadeInUp">
            <span className="font-sans text-xs tracking-widest uppercase text-luxe-gold font-semibold block mb-4">Insights</span>
            <h1 className="font-serif text-display-lg-mobile md:text-display-lg text-luxe-black mb-stack-md">
              Legal Insights & Articles
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeInUp" delay={0.1}>
            <p className="font-sans text-body-lg text-luxe-grey max-w-3xl mx-auto">
              Expert perspectives on navigating complex legal matters. Stay informed with our latest articles on property, family, criminal, business, and cyber law.
            </p>
          </AnimateOnScroll>
          <div className="h-1 w-16 bg-gradient-to-r from-luxe-gold to-luxe-gold-dark mx-auto rounded-full mt-stack-md"></div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-stack-lg px-margin-mobile md:px-margin-desktop bg-luxe-cream">
        <div className="max-w-container-max mx-auto">
          {/* Search Bar */}
          <AnimateOnScroll animation="fadeInUp" className="mb-stack-lg">
            <div className="max-w-2xl">
              <div className="relative group">
                <MaterialIcon name="search" className="absolute left-5 top-1/2 -translate-y-1/2 text-luxe-gold/50 text-2xl group-focus-within:text-luxe-gold transition-colors" />
                <input
                  type="text"
                  placeholder="Search articles by title or topic..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-16 pr-6 py-4 rounded-xl font-sans text-body-md border-2 border-luxe-gold/20 focus:border-luxe-gold focus:outline-none transition-all bg-white/50 focus:bg-white shadow-luxury-sm hover:shadow-luxury-md"
                />
              </div>
            </div>
          </AnimateOnScroll>

          {/* Category Filters Section */}
          <AnimateOnScroll animation="fadeInUp" delay={0.1} className="mb-stack-lg">
            <div className="space-y-5">
              {/* Label with Icon */}
              <div className="flex items-center gap-3 pb-3 border-b border-luxe-gold/20">
                <div className="w-10 h-10 rounded-lg bg-luxe-gold/10 flex items-center justify-center">
                  <MaterialIcon name="filter_list" className="text-luxe-gold text-2xl" />
                </div>
                <p className="font-sans text-sm text-luxe-black font-bold tracking-widest uppercase">Browse by Category</p>
              </div>

              {/* Filter Buttons Grid */}
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`group px-6 py-3 rounded-xl font-sans font-semibold text-sm tracking-wide transition-all duration-300 ${
                    selectedCategory === null
                      ? 'bg-luxe-black text-luxe-cream shadow-luxury-md border border-luxe-gold/40 hover:shadow-luxury-lg'
                      : 'bg-luxe-light text-luxe-black hover:text-luxe-gold border-2 border-luxe-gold/20 hover:bg-luxe-gold/5 hover:border-luxe-gold/50'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <MaterialIcon name="apps" className="text-lg opacity-70 group-hover:opacity-100 transition-opacity" />
                    All Articles
                  </span>
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`group px-6 py-3 rounded-xl font-sans font-semibold text-sm tracking-wide transition-all duration-300 ${
                      selectedCategory === cat
                        ? 'bg-luxe-black text-luxe-cream shadow-luxury-md border border-luxe-gold/40 hover:shadow-luxury-lg'
                        : 'bg-luxe-light text-luxe-black hover:text-luxe-gold border-2 border-luxe-gold/20 hover:bg-luxe-gold/5 hover:border-luxe-gold/50'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <MaterialIcon name="label" className="text-lg opacity-70 group-hover:opacity-100 transition-opacity" />
                      {cat}
                    </span>
                  </button>
                ))}
              </div>

              {/* Filter Info */}
              <p className="font-sans text-xs text-luxe-grey tracking-wide">
                💡 Tip: Click any category to filter articles, or use the search box above to find specific topics.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Results Counter */}
          <AnimateOnScroll animation="fadeInUp" delay={0.2} className="mb-stack-lg">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-luxe-gold/10 border border-luxe-gold/20">
              <MaterialIcon name="info" className="text-luxe-gold text-sm" />
              <span className="font-sans text-sm text-luxe-grey">
                Showing <span className="text-luxe-black font-bold">{filteredPosts.length}</span> article{filteredPosts.length !== 1 ? 's' : ''}
              </span>
            </div>
          </AnimateOnScroll>

          {/* Blog Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, idx) => (
                <AnimateOnScroll key={post.id} animation="fadeInUp" delay={idx * 0.05}>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="luxury-card group bg-white rounded-xl overflow-hidden shadow-luxury-sm hover:shadow-luxury-lg border border-luxe-gold/20 hover:border-luxe-gold/50 transition-all hover:-translate-y-2 flex flex-col h-full"
                  >
                    {/* Image Container */}
                    <div className="h-56 relative overflow-hidden bg-luxe-light">
                      <img
                        src={post.image}
                        alt={post.imageAlt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Category Badge */}
                      <span className="absolute top-4 left-4 bg-luxe-black/85 backdrop-blur text-luxe-cream px-4 py-1 rounded-full font-sans text-caption font-bold uppercase tracking-widest">
                        {post.category}
                      </span>
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-luxe-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      {/* Date */}
                      <div className="flex items-center gap-2 mb-3">
                        <MaterialIcon name="calendar_today" className="text-luxe-gold text-sm" />
                        <time className="font-sans text-caption text-luxe-grey font-medium">{post.date}</time>
                      </div>

                      {/* Title */}
                      <h3 className="font-serif text-headline-sm text-luxe-black mb-3 leading-tight line-clamp-2 group-hover:text-luxe-gold transition-colors duration-300">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="font-sans text-luxe-grey text-body-md mb-6 flex-grow line-clamp-2">
                        {post.excerpt}
                      </p>

                      {/* Footer */}
                      <div className="flex justify-between items-center pt-4 border-t border-luxe-gold/10">
                        <span className="font-sans text-caption text-luxe-grey/70 font-medium">{post.readTime}</span>
                        <span className="font-sans text-luxe-gold font-semibold text-sm group-hover:gap-2 transition-all flex items-center gap-1 tracking-wide group-hover:translate-x-1">
                          Read <MaterialIcon name="arrow_forward" className="text-lg" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </AnimateOnScroll>
              ))}
            </div>
          ) : (
            <AnimateOnScroll animation="fadeInUp">
              <div className="text-center py-stack-lg">
                <MaterialIcon name="search_off" className="text-5xl text-luxe-gold/20 mb-4 inline-block" />
                <h3 className="font-serif text-headline-md text-luxe-black mb-2">No articles found</h3>
                <p className="font-sans text-body-md text-luxe-grey">
                  Try adjusting your search or filter criteria to find what you're looking for.
                </p>
              </div>
            </AnimateOnScroll>
          )}
        </div>
      </section>

      <CTABanner />
    </>
  )
}
