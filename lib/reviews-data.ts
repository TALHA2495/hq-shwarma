/**
 * ⚠️ PLACEHOLDER reviews for the prototype. These are illustrative only and
 * are NOT real customer testimonials. Replace with genuine, permissioned
 * reviews (or wire up a real source) before this goes live.
 */

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  /** Human-readable relative time, kept vague on purpose (sample data). */
  when: string;
}

export const REVIEWS: Review[] = [
  {
    id: "r1",
    name: "Ahmed R.",
    rating: 5,
    text: "The cheese shawarma is the real deal — properly loaded and still hot when it reached us. Ordered again the same week.",
    when: "Recently",
  },
  {
    id: "r2",
    name: "Fatima K.",
    rating: 5,
    text: "Malai boti roll is my go-to now. Creamy, not too heavy, and the paratha stays flaky. Portion is generous for the price.",
    when: "Recently",
  },
  {
    id: "r3",
    name: "Bilal S.",
    rating: 4,
    text: "Solid zinger burger and quick to sort out on WhatsApp. Would love a spicier sauce option, otherwise great.",
    when: "Recently",
  },
  {
    id: "r4",
    name: "Hina M.",
    rating: 5,
    text: "Got the HQ Special platter for the family — everyone was happy. Grilled chicken was tender and the sauces are excellent.",
    when: "Recently",
  },
];
