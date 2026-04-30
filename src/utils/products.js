import BrahmiTea from '../assets/Product/Brahmi tea memory boost with nature.png';
import DiagocareAtta from '../assets/Product/Diagocare Atta.jpeg';
import KidneySpray from '../assets/Product/Kidney Spray.png';
import KidneyDetoxPouch from "../assets/Product/Kiran's Organic Kidney Detox pouch.png";
import LittleChampAttaPkg from '../assets/Product/Little Champ Atta packaging.png';
import LittleChampAttaGreen from '../assets/Product/Little Champ Atta – Green Variant.jpeg';
import LittleChampAtta from '../assets/Product/Little Champ Atta.jpeg';
import ManthriveCapsule from '../assets/Product/Manthrive Capsule.png';
import ManthriveOil from '../assets/Product/Manthrive Oil.png';
import ManthriveSyrup from '../assets/Product/Manthrive Syrup.png';
import MoringaAttaSuperfood from '../assets/Product/Moringa Atta (Gluten Free Superfood Flour).jpeg';
import MoringaAtta from '../assets/Product/Moringa Atta gluten-free flour.png';
import DiabeticTea from '../assets/Product/Organic Diabetic Tea benefits.png';
import DiagocareAttaPkg from '../assets/Product/Organic Diagocare Atta packaging.png';
import GlowVeda from '../assets/Product/Organic Glow Veda products.png';
import LiverDetoxTea from '../assets/Product/Organic Liver Detox Tea.png';
import PCOSCareTea from '../assets/Product/Organic PCOS Care Tea.png';
import PostPregnancySpray from '../assets/Product/Organic Post Pregnancy Spray.png';
import SeaBuckthornJuice from '../assets/Product/Organic Sea Buckthorn Juice.png';
import SeaBuckthornMalt from '../assets/Product/Organic Seabuckthorn malt powder.png';
import DetoxTeaBox from '../assets/Product/Organic detox tea box.png';
import PCOSGreenJuice from '../assets/Product/Organic green juice for PCOS.png';
import KidneyDetoxBottles from '../assets/Product/Organic kidney detox bottles.png';
import KidneyDetoxTea from '../assets/Product/Organic kidney detox tea.png';
import MigraineReliefOil from '../assets/Product/Organic migraine relief oil pack.png';
import SpineSprayOil from '../assets/Product/Organic spine spray oil.png';
import SlipDiskSpray from '../assets/Product/Slip Disk pain relief spray.png';
import GlowingSkinEffervescence from '../assets/Product/Strawberry lemon effervescence for glowing skin.png';
import ZenoraLiverDetoxTea from '../assets/Product/Zenora Organic Liver Detox Tea.png';
import MenStaminaBooster from "../assets/Product/men's stamina booster juice.png";
import MoringaSoup from '../assets/Product/organic moringa soup.png';
import SlimTea from '../assets/Product/organic slim tea.png';

export const categories = [
  'All',
  'Green juice',
  'Colestro veda',
  'Pcos pcod care juice',
  'Sea buckthon jouce man stamina booster j',
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
  'Green juice': ['Organic green juice for PCOS'],
  'Colestro veda': ['Organic Glow Veda products', 'Strawberry lemon effervescence for glowing skin'],
  'Pcos pcod care juice': ['Organic green juice for PCOS', 'Organic Post Pregnancy Spray'],
  'Sea buckthon jouce man stamina booster j': ['men\'s stamina booster juice', 'Organic Sea Buckthorn Juice', 'Manthrive Capsule', 'Manthrive Syrup'],
  'Sea buckthon ABC malt': ['Organic Seabuckthorn malt powder'],
  'Liver detox': ['Organic Liver Detox Tea', 'Zenora Organic Liver Detox Tea'],
  'Kidney detox': ['Kiran\'s Organic Kidney Detox pouch', 'Organic kidney detox bottles', 'Organic kidney detox tea', 'Kidney Spray'],
  'Pcos pcod care tea': ['Organic PCOS Care Tea'],
  'Bremi memory booster t': ['Brahmi tea memory boost with nature'],
  'Dibo care tea': ['Organic Diabetic Tea benefits'],
  'Slim tea': ['organic slim tea'],
  'Morning permenent tea': ['Organic detox tea box'],
  'Moringa soup': ['organic moringa soup'],
  'Dibo care atta flour': ['Diagocare Atta', 'Organic Diagocare Atta packaging'],
  'Moringa flour': ['Moringa Atta (Gluten Free Superfood Flour)', 'Moringa Atta gluten-free flour'],
  'Little cheam flour': ['Little Champ Atta packaging', 'Little Champ Atta – Green Variant', 'Little Champ Atta'],
  'oil': ['Manthrive Oil', 'Organic migraine relief oil pack', 'Organic spine spray oil', 'Slip Disk pain relief spray']
};

