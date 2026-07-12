import { Link } from 'react-router-dom'
import { useState } from 'react'
import PageMeta from '../components/ui/PageMeta'
import AnimateOnScroll from '../components/ui/AnimateOnScroll'
import MaterialIcon from '../components/ui/MaterialIcon'
import CTABanner from '../components/layout/CTABanner'
import { practiceAreas } from '../data/practiceAreas'
import blogPosts from '../data/blogPosts.json'

export default function Home() {
  const featuredPosts = blogPosts.slice(0, 3)
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0)
  const [showVideoModal, setShowVideoModal] = useState(false)
  const [selectedVideoUrl, setSelectedVideoUrl] = useState('')

  const testimonials = [
    {
      name: 'Sawera Shafiq',
      title: 'Regent College London',
      hasVideo: true,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgIs1RA05fB_lpJ28Hs2248lvhbXHu-pT3qHxU0SywcJ5ccNKXMeksFzK2TYykqafoyPMP5jiRXKBWA6EDAzmdA0972yW-JD5CP1kv3IdeLjHK3-doR9inDMQcI9XSPP9ZjVzvfryec4-i15Bq8Eq20UgeGu-DmjDAuzzm0fXCcAJ2xb6ntJoGXIGaofAHrg4OdjL2FnSYSoR_pfKsuNy_uRQ8CSnQJ6QmJgQnowWhLpNuPznDo5bHJ3d41kjN6fOTVFgJplcOcKo',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      text: 'Next Consultancy has made my UK Visa process a breeze. Their support and expertise were invaluable. I highly recommend them to anyone looking for reliable and professional assistance.',
      rating: 5,
    },
    {
      name: 'Rohan Ahmed',
      title: 'University of Greenwich',
      hasVideo: true,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiV21zPnNi7CEOHHNFoMkg1ru_v8szPbbFmVfUmOdbfoQkLMa_T9muXHMTNoANoJbHuEKHQVj4uqlkwt-8VQm6cSsh1sJMKtVB8Ul2_1zP1SxLXnSpz_HEsenQuE-As__MqMeoVWgZPG6K7TMMRz5b7XpiIZvvAbquiKygrDO-irTEIRb-0OcpjeoGs0TU8UpF3-MRGfD7cbqL03eD9LkEBInjVIdeqWWmNbbP7JEgk14-P91rGc2CrS6TrbPg-pybMvRropNaZRY',
      videoUrl: 'https://www.youtube.com/embed/9bZkp7q19f0',
      text: 'The staff of Next Consultancy is very professional and highly appreciated. They helped me in getting a 5000 Pounds scholarship from the University of Greenwich. Highly recommended.',
      rating: 5,
    },
    {
      name: 'Nasik Ngeem',
      title: 'BPP University',
      hasVideo: true,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsfIDd5Q7vCXacEgoeXutacjJHenUQB3O9_kRQm_oSL4q7ggrWjDm90UKYvfskwvEWX5xSCi0DH7aeiulAU0a-ocncSv6IiOnizVDTk6qmSNIdA8yOeQhRbLPrxUdjdSt4a7rxZD6WkJLuDK0qrpxIkYz26EPDCOnI2KHut_1t--hCdUNM6u-nFN1EMvCjNJ1_l2glONRlPl1vszLKouyMLi4X--QKMliVP_rnSwT0D2ENB4mzBdBjFKr0i8zznS2bQwM8neHePFU',
      videoUrl: 'https://www.youtube.com/embed/jNQXAC9IVRw',
      text: 'I just completed my process of getting a UK Study visa and I am very thankful and grateful to Next Consultancy for their extensive support. I recommend Next Consultancy to make your study abroad dream true.',
      rating: 5,
    },
    {
      name: 'Zoha Mehtab',
      title: 'BPP University',
      hasVideo: true,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgIs1RA05fB_lpJ28Hs2248lvhbXHu-pT3qHxU0SywcJ5ccNKXMeksFzK2TYykqafoyPMP5jiRXKBWA6EDAzmdA0972yW-JD5CP1kv3IdeLjHK3-doR9inDMQcI9XSPP9ZjVzvfryec4-i15Bq8Eq20UgeGu-DmjDAuzzm0fXCcAJ2xb6ntJoGXIGaofAHrg4OdjL2FnSYSoR_pfKsuNy_uRQ8CSnQJ6QmJgQnowWhLpNuPznDo5bHJ3d41kjN6fOTVFgJplcOcKo',
      videoUrl: 'https://www.youtube.com/embed/aqz-KE-bpKQ',
      text: 'Thanks to Next Consultancy and their team members, who helped me and cooperated with me in every step of the process.',
      rating: 5,
    },
    {
      name: 'Ahmed Hassan',
      title: 'Kingston University',
      hasVideo: true,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgIs1RA05fB_lpJ28Hs2248lvhbXHu-pT3qHxU0SywcJ5ccNKXMeksFzK2TYykqafoyPMP5jiRXKBWA6EDAzmdA0972yW-JD5CP1kv3IdeLjHK3-doR9inDMQcI9XSPP9ZjVzvfryec4-i15Bq8Eq20UgeGu-DmjDAuzzm0fXCcAJ2xb6ntJoGXIGaofAHrg4OdjL2FnSYSoR_pfKsuNy_uRQ8CSnQJ6QmJgQnowWhLpNuPznDo5bHJ3d41kjN6fOTVFgJplcOcKo',
      videoUrl: 'https://www.youtube.com/embed/ZZ5yZ5U8-rY',
      text: 'Exceptional service and attention to detail. The team went above and beyond to ensure my visa application was perfect. Truly grateful for their dedication and professionalism.',
      rating: 5,
    },
    {
      name: 'Fatima Khan',
      title: 'City University London',
      hasVideo: true,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsfIDd5Q7vCXacEgoeXutacjJHenUQB3O9_kRQm_oSL4q7ggrWjDm90UKYvfskwvEWX5xSCi0DH7aeiulAU0a-ocncSv6IiOnizVDTk6qmSNIdA8yOeQhRbLPrxUdjdSt4a7rxZD6WkJLuDK0qrpxIkYz26EPDCOnI2KHut_1t--hCdUNM6u-nFN1EMvCjNJ1_l2glONRlPl1vszLKouyMLi4X--QKMliVP_rnSwT0D2ENB4mzBdBjFKr0i8zznS2bQwM8neHePFU',
      videoUrl: 'https://www.youtube.com/embed/K7gB6zVRUyU',
      text: 'Outstanding support throughout the entire process. Their knowledge of UK immigration is unparalleled. I would not hesitate to recommend them to anyone seeking legal assistance.',
      rating: 5,
    },
  ]

  const itemsPerPage = 3
  const totalPages = Math.ceil(testimonials.length / itemsPerPage)
  const visibleTestimonials = testimonials.slice(
    currentCarouselIndex * itemsPerPage,
    (currentCarouselIndex + 1) * itemsPerPage
  )

  const handlePrevCarousel = () => {
    setCurrentCarouselIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1))
  }

  const handleNextCarousel = () => {
    setCurrentCarouselIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1))
  }

  const handlePlayVideo = (videoUrl) => {
    setSelectedVideoUrl(videoUrl)
    setShowVideoModal(true)
  }

  return (
    <>
      <PageMeta
        title="Home"
        description="Advocate Julian Thorne provides expert legal representation. Luxury legal services in London."
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuAiV21zPnNi7CEOHHNFoMkg1ru_v8szPbbFmVfUmOdbfoQkLMa_T9muXHMTNoANoJbHuEKHQVj4uqlkwt-8VQm6cSsh1sJMKtVB8Ul2_1zP1SxLXnSpz_HEsenQuE-As__MqMeoVWgZPG6K7TMMRz5b7XpiIZvvAbquiKygrDO-irTEIRb-0OcpjeoGs0TU8UpF3-MRGfD7cbqL03eD9LkEBInjVIdeqWWmNbbP7JEgk14-P91rGc2CrS6TrbPg-pybMvRropNaZRY"
      />

      {/* Luxury Hero Section */}
      <section className="relative h-162 flex items-center overflow-hidden bg-luxe-cream">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-center opacity-50"
            style={{
              backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsi1-w0yoxbsP7Z_1dqPHdh1eByw7GUmbBRViH1kEeNtSHYgWPQgbEvYU&s=10')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-luxe-cream to-transparent" />
        </div>

        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full py-stack-lg">
          <div className="max-w-3xl">
            {/* Luxury Badge */}
            <AnimateOnScroll animation="fadeInUp">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-luxe-gold/40 bg-luxe-gold/5 mb-stack-md">
                <div className="w-2 h-2 rounded-full bg-luxe-gold" />
                <span className="font-sans text-xs tracking-widest uppercase text-luxe-gold font-semibold">
                  Award-Winning Advocate
                </span>
              </div>
            </AnimateOnScroll>

            {/* Hero Headline - Serif for Luxury */}
            <AnimateOnScroll animation="fadeInUp" delay={0.1}>
              <h1 className="font-serif text-display-lg-mobile md:text-display-lg text-luxe-black mb-stack-md leading-tight">
                Premium Legal Excellence in London
              </h1>
            </AnimateOnScroll>

            {/* Subtitle */}
            <AnimateOnScroll animation="fadeInUp" delay={0.2}>
              <p className="font-sans text-body-lg text-luxe-grey mb-stack-lg max-w-2xl leading-relaxed">
                Decades of distinguished advocacy. Unwavering representation during your most critical moments. Bespoke legal solutions tailored to your unique circumstances.
              </p>
            </AnimateOnScroll>

            {/* CTA Buttons - Luxury Style */}
            <AnimateOnScroll animation="fadeInUp" delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  to="/consultation"
                  className="inline-flex items-center justify-center px-8 py-4 bg-luxe-black text-luxe-cream rounded-lg font-sans font-semibold text-sm tracking-wide transition-all duration-300 hover:shadow-luxury-lg hover:translate-y-[-2px] active:translate-y-0"
                >
                  Schedule Consultation
                  <MaterialIcon name="arrow_forward" className="ml-2" />
                </Link>
                <a
                  href="https://wa.me/447700900123?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20legal%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-luxe-gold text-luxe-gold rounded-lg font-sans font-semibold text-sm tracking-wide transition-all duration-300 hover:bg-luxe-gold/5 hover:shadow-luxury-md"
                >
                  {/* WhatsApp Icon */}
                  <svg className="mr-2 w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.781 1.226l-.333.161-.345-.052c-1.268-.187-2.437-.157-3.39.318-.956.475-1.754 1.235-2.267 2.039C.669 6.575 0 7.753 0 9.012c0 1.261.6 2.43 1.614 3.326l-.254.396c-.529.751-.235 1.585.516 2.115.388.278.853.278 1.241 0l1.242-.888c.52.158 1.08.246 1.657.246 1.624 0 3.11-.672 4.158-1.852.52-.592.932-1.306 1.191-2.085.259-.78.328-1.611.204-2.41-.155-.942-.574-1.795-1.188-2.427-.614-.632-1.437-1.04-2.306-1.168zm14.527-2.979H6.414c-1.374 0-2.487 1.113-2.487 2.487v14.172c0 1.374 1.113 2.487 2.487 2.487h14.172c1.375 0 2.487-1.113 2.487-2.487V4.1c0-1.374-1.112-2.487-2.487-2.487z"/>
                  </svg>
                  Message on WhatsApp
                </a>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Luxury Trust Metrics - Elevated Design */}
      <section className="bg-luxe-black text-luxe-cream py-stack-lg">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {[
              { number: '15+', label: 'Years Trusted Advocacy', icon: 'school' },
              { number: '500+', label: 'Successful Resolutions', icon: 'verified' },
              { number: '98%', label: 'Client Satisfaction', icon: 'sentiment_satisfied' },
            ].map((stat, idx) => (
              <AnimateOnScroll key={idx} animation="fadeIn" delay={idx * 0.1}>
                <div className="text-center border-b border-luxe-gold/20 pb-8">
                  <div className="w-12 h-12 rounded-full bg-luxe-gold/10 flex items-center justify-center mx-auto mb-stack-md">
                    <MaterialIcon name={stat.icon} className="text-luxe-gold text-2xl" />
                  </div>
                  <div className="font-serif text-5xl text-luxe-gold mb-2">{stat.number}</div>
                  <p className="font-sans text-luxe-cream/80 text-sm tracking-wide">{stat.label}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Areas - Elegant Minimal Design */}
      <section className="py-stack-lg px-margin-mobile md:px-margin-desktop bg-luxe-cream">
        <div className="max-w-container-max mx-auto">
          {/* Header - Minimal and Elegant */}
          <AnimateOnScroll animation="fadeInUp" className="mb-32 max-w-xl">
            <span className="font-sans text-xs tracking-widest uppercase text-luxe-gold font-semibold block mb-4">Areas of Expertise</span>
            <h2 className="font-serif text-display-lg-mobile md:text-headline-md text-luxe-black mb-6 leading-tight">
              Five Practice Areas
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-luxe-gold to-luxe-gold-dark rounded-full"></div>
          </AnimateOnScroll>

          {/* Practice Areas - Elegant 5 Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16 mt-16">
            {practiceAreas.map((area, idx) => (
              <AnimateOnScroll key={area.id} animation="fadeInUp" delay={idx * 0.08}>
                <Link
                  to={`/practice-areas/${area.slug}`}
                  className="group text-center hover:text-luxe-gold transition-colors duration-300"
                >
                  {/* Icon Circle */}
                  <div className="w-20 h-20 rounded-full bg-luxe-gold/5 border border-luxe-gold/30 flex items-center justify-center mx-auto mb-6 group-hover:bg-luxe-gold/10 group-hover:border-luxe-gold/50 transition-all duration-300 transform group-hover:scale-110">
                    <MaterialIcon name={area.icon} className="text-luxe-gold text-4xl" />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-headline-sm text-luxe-black mb-3 group-hover:text-luxe-gold transition-colors duration-300">
                    {area.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-body-md text-luxe-grey leading-relaxed mb-4">
                    {area.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="inline-flex items-center gap-1 text-luxe-gold font-semibold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
                    <span>Learn More</span>
                    <MaterialIcon name="arrow_forward" className="text-base" />
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-luxe-gold/10 pt-16 flex justify-center">
            {/* CTA Button */}
            <AnimateOnScroll animation="fadeInUp">
              <Link
                to="/practice-areas"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-luxe-gold text-luxe-gold font-sans font-semibold text-sm tracking-widest uppercase rounded-lg hover:bg-luxe-gold hover:text-luxe-black transition-all duration-300 group"
              >
                <MaterialIcon name="explore" className="text-lg" />
                <span>Explore All Areas</span>
              </Link>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials & Reviews - Luxury Professional Carousel */}
      <section className="py-stack-lg px-margin-mobile md:px-margin-desktop bg-luxe-cream">
        <div className="max-w-container-max mx-auto">
          {/* Premium Header */}
          <AnimateOnScroll animation="fadeInUp" className="mb-stack-lg max-w-2xl mx-auto">
            <div className="text-center">
              <span className="font-sans text-xs tracking-widest uppercase text-luxe-gold font-semibold block mb-4">
                <MaterialIcon name="verified" className="inline text-lg mr-2 align-middle" />
                Client Testimonials
              </span>
              <h2 className="font-serif text-display-lg-mobile md:text-display-sm text-luxe-black mb-4 leading-tight">
                Trusted by Over 500 Satisfied Clients
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-luxe-gold to-luxe-gold-dark rounded-full mx-auto mb-6"></div>
              <p className="font-sans text-body-lg text-luxe-grey leading-relaxed mb-16">
                Exceptional legal guidance from clients who've experienced our commitment to excellence
              </p>
            </div>
          </AnimateOnScroll>

          {/* Carousel Container with Premium Navigation */}
          <div className="relative">
            {/* Left Arrow - Premium Style */}
            <button
              onClick={handlePrevCarousel}
              className="absolute -left-6 md:-left-8 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-luxe-black border-2 border-luxe-gold hover:bg-luxe-gold hover:text-luxe-black text-luxe-gold flex items-center justify-center transition-all duration-300 shadow-luxury-lg group"
              aria-label="Previous reviews"
            >
              <MaterialIcon name="arrow_back" className="text-xl group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Right Arrow - Premium Style */}
            <button
              onClick={handleNextCarousel}
              className="absolute -right-6 md:-right-8 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-luxe-black border-2 border-luxe-gold hover:bg-luxe-gold hover:text-luxe-black text-luxe-gold flex items-center justify-center transition-all duration-300 shadow-luxury-lg group"
              aria-label="Next reviews"
            >
              <MaterialIcon name="arrow_forward" className="text-xl group-hover:-translate-x-1 transition-transform" />
            </button>

            {/* Reviews Grid - 3 Columns, Luxury Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-0 md:px-16">
              {visibleTestimonials.map((review, idx) => (
                <AnimateOnScroll key={idx} animation="fadeInUp" delay={idx * 0.1}>
                  <div className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-luxe-gold/30 hover:border-luxe-gold/70 transition-all duration-300 hover:shadow-luxury-xl h-full transform hover:-translate-y-2">
                    {/* Video Thumbnail - Premium */}
                    <div className="relative h-64 bg-gradient-to-br from-luxe-black to-luxe-dark flex items-center justify-center overflow-hidden flex-shrink-0">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Premium Play Button Overlay */}
                      {review.hasVideo && (
                        <div
                          className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-all duration-300 backdrop-blur-sm group-hover:backdrop-blur-md"
                          onClick={() => handlePlayVideo(review.videoUrl)}
                        >
                          <div className="relative">
                            <div className="absolute inset-0 bg-luxe-gold rounded-full animate-pulse opacity-30 scale-150"></div>
                            <div className="relative w-20 h-20 rounded-full bg-luxe-gold flex items-center justify-center transform group-hover:scale-125 transition-transform duration-300 shadow-luxury-xl">
                              <MaterialIcon name="play_arrow" className="text-luxe-black text-4xl ml-1" />
                            </div>
                          </div>
                        </div>
                      )}
                      {/* Video Label Badge */}
                      <div className="absolute top-4 right-4 px-3 py-2 bg-luxe-gold/90 backdrop-blur text-luxe-black text-xs font-bold rounded-full flex items-center gap-1">
                        <MaterialIcon name="videocam" className="text-sm" />
                        Video Review
                      </div>
                    </div>

                    {/* Text Review Section - Premium */}
                    <div className="flex flex-col flex-1 p-8 bg-gradient-to-b from-white via-white to-luxe-light/50">
                      {/* Stars - Premium Rating Display */}
                      <div className="flex gap-1 mb-6">
                        {[...Array(review.rating)].map((_, i) => (
                          <div key={i} className="relative">
                            <MaterialIcon name="star" filled className="text-luxe-gold text-lg drop-shadow-lg" />
                          </div>
                        ))}
                        <span className="ml-auto text-xs font-semibold text-luxe-gold tracking-wide">VERIFIED</span>
                      </div>

                      {/* Review Text - Premium Typography */}
                      <p className="font-sans text-body-md text-luxe-grey leading-relaxed flex-grow mb-6 italic">
                        "{review.text}"
                      </p>

                      {/* Divider */}
                      <div className="h-px bg-gradient-to-r from-transparent via-luxe-gold/30 to-transparent mb-6"></div>

                      {/* Client Info - Premium */}
                      <div className="mb-6">
                        <p className="font-serif text-headline-sm text-luxe-black leading-tight">{review.name}</p>
                        <p className="font-sans text-caption text-luxe-gold font-semibold tracking-wide mt-2">{review.title}</p>
                      </div>

                      {/* Read More Link - Premium */}
                      <div className="inline-flex items-center gap-2 text-luxe-gold font-semibold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer">
                        <span className="border-b border-luxe-gold pb-1">Watch Full Review</span>
                        <MaterialIcon name="play_circle_filled" className="text-lg" />
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>

          {/* Premium Carousel Controls */}
          <div className="mt-16 flex flex-col items-center gap-8">
            {/* Carousel Dots - Premium Design */}
            <div className="flex justify-center gap-3">
              {[...Array(totalPages)].map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentCarouselIndex(idx)}
                  className={`transition-all duration-300 cursor-pointer ${
                    idx === currentCarouselIndex
                      ? 'bg-luxe-gold w-10 h-3 rounded-full shadow-luxury-md'
                      : 'bg-luxe-gold/20 hover:bg-luxe-gold/40 w-3 h-3 rounded-full'
                  }`}
                  aria-label={`Go to carousel page ${idx + 1}`}
                />
              ))}
            </div>

            {/* Page Counter - Professional Touch */}
            <p className="font-sans text-sm text-luxe-grey tracking-wide">
              <span className="font-semibold text-luxe-gold">{currentCarouselIndex + 1}</span>
              {' '}/{'  '}
              <span className="font-semibold text-luxe-gold">{totalPages}</span>
            </p>
          </div>

          {/* Trust Statistics - Premium Section */}
          {/* <div className="mt-stack-lg pt-16 border-t-2 border-luxe-gold/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {[
                { number: '500+', label: 'Happy Clients', icon: 'people' },
                { number: '98%', label: 'Satisfaction Rate', icon: 'thumb_up' },
                { number: '15+', label: 'Years Experience', icon: 'history' },
                { number: '1000+', label: 'Total Reviews', icon: 'rate_review' },
              ].map((stat, idx) => (
                <AnimateOnScroll key={idx} animation="fadeInUp" delay={idx * 0.1}>
                  <div className="text-center group">
                    <div className="w-14 h-14 rounded-full bg-luxe-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-luxe-gold/20 transition-all">
                      <MaterialIcon name={stat.icon} className="text-luxe-gold text-2xl" />
                    </div>
                    <p className="font-serif text-headline-sm text-luxe-gold mb-2 group-hover:text-luxe-gold-dark transition-colors">{stat.number}</p>
                    <p className="font-sans text-caption text-luxe-grey font-medium tracking-wide">{stat.label}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div> */}
        </div>

        {/* Video Modal */}
        {showVideoModal && (
          <div
            className="fixed inset-0 bg-luxe-black/80 backdrop-blur z-50 flex items-center justify-center p-4"
            onClick={() => setShowVideoModal(false)}
          >
            <div
              className="relative w-full max-w-4xl bg-luxe-black rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowVideoModal(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-luxe-gold hover:bg-luxe-gold-dark text-luxe-black flex items-center justify-center transition-all shadow-luxury-lg"
                aria-label="Close video"
              >
                <MaterialIcon name="close" className="text-lg" />
              </button>

              {/* Video Container */}
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={`${selectedVideoUrl}?autoplay=1`}
                  title="Client testimonial video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Latest Insights - Enhanced */}
      <section className="py-stack-lg px-margin-mobile md:px-margin-desktop bg-luxe-cream">
        <div className="max-w-container-max mx-auto">
          <AnimateOnScroll animation="fadeInUp" className="mb-stack-lg">
            <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 pb-8 border-b border-luxe-gold/20">
              <div>
                <span className="font-sans text-xs tracking-widest uppercase text-luxe-gold font-semibold block mb-3">Latest Articles</span>
                <h2 className="font-serif text-headline-md text-luxe-black">Legal Insights & Analysis</h2>
                <p className="font-sans text-body-md text-luxe-grey mt-2">Expert perspectives on navigating complex legal matters</p>
              </div>
              <Link
                to="/blog"
                className="hidden md:flex items-center gap-2 text-luxe-gold font-sans font-semibold text-sm hover:gap-3 transition-all tracking-wide whitespace-nowrap group"
              >
                <span className="group-hover:text-luxe-gold">Explore All</span>
                <MaterialIcon name="arrow_forward" className="text-lg" />
              </Link>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-stack-lg">
            {featuredPosts.map((post, idx) => (
              <AnimateOnScroll key={post.id} animation="fadeInUp" delay={idx * 0.1}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="luxury-card group overflow-hidden rounded-xl border border-luxe-gold/20 hover:border-luxe-gold/50 hover:shadow-luxury-lg transition-all flex flex-col h-full"
                >
                  {/* Image Container */}
                  <div className="h-56 relative overflow-hidden bg-luxe-light">
                    <img
                      src={post.image}
                      alt={post.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Category Badge */}
                    <span className="absolute top-4 left-4 px-4 py-2 bg-luxe-black/85 backdrop-blur text-luxe-cream text-xs font-bold tracking-widest uppercase rounded-full">
                      {post.category}
                    </span>
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-luxe-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-7 flex flex-col flex-grow">
                    {/* Date & Read Time */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <MaterialIcon name="calendar_today" className="text-luxe-gold text-sm" />
                        <time className="font-sans text-xs text-luxe-grey font-medium tracking-wide">{post.date}</time>
                      </div>
                      <span className="font-sans text-xs text-luxe-grey/70">{post.readTime}</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-headline-sm text-luxe-black mb-3 line-clamp-2 group-hover:text-luxe-gold transition-colors duration-300 leading-tight">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="font-sans text-luxe-grey text-body-md mb-6 flex-grow line-clamp-2">
                      {post.excerpt}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center gap-2 pt-4 border-t border-luxe-gold/10">
                      <span className="text-luxe-gold font-semibold text-sm group-hover:gap-2 transition-all flex items-center gap-1 tracking-wide group-hover:translate-x-1">
                        Read Article
                      </span>
                      <MaterialIcon name="arrow_forward" className="text-luxe-gold text-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>

          <div className="md:hidden text-center mt-stack-lg">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-luxe-gold text-luxe-gold font-sans font-semibold text-sm rounded-lg hover:bg-luxe-gold/5 transition-all tracking-wide"
            >
              <MaterialIcon name="article" className="text-lg" />
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Luxury Final CTA */}
      <CTABanner />
    </>
  )
}
