"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "../../app/page.module.css";

export default function Search() {
  const initState = {
    source: "",
    destination: "",
    date: "",
  };
  const [searchInfo, setSearchInfo] = useState(initState);

  function handlechange(event) {
    setSearchInfo({ ...searchInfo, [event.target.name]: event.target.value });
  }

  function handleclicked() {
    console.log(searchInfo);
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log(searchInfo);
    }
  };

  return (
    <div className={styles.mainslider}>
      <div className="bg-hero-pattern bg-repeat-round bg-cover w-full h-[24rem] flex items-center justify-center pt-8 relative">
        <div className="grid grid-cols-1 gap-5 lg:divide-x-2  lg:grid-cols-4 lg:gap-0">
          <input
            className="placeholder-gray-500 capitalize focus:placeholder-gray-500 placeholder:pl-2 h-[46px] w-[200px] font-semibold pl-2 text-color:white  "
            placeholder="Enter your source"
            type="text"
            name="source"
            onChange={handlechange}
          />

          <input
            className="placeholder-gray-500 capitalize focus:placeholder-gray-500 placeholder:pl-2 h-[46px] w-[200px] font-semibold pl-2 text-color:white"
            placeholder="Enter your destination"
            type="text"
            name="destination"
            onChange={handlechange}
          />

          <input
            className="h-[46px] w-[200px] pl-3 pr-3"
            type="date"
            name="date"
            onChange={handlechange}
          />

          <button
            onClick={handleclicked}
            onKeyDown={handleKeyDown}
            className="h-[46px] w-[200px] bg-red-500 text-white font-bold"
          >
            Search
          </button>
        </div>
      </div>
      <div className={styles.offer}>
        <Image
          src="/first.png"
          width={100}
          height={80}
          alt="first offer"
          priority
        />
        <div>
          <h4>SAVE UPTO RS 250* ON YOUR BUS TICKETS.</h4>
          <p>Book your favourite seat now.</p>
        </div>
      </div>
    </div>
  );
}
