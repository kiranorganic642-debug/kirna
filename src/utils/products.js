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
import MenStaminaBooster from "../assets/Product/men's stamina booster juice.png";
import SeaBuckthornMalt from "../assets/Product/Organic Seabuckthorn malt powder.png";

export const categories = ['All', 'Herbal Juices', 'Health Teas', 'Nutrition & Flour', 'Wellness & Detox', 'Care Oils'];

export const categoryProducts = {
  'Herbal Juices': [
    'Pcos pcod care juice',
    'Sea buckthon jouce man stamina booster j',
    'Sea Buckthorn Juice',
    'Glow Veda Ayurvedic Elixir',
    'Men\'s Stamina Booster Juice'
  ],
  'Health Teas': [
    'Liver detox',
    'Kidney detox',
    'Pcos pcod care tea',
    'Bremi memory booster t',
    'Dibo care tea',
    'Slim tea',
    'Morning permenent tea',
    'Organic Diabetic Tea',
    'Brahmi Memory Tea',
    'Organic Liver Detox Tea',
    'Organic PCOS Care Tea',
    'Organic Detox Tea Box',
    'Organic Kidney Detox Tea'
  ],
  'Nutrition & Flour': [
    'Sea buckthon ABC malt',
    'Moringa soup',
    'Dibo care atta flour',
    'Moringa flour',
    'Little cheam flour',
    'Little Champ Multigrain Atta',
    'Moringa Atta Gluten-Free Flour',
    'Diagocare Atta',
    'Organic Seabuckthorn Malt Powder'
  ],
  'Wellness & Detox': [
    'Colestro veda'
  ],
  'Care Oils': [
    'oil',
    'Spine Spray Oil',
    'Migraine Relief Oil'
  ]
};

export const allProducts = [
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
    image: SeaBuckthornMalt,
    category: 'Nutrition & Flour',
    description: "Nutritious ABC (Apple, Beetroot, Carrot) malt with Sea Buckthorn for overall health."
  },
  {
    id: 206,
    name: "Liver detox",
    price: 480,
    originalPrice: 580,
    rating: 4.8,
    reviews: 95,
    image: LiverDetoxTea,
    category: 'Health Teas',
    description: "Natural formula to support liver detoxification and healthy function."
  },
  {
    id: 207,
    name: "Kidney detox",
    price: 450,
    originalPrice: 550,
    rating: 4.7,
    reviews: 112,
    image: KidneyDetoxTea,
    category: 'Health Teas',
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
    id: 211,
    name: "Slim tea",
    price: 450,
    originalPrice: 550,
    rating: 4.6,
    reviews: 65,
    image: DetoxTeaBox,
    category: 'Health Teas',
    description: "Herbal slim tea for natural weight management and metabolism boost."
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
    id: 106,
    name: "Moringa soup",
    price: 299,
    originalPrice: 350,
    rating: 4.7,
    reviews: 85,
    image: OrganicMoringaSoup,
    category: 'Nutrition & Flour',
    description: "Nutrient-rich organic moringa soup for a healthy and quick meal. Boosts immunity and provides essential vitamins."
  },
  {
    id: 401,
    name: "Dibo care atta flour",
    price: 320,
    originalPrice: 400,
    rating: 4.7,
    reviews: 115,
    image: DiagocareAtta,
    category: 'Nutrition & Flour',
    description: "Specialized flour blend for dietary management and sugar control."
  },
  {
    id: 402,
    name: "Moringa flour",
    price: 280,
    originalPrice: 350,
    rating: 4.8,
    reviews: 142,
    image: MoringaAtta,
    category: 'Nutrition & Flour',
    description: "Healthy and gluten-free superfood flour enriched with the goodness of Moringa."
  },
  {
    id: 403,
    name: "Little cheam flour",
    price: 240,
    originalPrice: 290,
    rating: 4.9,
    reviews: 178,
    image: LittleChampAtta,
    category: 'Nutrition & Flour',
    description: "Nutritious multigrain flour specially formulated for growing children."
  },
  {
    id: 501,
    name: "oil",
    price: 350,
    originalPrice: 450,
    rating: 4.8,
    reviews: 198,
    image: MigraineReliefOil,
    category: 'Care Oils',
    description: "Pure Ayurvedic oil for therapeutic care and wellness."
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
    description: "Nourishing oil in a spray format for spinal health."
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
    description: "Soothing organic oil blend specifically formulated to provide relief from migraine."
  }
];
