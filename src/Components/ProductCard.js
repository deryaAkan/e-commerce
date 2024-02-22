import React, { useState } from "react";

const ProductCard = ({ product }) => {
  const [productInfo, setProductInfo] = useState(product);

  return (
    <div className="flex flex-col max-w-xs bg-white overflow-hidden font-bold gap-5">
      <img src={productInfo.image} alt="Ürün Resmi" />
      <div className="flex flex-col gap-3">
        <h3 className="text-base text-[#252B42]">{productInfo.name}</h3>
        <p className="text-sm text-[#737373]">{productInfo.category}</p>
        <div className="flex justify-center text-lg text-[#BDBDBD] gap-3">
          <span>{productInfo.oldPrice} TL</span>
          <span className="text-[#23856D]">{productInfo.newPrice} TL</span>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <div className="w-4 h-4 rounded-full bg-[#23A6F0]"></div>
          <div className="w-4 h-4 rounded-full bg-[#23856D]"></div>
          <div className="w-4 h-4 rounded-full bg-[#E77C40]"></div>
          <div className="w-4 h-4 rounded-full bg-[#23856D]"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
