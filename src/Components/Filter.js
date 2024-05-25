import { useState } from "react";

export default function Filter() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  //   const filterProducts = () => {
  //     if (selectedFilter === "all") {
  //       return products;
  //     } else {
  //       return products.filter((product) => product.category === selectedFilter);
  //     }
  //   };
  return (
    <>
      <div className="flex items-center gap-2">
        {/* <select
          value="{}"
          onChange={(e) => setSelectedFilter(e.target.value)}
          className="border-gray-400 border px-2 py-2 rounded-md text-sm text-gray-400 bg-[#FAFAFA]"
        >
          //BURAYA FILTER SEÇENEKLERİ GELCCEK
        </select> */}
        <button className="bg-[#23A6F0] text-sm text-white px-6 py-2 rounded-md">
          Filter
        </button>
      </div>
    </>
  );
}
