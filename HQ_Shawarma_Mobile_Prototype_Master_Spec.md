# HQ Shawarma — Premium Mobile Prototype Master Specification

## Purpose

Build a polished, high-fidelity **mobile-only restaurant ordering and discovery prototype** for **HQ Shawarma – Susan Road, Faisalabad**.

This document is the master product, business, UI/UX, interaction, and visual specification for implementing the prototype in Claude Opus 5 or another capable frontend prototyping environment.

The result should feel like a **real premium restaurant product**, not a landing-page template, generic SaaS UI, AI-generated mockup, or portfolio concept.

The prototype should be sufficiently detailed that a developer/designer can implement it without inventing the core UX logic.

---

# 1. Business Context

HQ Shawarma already has demand through third-party food ordering. The purpose of this product is **not to replace Foodpanda** and not to claim that a website automatically creates orders.

The website becomes HQ Shawarma's own digital destination where customers can:

- discover the restaurant
- understand the menu
- see prices
- view food clearly
- evaluate products
- add products to a cart
- initiate a direct WhatsApp order
- call the restaurant
- continue through Foodpanda
- get directions
- view selected social proof

The source business report explicitly frames the opportunity as creating an HQ-owned digital channel while keeping Foodpanda alongside the website.

Source framing:

> “The website's purpose is ... to make HQ Shawarma's own digital channel.”

The intended journey is:

```text
Google / Instagram / Referral / Existing Customer
                    ↓
             HQ Shawarma Website
                    ↓
        Discover → Browse → Evaluate
                    ↓
           Add to Cart / Direct Order
                    ↓
       WhatsApp / Call / Foodpanda
                    ↓
                HQ Shawarma
```

---

# 2. Product Goal

## Primary product goal

Make it extremely easy for a hungry mobile customer to go from:

**“I found HQ Shawarma.”**

→ **“I know what they sell.”**

→ **“I found something I want.”**

→ **“I know the price.”**

→ **“I trust the business.”**

→ **“I can order in seconds.”**

## Secondary goals

- strengthen brand perception
- make the menu easier to understand than a static image/PDF
- create a direct customer channel
- make WhatsApp ordering frictionless
- preserve Foodpanda as an alternative conversion path
- make mobile calling and directions immediate
- create a reusable digital foundation for future enhancements

---

# 3. Prototype Scope

## Platform

**Mobile web only.**

Design specifically for smartphone portrait layouts.

Recommended design range:

- 320px minimum conceptual support
- 360px primary baseline
- 390px primary design target
- 430px upper mobile reference

Do **not** design desktop, laptop, tablet, or wide-screen layouts during this phase.

Do not create desktop navigation, desktop grids, desktop hero compositions, desktop-specific interactions, or tablet adaptations.

Larger responsive layouts will be designed in a separate phase.

---

# 4. Prototype Pages

The prototype should contain the following primary routes/screens:

```text
/
  Home

/menu
  Menu

/menu/:category
  Category-filtered Menu

/product/:id
  Product Detail

/cart
  Cart

/reviews
  Reviews / Social Proof

/contact
  Contact / Location
```

Important:

The prototype can use a single-page-app navigation model with animated route transitions, but each page should still have a clear product purpose.

---

# 5. Core Navigation Model

## Mobile Header

The default top navigation should contain:

**Left:** HQ Shawarma logo/wordmark

**Right:** cart icon with item count badge

Depending on the route, optionally show a back button.

Do not use a large desktop-style navigation bar.

### Header behavior

At the top of the page:

- compact
- clean
- visually branded
- sticky where helpful
- slightly translucent or elevated after scroll if consistent with visual design

On scroll:

- header can become slightly more compact
- preserve logo recognition
- cart remains easy to reach
- avoid distracting motion

### Cart badge

Show only when cart contains items.

Example:

```text
[Bag icon] 2
```

Badge should update immediately when quantity changes.

---

# 6. Persistent Conversion Layer

The product should have an obvious conversion strategy without becoming visually aggressive.

Primary actions:

1. **Add to Cart**
2. **Order on WhatsApp**
3. **Call Now**
4. **Order via Foodpanda**
5. **Get Directions**

