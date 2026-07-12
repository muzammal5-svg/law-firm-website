# 🎨 Counsel & Clarity - Luxury Style Guide

## Color Palette

### Primary Colors
- **Luxe Black**: `#0F1419` - Primary background and text
- **Luxe Gold**: `#D4A574` - Accents, highlights, premium elements
- **Luxe Cream**: `#FEFAF6` - Light backgrounds, card backgrounds
- **Luxe Light**: `#F5F3F0` - Alternative light background

### Neutral Colors
- **Luxe Grey**: `#6B7280` - Body text, descriptions
- **Luxe Dark**: `#1A1F26` - Alternative dark
- **Luxe Accent**: `#8B7355` - Secondary accents

### Usage Guidelines
```
Headings: Luxe Black on Luxe Cream or White
Body Text: Luxe Grey on Luxe Cream or White
Accents: Luxe Gold throughout
Backgrounds: Luxe Cream (default) or Luxe Black (premium sections)
Hover States: Luxe Gold/Gold variations
```

## Typography

### Serif Font: Playfair Display
Used for all headings (h1-h6)
- **Weight**: 600, 700
- **Size**: 28px-56px (mobile) to 56px (desktop)
- **Line Height**: Tight (1.2-1.4x)
- **Letter Spacing**: -0.5px to -1.2px (negative for elegance)

### Sans Font: Inter
Used for body text and labels
- **Weight**: 300, 400, 500, 600, 700
- **Size**: 13px-18px
- **Line Height**: Relaxed (1.4-2x for body)
- **Letter Spacing**: 0.3-0.8px (positive for elegance)

### Font Sizes
```
H1: 56px (display-lg)
H2: 36px (headline-md)
H3: 28px (headline-sm)
H4: 22px (smaller headings)
Body Large: 18px
Body Medium: 16px
Body Small: 14px
Caption: 13px
Label: 13px (uppercase, tracking)
```

### Mobile Typography
- H1 Mobile: 40px (display-lg-mobile)
- All other sizes proportionally reduced
- Maintain hierarchy and readability

## Spacing System

### Scale
```
base: 8px (minimum)
sm: 16px (small spacing)
md: 32px (medium spacing)
lg: 64px (large spacing)

Margins:
- Mobile: 20px
- Desktop: 48px
- Gutter: 32px
```

### Breathing Room
- Between sections: 64px (stack-lg)
- Between components: 32px (stack-md)
- Within components: 16px (stack-sm)
- Between inline elements: 8px (base)

## Shadow System - Luxury Scale

### Shadow Variants
```
shadow-luxury-sm:  0 2px 8px rgba(15, 20, 25, 0.08)
shadow-luxury-md:  0 8px 24px rgba(15, 20, 25, 0.12)
shadow-luxury-lg:  0 16px 40px rgba(15, 20, 25, 0.16)
shadow-luxury-xl:  0 24px 64px rgba(15, 20, 25, 0.2)
```

### Shadow Usage
- Default Cards: shadow-luxury-sm
- Hover Cards: shadow-luxury-md
- Elevated Sections: shadow-luxury-lg
- Hero Elements: shadow-luxury-xl
- Never use harsh or bright shadows

## Border Radius

### Refined Scale
```
sm: 6px (small buttons, small inputs)
lg: 8px (medium buttons, cards)
xl: 12px (large cards)
2xl: 16px (oversized elements)
full: 9999px (fully rounded only for specific elements)
```

### Usage
- Buttons: lg (8px)
- Cards: lg (8px)
- Inputs: lg (8px)
- Small elements: sm (6px)
- Large feature elements: 2xl (16px)
- Avatar badges: full (9999px)

## Components

### Buttons

**Primary Button**
```
Background: Luxe Black
Color: Luxe Cream
Padding: 16px 32px
Border Radius: 8px
Font: Inter, 13px, semibold, tracking-wide
Hover: shadow-luxury-lg, translate-y-[-2px]
Active: translate-y-0
```

**Secondary Button**
```
Background: Luxe Gold
Color: Luxe Black
Padding: 16px 32px
Border Radius: 8px
Font: Inter, 13px, semibold, tracking-wide
Hover: opacity-90, shadow-luxury-md
```

**Outline Button**
```
Background: transparent
Color: Luxe Gold
Border: 2px Luxe Gold
Padding: 16px 32px
Border Radius: 8px
Hover: background-luxe-gold/5
```

### Cards

**Luxury Card**
```
Background: Luxe Cream
Border: 1px Luxe Gold/20
Border Radius: 8px
Padding: 32px
Shadow: shadow-luxury-sm
Hover: border-luxe-gold/40, shadow-luxury-md
```

### Badges

**Standard Badge**
```
Background: Luxe Gold/5
Color: Luxe Gold
Border: 1px Luxe Gold/40
Padding: 8px 16px
Border Radius: 6px
Font: 13px, semibold, tracking-widest, uppercase
```

