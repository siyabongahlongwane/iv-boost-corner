export type Product = {
  name: string;
  ingredients: string[];
  benefits: string | string[];
  price: string | string[];
  image: string;
};

const productList: Product[] = [
  {
    name: "Skin glow drip",
    ingredients: ["High dose of Glutathione & Vitamin C"],
    benefits: [
      "It helps to treat pimples & eczema.",
      "It reduces appearance of pigmentation & brightens skin.",
    ],
    price: "950/1000",
    image: "SKIN_RADIANCE.webp",
  },
  {
    name: "Jet A-1 drip",
    ingredients: [
      "High dose of energy boost, Vitamin B complex, Thiamine, Magnesium, Glutathione & Vitamin C.",
    ],
    benefits: [
      "It helps on recovering from getting sick more often.",
      "Reduces inflammation & Fatigue, Stress & Anxiety.",
      "Improves sleeping patterns & promotes mental alertness.",
    ],
    price: "1200/1250",
    image: "JETFUEL.png",
  },
  {
    name: "Ease inflammatory",
    ingredients: [
      "High dose of energy boost, Vitamin B complex, Thiamine, Magnesium & Ca.",
      "High dose of Vitamin C.",
      "High dose of Glutathione.",
    ],
    benefits: [
      "Reduces inflammation & Fatigue, Stress & Anxiety.",
      "Improves sleeping patterns & promotes mental alertness.",
    ],
    price: "1400/1450",
    image: "ANTI-INFLAMMATORY_ICON.png",
  },


//   {
//     name: "COLLAGEN DRIP",
//     ingredients: [
//       "Magnesium",
//       "Vitamin B2, C, B6, B12",
//       "Biotin",
//       "Glutathione.",
//     ],
//     benefits:
//       "It is an anti-ageing agent; It reduces fine lines and wrinkles; Reduces kin pigmentation or darkening; Improves skin elasticity and firmness; Improves skin density and thickness; It improves joint and bone health; Improves nail and hair strength and growth.",
//     price: "600",
//     image: "COLLAGEN.png",
//   },

  {
    name: "SPORT ENHANCEMENT DRIP",
    ingredients: [
      "High dose of Vitamin B12, Vitamin B complex & Magnesium.",
      "High dose of Glutathione.",
    ],
    benefits: [
      "Reduces stress, fatigue & Anxiety.",
      "Enhances sport performance & muscle recovery & reduces cramping.",
    ],
    price: "1000/1050",
    image: "SPORTS-ENDURANCE.png",
  },
  {
    name: "Bhabhalazi drip",
    ingredients: ["High dose of energy boost, Glutathione / Detox."],
    benefits: [
      "Reduces headaches & Nausea.",
      "Detoxify the Toxins.",
      "Reduces fatigue & exhaustion.",
      "Increases energy levels.",
    ],
    price: "1000/1050",
    image: "HANGOVER.png",
  },
  {
    name: "Meno Ease drip",
    ingredients: ["High dose of Glutathione, Vitamin C, Vitamin B12 & Biotin."],
    benefits: [
      "Reduces hot Flushes.",
      "Promotes sleep patterns.",
      "Regulates hormones.",
      "Helps with arthritis, bone & Joint pains.",
    ],
    price: "1050/1100",
    image: "MENOPAUSE.png",
  },
  {
    name: "IMMUNE BOOST",
    ingredients: ["High dose of Vitamin C"],
    benefits: [
      "It Boosts the Immune system to fight seasonal fever allergies, sinusitis, infection & inflammation.",
      "Reduces Muscle pain & body pain",
    ],
    price: ["R750/800", "R425 (Mini Immune)"],
    image: "IMMUNE-BOOST.png",
  },
  {
    name: "Myers Cocktail",
    ingredients: ["High dose of calcium, magnesium, Vitamin B complex."],
    benefits: [
      "It increases energy.",
      "Reduces fatigue, Anxiety & tiredness.",
      "Improve sleeping patterns.",
    ],
    price: ["R950/1000", "R500 (Mini Energy Boost)"],
    image: "myers.png",
  },
  {
    name: "Fertility Boost IV",
    ingredients: ["High dose of Glutathione"],
    benefits: [
      "It Improves quality of Spermatozoa & Ovum’s.",
      "Better Chances of Fertilizations occurrence.",
    ],
    price: "750/800",
    image: "FERTILITY.png",
  },
  {
    name: "BIOTIN",
    ingredients: ["High dose of Vitamin H or B7"],
    benefits: [
      "Strengthens & promote growth on nails & hair.",
      "Improve Skin glow.",
      "Regulate thyroid function.",
      "It regulates cholesterol.",
    ],
    price: ["R300 (Stand-alone)", "R250 (Add on)"],
    image: "Biotin.png",
  },
  {
    name: "Glutamine",
    ingredients: ["High dose of glutamine."],
    benefits: ["Enhance Muscle recovery.", "Improve gut health."],
    price: "300/350",
    image: "glutamine.webp",
  },
  {
    name: "Vitamin B12 (methylcobalamin, methyl from cobalamin)",
    ingredients: ["Vitamin B12"],
    benefits: [
      "Reduces hot Flushes.",
      "Promotes sleep patterns.",
      "Regulates hormones.",
      "It boosts your energy levels",
    ],
    price: ["R300 (Stand-alone)", "R250 (Add on)"],
    image: "B12.png",
  },
  {
    name: "REHYDRATE",
    ingredients: ["Healthy water, sodium chloride & electrolytes"],
    benefits: "It helps with rehydration & replenishment of electrolytes.",
    price: "250/300",
    image: "REHYDRATION.png",
  },
  {
    name: "GLUTATHIONE / DETOX",
    ingredients: ["High dose of Glutathione."],
    benefits: [
      "Master antioxidant & Anti-toxins.",
      "Detoxes the body with no side effects.",
      "Reduces stress.",
      "Makes you feel lighter & healthier it brightens the natural skin colour.",
    ],
    price: ["R750/800", "R425 (Mini Detox)"],
    image: "DETOX.png",
  },
  {
    name: "Weight loss Drip",
    ingredients: [
      "High dose of amino acids.",
      "Contains glutamine, carnitine arginine (GAC).",
    ],
    benefits: ["It converts fat into energy and reduces appetite."],
    price: "500/550",
    image: "weight.png",
  },
  {
    name: "NAD+ (Nicotinamide Adenine Dinucleotide)",
    ingredients: ["Nicotinamide Adenine Dinucleotide"],
    benefits: [
      "Powerful anti-ageing agent",
      "Regulate body metabolic & inflammatory responses",
    ],
    price: ["R1400 (Single Dose)", "R5500 (Package of 4 drips)"],
    image: "NAD+.png",
  },
];

export default productList;