### CTA hierarchy

Primary:

- Order Now
- Add to Cart
- Order on WhatsApp

Secondary:

- View Menu
- Foodpanda
- Call
- Directions

Tertiary:

- View Details
- See Reviews
- Browse Category

Do not make every button look equally important.

---

# 7. Hybrid Ordering Strategy

Use both:

## A. Direct WhatsApp ordering

Customer can directly order a product without building a large cart if desired.

Example:

```text
Product Detail
     ↓
Order on WhatsApp
     ↓
WhatsApp opens with prefilled message
```

Example prefilled order message:

```text
Assalam o Alaikum, I would like to order:

1 × Chicken Cheese Shawarma

Total: Rs. 450

Please confirm my order.
```

The exact final wording can be refined during implementation.

## B. Cart flow

Customer can add multiple items:

```text
Menu
 ↓
Add Item
 ↓
Cart
 ↓
Adjust Quantity
 ↓
Review Order
 ↓
Order on WhatsApp
```

This gives the prototype realistic product behavior without requiring a backend checkout system.

## C. Foodpanda handoff

Foodpanda is an alternate order channel.

Do not represent it as a competing experience inside the site.

Use clear language such as:

**Prefer Foodpanda? Order there.**

Then hand off to Foodpanda.

---

# 8. HOME PAGE

The Home page is the primary sales/conversion screen.

Its job is not to explain everything about HQ Shawarma.

Its job is to make the customer hungry and move them toward food selection.

## Section 1 — Hero

### Layout

Mobile composition:

```text
Top Header

[Large food image / food-focused visual]

HQ SHAWARMA
Bold supporting line
Short supporting copy

[Order Now]
[View Menu]
```

### Content direction

Use concise restaurant copy.

Avoid generic AI phrases such as:

- “Experience the ultimate taste sensation”
- “Where flavor meets passion”
- “A culinary journey like no other”

Copy should sound like a real local restaurant.

Preferred tone:

- direct
- confident
- appetizing
- local
- uncomplicated

### Hero interaction

On page load:

- food visual fades/slides into position very subtly
- headline enters with short upward movement
- CTA follows

Do not use dramatic parallax or excessive animation.

Hero CTA:

**Order Now** → opens Menu or scrolls to menu preview.

Secondary CTA:

**View Menu** → `/menu`

---

## Section 2 — Popular Right Now

Display selected high-priority food items.

Example:

```text
Popular Right Now

[Image]
Chicken Cheese Shawarma
Rs. XXX
[+]

[Image]
Zinger Shawarma
Rs. XXX
[+]
```

Cards should feel like food-product cards, not SaaS cards.

Each card:

- strong image
- product name
- price
- brief description only where useful
- add button
- tap card → product detail

### Add interaction

When user taps +:

1. item is added to cart
2. micro-animation confirms action
3. cart badge increments
4. optional compact “Added to cart” feedback appears
5. card does not jump or shift layout

---

## Section 3 — Explore Menu

Use categories:

- Shawarma
- Paratha Rolls
- Burgers
- Platters

The report identifies these as core menu groupings.

### Interaction

Tap category → navigate/filter Menu.

Use a visually differentiated horizontal category selector or compact category tiles.

Avoid oversized category blocks that consume the whole screen.

---

## Section 4 — Featured Food / Signature Moment

One visually strong promotional/product section.

Purpose:

**Create appetite and brand memory.**

Do not turn it into a rotating carousel unless there is a genuine business reason.

A single strong featured item is preferable.

---

## Section 5 — Why HQ

Keep this short.

Possible structure:

```text
Made for hungry moments.

Bold food.
Clear menu.
Easy ordering.

[3 compact visual/value points]
```

Do not invent unsupported certifications or claims.

Do not make claims such as:

- best in Faisalabad
- #1 shawarma
- fastest delivery
- guaranteed quality

unless verified by the client.

---

## Section 6 — Social Proof

Show 2–4 selected positive reviews.

Card structure:

```text
★★★★★
“Short review...”

Customer Name
```

