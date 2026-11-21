// Corrections to the Custodial Exchanges page that are applied when the page is rendered.
const EDITS: Array<[string, string]> = [
  // Gemini says it supported Ironwood, the pool that replaced Orchard, from the first day.
  [
    "- Ironwood: Shielded withdrawals supported, pool not stated",
    "- Ironwood: Shielded withdrawals to the Ironwood pool are supported",
  ],
];

export function rewriteCustodialExchangesGuide(original: string): string {
  let t = original;
  for (const [a, b] of EDITS) if (t.includes(a)) t = t.replace(a, b);
  return t;
}
