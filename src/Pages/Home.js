import Slider from "../Components/Slider";
import ProductCard from "../Components/ProductCard";
import HomePageHero1 from "../assets/homepage/shop-hero-1-product-slide-1.png";
import HomePageHero2 from "../assets/homepage/shop-hero-2-product-slide-2.jpg";
import HomePageHero3 from "../assets/homepage/hero-cover-1.png";
import EditorsPick1 from "../assets/homepage/media bg-covereditorspick1.png";
import EditorsPick2 from "../assets/homepage/media bg-covereditorspick2.png";
import EditorsPick3 from "../assets/homepage/media bg-covereditorspick4.png";
import EditorsPick4 from "../assets/homepage/filtereditorspick3.png";

const slides1 = [HomePageHero1, HomePageHero1, HomePageHero1, HomePageHero1];

const slides2 = [HomePageHero2, HomePageHero2, HomePageHero2, HomePageHero2];

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
    <section className="CommonThings">
      <div>
        <Slider slides={slides1} />
        <main className="flex gap-5">
          <div>
            <img src={EditorsPick1}></img>
          </div>
          <div>
            <img src={EditorsPick2}></img>
          </div>
          <div className="flex flex-col gap-2">
            <img src={EditorsPick3}></img>
            <img src={EditorsPick4}></img>
          </div>
        </main>
        <main className="CommonThings flex flex-wrap gap-10">
      {products.map(product => (
        <ProductCard
          key={product.id}
          name={product.name}
          category={product.category}
          department={product.department}
          price={product.price}
          color={product.color}
        />
      ))}
            </main> 
        <Slider slides={slides2} />
        <main className="flex">
          <img src={HomePageHero3} />
          <div className="text-black">
            <h5>SUMMER 2020</h5>
            <h2>Part of the Neural Universe</h2>
            <h4>
              We know how large objects will act, but things on a small scale.
            </h4>
            <div>
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                BUY NOW
              </button>
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                READ MORE
              </button>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