Include a **See All Reviews** link.

Do not manufacture testimonials and present them as authentic.

For prototype purposes, clearly treat placeholder/sample content as replaceable production content.

---

## Section 7 — Location

Compact but useful:

**HQ Shawarma — Susan Road**

Location context

[Get Directions]
[Call]

Use an actual map embed only when appropriate for implementation. In the prototype, a restrained map card or location preview is sufficient.

---

## Section 8 — Final CTA

Large, visually confident closing section.

```text
Hungry?

Order your favorites from HQ Shawarma.

[Order on WhatsApp]
```

Secondary option:

**View Menu**

---

# 9. MENU PAGE

The Menu page is the central product catalogue.

## Header

```text
←
Menu

Your favorites, ready to order.
```

Optional small search icon if the menu becomes large.

Do not add search simply because modern websites have search.

---

## Category selector

Horizontal scroll category tabs:

```text
All | Shawarma | Rolls | Burgers | Platters
```

Active state should be highly visible but refined.

Interaction:

- tap category
- content filters smoothly
- active tab changes
- preserve scroll context where useful

No hard page reload.

---

## Menu item cards

Recommended mobile arrangement:

**2-column compact grid for browsing where readability allows**, with a larger single-item layout used for items that need richer descriptions.

Each product card:

```text
[Food Image]

Chicken Cheese Shawarma
Short description
Rs. XXX

[＋]
```

### Card states

Default:

- clean
- image-led
- clear price

Pressed:

- subtle scale or elevation response

Added:

- add button changes temporarily to confirmation state
- cart count updates immediately

Out-of-stock state if needed later:

- muted image
- “Unavailable” label
- disabled action

Do not make out-of-stock part of the initial happy-path demo unless required.

---

# 10. PRODUCT DETAIL PAGE

This should feel like the premium product detail experience.

## Structure

```text
←

[Large product image]

Chicken Cheese Shawarma
★★★★★ optional rating

Rs. XXX

Short product description.

Optional modifiers

Quantity
[-] 1 [+]

[Add to Cart]

[Order on WhatsApp]
```

### Image behavior

Use a large edge-to-edge or near-edge-to-edge image block.

Image should visually dominate without overwhelming the mobile viewport.

### Product description

Keep concise.

Do not create long restaurant copy.

### Add to Cart

Primary button.

On tap:

- quantity/cart updates
- button gives visual confirmation
- cart badge changes
- optional bottom toast/snackbar appears

### Direct WhatsApp

Secondary-high-priority button.

It should order the current item directly.

Example:

```text
Order on WhatsApp
```

This is intentionally available even when the user does not use the cart.

---

# 11. CART PAGE

The cart is essential because the prototype supports multiple items.

## Empty Cart

```text
Your cart is empty.

Looks like you haven't picked anything yet.

[Explore Menu]
```

Avoid overly cute or generic copy.

## Populated Cart

```text
Your Order

Chicken Cheese Shawarma        1    Rs. XXX
Zinger Shawarma                2    Rs. XXX

Subtotal                       Rs. XXX

[Order on WhatsApp]

or

[Order via Foodpanda]
```

### Quantity controls

Each item:

`−  1  +`

Quantity updates instantly.

If quantity reaches zero:

- item is removed
- subtle confirmation if useful
- subtotal recalculates

### Total

For this prototype, use:

- subtotal
- total

Do not invent delivery fees or taxes unless actual business data is provided.

If delivery/payment rules are unknown, label the prototype clearly and keep the logic limited to known information.

---

# 12. WHATSAPP ORDER HANDOFF

This is a major conversion interaction.

## Cart → WhatsApp

When customer taps:

**Order on WhatsApp**

The prototype should generate a realistic prefilled message.

Example:

```text
Assalam o Alaikum, I would like to order from HQ Shawarma:

1 × Chicken Cheese Shawarma — Rs. XXX
2 × Zinger Shawarma — Rs. XXX

Total: Rs. XXXX

Please confirm my order.
```

Do not claim that payment or delivery is confirmed by the website.

The website only hands the order conversation to WhatsApp.

### UX feedback

