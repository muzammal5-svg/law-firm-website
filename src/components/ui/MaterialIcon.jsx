/**
 * Renders a Material Symbols Outlined icon
 * @param {string} name - The icon name (e.g., 'gavel', 'chat')
 * @param {string} className - Additional CSS classes
 * @param {boolean} filled - Whether to fill the icon
 */
export default function MaterialIcon({ name, className = '', filled = false }) {
  const style = filled ? { fontVariationSettings: "'FILL' 1" } : {}
  
  return (
    <span 
      className={`material-symbols-outlined ${className}`}
      style={style}
    >
      {name}
    </span>
  )
}
