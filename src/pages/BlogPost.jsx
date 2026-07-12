import { useParams, Link } from 'react-router-dom'
import { useMemo } from 'react'
import PageMeta from '../components/ui/PageMeta'
import AnimateOnScroll from '../components/ui/AnimateOnScroll'
import MaterialIcon from '../components/ui/MaterialIcon'
import CTABanner from '../components/layout/CTABanner'
import blogPosts from '../data/blogPosts.json'

export default function BlogPost() {
  const { slug } = useParams()

  const post = useMemo(() => {
    return blogPosts.find(p => p.slug === slug)
  }, [slug])

  const relatedPosts = useMemo(() => {
    if (!post) return []
    return blogPosts
      .filter(p => p.category === post.category && p.id !== post.id)
      .slice(0, 3)
  }, [post])

  if (!post) {
    return (
      <div className="py-stack-lg text-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <h1 className="font-serif text-headline-md text-luxe-black mb-4">Article not found</h1>
        <Link to="/blog" className="text-luxe-gold font-sans font-semibold hover:underline">
          Back to Blog
        </Link>
      </div>
    )
  }

  return (
    <>
      <PageMeta
        title={post.title}
        description={post.excerpt}
        image={post.image}
      />

      {/* Luxury Hero */}
      <section className="bg-luxe-cream py-stack-lg px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <Link to="/blog" className="font-sans text-luxe-gold font-semibold text-sm tracking-wide mb-stack-md inline-flex items-center gap-1 hover:gap-2 transition-all">
            <MaterialIcon name="arrow_back" />
            Back to Blog
          </Link>

          <AnimateOnScroll animation="fadeInUp">
            <div className="mb-stack-lg max-w-3xl">
              <div className="flex flex-wrap items-center gap-4 mb-stack-md">
                <span className="inline-flex items-center gap-2 bg-luxe-gold/10 border border-luxe-gold/30 text-luxe-gold px-4 py-2 rounded-full font-sans text-caption font-semibold uppercase tracking-wide">
                  <MaterialIcon name="bookmark" className="text-lg" />
                  {post.category}
                </span>
                <span className="font-sans text-caption text-luxe-grey">
                  <MaterialIcon name="calendar_today" className="text-lg inline mr-1" />
                  {post.date}
                </span>
                <span className="font-sans text-caption text-luxe-gold">
                  <MaterialIcon name="schedule" className="text-lg inline mr-1" />
                  {post.readTime}
                </span>
              </div>
              <h1 className="font-serif text-display-lg-mobile md:text-display-lg text-luxe-black leading-tight mb-stack-md">
                {post.title}
              </h1>
              <div className="h-1 w-16 bg-gradient-to-r from-luxe-gold to-luxe-gold-dark rounded-full"></div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeInUp" delay={0.1}>
            <img
              src={post.image}
              alt={post.imageAlt}
              className="w-full h-96 object-cover rounded-lg shadow-luxury-lg border border-luxe-gold/20"
            />
          </AnimateOnScroll>
        </div>
      </section>

      {/* Content */}
      <section className="py-stack-lg px-margin-mobile md:px-margin-desktop bg-luxe-cream">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-gutter">
          {/* Main Content */}
          <AnimateOnScroll className="lg:col-span-3" animation="fadeInLeft">
            <div
              className="font-sans text-body-lg text-luxe-grey leading-relaxed space-y-stack-md prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Content Enhancements - Add styling to HTML content */}
            <style>{`
              .prose p {
                font-size: 1rem;
                line-height: 1.8;
                margin-bottom: 1.5rem;
                color: #2D3142;
              }
              .prose h3 {
                font-family: 'Playfair Display', serif;
                font-size: 1.5rem;
                font-weight: 600;
                color: #0F1419;
                margin-top: 2rem;
                margin-bottom: 1rem;
                line-height: 1.4;
              }
              .prose h2 {
                font-family: 'Playfair Display', serif;
                font-size: 2rem;
                font-weight: 700;
                color: #0F1419;
                margin-top: 2.5rem;
                margin-bottom: 1.5rem;
              }
              .prose strong {
                color: #0F1419;
                font-weight: 600;
              }
              .prose em {
                font-style: italic;
                color: #2D3142;
              }
            `}</style>

            {/* Author Bio */}
            <div className="mt-stack-xl pt-stack-xl border-t-2 border-luxe-gold/20">
              <h3 className="font-serif text-headline-sm text-luxe-black mb-4">About the Author</h3>
              <div className="flex gap-6 items-start">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAC5dvvrYM5-uPdEnlqAZbEu5Qm_LB06qp1TlTrFKbkWZM8Rf4dNzuGZOiqbMTgfmBGDNFW4LTAm5UJDQPZrXPwzpAkUMtGTu8aCOWBcCzgxXDvtqvyE5djx9z76WxIxTXom-zn8ygmoaCXYLOrxlpbEFWMonc9r8nxAa3Vv4-fvHoU-aj9kUvUkRpQv7IBCO5A3suWL6Yr-anYxlyjdqCAJ737eP2vCgR8C7IPkFJjGAOra_hSkeiUd-8rA9xuaqIuwwXdXZSrrt0"
                  alt="Julian Thorne"
                  className="w-20 h-20 rounded-lg object-cover border-2 border-luxe-gold/30 flex-shrink-0"
                />
                <div className="flex-1">
                  <h4 className="font-serif text-headline-sm text-luxe-black mb-1">Advocate Julian Thorne</h4>
                  <p className="font-sans text-body-md text-luxe-grey leading-relaxed">
                    An accomplished advocate specializing in complex legal matters spanning property, family, criminal, business, and cyber crime law. With 15+ years of dedicated practice, Julian provides strategic counsel and expert representation to clients navigating high-stakes legal challenges.
                  </p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Sidebar */}
          <AnimateOnScroll className="lg:col-span-1 space-y-6" animation="fadeInRight" delay={0.1}>
            {/* Share */}
            <div className="bg-white rounded-lg border border-luxe-gold/20 p-6 shadow-luxury-sm hover:shadow-luxury-md transition-all">
              <h3 className="font-serif text-headline-sm text-luxe-black mb-4 flex items-center gap-2">
                <MaterialIcon name="share" className="text-luxe-gold" />
                Share Article
              </h3>
              <div className="flex flex-col gap-2">
                <a
                  href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${post.title}`}
                  className="p-3 rounded-lg bg-luxe-cream border border-luxe-gold/20 hover:bg-luxe-gold hover:text-luxe-black hover:border-luxe-gold transition-all text-luxe-grey text-center font-sans font-semibold text-sm inline-flex items-center justify-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MaterialIcon name="share" />
                  Share on Twitter
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`}
                  className="p-3 rounded-lg bg-luxe-cream border border-luxe-gold/20 hover:bg-luxe-gold hover:text-luxe-black hover:border-luxe-gold transition-all text-luxe-grey text-center font-sans font-semibold text-sm inline-flex items-center justify-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MaterialIcon name="share" />
                  Share on LinkedIn
                </a>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-luxe-black text-luxe-cream rounded-lg border border-luxe-gold/30 p-6 shadow-luxury-md hover:shadow-luxury-lg transition-all">
              <div className="flex items-start gap-3 mb-4">
                <MaterialIcon name="support_agent" className="text-luxe-gold text-2xl flex-shrink-0" />
                <h3 className="font-serif text-headline-sm">Need Legal Help?</h3>
              </div>
              <p className="font-sans text-body-md text-luxe-cream/90 mb-stack-md">
                Discuss this matter with Advocate Julian Thorne for expert guidance.
              </p>
              <Link
                to="/consultation"
                className="block w-full bg-luxe-gold text-luxe-black px-4 py-3 rounded-lg font-sans font-semibold text-sm text-center hover:shadow-luxury-md hover:bg-luxe-gold-dark transition-all tracking-wide uppercase"
              >
                Book Consultation
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-luxe-light py-stack-lg px-margin-mobile md:px-margin-desktop">
          <div className="max-w-container-max mx-auto">
            <AnimateOnScroll animation="fadeInUp" className="mb-stack-lg">
              <div>
                <span className="font-sans text-xs tracking-widest uppercase text-luxe-gold font-semibold block mb-3">Discover More</span>
                <h2 className="font-serif text-headline-md text-luxe-black mb-2">Related Articles</h2>
                <div className="h-1 w-16 bg-gradient-to-r from-luxe-gold to-luxe-gold-dark rounded-full"></div>
              </div>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, idx) => (
                <AnimateOnScroll key={relatedPost.id} animation="fadeInUp" delay={idx * 0.1}>
                  <Link
                    to={`/blog/${relatedPost.slug}`}
                    className="bg-white rounded-lg overflow-hidden shadow-luxury-sm hover:shadow-luxury-lg transition-all border border-luxe-gold/20 group flex flex-col h-full"
                  >
                    <div className="h-48 overflow-hidden bg-luxe-cream">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.imageAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <span className="inline-flex items-center gap-2 w-fit bg-luxe-gold/10 text-luxe-gold px-3 py-1 rounded-full font-sans text-caption font-semibold mb-3">
                        <MaterialIcon name="bookmark" className="text-sm" />
                        {relatedPost.category}
                      </span>
                      <h3 className="font-serif text-headline-sm text-luxe-black line-clamp-2 mb-2 flex-1">
                        {relatedPost.title}
                      </h3>
                      <div className="flex items-center gap-2 text-luxe-grey">
                        <MaterialIcon name="calendar_today" className="text-sm" />
                        <p className="font-sans text-caption">{relatedPost.date}</p>
                      </div>
                    </div>
                  </Link>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Banner */}
      <CTABanner />
    </>
  )
}
