import React from "react";
// grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14
function Footer() {
  return (
    <div className="flex flex-col justify-between w-[80%] m-auto md:flex-row mb-8 gap-y-6 ">
      <div className="space-y-4 text-xs text-gray-800">
        <h4 className="font-bold">About</h4>
        <p className=" cursor-pointer">How Airbnb works</p>
        <p className=" cursor-pointer">Newsroom</p>
        <p className=" cursor-pointer">Investor</p>
        <p className=" cursor-pointer">Airbnb plus</p>
        <p className=" cursor-pointer">Airbnb Lux</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h4 className="font-bold">Community</h4>
        <p className=" cursor-pointer">Accessibility</p>
        <p className=" cursor-pointer">This is not a real site</p>
        <p className=" cursor-pointer">It's practice site</p>
        <p className=" cursor-pointer">Payment accept</p>
        <p className=" cursor-pointer">Airbnb Lux</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h4 className="font-bold">Host</h4>
        <p className=" cursor-pointer">What's App</p>
        <p className=" cursor-pointer">Facebook</p>
        <p className=" cursor-pointer">LinkedIn</p>
        <p className=" cursor-pointer">Airbnb plus</p>
        <p className=" cursor-pointer">Airbnb Lux</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h4 className="font-bold">Sports</h4>
        <p className=" cursor-pointer">Footbal</p>
        <p className=" cursor-pointer">Cricket</p>
        <p className=" cursor-pointer">Tenise</p>
        <p className=" cursor-pointer">Airbnb plus</p>
        <p className=" cursor-pointer">Bussketbal</p>
      </div>
    </div>
  );
}

export default Footer;
