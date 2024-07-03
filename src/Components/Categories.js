import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

export default function Categories() {
  const { search } = useLocation();
  const categories = useSelector((store) => store.global.categories);
  const sortCategoriesByRating = categories.sort((a, b) => {
    return b.rating - a.rating;
  });

  return (
    <span
      className="flex flex-row flex-wrap justify-center gap-4 sm:flex-col sm:items-center"
      id="box-cards"
    >
      {sortCategoriesByRating.slice(0, 4).map((category) => (
        <Link
          to={`/shop/${
            category.code.includes("e:")
              ? `erkek/${category.code.slice(2, category.code.length)}`
              : `kadin/${category.code.slice(2, category.code.length)}`
          }${search}`}
          key={category.id}
          className="relative shadow-lg sm:justify-center shadow-gray flex items-center sm:flex-col sm:w-fit cursor-pointer"
        >
          <img
            className="object-cover w-[250px] h-[250px]"
            src={category.img}
          />
          <button
            id="center"
            className="absolute t-1/2 w-full text-center text-lg sm:text-xl text-white font-bold"
          >
            <div className="flex flex-col bg-white bg-opacity-25">
              {" "}
              <p className="drop-shadow-4xl">{category.title}</p>
              <p className="drop-shadow-4xl">
                {category.gender === "e" ? "Erkek" : "Kadın"}
              </p>
            </div>
          </button>
        </Link>
      ))}
    </span>
  );
}