Before handoff, optionally show a compact bottom sheet:

```text
Ready to order?

Your order will open in WhatsApp.

[Continue to WhatsApp]
[Go Back]
```

This gives the customer confidence that the website is transferring them externally.

---

# 13. FOODPANDA HANDOFF

Foodpanda should be positioned as an alternate channel.

Example:

```text
Prefer Foodpanda?

[Order on Foodpanda]
```

Use a subtle but recognizable treatment without allowing the third-party brand to visually overpower HQ Shawarma.

The report explicitly recommends coexistence rather than replacement.

---

# 14. REVIEWS PAGE

## Goal

Strengthen confidence without making the site look like a testimonial generator.

### Layout

```text
Reviews

What customers are saying

[Rating summary if verified]

[Review]
[Review]
[Review]
```

Use authentic review content only when provided/verified.

If using prototype placeholder reviews:

- structure them realistically
- label internally as placeholder data
- replace before production

### Interaction

Optional:

**Read more** expands long reviews.

Do not build a complicated review submission system for this prototype.

---

# 15. CONTACT PAGE

## Structure

```text
Contact HQ

Need help ordering?

[WhatsApp]
[Call Now]

Visit us

Susan Road, Faisalabad

[Get Directions]

[Map preview]
```

### Mobile behavior

Phone number should be `tel:` actionable.

WhatsApp should open WhatsApp.

Directions should open the relevant map/directions destination.

These are genuine mobile utility actions, not decorative buttons.

---

# 16. COMPONENT SYSTEM

Build a small reusable component library rather than designing every element separately.

Recommended components:

- MobileHeader
- BackButton
- CartButton
- CartBadge
- PrimaryButton
- SecondaryButton
- TextButton
- FoodCard
- FoodGrid
- CategoryTabs
- ProductHero
- QuantityStepper
- PriceDisplay
- ReviewCard
- LocationCard
- CTASection
- Toast / Snackbar
- BottomSheet
- EmptyState
- SectionHeader
- Divider
- IconButton

All components should share:

- radius system
- spacing scale
- type scale
- shadow system
- interaction states
- icon sizing

Do not create 30 visually unrelated card styles.

---

# 17. DESIGN SYSTEM

## Brand direction

Preserve the recognizable HQ Shawarma visual identity from the available source/reference material.

Do not redesign the business into an unrelated luxury restaurant brand.

However, refine the existing identity into a more sophisticated digital system.

The rule is:

**Existing brand recognition → refined digital execution → premium result.**

If exact brand assets/colors are not available in the implementation context, do not pretend that guessed values are official brand specifications. Instead use a restrained approximation that can later be replaced by the actual brand tokens.

---

# 18. Color System

Use the existing brand colors as the base.

Create:

```text
Primary Brand
Primary Dark
Primary Light
Accent
Background
Surface
Surface Elevated
Text Primary
Text Secondary
Text Muted
Border
Success
Warning
Error
```

### Color rules

The design should not become a rainbow restaurant interface.

Use the strongest brand color strategically:

- primary CTA
- active navigation
- key accents
- important interaction states

Neutral surfaces should carry most of the layout.

Food photography should provide much of the visual richness.

---

# 19. Typography

Typography should feel contemporary and restaurant-appropriate.

Use **one primary family plus an optional display treatment**, not a collection of random fonts.

Recommended hierarchy:

```text
Hero Display
Page Heading
Section Heading
Product Name
Body
Small Body
Caption
Price
Button Label
```

### Requirements

- strong readability on 360–390px widths
- comfortable line-height
- no excessively thin text
- no oversized paragraphs
- clear price hierarchy
- product names should be readable at a glance

Headings can have stronger personality than body text.

Body text should remain highly legible.

Do not use default browser typography.

Do not use typography that resembles an AI-generated template.

---

# 20. Iconography

Use a **real, consistent icon library**.

Recommended options:

- Lucide
- Phosphor
- another professional outline/filled icon system with consistent proportions

Use recognizable icons for:

- shopping bag/cart
- arrow left
- arrow right
- plus
- minus
- phone
- WhatsApp
- location
- star
- search if used
- menu if required
- close

