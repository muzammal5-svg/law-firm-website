import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageMeta from '../components/ui/PageMeta'
import AnimateOnScroll from '../components/ui/AnimateOnScroll'
import MaterialIcon from '../components/ui/MaterialIcon'
import { faqCategories } from '../data/faqData'

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('criminal-law')
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

      {/* CTA */}
      <section className="bg-luxe-black text-luxe-cream py-stack-lg px-margin-mobile text-center">
        <div className="max-w-3xl mx-auto">
          <AnimateOnScroll animation="fadeInUp">
            <div className="trust-badge mx-auto mb-5 w-fit">
              <MaterialIcon name="calendar_today" className="text-sm" />
              Free 30-Minute Consultation
            </div>
            <h2 className="font-serif text-headline-md mb-4">Still Have Questions?</h2>
            <p className="font-sans text-body-lg text-luxe-cream/70 mb-8 max-w-xl mx-auto">
              Speak directly with Rana Muhammad Zahid Muneer for clear, honest answers about your
              criminal, family, property, or civil legal matter.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/consultation"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-luxe-gold text-luxe-black rounded-lg font-sans font-bold text-sm tracking-wide hover:bg-luxe-gold-dark transition-all"
              >
                <MaterialIcon name="calendar_today" />
                Book Free Consultation
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/20 text-white rounded-lg font-sans font-semibold text-sm hover:border-luxe-gold hover:text-luxe-gold transition-all"
              >
                <MaterialIcon name="mail" />
                Send a Message
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
