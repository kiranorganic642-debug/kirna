import BrahmiTea from '../assets/Product/Brahmi tea memory boost with nature.png';
import KidneySpray from '../assets/Product/Kidney Spray.png';
import LittleChampAtta from '../assets/Product/Little Champ Atta packaging.png';
import MoringaAtta from '../assets/Product/Moringa Atta gluten-free flour.png';
import DiabeticTea from '../assets/Product/Organic Diabetic Tea benefits.png';
import DiagocareAtta from '../assets/Product/Organic Diagocare Atta packaging.png';
import GlowVeda from '../assets/Product/Organic Glow Veda products.png';
import PostPregnancySpray from '../assets/Product/Organic Post Pregnancy Spray.png';
import SeaBuckthornJuice from '../assets/Product/Organic Sea Buckthorn Juice.png';
import PCOSGreenJuice from '../assets/Product/Organic green juice for PCOS.png';
import SpineSprayOil from '../assets/Product/Organic spine spray oil.png';
import KidneyDetoxPouch from "../assets/Product/Kiran's Organic Kidney Detox pouch.png";
import LiverDetoxTea from '../assets/Product/Organic Liver Detox Tea.png';
import PCOSCareTea from '../assets/Product/Organic PCOS Care Tea.png';
import DetoxTeaBox from '../assets/Product/Organic detox tea box.png';
import KidneyDetoxTea from '../assets/Product/Organic kidney detox tea.png';
import MigraineReliefOil from '../assets/Product/Organic migraine relief oil pack.png';
import SlipDiskSpray from '../assets/Product/Slip Disk pain relief spray.png';
import GlowingSkinEffervescence from '../assets/Product/Strawberry lemon effervescence for glowing skin.png';
import ZenoraLiverDetoxTea from '../assets/Product/Zenora Organic Liver Detox Tea.png';
import KidneyDetoxBottles from '../assets/Product/Organic kidney detox bottles.png';
import DiagocareAttaJpeg from '../assets/Product/Diagocare Atta.jpeg';
import LittleChampAttaJpeg from '../assets/Product/Little Champ Atta.jpeg';
import LittleChampAttaGreenVariant from '../assets/Product/Little Champ Atta – Green Variant.jpeg';
import MoringaAttaJpeg from '../assets/Product/Moringa Atta (Gluten Free Superfood Flour).jpeg';
import OrganicMoringaSoup from '../assets/Product/organic moringa soup.png';
import NewProduct1 from '../assets/Product/ChatGPT Image Apr 20, 2026, 10_53_32 AM.png';
import NewProduct2 from '../assets/Product/ChatGPT Image Apr 20, 2026, 11_02_41 AM.png';
import NewProduct3 from '../assets/Product/ChatGPT Image Apr 20, 2026, 11_06_49 AM.png';

export const categories = ['All', 'Herbal Juices', 'Health Teas', 'Nutrition & Atta', 'Wellness & Detox', 'Care Oils'];

export const categoryProducts = {
  'Herbal Juices': [
    'Green juice',
    'Pcos pcod care juice',
    'Sea buckthon jouce man stamina booster j',
    'PCOS PCOD Care Green Juice',
    'Sea Buckthorn Juice',
    'Glow Veda Ayurvedic Elixir',
    'Glowing Skin Effervescence',
    'Organic Kidney Detox Bottles'
  ],
  'Health Teas': [
    'Pcos pcod care tea',
    'Bremi memory booster t',
    'Dibo care tea',
    'Morning permenent tea',
    'Natural Immunity Booster',
    'Organic Diabetic Tea',
    'Brahmi Memory Tea',
    'Organic Kidney Detox Pouch',
    'Organic Liver Detox Tea',
    'Organic PCOS Care Tea',
    'Organic Detox Tea Box',
    'Organic Kidney Detox Tea',
    'Zenora Liver Detox Tea'
  ],
  'Nutrition & Atta': [
    'Sea buckthon ABC malt',
    'Organic Moringa Soup',
    'Little Champ Multigrain Atta',
    'Moringa Atta Gluten-Free Flour',
    'Diagocare Atta Packaging',
    'Diagocare Atta',
    'Little Champ Atta',
    'Little Champ Atta (Green Variant)',
    'Moringa Atta (Gluten Free Superfood Flour)'
  ],
  'Wellness & Detox': [
    'Colestro veda',
    'Liver detox',
    'Kidney detox',
    'Herbal Wellness Pack',
    'Post Pregnancy Care Spray',
    'Kidney Care Spray',
    'Slip Disk Pain Relief Spray'
  ],
  'Care Oils': [
    'Pure Ayurvedic Extract',
    'Spine Spray Oil',
    'Migraine Relief Oil'
  ]
};

