/**
 * Submit form data to Formspree.
 * Set VITE_FORMSPREE_ENDPOINT in .env (e.g. https://formspree.io/f/xxxxxxx)
 */
export async function submitToFormspree(formData, formType = 'contact') {
  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT

  if (!endpoint) {
    // Demo mode: simulate successful submission when no endpoint configured
    await new Promise((resolve) => setTimeout(resolve, 1500))
    return { ok: true, demo: true }
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      ...formData,
      _subject: `Counsel & Clarity - ${formType} form submission`,
      formType,
    }),
  })

  if (!response.ok) {
    const data = await response.json().catch(() => ({}))
    throw new Error(data.error || 'Failed to submit form. Please try again.')
  }

  return response.json()
}