export const allProducts = [
  { id: 1, name: "Organic green juice for PCOS", price: 599, originalPrice: 799, rating: 4.8, reviews: 120, image: PCOSGreenJuice, category: 'Green juice', description: "Natural green juice specifically formulated for PCOS management." },
  { id: 2, name: "Organic Glow Veda products", price: 899, originalPrice: 1199, rating: 4.9, reviews: 85, image: GlowVeda, category: 'Colestro veda', description: "Ayurvedic solution for cholesterol and heart health." },
  { id: 3, name: "men's stamina booster juice", price: 699, originalPrice: 899, rating: 4.7, reviews: 150, image: MenStaminaBooster, category: 'Sea buckthon jouce man stamina booster j', description: "Powerful booster juice for men's vitality and stamina." },
  { id: 4, name: "Organic Sea Buckthorn Juice", price: 750, originalPrice: 950, rating: 4.8, reviews: 90, image: SeaBuckthornJuice, category: 'Sea buckthon jouce man stamina booster j', description: "Pure Sea Buckthorn juice rich in Omega fatty acids." },
  { id: 5, name: "Organic Seabuckthorn malt powder", price: 450, originalPrice: 550, rating: 4.6, reviews: 65, image: SeaBuckthornMalt, category: 'Sea buckthon ABC malt', description: "Nutritious malt powder with the goodness of Seabuckthorn." },
  { id: 6, name: "Organic Liver Detox Tea", price: 399, originalPrice: 499, rating: 4.7, reviews: 110, image: LiverDetoxTea, category: 'Liver detox', description: "Herbal tea blend for natural liver detoxification." },
  { id: 7, name: "Zenora Organic Liver Detox Tea", price: 420, originalPrice: 520, rating: 4.8, reviews: 45, image: ZenoraLiverDetoxTea, category: 'Liver detox', description: "Premium organic tea for liver health support." },
  { id: 8, name: "Kiran's Organic Kidney Detox pouch", price: 499, originalPrice: 650, rating: 4.9, reviews: 130, image: KidneyDetoxPouch, category: 'Kidney detox', description: "Specialized kidney detox herbal blend." },
  { id: 9, name: "Organic kidney detox bottles", price: 550, originalPrice: 700, rating: 4.7, reviews: 75, image: KidneyDetoxBottles, category: 'Kidney detox', description: "Convenient kidney detox liquid formulation." },
  { id: 10, name: "Organic kidney detox tea", price: 350, originalPrice: 450, rating: 4.6, reviews: 95, image: KidneyDetoxTea, category: 'Kidney detox', description: "Gentle herbal tea for kidney cleansing." },
  { id: 11, name: "Kidney Spray", price: 299, originalPrice: 399, rating: 4.5, reviews: 40, image: KidneySpray, category: 'Kidney detox', description: "Quick-acting spray for kidney wellness support." },
  { id: 12, name: "Organic PCOS Care Tea", price: 450, originalPrice: 550, rating: 4.8, reviews: 160, image: PCOSCareTea, category: 'Pcos pcod care tea', description: "Hormonal balance support tea for women." },
  { id: 13, name: "Brahmi tea memory boost with nature", price: 380, originalPrice: 480, rating: 4.9, reviews: 115, image: BrahmiTea, category: 'Bremi memory booster t', description: "Natural brain tonic and memory enhancement tea." },
  { id: 14, name: "Organic Diabetic Tea benefits", price: 399, originalPrice: 499, rating: 4.7, reviews: 140, image: DiabeticTea, category: 'Dibo care tea', description: "Effective tea blend for managing blood sugar levels." },
  { id: 15, name: "organic slim tea", price: 350, originalPrice: 450, rating: 4.6, reviews: 200, image: SlimTea, category: 'Slim tea', description: "Natural weight management and metabolism support tea." },
  { id: 16, name: "Organic detox tea box", price: 499, originalPrice: 600, rating: 4.7, reviews: 85, image: DetoxTeaBox, category: 'Morning permenent tea', description: "Full detox experience in a convenient tea box." },
  { id: 17, name: "organic moringa soup", price: 250, originalPrice: 350, rating: 4.8, reviews: 70, image: MoringaSoup, category: 'Moringa soup', description: "Nutrient-dense organic Moringa soup mix." },
  { id: 18, name: "Diagocare Atta", price: 350, originalPrice: 450, rating: 4.7, reviews: 105, image: DiagocareAtta, category: 'Dibo care atta flour', description: "Specialized atta for diabetic health management." },
  { id: 19, name: "Organic Diagocare Atta packaging", price: 360, originalPrice: 460, rating: 4.7, reviews: 55, image: DiagocareAttaPkg, category: 'Dibo care atta flour', description: "Premium packaged Diagocare atta." },
  { id: 20, name: "Moringa Atta (Gluten Free Superfood Flour)", price: 420, originalPrice: 550, rating: 4.9, reviews: 140, image: MoringaAttaSuperfood, category: 'Moringa flour', description: "Gluten-free superfood flour enriched with Moringa." },
  { id: 21, name: "Moringa Atta gluten-free flour", price: 400, originalPrice: 500, rating: 4.8, reviews: 90, image: MoringaAtta, category: 'Moringa flour', description: "Healthy Moringa-based gluten-free flour." },
  { id: 22, name: "Little Champ Atta packaging", price: 299, originalPrice: 399, rating: 4.9, reviews: 180, image: LittleChampAttaPkg, category: 'Little cheam flour', description: "Nutritious atta for growing children." },
  { id: 23, name: "Little Champ Atta – Green Variant", price: 320, originalPrice: 420, rating: 4.9, reviews: 60, image: LittleChampAttaGreen, category: 'Little cheam flour', description: "Green variant of Little Champ atta for extra nutrition." },
  { id: 24, name: "Little Champ Atta", price: 280, originalPrice: 380, rating: 4.8, reviews: 150, image: LittleChampAtta, category: 'Little cheam flour', description: "Standard Little Champ multigrain atta." },
  { id: 25, name: "Manthrive Oil", price: 450, originalPrice: 599, rating: 4.7, reviews: 85, image: ManthriveOil, category: 'oil', description: "Vitality and wellness oil for men." },
  { id: 26, name: "Manthrive Capsule", price: 550, originalPrice: 750, rating: 4.8, reviews: 95, image: ManthriveCapsule, category: 'Sea buckthon jouce man stamina booster j', description: "Wellness capsules for men's health." },
  { id: 27, name: "Manthrive Syrup", price: 380, originalPrice: 480, rating: 4.7, reviews: 40, image: ManthriveSyrup, category: 'Sea buckthon jouce man stamina booster j', description: "Health syrup for overall vitality." },
  { id: 28, name: "Organic migraine relief oil pack", price: 350, originalPrice: 450, rating: 4.8, reviews: 110, image: MigraineReliefOil, category: 'oil', description: "Soothing oil pack for migraine relief." },
  { id: 29, name: "Organic spine spray oil", price: 399, originalPrice: 499, rating: 4.7, reviews: 90, image: SpineSprayOil, category: 'oil', description: "Targeted spray oil for spinal comfort." },
  { id: 30, name: "Slip Disk pain relief spray", price: 450, originalPrice: 550, rating: 4.9, reviews: 130, image: SlipDiskSpray, category: 'oil', description: "Powerful pain relief spray for slip disk issues." },
  { id: 31, name: "Strawberry lemon effervescence for glowing skin", price: 599, originalPrice: 799, rating: 4.9, reviews: 210, image: GlowingSkinEffervescence, category: 'Colestro veda', description: "Effervescent tablets for natural skin glow." },
  { id: 32, name: "Organic Post Pregnancy Spray", price: 480, originalPrice: 580, rating: 4.8, reviews: 55, image: PostPregnancySpray, category: 'Pcos pcod care juice', description: "Supportive care spray for post-pregnancy recovery." }
];