export const allProducts = [
  {
    id: 201,
    name: "Green juice",
    price: 450,
    originalPrice: 550,
    rating: 4.8,
    reviews: 120,
    image: PCOSGreenJuice,
    category: 'Herbal Juices',
    description: "Fresh and healthy organic green juice for daily wellness."
  },
  {
    id: 202,
    name: "Colestro veda",
    price: 599,
    originalPrice: 799,
    rating: 4.9,
    reviews: 85,
    image: GlowVeda,
    category: 'Wellness & Detox',
    description: "Ayurvedic formula for cholesterol management and heart health."
  },
  {
    id: 203,
    name: "Pcos pcod care juice",
    price: 480,
    originalPrice: 580,
    rating: 4.7,
    reviews: 210,
    image: PCOSGreenJuice,
    category: 'Herbal Juices',
    description: "Specialized juice to support hormonal balance and manage PCOS/PCOD symptoms."
  },
  {
    id: 204,
    name: "Sea buckthon jouce man stamina booster j",
    price: 699,
    originalPrice: 899,
    rating: 4.9,
    reviews: 145,
    image: SeaBuckthornJuice,
    category: 'Herbal Juices',
    description: "Powerful Sea Buckthorn juice formulated for men's stamina and vitality."
  },
  {
    id: 205,
    name: "Sea buckthon ABC malt",
    price: 750,
    originalPrice: 950,
    rating: 5.0,
    reviews: 65,
    image: NewProduct3,
    category: 'Nutrition & Atta',
    description: "Nutritious ABC (Apple, Beetroot, Carrot) malt with Sea Buckthorn for overall health."
  },
  {
    id: 206,
    name: "Liver detox",
    price: 480,
    originalPrice: 580,
    rating: 4.8,
    reviews: 95,
    image: ZenoraLiverDetoxTea,
    category: 'Wellness & Detox',
    description: "Natural formula to support liver detoxification and healthy function."
  },
  {
    id: 207,
    name: "Kidney detox",
    price: 450,
    originalPrice: 550,
    rating: 4.7,
    reviews: 112,
    image: KidneyDetoxBottles,
    category: 'Wellness & Detox',
    description: "Herbal blend for kidney cleansing and renal health support."
  },
  {
    id: 208,
    name: "Pcos pcod care tea",
    price: 499,
    originalPrice: 599,
    rating: 4.9,
    reviews: 180,
    image: PCOSCareTea,
    category: 'Health Teas',
    description: "Soothing herbal tea for hormonal balance and PCOS support."
  },
  {
    id: 209,
    name: "Bremi memory booster t",
    price: 420,
    originalPrice: 520,
    rating: 4.8,
    reviews: 75,
    image: BrahmiTea,
    category: 'Health Teas',
    description: "Brahmi-based tea to enhance memory, focus, and cognitive health."
  },
  {
    id: 210,
    name: "Dibo care tea",
    price: 399,
    originalPrice: 499,
    rating: 4.7,
    reviews: 140,
    image: DiabeticTea,
    category: 'Health Teas',
    description: "Natural tea blend to support healthy blood sugar levels."
  },
  {
    id: 212,
    name: "Morning permenent tea",
    price: 299,
    originalPrice: 399,
    rating: 4.5,
    reviews: 50,
    image: DetoxTeaBox,
    category: 'Health Teas',
    description: "Refreshing morning tea for a healthy start to your day."
  },
  {
    id: 103,
    name: "Herbal Wellness Pack",
    price: 899,
    originalPrice: 1200,
    rating: 4.9,
    reviews: 56,
    image: NewProduct1,
    category: 'Wellness & Detox',
    description: "A comprehensive herbal wellness pack for overall body health and vitality. Contains natural extracts to boost energy levels."
  },
  {
    id: 104,
    name: "Natural Immunity Booster",
    price: 549,
    originalPrice: 750,
    rating: 4.8,
    reviews: 42,
    image: NewProduct2,
    category: 'Health Teas',
    description: "Strengthen your immune system with our natural immunity booster. A perfect blend of traditional herbs for daily protection."
  },
  {
    id: 105,
    name: "Pure Ayurvedic Extract",
    price: 699,
    originalPrice: 950,
    rating: 5.0,
    reviews: 38,
    image: NewProduct3,
    category: 'Care Oils',
    description: "Highly concentrated pure Ayurvedic extract for targeted healing and rejuvenation. Crafted using ancient traditional methods."
  },
  {
    id: 106,
    name: "Organic Moringa Soup",
    price: 299,
    originalPrice: 350,
    rating: 4.7,
    reviews: 85,
    image: OrganicMoringaSoup,
    category: 'Nutrition & Atta',
    description: "Nutrient-rich organic moringa soup for a healthy and quick meal. Boosts immunity and provides essential vitamins."
  },
  {
    id: 1,
    name: "Spine Spray Oil",
    price: 380,
    originalPrice: 480,
    rating: 4.8,
    reviews: 124,
    image: SpineSprayOil,
    category: 'Care Oils',
    description: "Nourishing oil in a spray format for spinal health. Helps in improving flexibility and reducing stiffness along the spinal column."
  },
  {
    id: 2,
    name: "Post Pregnancy Care Spray",
    price: 499,
    originalPrice: 599,
    rating: 4.8,
    reviews: 156,
    image: PostPregnancySpray,
    category: 'Wellness & Detox',
    description: "Specially formulated for post-pregnancy recovery. Helps in skin firming and provides comfort during the postpartum healing process."
  },
  {
    id: 3,
    name: "Kidney Care Spray",
    price: 420,
    originalPrice: 520,
    rating: 4.6,
    reviews: 92,
    image: KidneySpray,
    category: 'Wellness & Detox',
    description: "Supportive care for kidney health. A unique spray formulation designed to complement renal wellness routines."
  },
  {
    id: 4,
    name: "PCOS PCOD Care Green Juice",
    price: 450,
    originalPrice: 550,
    rating: 4.8,
    reviews: 289,
    image: PCOSGreenJuice,
    category: 'Herbal Juices',
    description: "Hormonal balance support tea for women. Helps manage PCOS/PCOD symptoms naturally with a blend of potent Ayurvedic herbs."
  },
  {
    id: 5,
    name: "Sea Buckthorn Juice",
    price: 650,
    originalPrice: 850,
    rating: 5.0,
    reviews: 145,
    image: SeaBuckthornJuice,
    category: 'Herbal Juices',
    description: "Superfood juice rich in Omega 3, 6, 7, and 9. Boosts immunity, improves skin health, and provides essential vitamins and minerals."
  },
  {
    id: 6,
    name: "Glow Veda Ayurvedic Elixir",
    price: 599,
    originalPrice: 799,
    rating: 4.9,
    reviews: 412,
    image: GlowVeda,
    category: 'Herbal Juices',
    description: "Traditional Ayurvedic formula for radiant skin from within. Purifies blood and provides a natural glow to the complexion."
  },
  {
    id: 7,
    name: "Little Champ Multigrain Atta",
    price: 240,
    originalPrice: 290,
    rating: 5.0,
    reviews: 178,
    image: LittleChampAtta,
    category: 'Nutrition & Atta',
    description: "Nutritious multigrain flour specially formulated for growing children. Packed with essential minerals and vitamins for overall growth."
  },
  {
    id: 8,
    name: "Moringa Atta Gluten-Free Flour",
    price: 280,
    originalPrice: 350,
    rating: 4.9,
    reviews: 142,
    image: MoringaAtta,
    category: 'Nutrition & Atta',
    description: "Healthy and gluten-free flour enriched with the goodness of Moringa. Perfect for health-conscious families looking for nutritional alternatives."
  },
  {
    id: 9,
    name: "Diagocare Atta Packaging",
    price: 320,
    originalPrice: 400,
    rating: 4.7,
    reviews: 115,
    image: DiagocareAtta,
    category: 'Nutrition & Atta',
    description: "Specialized flour blend for dietary management. Carefully processed to maintain nutritional integrity while being easy to digest."
  },
  {
    id: 10,
    name: "Organic Diabetic Tea",
    price: 399,
    originalPrice: 499,
    rating: 4.7,
    reviews: 234,
    image: DiabeticTea,
    category: 'Health Teas',
    description: "Helps in maintaining healthy blood sugar levels. A natural blend of herbs that support insulin sensitivity and metabolic health."
  },
  {
    id: 11,
    name: "Brahmi Memory Tea",
    price: 420,
    originalPrice: 520,
    rating: 4.8,
    reviews: 112,
    image: BrahmiTea,
    category: 'Health Teas',
    description: "Focus and memory enhancing tea. Contains pure Brahmi leaves known for cognitive support and stress reduction."
  },
  {
    id: 12,
    name: "Organic Kidney Detox Pouch",
    price: 450,
    originalPrice: 550,
    rating: 4.7,
    reviews: 89,
    image: KidneyDetoxPouch,
    category: 'Health Teas',
    description: "Premium organic kidney detox pouch for comprehensive renal health and detoxification."
  },
  {
    id: 13,
    name: "Organic Liver Detox Tea",
    price: 480,
    originalPrice: 580,
    rating: 4.8,
    reviews: 112,
    image: LiverDetoxTea,
    category: 'Health Teas',
    description: "Specially blended organic tea to support liver health and natural detoxification processes."
  },
  {
    id: 14,
    name: "Organic PCOS Care Tea",
    price: 499,
    originalPrice: 599,
    rating: 4.9,
    reviews: 245,
    image: PCOSCareTea,
    category: 'Health Teas',
    description: "A natural herbal blend designed to support hormonal balance and manage PCOS symptoms."
  },
  {
    id: 15,
    name: "Organic Detox Tea Box",
    price: 550,
    originalPrice: 650,
    rating: 4.7,
    reviews: 167,
    image: DetoxTeaBox,
    category: 'Health Teas',
    description: "Complete organic detox tea collection for overall body wellness and rejuvenation."
  },
  {
    id: 16,
    name: "Organic Kidney Detox Tea",
    price: 420,
    originalPrice: 520,
    rating: 4.6,
    reviews: 134,
    image: KidneyDetoxTea,
    category: 'Health Teas',
    description: "Effective herbal tea for kidney cleansing and maintaining healthy urinary tract function."
  },
  {
    id: 17,
    name: "Migraine Relief Oil",
    price: 350,
    originalPrice: 450,
    rating: 4.8,
    reviews: 198,
    image: MigraineReliefOil,
    category: 'Care Oils',
    description: "Soothing organic oil blend specifically formulated to provide relief from migraine and tension headaches."
  },
  {
    id: 18,
    name: "Slip Disk Pain Relief Spray",
    price: 599,
    originalPrice: 799,
    rating: 4.9,
    reviews: 156,
    image: SlipDiskSpray,
    category: 'Wellness & Detox',
    description: "Fast-acting pain relief spray for slip disk and lower back discomfort. Enhances mobility and comfort."
  },
  {
    id: 19,
    name: "Glowing Skin Effervescence",
    price: 699,
    originalPrice: 899,
    rating: 5.0,
    reviews: 312,
    image: GlowingSkinEffervescence,
    category: 'Herbal Juices',
    description: "Refreshing strawberry lemon effervescent drink enriched with skin-loving nutrients for a natural glow."
  },
  {
    id: 20,
    name: "Zenora Liver Detox Tea",
    price: 520,
    originalPrice: 620,
    rating: 4.7,
    reviews: 88,
    image: ZenoraLiverDetoxTea,
    category: 'Health Teas',
    description: "Premium Zenora blend for deep liver detoxification and metabolic support."
  },
  {
    id: 21,
    name: "Organic Kidney Detox Bottles",
    price: 899,
    originalPrice: 1099,
    rating: 4.8,
    reviews: 145,
    image: KidneyDetoxBottles,
    category: 'Herbal Juices',
    description: "Complete organic kidney detox regimen in convenient bottles. Supports renal health and helps flush out toxins effectively."
  },
  {
    id: 22,
    name: "Diagocare Atta",
    price: 320,
    originalPrice: 400,
    rating: 4.7,
    reviews: 115,
    image: DiagocareAttaJpeg,
    category: 'Nutrition & Atta',
    description: "Specialized flour blend for dietary management. Carefully processed to maintain nutritional integrity while being easy to digest."
  },
  {
    id: 23,
    name: "Little Champ Atta",
    price: 240,
    originalPrice: 290,
    rating: 4.9,
    reviews: 178,
    image: LittleChampAttaJpeg,
    category: 'Nutrition & Atta',
    description: "Nutritious multigrain flour specially formulated for growing children. Packed with essential minerals and vitamins for overall growth."
  },
  {
    id: 24,
    name: "Little Champ Atta (Green Variant)",
    price: 240,
    originalPrice: 290,
    rating: 4.9,
    reviews: 162,
    image: LittleChampAttaGreenVariant,
    category: 'Nutrition & Atta',
    description: "Little Champ multigrain atta in green variant packaging. A wholesome daily flour for kids and family nutrition."
  },
  {
    id: 25,
    name: "Moringa Atta (Gluten Free Superfood Flour)",
    price: 280,
    originalPrice: 350,
    rating: 4.8,
    reviews: 142,
    image: MoringaAttaJpeg,
    category: 'Nutrition & Atta',
    description: "Healthy and gluten-free superfood flour enriched with the goodness of Moringa. Great for health-conscious families."
  }
];
