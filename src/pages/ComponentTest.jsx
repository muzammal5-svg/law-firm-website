import MultiStepLeadForm from '../components/forms/MultiStepLeadForm'
import PageMeta from '../components/ui/PageMeta'

export default function ComponentTest() {
  const handleSuccess = (data) => {
    console.log('Form submitted successfully:', data)
    alert('Form submitted! Check console for data.')
  }

  return (
    <>
      <PageMeta
        title="Component Test"
        description="Testing Phase 1 components"
      />

      <div className="py-stack-lg px-margin-mobile md:px-margin-desktop bg-luxe-cream">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-display-lg-mobile md:text-display-sm text-luxe-black mb-4">
            Phase 1 Components Test
          </h1>
          <p className="font-sans text-body-lg text-luxe-grey mb-stack-lg">
            This page tests all Phase 1 components. Check the following:
          </p>

          <div className="bg-white p-6 rounded-lg border border-luxe-gold/30 mb-stack-lg">
            <h2 className="font-serif text-headline-sm text-luxe-black mb-4">
              Test Checklist
            </h2>
            <ul className="space-y-2 font-sans text-body-md">
              <li>✓ Multi-Step Lead Form below (3 steps)</li>
              <li>✓ WhatsApp floating button (bottom-right, shows after scrolling)</li>
              <li>✓ Cookie consent banner (shows 1 second after load)</li>
              <li>✓ GTM tracking initialized (check console)</li>
              <li>✓ Form submission fires conversion event (check console)</li>
            </ul>
          </div>

          <h2 className="font-serif text-headline-md text-luxe-black mb-6">
            Multi-Step Lead Form
          </h2>

          <MultiStepLeadForm 
            onSuccess={handleSuccess}
            className="mb-stack-lg"
          />

          <div className="bg-luxe-light p-6 rounded-lg border border-luxe-gold/30">
            <h3 className="font-serif text-headline-sm text-luxe-black mb-4">
              Notes
            </h3>
            <ul className="space-y-2 font-sans text-body-sm text-luxe-grey">
              <li>• Form submission will fail without real Web3Forms key (expected)</li>
              <li>• Scroll down to see WhatsApp button appear</li>
              <li>• Accept cookies to see GTM initialize in console</li>
              <li>• WhatsApp number is PLACEHOLDER: +923323055502</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