Do not create fake icons from emoji characters.

Do not mix five different icon styles.

Icon strokes, dimensions, and optical alignment must remain consistent.

---

# 21. Border Radius System

Use rounded geometry throughout the interface, but avoid excessive “pill everything” styling.

Recommended conceptual levels:

```text
Small: 8px
Medium: 12px
Large: 16px
XL: 20–24px
Full: reserved for pills/avatar controls
```

Cards should feel soft and premium.

Buttons can use medium/large radii depending on brand style.

Do not make every container a floating pill.

---

# 22. Spacing System

Use a consistent spacing scale.

Conceptually:

```text
4
8
12
16
20
24
32
40
48
64
```

Mobile layouts should prioritize compact density without becoming cramped.

Use larger spacing between major sections and smaller spacing within components.

---

# 23. Food Photography Direction

Food imagery is one of the most important visual assets.

Use:

- close food compositions
- appetizing textures
- realistic lighting
- rich but natural contrast
- shallow depth where appropriate
- clean backgrounds
- consistent crop ratios

Avoid:

- unrealistic AI food images
- excessively glossy fake-looking food
- inconsistent photography styles
- random stock photography
- images with logos/watermarks

All product images should feel like they belong to the same restaurant.

If actual HQ images are available, prefer them.

If prototype images are placeholders, keep crops consistent and clearly replaceable.

---

# 24. Motion Design

Animation should communicate hierarchy and state, not show off.

## Page transition

Use a subtle mobile route transition:

- 180–280ms
- fade + small horizontal/vertical movement
- no exaggerated 3D effects

## Card interactions

Tap:

- subtle scale response or elevation change
- 120–180ms

## Add to cart

When adding:

- icon/button feedback
- cart badge increments
- optional short snackbar

Animation duration:

roughly 150–250ms.

## Category switching

Use a quick content transition.

Avoid entire page reload feeling.

## Bottom sheets

Use:

- slight upward slide
- fade backdrop
- smooth easing

## CTA hover effects

Not relevant for mobile.

Do not design interactions that depend on hover.

## Reduced motion

Respect `prefers-reduced-motion`.

When reduced motion is requested:

- remove nonessential movement
- preserve state feedback
- use simple opacity changes where possible

---

# 25. Micro-interactions

Important micro-interactions include:

### Add to cart

```text
Tap +
 ↓
Button feedback
 ↓
Cart count +1
 ↓
Optional “Added to cart” feedback
```

### Quantity increment

```text
Tap +
 ↓
Number updates instantly
 ↓
Price updates
 ↓
Cart total updates
```

### Quantity decrement

Same principle.

### Empty cart after removal

Transition naturally to the empty-cart state.

### Navigation

Tap should provide immediate feedback; avoid delayed navigation.

### External handoffs

Show clear transition intent when leaving the site for:

- WhatsApp
- Foodpanda
- Maps
- phone call

---

# 26. Button Design

Buttons must clearly communicate importance.

## Primary button

Use for:

- Add to Cart
- Order Now
- Order on WhatsApp

Characteristics:

- strong brand background
- high contrast text
- generous touch target
- visually confident

## Secondary button

Use for:

- View Menu
- Foodpanda
- Directions
- See Reviews

## Text button

Use for:

- View all
- Read more
- Back

Minimum mobile tap target should be comfortable for touch.

---

# 27. Mobile UX Requirements

The application should be engineered around one-handed smartphone use.

### Touch targets

Avoid tiny controls.

Interactive elements should generally have approximately 44px or larger touch areas where practical.

### Bottom reach

Important actions may be placed toward the lower portion of the viewport where it improves usability.

### Sticky CTA

A mobile sticky order/cart action can be used on product and cart screens.

Do not create a permanent sticky bar covering content on every screen.

### Scroll behavior

- smooth but not exaggerated
- preserve position where helpful
- avoid horizontal page overflow
- no accidental sideways scrolling

---

# 28. Accessibility

The premium design must still be usable.

Requirements:

