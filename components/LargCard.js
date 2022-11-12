import Image from "next/image";

function LargCard() {
  return (
    <section className=" relative py-16 cursor-pointer">
      <div className=" relative h-96 min-w-[300px] ">
        <Image
          src="https://images.pexels.com/photos/194094/pexels-photo-194094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className=" absolute top-44 ml-12">
        <h3 className=" text-2xl">The Greatest Outdoors</h3>
        <p>wishlists curaled by Airbnb</p>
        <button className="text-sm bg-slate-900 text-white py-2 px-4 mt-3 rounded-sm">
          Get Ispires
        </button>
      </div>
    </section>
  );
}

export default LargCard;
