# The Design System

This document outlines a high-end, editorial-inspired design system for a premium seafood grill and bar experience. It blends the raw, tactile nature of a backyard grill with a sophisticated, modern digital interface.

## 1. Overview & Creative North Star

**Creative North Star: "The Elevated Hearth"**
The design system moves away from generic "restaurant template" layouts. Instead, it positions the brand as a curated culinary destination. The visual language balances **Rustic Tonal Depth** (earthy, dark backgrounds) with **Modern Precision** (refined typography and clean glass elements). 

The system breaks the traditional rigid grid through:
*   **Intentional Asymmetry:** Off-center content placement and staggered image galleries that mimic the organic layout of a high-end lifestyle magazine.
*   **Tonal Layering:** Replacing harsh dividers with subtle shifts in dark, earthy hues to create natural containment.
*   **High-Contrast Scale:** Dramatically oversized serif headings paired with tight, utilitarian sans-serif labels.

---

## 2. Colors

The palette is rooted in the "backyard" experience—charcoal, glowing embers, and fresh coastal accents.

### Color Tokens
*   **Primary (`#ffb868`):** The "Ember Glow." Used for high-priority calls to action.
*   **Primary Container (`#d98b22`):** A warm, toasted orange for prominent interactive backgrounds.
*   **Secondary (`#7dd5d9`):** The "Coastal Teal." A fresh, high-quality accent used sparingly to highlight seafood freshness.
*   **Surface (`#1f0f09`):** The "Charred Oak." The base for the dark-mode aesthetic.
*   **Tertiary (`#ffb5a0`):** The "Seared Clay." A soft accent for secondary notifications or labels.

### Core Visual Principles
*   **The "No-Line" Rule:** 1px solid borders are strictly prohibited for sectioning. Boundaries must be defined solely through background color shifts. For example, a `surface-container-low` section should sit against a `surface` background to create a "soft edge."
*   **Surface Hierarchy & Nesting:** Treat the UI as physical layers. Use the `surface-container` tiers (Lowest to Highest) to create depth. A card (`surface-container-highest`) nested inside a section (`surface-container-low`) provides natural visual prominence without clutter.
*   **The "Glass & Gradient" Rule:** To provide "soul," utilize subtle gradients (e.g., `primary` to `primary-container`) on hero buttons. For floating navigation or modals, use Glassmorphism (semi-transparent surface colors with a `backdrop-blur` of 12px–20px).

---

## 3. Typography

The typography strategy pairs the heritage of a serif with the modern efficiency of a clean sans-serif.

*   **Display & Headlines (`notoSerif`):** Bold, friendly, and authoritative. Used to create "Editorial Moments." Large scales (`display-lg` at 3.5rem) should be used for hero sections to convey a high-end, welcoming feel.
*   **Titles & Body (`plusJakartaSans`):** Clean and highly readable. Used for all functional information. It provides a modern counterpoint to the traditional serif headings.
*   **Labels (`plusJakartaSans`):** Small, uppercase, and slightly letter-spaced. These serve as "Metadata" for menus, prices, and tags, adding a layer of professional polish.

---

## 4. Elevation & Depth

We convey hierarchy through **Tonal Layering** rather than traditional structural lines or heavy shadows.

*   **The Layering Principle:** Stacking surface-container tiers. Place a `surface-container-lowest` card on a `surface-container-low` section to create a soft, natural "lift."
*   **Ambient Shadows:** When a "floating" effect is necessary (e.g., for a mobile menu or a featured dish modal), shadows must be extra-diffused. Use a blur of `24px-48px` with a `4%-8%` opacity, tinted with the `on-surface` color.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility, use the `outline-variant` token at **10% opacity**. Never use 100% opaque, high-contrast borders.
*   **Glassmorphism:** Use semi-transparent surface colors (`#1F0F0980`) with backdrop blur to create a "frosted" effect. This integrates the UI components into the environment rather than making them look "pasted on."

---

## 5. Components

### Buttons
*   **Primary:** High prominence with `primary` background and `on-primary` text. Use maximum (`3`) roundedness for a friendly, approachable feel.
*   **Secondary:** `surface-container-highest` background with `on-surface` text. These should feel like part of the background.
*   **Iconography:** Every button should feature a clear, functional icon (e.g., a "Chevron" or "Calendar" icon) to increase visual affordance.

### Cards & Lists
*   **Rules:** Forbid the use of divider lines.
*   **Spacing:** Use generous vertical white space (e.g., `spacing-8` or `spacing-12`) to separate items.
*   **Menu Items:** Use a `surface-container-low` background with subtle (`1`) corner radius. Highlight price points using the `primary` color in a `title-md` font size.

### Inputs & Fields
*   **Styling:** Use `surface-container-highest` for the input track. Labels should be `label-md` and placed above the field.
*   **States:** Error states should utilize the `error` (`#ffb4ab`) token for text and a "Ghost Border" of the error color.

### Custom Component: "The Signature Platter" Card
*   A specialized card for featured seafood dishes. It features an image with an asymmetrical crop, a `secondary_container` (Teal) chip for "Fresh Catch" badges, and a glassmorphic overlay for the price.

---

## 6. Do's and Don'ts

### Do's
*   **DO** use plenty of negative space. High-end design requires room to breathe.
*   **DO** use "The Backyard Place" photography as a structural element. Let images overlap across container boundaries.
*   **DO** ensure text contrast against dark surfaces meets WCAG AA standards using the `on-surface` and `on-background` tokens.
*   **DO** use the maximum (`3`) roundedness scale for main CTA buttons to keep the "friendly" brand promise.

### Don'ts
*   **DON'T** use pure black (#000000). Use the `surface` color (#1f0f09) to maintain warmth and depth.
*   **DON'T** use 1px solid lines to separate menu items. Use background shifts or white space.
*   **DON'T** use standard drop shadows. If a shadow is needed, it must be ambient, tinted, and soft.
*   **DON'T** crowd the interface. If the content feels tight, increase the spacing scale to the next tier (e.g., from `spacing-6` to `spacing-10`).