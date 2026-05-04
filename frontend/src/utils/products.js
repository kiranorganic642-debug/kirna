import BrahmiTea from '../assets/Product/brahmi-tea-memory-boost.png';
import KidneySpray from '../assets/Product/kidney-spray.png';
import MoringaAttaSuperfood from '../assets/Product/moringa-atta-superfood.jpeg';
import DiabeticTea from '../assets/Product/organic-diabetic-tea.png';
import DiagocareAttaPkg from '../assets/Product/organic-diagocare-atta-pkg.png';
import GlowVeda from '../assets/Product/organic-glow-veda.png';
import LiverDeloxTea from '../assets/Product/organic-liver-detox-tea.png';
import PCOSCareTea from '../assets/Product/organic-pcos-care-tea.png';
import PostPregnancySpray from '../assets/Product/organic-post-pregnancy-spray.png';
import SeaBuckthornJuice from '../assets/Product/organic-sea-buckthorn-juice.png';
import SeaBuckthornMalt from '../assets/Product/organic-seabuckthorn-malt.png';
import DetoxTeaBox from '../assets/Product/organic-detox-tea-box.png';
import PCOSGreenJuice from '../assets/Product/organic-green-juice-pcos.png';
import KidneyDetoxTea from '../assets/Product/organic-kidney-detox-tea.png';
import MigraineReliefOil from '../assets/Product/organic-migraine-relief-oil.png';
import SpineSprayOil from '../assets/Product/organic-spine-spray-oil.png';
import SlipDiskSpray from '../assets/Product/slip-disk-pain-relief-spray.png';
import MenStaminaBooster from "../assets/Product/mens-stamina-booster-juice.png";
import MoringaSoup from '../assets/Product/organic-moringa-soup.png';
import SlimTea from '../assets/Product/organic-slim-tea.png';
import LumberPainOil from '../assets/Product/kirans-organic-lumber-pain-oil-spray.png';
import ReleafonSpray from '../assets/Product/kirans-organic-releafon-spray.png';
import PainOilSpray from '../assets/Product/kirans-organic-pain-oil-spray.png';
import PeriodCrampSpray from '../assets/Product/kirans-organic-period-cramp-relief-spray.png';
import MoringaAtta from '../assets/Product/moringa-atta-gluten-free.png';
import LittleChampAttaGreen from '../assets/Product/little-champ-atta-green-variant.jpeg';
import ColestroVedaImg from '../assets/Product/Colestro veda.png';
import JointReliefImg from '../assets/Product/Herbal ingredients for joint relief.png';
import BodyDetoxJuiceImg from '../assets/Product/Organic Green Juice Body Detox products.png';
import ManjistaTeaImg from '../assets/Product/Organic manjista tea surroundings.png';
import OrthainPainOilImg from '../assets/Product/Orthain Pain Oil product display.png';

export const categories = [
  'All',
  'Green juice',
  'Colestro veda',
  'Pcos pcod care juice',
  'Sea buckthon jouce man stamina booster ',
  'Sea buckthon ABC malt',
  'Liver detox',
  'Kidney detox',
  'Pcos pcod care tea',
  'Bremi memory booster t',
  'Dibo care tea',
  'Slim tea',
  'Morning permenent tea',
  'Moringa soup',
  'Dibo care atta flour',
  'Moringa flour',
  'Little cheam flour',
  'oil'
];

export const categoryProducts = {
  'Green juice': ['Organic green juice for PCOS', 'Organic Green Juice Body Detox'],
  'Colestro veda': ['Organic Glow Veda products', 'Colestro Veda'],
  'Pcos pcod care juice': ['Organic green juice for PCOS', 'Organic Post Pregnancy Spray', "Kiran's organic period cramp relief spray"],
  'Sea buckthon jouce man stamina booster ': ['Men\'s stamina booster juice', 'Organic Sea Buckthorn Juice'],
  'Sea buckthon ABC malt': ['Organic Seabuckthorn malt powder'],
  'Liver detox': ['Organic Liver Detox Tea'],
  'Kidney detox': ['Organic kidney detox tea', 'Kidney Spray'],
  'Pcos pcod care tea': ['Organic PCOS Care Tea'],
  'Bremi memory booster t': ['Brahmi tea memory boost with nature'],
  'Dibo care tea': ['Organic Diabetic Tea benefits'],
  'Slim tea': ['organic slim tea'],
  'Morning permenent tea': ['Organic detox tea box', 'Organic Manjista Tea'],
  'Moringa soup': ['organic moringa soup'],
  'Dibo care atta flour': ['Organic Diagocare Atta packaging'],
  'Moringa flour': ['Moringa Atta (Gluten Free Superfood Flour)', 'Moringa Atta gluten-free flour'],
  'Little cheam flour': ['Little Champ Atta – Green Variant'],
  'oil': [
    'Organic migraine relief oil pack', 
    'Organic spine spray oil', 
    'Slip Disk pain relief spray',
    "Kiran's Organic lumber pain oil spray",
    "Kiran's Organic pain oil spray",
    "Kiran's Organic Releafon spray",
    'Herbal ingredients for joint relief',
    'Orthain Pain Oil'
  ]
};

