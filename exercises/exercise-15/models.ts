const TRAINERS = ['Gert Jan', 'Leon'] as const;
export type Trainer = typeof TRAINERS[number];
const RATINGS = ['Good', 'Excellent'] as const;
export type Rating = typeof RATINGS[number];

export const bestRating = 'Gert Jan - Excellent' as const;
export const bestRating2 = 'Leon - Excellent' as const;