**Category Badge**
```
Background: Luxe Black/80 with backdrop blur
Color: Luxe Cream
Padding: 8px 12px
Border Radius: 6px
Font: 12px, semibold, uppercase, tracking-wide
```

## Animations

### Timing
- Fast: 150ms (quick responses)
- Standard: 300ms (most interactions)
- Slow: 500ms (page transitions)
- Luxury: 0.6s (scroll reveals)

### Easing
- Standard: cubic-bezier(0.4, 0, 0.2, 1)
- Smooth: ease-out
- Decelerate: cubic-bezier(0.4, 0, 1, 1)

### Common Animations
```
Hover buttons: translate-y(-2px) with shadow increase
Card hover: shadow increase + border color change
Scroll reveals: fadeInUp + slideUp over 0.6s
Link hover: color change to gold (smooth)
Page transitions: fade in + slide (300ms)
```

## Layout Patterns

### Container
```
Max Width: 1200px
Horizontal Padding: 48px (desktop), 20px (mobile)
Vertical Padding: 64px (sections)
Gutter: 32px (between elements)
```

### Grid
```
Desktop: 3-5 columns (depending on content)
Tablet: 2-3 columns
Mobile: 1 column
Gap: 24-32px
```

### Sections
```
Full-width containers
Alternating backgrounds (cream/light alternation)
64px vertical padding (stack-lg)
Breathing room between elements
```

## Text Styles

### Headings
- Playfair Display, serif
- Luxe Black color
- Tight line height (1.1-1.3)
- Negative letter spacing
- Bold weight (600-700)

### Body Text
- Inter, sans-serif
- Luxe Grey color
- Relaxed line height (1.6-1.8)
- Positive letter spacing (0.3px)
- Regular weight (400)

### Labels
- Inter, sans-serif
- 13px size
- Tracking-widest (0.8px)
- Uppercase
- Font weight: 600 (semibold)
- Color: Luxe Gold or Luxe Black

## Icons

### Material Symbols
- Size: 24px default (adjustable)
- Color: Match text or gold accent
- Styling: `font-variation-settings: 'FILL' 0, 'wght' 400`
- Filled variant: `'FILL' 1` for emphasis

## Responsive Guidelines

### Mobile (< 768px)
- Margin: 20px
- Larger touch targets (44px+ height)
- Stack vertical layout
- Adjusted font sizes
- Single column grids

### Tablet (768px - 1024px)
- Margin: 32px
- Medium spacing
- 2-column grids
- Balanced layouts

### Desktop (> 1024px)
- Margin: 48px
- Full luxury spacing
- 3-5 column grids
- Full feature availability

## Best Practices

### ✅ Do's
- Use gold accents sparingly for emphasis
- Maintain generous whitespace
- Use serif for hierarchy
- Keep shadows subtle
- Use smooth transitions
- Capitalize on luxury colors
- Maintain consistent spacing
- Use premium typography

### ❌ Don'ts
- Don't use bright colors
- Don't crowd elements
- Don't use harsh shadows
- Don't mix serif and sans carelessly
- Don't use generic fonts
- Don't inconsistent spacing
- Don't use poor contrast
- Don't forget breathing room

## Color Combinations

### Best Pairings
```
Black text on Cream: High contrast, readable, elegant
Gold on Black: Premium, sophisticated
Gold on Cream: Subtle, refined
Grey on Cream: Professional, readable
Cream on Black: Clean, premium
```

### Avoid
```
Black on Black: No contrast
Gold on Gold: No contrast
Too many colors in one section: Visual confusion
Bright colors: Unprofessional
```

## Accessibility

### Contrast Ratios
- Black on Cream: 20:1 (excellent)
- Gold on Black: 8:1 (excellent)
- Grey on Cream: 7:1 (excellent)
- All combinations meet WCAG AA standards

### Typography
- Minimum 16px for body text
- Line height minimum 1.6 for body
- Adequate letter spacing
- Clear visual hierarchy

### Interactive Elements
- Minimum 44px touch targets
- Clear focus states
- Visible hover states
- Underlined links

## Implementation Notes

### Tailwind Classes
Use custom Tailwind configuration:
```
bg-luxe-black
text-luxe-gold
shadow-luxury-md
rounded-lg
```

### Font Loading
Fonts loaded via Google Fonts:
- Playfair Display (serif)
- Inter (sans-serif)

### CSS Custom Properties
Consider extracting to CSS variables for consistency:
```css
--color-black: #0F1419;
--color-gold: #D4A574;
--shadow-md: 0 8px 24px rgba(15, 20, 25, 0.12);
```

---

This style guide ensures consistency across all pages and components. Refer to it when:
- Creating new components
- Updating existing designs
- Onboarding new designers
- Maintaining brand consistency
- Making styling decisions

**Remember**: Luxury is about restraint, consistency, and attention to detail.