export const allProducts = [
  { 
    id: 1, 
    name: "Organic green juice for PCOS", 
    price: 1499, 
    originalPrice: 1999, 
    rating: 4.8, 
    reviews: 120, 
    image: PCOSGreenJuice, 
    category: 'Green juice', 
    description: "Natural green juice specifically formulated for PCOS management.",
    variants: [
      { size: "500gm", price: 799 },
      { size: "1kg", price: 1499 }
    ],
    defaultSize: "1kg"
  },
  { id: 2, name: "Organic Glow Veda products (250gm)", price: 699, originalPrice: 899, rating: 4.9, reviews: 85, image: GlowVeda, category: 'Colestro veda', description: "Ayurvedic solution for cholesterol and heart health. Coming soon!", isComingSoon: true },
  { 
    id: 3, 
    name: "Men's stamina booster juice", 
    price: 1700, 
    originalPrice: 2000, 
    rating: 4.7, 
    reviews: 150, 
    image: MenStaminaBooster, 
    category: 'Sea buckthon jouce man stamina booster ', 
    description: "Powerful booster juice for men's vitality and stamina.",
    variants: [
      { size: "500gm", price: 999 },
      { size: "1kg", price: 1700 }
    ],
    defaultSize: "1kg"
  },
  { id: 4, name: "Organic Sea Buckthorn Juice", price: 1500, originalPrice: 1700, rating: 4.8, reviews: 90, image: SeaBuckthornJuice, category: 'Sea buckthon jouce man stamina booster j', description: "Pure Sea Buckthorn juice rich in Omega fatty acids.", variants: [{ size: "500gm", price: 1500 }], defaultSize: "500gm" },
  { id: 5, name: "Organic Seabuckthorn malt powder", price: 1450, originalPrice: 1450, rating: 4.6, reviews: 65, image: SeaBuckthornMalt, category: 'Sea buckthon ABC malt', description: "Nutritious malt powder with the goodness of Seabuckthorn.", variants: [{ size: "500gm", price: 1450 }], defaultSize: "500gm" },
  { id: 6, name: "Organic Liver Detox Tea", price: 999, originalPrice: 1200, rating: 4.7, reviews: 110, image: LiverDeloxTea, category: 'Liver detox', description: "Herbal tea blend for natural liver detoxification (24 sachets)." },
  { id: 10, name: "Organic kidney detox tea", price: 999, originalPrice: 1200, rating: 4.6, reviews: 95, image: KidneyDetoxTea, category: 'Kidney detox', description: "Gentle herbal tea for kidney cleansing." },
  { id: 11, name: "Kidney Spray (100ml)", price: 999, originalPrice: 999, rating: 4.5, reviews: 40, image: KidneySpray, category: 'Kidney detox', description: "Quick-acting spray for kidney wellness support.", variants: [{ size: "100ml", price: 999 }], defaultSize: "100ml" },
  { id: 12, name: "Organic PCOS Care Tea", price: 1620, originalPrice: 1620, rating: 4.8, reviews: 160, image: PCOSCareTea, category: 'Pcos pcod care tea', description: "Hormonal balance support tea for women. Coming soon!", isComingSoon: true },
  { id: 13, name: "Brahmi tea memory boost with nature", price: 820, originalPrice: 1000, rating: 4.9, reviews: 115, image: BrahmiTea, category: 'Bremi memory booster t', description: "Natural brain tonic and memory enhancement tea." },
  { id: 14, name: "Organic Diabetic Tea benefits", price: 720, originalPrice: 900, rating: 4.7, reviews: 140, image: DiabeticTea, category: 'Dibo care tea', description: "Effective tea blend for managing blood sugar levels." },
  { id: 15, name: "organic slim tea", price: 790, originalPrice: 950, rating: 4.6, reviews: 200, image: SlimTea, category: 'Slim tea', description: "Natural weight management and metabolism support tea." },
  { id: 16, name: "Organic detox tea box", price: 620, originalPrice: 800, rating: 4.7, reviews: 85, image: DetoxTeaBox, category: 'Morning permenent tea', description: "Moringa tea full detox experience in a convenient box." },
  { id: 17, name: "organic moringa soup (500gm)", price: 720, originalPrice: 720, rating: 4.8, reviews: 70, image: MoringaSoup, category: 'Moringa soup', description: "Nutrient-dense organic Moringa soup mix.", variants: [{ size: "500gm", price: 720 }], defaultSize: "500gm" },
  { id: 19, name: "Organic Diagocare Atta packaging (1kg)", price: 290, originalPrice: 290, rating: 4.7, reviews: 55, image: DiagocareAttaPkg, category: 'Dibo care atta flour', description: "Dibo care lite premium packaged atta.", variants: [{ size: "1kg", price: 290 }], defaultSize: "1kg" },
  { id: 20, name: "Moringa Atta (Gluten Free Superfood Flour) - 1kg", price: 360, originalPrice: 360, rating: 4.9, reviews: 140, image: MoringaAttaSuperfood, category: 'Moringa flour', description: "Gluten-free superfood flour enriched with Moringa.", variants: [{ size: "1kg", price: 360 }], defaultSize: "1kg" },
  { id: 21, name: "Moringa Atta gluten-free flour (1kg)", price: 360, originalPrice: 360, rating: 4.8, reviews: 90, image: MoringaAtta, category: 'Moringa flour', description: "Healthy Moringa-based herbal flour.", variants: [{ size: "1kg", price: 360 }], defaultSize: "1kg" },
  { id: 23, name: "Little Champ Atta – Green Variant (1kg)", price: 290, originalPrice: 400, rating: 4.9, reviews: 60, image: LittleChampAttaGreen, category: 'Little cheam flour', description: "ABC variant of Little Champ atta for extra nutrition.", variants: [{ size: "1kg", price: 290 }], defaultSize: "1kg" },
  { id: 28, name: "Organic migraine relief oil pack (100ml)", price: 270, originalPrice: 270, rating: 4.8, reviews: 110, image: MigraineReliefOil, category: 'oil', description: "Soothing oil pack for migraine relief.", variants: [{ size: "100ml", price: 270 }], defaultSize: "100ml" },
  { id: 29, name: "Organic spine spray oil (100ml)", price: 599, originalPrice: 599, rating: 4.7, reviews: 90, image: SpineSprayOil, category: 'oil', description: "Targeted spray oil for spinal comfort.", variants: [{ size: "100ml", price: 599 }], defaultSize: "100ml" },
  { id: 30, name: "Slip Disk pain relief spray (100ml)", price: 450, originalPrice: 550, rating: 4.9, reviews: 130, image: SlipDiskSpray, category: 'oil', description: "Powerful pain relief spray for slip disk issues.", variants: [{ size: "100ml", price: 450 }], defaultSize: "100ml" },
  { id: 32, name: "Organic Post Pregnancy Spray (100ml)", price: 585, originalPrice: 585, rating: 4.8, reviews: 55, image: PostPregnancySpray, category: 'Pcos pcod care juice', description: "Supportive care spray for post-pregnancy recovery.", variants: [{ size: "100ml", price: 585 }], defaultSize: "100ml" },
  { id: 33, name: "Kiran's Organic lumber pain oil spray (100ml)", price: 399, originalPrice: 499, rating: 4.8, reviews: 45, image: LumberPainOil, category: 'oil', description: "Natural lumber pain relief oil spray for back comfort.", variants: [{ size: "100ml", price: 399 }], defaultSize: "100ml" },
  { id: 34, name: "Kiran's Organic pain oil spray (100ml)", price: 399, originalPrice: 499, rating: 4.7, reviews: 30, image: PainOilSpray, category: 'oil', description: "Effective organic pain relief spray for joints and muscles.", variants: [{ size: "100ml", price: 399 }], defaultSize: "100ml" },
  { id: 35, name: "Kiran's Organic Releafon spray (100ml)", price: 399, originalPrice: 499, rating: 4.9, reviews: 55, image: ReleafonSpray, category: 'oil', description: "Quick-acting organic relief spray for various body pains.", variants: [{ size: "100ml", price: 399 }], defaultSize: "100ml" },
  { id: 36, name: "Kiran's organic period cramp relief spray (100ml)", price: 450, originalPrice: 550, rating: 4.9, reviews: 65, image: PeriodCrampSpray, category: 'Pcos pcod care juice', description: "Natural relief spray for period cramps and discomfort.", variants: [{ size: "100ml", price: 450 }], defaultSize: "100ml" },
  { 
    id: 37, 
    name: "Colestro Veda", 
    price: 1450, 
    originalPrice: 1599, 
    rating: 4.8, 
    reviews: 45, 
    image: ColestroVedaImg, 
    category: 'Colestro veda', 
    description: "Ayurvedic formulation for cholesterol management and heart health.",
    variants: [
      { size: "500gm", price: 750 },
      { size: "1kg", price: 1450 }
    ],
    defaultSize: "1kg"
  },
  { id: 38, name: "Herbal ingredients for joint relief (100ml)", price: 180, originalPrice: 250, rating: 4.7, reviews: 38, image: JointReliefImg, category: 'oil', description: "Natural herbal blend for effective joint pain relief.", variants: [{ size: "100ml", price: 180 }], defaultSize: "100ml" },
  { id: 39, name: "Organic Green Juice Body Detox", price: 1450, originalPrice: 999, rating: 4.9, reviews: 52, image: BodyDetoxJuiceImg, category: 'Green juice', description: "Refreshing organic green juice for complete body detoxification." },
  { id: 40, name: "Organic Manjista Tea", price: 550, originalPrice: 950, rating: 4.8, reviews: 29, image: ManjistaTeaImg, category: 'Morning permenent tea', description: "Traditional Manjista tea for blood purification and skin health." },
  { id: 41, name: "Orthain Pain Oil (100ml)", price: 180, originalPrice: 200, rating: 4.9, reviews: 42, image: OrthainPainOilImg, category: 'oil', description: "Effective Ayurvedic oil for long-lasting relief from joint and muscular pain.", variants: [{ size: "100ml", price: 180 }], defaultSize: "100ml" }
];