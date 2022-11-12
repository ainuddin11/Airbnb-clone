import React, { useState } from "react";
import Image from "next/image";
import { BsSearch, BsGlobe } from "react-icons/bs";
import { RiContactsLine } from "react-icons/ri";
import { AiOutlineBars } from "react-icons/ai";
import { ImUsers } from "react-icons/im";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";

function Header() {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endtDate, setEndDate] = useState(new Date());
  const [nOfGuests, setNOfGuests] = useState(1);

  const handelSelect = (r) => {
    setStartDate(r.selection.startDate);
    setEndDate(r.selection.endDate);
  };
  const selectionRange = {
    startDate: startDate,
    endDate: endtDate,
    key: "selection",
  };
  return (
    <header className="sticky top-0 z-10 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* left  */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto ">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* middle  */}
      <div className=" flex  items-center p-2 md:border-2 rounded-full md:shadow-md md:px-5">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="flex-grow outline-none bg-transparent"
          type="text"
          placeholder="Start your Search"
        />
        <span className="hidden md:inline cursor-pointer bg-red-400 h-8 p-2 rounded-full ">
          <BsSearch />
        </span>
      </div>
      {/* right */}
      <div className="flex items-center justify-end space-x-2 ">
        <p className="hidden md:inline">Become a host </p>
        <span className="cursor-pointer">
          <BsGlobe />
        </span>
        <div className="flex space-x-2 border-2 rounded-full p-3">
          <span className="cursor-pointer">
            <RiContactsLine />
          </span>
          <span className="cursor-pointer">
            <AiOutlineBars />
          </span>
        </div>
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto  ">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#fd5b61"]}
            onChange={handelSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl font-semibold flex-grow">
              Number of Guest
            </h2>
            <span className="text-lg">
              <ImUsers />
            </span>
            <input
              type="number"
              value={nOfGuests}
              onChange={(e) => setNOfGuests(e.target.value)}
              className=" w-12 pl-2 text-lg text-red-400 outline-none"
            />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
