import Slider from "../Components/Slider";
import ProductCard from "../Components/ProductCard";
import HomePageHero1 from "../assets/homepage/shop-hero-1-product-slide-1.png";
import HomePageHero2 from "../assets/homepage/shop-hero-2-product-slide-2.jpg";
import HomePageHero3 from "../assets/homepage/hero-cover-1.png";
import EditorsPick1 from "../assets/homepage/media bg-covereditorspick1.png";
import EditorsPick2 from "../assets/homepage/media bg-covereditorspick2.png";
import EditorsPick3 from "../assets/homepage/media bg-covereditorspick4.png";
import EditorsPick4 from "../assets/homepage/filtereditorspick3.png";
import bestSeller1 from '../assets/homepage/fixed-heightbestseller1.png';

const slides1 = [
  { img: HomePageHero1, dateHero: 'SUMMER 2020', title: 'NEW COLLECTION', description: 'We know how large objects will act, but things on a small scale.' },
  {img: HomePageHero1, dateHero: 'SUMMER 2020', title: 'NEW COLLECTION', description: 'We know how large objects will act, but things on a small scale.' },
  { img: HomePageHero1, dateHero: 'SUMMER 2020', title: 'NEW COLLECTION', description: 'We know how large objects will act, but things on a small scale.' }
];

const slides2 = [
  { img: HomePageHero2, title: 'Slide 1', description: 'Açıklama 1' },
  { img: HomePageHero2, title: 'Slide 2', description: 'Açıklama 2' },
  { img: HomePageHero2, title: 'Slide 3', description: 'Açıklama 3' }
];
export default function Header() {
  const products = Array.from({ length: 8 }, (_, index) => ({
    id: index + 1,
    name: `Ürün ${index + 1}`,
    category: "Graphic Design",
    department: "English Department",
    price: Math.floor(Math.random() * 100) + 10,
    color: ["red", "blue", "green", "yellow"][Math.floor(Math.random() * 4)],
  }));

  return (
    <main className="CommonThings">
      <div className="flex flex-col">
        <Slider className="bg-black" slides={slides1} />
        <section className="CommonThings flex gap-5 flex-col bg-[#FAFAFA]">
          <div>
            <h2 className="font-bold text-2xl text-black">EDITOR'S PICK</h2>
            <p className="font-normal text-sm text-gray-400">
              Problems trying to resolve the conflict between
            </p>
          </div>
          <div className="flex gap-8">
            <div>
              <img src={EditorsPick1}></img>
            </div>
            <div>
              <img src={EditorsPick2}></img>
            </div>
            <div className="flex flex-col gap-4">
              <img src={EditorsPick3}></img>
              <img src={EditorsPick4}></img>
            </div>
          </div>
        </section>
        <section className="CommonThings flex flex-wrap gap-10">
          <div>
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-xl text-gray-400 ">
              Featured Products
            </h2>
            <h2 className="font-bold text-2xl text-black">
              BESTSELLER PRODUCTS
            </h2>
            <p className="font-normal text-sm text-gray-400">
              Problems trying to resolve the conflict between
            </p>
          </div>
          <div className="CommonThings flex flex-wrap gap-10">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                category={product.category}
                department={product.department}
                price={product.price}
                color={product.color}
              />
            ))}
          </div>
          </div>
        </section>
        <div className="flex flex-col">
        <Slider className="bg-[#23856D]" slides={slides2} />
        <section className="flex">
          <img src={HomePageHero3} />
          <div className="text-black flex flex-col gap-3 justify-center items-start">
            <h5 className="text-base font-bold text-gray-400">SUMMER 2020</h5>
            <h2 className="text-[40px] font-bold">Part of the Neural Universe</h2>
            <h4 className=" text-[#737373] font-normal">
              We know how large objects will act, but things on a small scale.
            </h4>
            <div className="flex gap-2">
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                BUY NOW
              </button>
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                READ ME
      </button>
            </div>
          </div>
        </section>
        </div>
      </div>
    </main>
  );
}
