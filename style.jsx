{/**
=====================================================================
Portfolio Design Guide (Frontend Dev) — Colors, Fonts, Style
=====================================================================

🎨 Color Palette
----------------
Light Mode:
- Primary:   #2563EB  // Trustworthy modern blue
- Secondary: #FACC15  // Energetic yellow accents
- Background:#F9FAFB  // Soft near-white
- Text:      #111827  // High readability dark gray
- Accent:    #10B981  // Green for highlights/CTAs

Dark Mode:
- Primary:   #60A5FA  // Lighter blue for contrast
- Secondary: #FCD34D  // Warm yellow balance
- Background:#111827  // Near-black slate
- Text:      #E5E7EB  // Comfortable light gray
- Accent:    #34D399  // Green CTA on dark backgrounds


🔤 Fonts (Google Fonts)
-----------------------
Headings:
- Poppins     → https://fonts.google.com/specimen/Poppins
- Montserrat  → https://fonts.google.com/specimen/Montserrat

Body Text:
- Inter       → https://fonts.google.com/specimen/Inter
- Roboto      → https://fonts.google.com/specimen/Roboto

Suggested pairing:
- H1–H3: Poppins (600–800)
- Body:  Inter (400–500)
- Line-height: 1.6 body / 1.2–1.3 headings


✨ Style Suggestions
-------------------
- Hero uses subtle gradient (e.g., 180deg: #1E3A8A → #2563EB).
- Buttons: focus-visible ring, hover: scale(1.02) + soft shadow.
- Use framer-motion for smooth enter transitions (fade+slide 12–16px).
- Keep Primary color for links & main CTAs. Secondary only for highlights.
- Spacing system: 8px scale (8/16/24/32/48).
- Card UI: rounded-2xl, shadow-sm light; shadow-md dark.
- Max content width: 1152–1280px; h1 ~ clamp(2.2rem, 2.5vw, 3rem).
- Use 3–4 accent colors max; maintain accessible contrast (WCAG AA).


🧩 Tailwind Quick Tokens (optional)
-----------------------------------
Light:
  bg:   bg-gray-50
  text: text-gray-900
  primary: text-blue-600 / bg-blue-600
  accent:  text-emerald-500 / bg-emerald-500
Dark:
  bg:   dark:bg-gray-900
  text: dark:text-gray-200
  primary: dark:text-blue-300 / dark:bg-blue-400
  accent:  dark:text-emerald-300 / dark:bg-emerald-400

=====================================================================
*/}