- sufficient text contrast
- readable body text
- meaningful button labels
- semantic HTML
- alt text for food images
- `aria-label` for icon-only buttons
- keyboard accessibility where browser context allows
- reduced-motion support
- focus states for interactive elements

Do not sacrifice accessibility simply to make the prototype look premium.

---

# 29. Content Rules

The site should not feel AI-written.

### Copy style

Use:

- short sentences
- natural restaurant vocabulary
- confident wording
- specific food names
- real prices where known

Avoid:

- excessive adjectives
- marketing clichés
- generic motivational language
- repetitive CTA text
- unnecessary paragraphs

Every content block should earn its screen space.

---

# 30. Real Data Principle

Use the source research as the foundation.

Known business categories include:

- Shawarma
- Paratha Rolls
- Burgers
- Platters

The research lists examples such as:

- Chicken Shawarma
- Chicken Cheese Shawarma
- Zinger Shawarma
- Zinger Cheese Shawarma
- Mixed Chicken Zinger
- Malai Boti
- Tikka Boti
- Grilled Shawarma
- HQ Special

These can populate the prototype where appropriate.

Do not invent unsupported operating details such as:

- delivery radius
- delivery timing
- payment methods
- exact opening hours
- branch count
- tax rates
- delivery fee
- exact ingredients
- allergen claims

unless they are verified during the next research phase.

---

# 31. Product States

Every core interaction should have a visible state.

## Loading

Use elegant skeletons only where simulated loading adds realism.

Do not create long fake loading screens.

## Empty

Cart empty state must look deliberate, not broken.

## Error

Example:

```text
Something went wrong.
Please try again.

[Try Again]
```

## Success

For example:

```text
Added to cart
```

or

```text
Opening WhatsApp…
```

## Disabled

Unavailable actions should look visibly disabled and should not respond as active controls.

---

# 32. Navigation Rules

### Home → Menu

Both:

- Order Now
- View Menu

should lead naturally to Menu.

### Menu → Product

Tap product card.

### Product → Cart

Add to cart.

### Product → WhatsApp

Direct order current product.

### Menu → Cart

Cart icon.

### Cart → WhatsApp

Generate multi-item order message.

### Any product/menu screen → Foodpanda

Provide secondary marketplace action where appropriate.

### Home/Menu/Product → Contact

Use location/contact CTA where relevant.

---

# 33. Recommended Prototype Demo Path

When presenting the prototype to the client, use this flow:

```text
HOME
 ↓
View Menu
 ↓
Shawarma
 ↓
Chicken Cheese Shawarma
 ↓
Add to Cart
 ↓
Back to Menu
 ↓
Add another item
 ↓
Cart
 ↓
Review order
 ↓
Order on WhatsApp
```

Then demonstrate:

```text
Home
 ↓
Contact
 ↓
Call
 ↓
Directions
```

And separately:

```text
Menu
 ↓
Product
 ↓
Order via Foodpanda
```

This demonstrates the complete business proposition without requiring a backend.

---

# 34. Visual Quality Bar

The final prototype should pass these tests:

### Test 1 — Looks like a real business

A restaurant owner should believe this could become the real HQ Shawarma website.

### Test 2 — Does not look AI-generated

Avoid:

- excessive gradients
- random glassmorphism
- oversized floating blobs
- meaningless decorative shapes
- generic “modern startup” layouts
- repetitive rounded cards everywhere
- excessive animations

### Test 3 — Food remains central

The interface should make the food look desirable before it makes the interface look impressive.

### Test 4 — Conversion is obvious

A user should understand how to order without explanation.

### Test 5 — Brand remains recognizable

The design should feel like an upgraded HQ Shawarma, not an unrelated startup.

### Test 6 — Mobile feels intentional

Do not make a desktop website narrower and call it mobile design.

Every spacing, control, image crop and CTA should be designed for the phone first.

---

# 35. Anti-Generic Design Rules

Do not use the following patterns merely because they are common in AI-generated interfaces:

