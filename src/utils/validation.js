/** Form validation helpers */

export function validateEmail(email) {
  if (!email?.trim()) return 'Email is required'
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!re.test(email)) return 'Please enter a valid email address'
  return ''
}

export function validatePhone(phone) {
  if (!phone?.trim()) return 'Phone number is required'
  const cleaned = phone.replace(/[\s\-().+]/g, '')
  if (!/^\+?\d{10,15}$/.test(cleaned)) return 'Please enter a valid phone number'
  return ''
}

export function validateRequired(value, fieldName = 'This field') {
  if (!value?.trim()) return `${fieldName} is required`
  return ''
}

export function validateContactForm(data) {
  const errors = {}
  const nameErr = validateRequired(data.name, 'Full name')
  if (nameErr) errors.name = nameErr

  const emailErr = validateEmail(data.email)
  if (emailErr) errors.email = emailErr

  const phoneErr = validatePhone(data.phone)
  if (phoneErr) errors.phone = phoneErr

  const messageErr = validateRequired(data.message, 'Message')
  if (messageErr) errors.message = messageErr

  return errors
}

export function validateConsultationForm(data) {
  const errors = {}
  const nameErr = validateRequired(data.name, 'Full name')
  if (nameErr) errors.name = nameErr

  const phoneErr = validatePhone(data.phone)
  if (phoneErr) errors.phone = phoneErr

  if (!data.date) errors.date = 'Please select a date'
  if (!data.time) errors.time = 'Please select a time'

  return errors
}
