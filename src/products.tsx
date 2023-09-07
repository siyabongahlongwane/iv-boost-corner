export type Product = {
    name: string, 
    ingredients: string[], 
    benefits: string,
    price: string | string[],
    image: string
}

const productList: Product[] = [
    {
        name: 'SKIN RADIANCE', 
        ingredients: ['2000mg glowbright liquid', '1000mg Glutamatrix', '2000mg vitamin C'], 
        benefits: 'It helps to treat pimples and eczema; Reduces scars, stretch marks and dark circles under eyes; It also reduces pigmentation and brightens the skin; It rehydrates the skin.', 
        price: '1050',
        image: 'SKIN-RADIANCE.png'
    },
    {
        name: 'JET FUEL', 
        ingredients: ['6000mg energy boost', 'Vitamin B complex', 'Thiamine', 'Magnesium', '2000mg Glutathione', '2000mg Vitamin C.'], 
        benefits: 'It helps on recovering and getting sick more often; Reduces inflammation; Increases energy ; Reduces fatigue, stress and anxiety; promotes concentration; Promotes better sleep and sleep patterns, it an immune booster.', 
        price: '1150',
        image: 'JETFUEL.png'
    },
    {
        name: 'ANTI-INFLAMMATORY', 
        ingredients: ['6000mg energy boost', 'Vitamin B complex', 'Thiamine', 'Magnesium', '4000mg Glutathione', '4000mg Vitamin C.'], 
        benefits: 'It increases energy; Decreases fatigue; Reduces stress and anxiety; Reduces brain fog; Improves concentration; Promotes better sleep; Improves the skin condition.', 
        price: '1350',
        image: 'ANTI-INFLAMMATORY_ICON.png'
    },
    {
        name: 'DETOX', 
        ingredients: ['2000mg Glutathione.'], 
        benefits: 'Master anti-oxidant and Anti-toxins; Detoxes the body with no side effects; Improves energy levels; Reduces stress; Makes you feel lighter and healthier.', 
        price: '650',
        image: 'DETOX.png'
    },
    {
        name: 'HANGOVER', 
        ingredients: ['It consists of 6000mg energy boost', '2000mg Glutamatrix'], 
        benefits: 'Reduces headaches and nausea; Rehydrates; Improves the energy levels; Promotes the normal sleep patterns; Reduces brain fog and exhaustion.', 
        price: '950',
        image: 'HANGOVER.png'
    },
    {
        name: 'REHYDRATE', 
        ingredients: ['1000mg healthy water that’s contains sodium chloride and electrolytes.'], 
        benefits: 'It assists with rehydration and replenishing of electrolytes in your body.', 
        price: '250',
        image: 'REHYDRATION.png'
    },
    {
        name: 'IMMUNE BOOST', 
        ingredients: ['12000mg of Vitamin C'], 
        benefits: 'It helps to boost immune system to fight against seasonal flu, allergies and sinusitis; It fights infections; It’s a powerful antibacterial, antifungal and antiviral; It helps with quick recovery time when you are sick.', 
        price: '700',
        image: 'IMMUNE-BOOST.png'
    },
    {
        name: 'COLLAGEN DRIP', 
        ingredients: ['Magnesium', 'Vitamin B2, C, B6, B12', 'Biotin', 'Glutathione.'], 
        benefits: 'It is an anti-ageing agent; It reduces fine lines and wrinkles; Reduces kin pigmentation or darkening; Improves skin elasticity and firmness; Improves skin density and thickness; It improves joint and bone health; Improves nail and hair strength and growth.',
        price: '600',
        image: 'ANTI-INFLAMMATORY_ICON.png'
    },
    {
        name: 'FERTILITY DRIP', 
        ingredients: ['3000mg Glutathione.'], 
        benefits: 'It improves the quality of spermatozoa and ovums; It create a better chance of fertilization occurrence (conceiving).',
        price: '650',
        image: 'FERTILITY.png'
    },
    {
        name: 'SPORT AND ENDURANCE DRIP', 
        ingredients: ['Vitamin B12, B complex', 'Thiamine', '1000mg Magnesium', '3000mg Glutathione.'], 
        benefits: 'It reduces stress, anxiety and fatigue; Increases energy; It helps with muscles recovery; It promotes better sleep; Reduces inflammation, cramps and pain.', 
        price: '1000',
        image: 'SPORTS-ENDURANCE.png'
    },
    {
        name: 'BIOTIN', 
        ingredients: ['1000mg Biotin (vitamin H)'], 
        benefits: 'It strengthens and promotes growth of hair and nails; it enhances natural glow of skin; it rebuilds tissues; it lowers cholesterol.', 
        price: ['300 (Stand-alone drip)', 'R250 (Add on drip)'],
        image: 'Biotin.png'
    },
    {
        name: 'MENOPAUSE DRIP', 
        ingredients: ['1500mg', 'Vitamin B12, C', '5000mg Glutathione', '2000mg Vitamin C', '1000mg Biotin.'], 
        benefits: 'It reduces hot flushes; promotes sleeping patterns; delays anti-ageing; Reduces dark spots; Promotes natural glow of the skin; it helps to regulate hormones; it helps on arthritis, bone and joint pains; it boosts energy.', 
        price: '800',
        image: 'MENOPAUSE.png'
    }
]

export default productList;