- giant centered headline with three floating cards
- meaningless blobs in the background
- excessive gradient text
- glassmorphism everywhere
- generic purple/blue startup colors
- default Inter typography with no typographic personality
- random statistics such as “10K+ Happy Customers” without evidence
- fake five-star metrics
- invented awards
- fake “fast delivery” claims
- excessive rounded containers
- every section inside a separate colored box
- huge “About Us” section
- stock restaurant slogans
- generic “Order Now” repeated five times with identical styling

The prototype should have editorial restraint.

---

# 36. Premium Design Principle

Premium does not mean adding more decoration.

Premium means:

**Better hierarchy + better photography + better typography + better spacing + stronger interaction states + disciplined color + fewer unnecessary elements.**

The design should look deliberate.

---

# 37. Technical Prototype Guidance

Use a clean component architecture suitable for rapid prototype development.

Suggested conceptual structure:

```text
app/
  home
  menu
  product
  cart
  reviews
  contact

components/
  navigation/
  food/
  cart/
  reviews/
  location/
  ui/

lib/
  menu-data
  cart-state
  whatsapp-order
```

The exact framework structure can be chosen by the implementation environment.

The prototype should use local mock data for menu content unless a backend/API is explicitly added later.

Persist cart state during the session.

---

# 38. Cart State Logic

Minimum state model:

```text
cartItems[]

item:
  id
  name
  price
  image
  quantity
```

Derived values:

```text
itemCount
subtotal
```

Actions:

```text
addItem()
removeItem()
incrementQuantity()
decrementQuantity()
clearCart()
```

Prevent duplicate visual product rows when the same item is added repeatedly.

Increase quantity instead.

---

# 39. WhatsApp Message Logic

For a single product:

```text
1 × Product Name — Rs. XXX
```

For cart:

```text
1 × Product A — Rs. XXX
2 × Product B — Rs. XXX

Total: Rs. XXXX
```

Encode the URL correctly before opening WhatsApp.

The prototype should simulate realistic message generation.

Do not pretend the restaurant system has received or accepted the order before the customer actually sends the message.

---

# 40. Final Footer

Compact mobile footer:

```text
HQ SHAWARMA
Susan Road, Faisalabad

WhatsApp | Call | Directions

Foodpanda

© HQ Shawarma
```

Do not fill the footer with unnecessary navigation links.

---

# 41. Final Implementation Instruction to Claude Opus 5

Build the prototype according to this document as a **high-fidelity mobile-first production-style web experience**.

Do not produce a wireframe.

Do not produce a generic template.

Do not simplify the interaction model.

Do not remove the cart.

Do not remove direct WhatsApp ordering.

Do not remove Foodpanda as a parallel channel.

Do not design desktop layouts yet.

Do not use placeholder-style visual hierarchy where a premium layout can be implemented directly.

Prioritize:

1. visual polish
2. realistic food presentation
3. mobile UX
4. conversion clarity
5. brand consistency
6. interaction quality
7. believable business behavior
8. accessibility

Use the existing HQ Shawarma identity as the starting point and refine it rather than replacing it.

The final product should look like a credible **2026 mobile restaurant ordering experience** for a real Faisalabad business.

The emotional sequence should be:

**See food → want food → understand food → trust business → order easily.**

---

# 42. Prototype Definition of Done

The prototype is considered complete when:

- Home is polished and conversion-focused
- Menu is fully browsable
- Categories work
- Product cards work
- Product detail works
- Add to cart works
- Quantity controls work
- Cart totals update correctly
- Empty cart works
- WhatsApp order generation works
- Direct product WhatsApp ordering works
- Foodpanda handoff exists
- Call action exists
- Directions action exists
- Reviews page exists
- Contact page exists
- mobile navigation works
- back navigation works
- loading/error/empty/success states are designed
- animations are subtle and consistent
- typography is deliberate
- iconography is consistent
- brand color system is coherent
- food imagery is consistent
- there is no desktop-specific UI
- there is no fake business claim presented as verified fact
- the experience feels like one coherent premium product

---

# 43. Final Design Direction in One Sentence

**Create a bold, premium, mobile-first HQ Shawarma digital storefront where authentic food presentation, disciplined branding, effortless menu browsing, interactive cart ordering, and direct WhatsApp conversion work together as one polished customer journey.**
