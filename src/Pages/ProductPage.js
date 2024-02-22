import Slider from "../Components/Slider";
import productPageSlider1 from "../assets/productpage/single-product-1-cover-2.png";
import productPageThumb1 from "../assets/productpage/single-product-1-thumb-1.png";
import productPageThumb2 from "../assets/productpage/single-product-1-thumb-2.png";
import starsProduct from "../assets/productpage/Vectorstar.svg";
import yeto from "../assets/productpage/card-item111.png";
import yetoo from "../assets/productpage/product-cover-5productpagebest.png";

export default function ProductPage() {
  const slides3 = [
    {
      img: productPageSlider1,
    },
    {
      img: productPageSlider1,
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center gap-5">
        <div className="flex w-3/4 gap-5 font-bold">
          <div className="basis-1/2">
            <Slider className="bg-black xl:hidden" slides={slides3} />
          </div>
          <div className="basis-1/2 flex flex-col text-sm text-[#252B42] text-left gap-5 py-5">
            <p className="text-xl">Floating Phone</p>
            <div className="flex gap-2">
              <div className="flex gap-2">
                <img src={starsProduct} />
                <img src={starsProduct} />
                <img src={starsProduct} />
                <img src={starsProduct} />
                <img src={starsProduct} />
              </div>
              <p className="text-sm text-[#737373]">10 Reviews</p>
            </div>
            <p className="text-[32px]">$1,139.33</p>
            <p>
              {" "}
              Availability: <span className="text-[#23A6F0]">in stock</span>
            </p>
            <p className="text-[#858585] font-normal">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <hr className="text-[#858585] border"></hr>
            <div className="flex gap-2">
              <div className="rounded-full bg-[#23A6F0] w-8 h-8"></div>
              <div className="rounded-full bg-[#2DC071] w-8 h-8"></div>
              <div className="rounded-full bg-[#E77C40] w-8 h-8"></div>
              <div className="rounded-full bg-[#252B42] w-8 h-8"></div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 w-3/4 justify-start">
          <img src={productPageThumb1} />
          <img src={productPageThumb2} />
        </div>
        <div className="flex flex-col w-3/4 text-sm font-bold text-[#737373]">
          <div className="flex justify-center gap-3 ">
            <p>Description</p>
            <p>Additional Information</p>
            <p>
              Reviews <span className="text-[#23856D]">(0)</span>
            </p>
          </div>
          <hr className="text-[#858585] border"></hr>
          <div className="flex justify-center gap-20 py-5 text-[#737373] items-start">
            <img className="basis-1/3" src={yeto} />
            <div className="flex flex-col text-sm basis-1/4 text-left gap-4">
              <h3 className="text-2xl text-[#252B42]">
                the quick fox jumps over
              </h3>
              <p>
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
              <p>
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
              <p>
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col text-sm basis-1/3 gap-2 text-[#737373]">
                <h3 className="text-2xl pb-3 text-[#252B42]">
                  the quick fox jumps over
                </h3>
                <p>the quick fox jumps over the lazy dog</p>
                <p>the quick fox jumps over the lazy dog</p>
                <p>the quick fox jumps over the lazy dog</p>
                <p>the quick fox jumps over the lazy dog</p>
              </div>
              <div className="flex flex-col text-sm basis-1/3 gap-2 text-[#737373]">
                <h3 className="text-2xl py-3 text-[#252B42]">
                  the quick fox jumps over
                </h3>
                <p>the quick fox jumps over the lazy dog</p>
                <p>the quick fox jumps over the lazy dog</p>
                <p>the quick fox jumps over the lazy dog</p>
                <p>the quick fox jumps over the lazy dog</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}