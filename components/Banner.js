import Image from "next/image";

function Banner() {
  return (
    <div className=" relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] ">
      <Image
        src="https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
        "
        layout="fill"
        objectFit="cover"
      />

      <div className=" absolute w-full top-1/2 text-white text-center">
        <p className="text-sm sm:text-lg">Not sure wher to go? Perfect.</p>
        <button className="text-purple-500 bg-white px-10 py-4 shadow-md shadow-gray-500 rounded-full hover:shadow-gray-500 hover:shadow-lg active:scale-[.9] mt-3">
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
