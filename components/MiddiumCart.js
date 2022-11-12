import Image from "next/image";

import img from "../img/product-1.jpeg";

function MiddiumCart({ name, image, price }) {
  const url = image && image.url;
  return (
    <div className=" span-center cursor-pointer hover:scale-105 transform transition duration-300 ease-out ">
      <div className=" relative h-80 w-80">
        <Image
          src={url || img}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
      <h1 className="text-2xl mt-3 capitalize">{name}</h1>
    </div>
  );
}

export default MiddiumCart;
