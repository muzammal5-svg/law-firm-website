import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageMeta from '../components/ui/PageMeta'
import AnimateOnScroll from '../components/ui/AnimateOnScroll'
import MaterialIcon from '../components/ui/MaterialIcon'
import { faqCategories } from '../data/faqData'

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('legal-process')
  const [expandedItem, setExpandedItem] = useState(null)

  const currentCategory = faqCategories.find(cat => cat.id === activeCategory)

  return (
    <>
      <PageMeta
        title="FAQs"
        description="Frequently asked questions about our legal services, fees, process, and timelines."
      />

      {/* Luxury Hero */}
      <section className="bg-luxe-cream py-stack-lg px-margin-mobile md:px-margin-desktop">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateOnScroll animation="fadeInUp">
            <span className="font-sans text-xs tracking-widest uppercase text-luxe-gold font-semibold block mb-4">Help Center</span>
            <h1 className="font-serif text-display-lg-mobile md:text-display-lg text-luxe-black mb-stack-md">
              Frequently Asked Questions
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeInUp" delay={0.1}>
            <p className="font-sans text-body-lg text-luxe-grey">
              Get answers to common questions about our legal services, fees, and process.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-stack-lg px-margin-mobile md:px-margin-desktop bg-luxe-cream">
        <div className="max-w-4xl mx-auto">
          {/* Category Tabs */}
          <AnimateOnScroll animation="fadeInUp" className="mb-stack-lg">
            <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-stack-lg">
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id)
                    setExpandedItem(null)
                  }}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-sans font-semibold text-sm tracking-wide transition-all ${
                    activeCategory === category.id
                      ? 'bg-luxe-black text-luxe-cream shadow-luxury-md'
                      : 'bg-luxe-light text-luxe-grey hover:bg-luxe-gold/5 border border-luxe-gold/20'
                  }`}
                >
                  <MaterialIcon name={category.icon} className="text-lg" />
                  <span className="hidden sm:inline">{category.title}</span>
                </button>
              ))}
            </div>
          </AnimateOnScroll>

          {/* FAQ Items */}
          {currentCategory && (
            <AnimateOnScroll animation="fadeInUp" delay={0.1}>
              <div className="space-y-3">
                {currentCategory.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="luxury-card bg-luxe-cream rounded-lg border border-luxe-gold/20 hover:border-luxe-gold/40 hover:shadow-luxury-md transition-all overflow-hidden"
                  >
                    <button
                      onClick={() => setExpandedItem(expandedItem === idx ? null : idx)}
                      className="w-full px-stack-md py-stack-sm flex items-center justify-between hover:bg-luxe-gold/2 transition-colors text-left"
                    >
                      <h3 className="font-serif text-headline-sm text-luxe-black flex-grow">
                        {item.question}
                      </h3>
                      <div className="flex-shrink-0">
                        <MaterialIcon
                          name={expandedItem === idx ? 'expand_less' : 'expand_more'}
                          className={`text-luxe-gold text-2xl transition-transform ${
                            expandedItem === idx ? 'rotate-180' : ''
                          }`}
                        />
                      </div>
                    </button>

                    {expandedItem === idx && (
                      <div className="px-stack-md py-stack-sm border-t border-luxe-gold/20 bg-luxe-gold/2">
                        <p className="font-sans text-body-md text-luxe-grey leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          )}
        </div>
      </section>

      {/* Luxury CTA */}
      <section className="bg-luxe-black text-luxe-cream py-stack-lg px-margin-mobile text-center">
        <div className="max-w-3xl mx-auto">
          <AnimateOnScroll animation="fadeInUp">
            <h2 className="font-serif text-headline-md mb-stack-md">Still Have Questions?</h2>
            <p className="font-sans text-body-lg text-luxe-cream/80 mb-stack-lg">
              Schedule a consultation with Julian Thorne for personalized answers to your legal questions.
            </p>
            <Link
              to="/consultation"
              className="inline-flex items-center justify-center px-8 py-4 bg-luxe-gold text-luxe-black rounded-lg font-sans font-semibold text-sm tracking-wide hover:shadow-luxury-lg hover:translate-y-[-2px] transition-all"
            >
              Book Free Consultation
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
