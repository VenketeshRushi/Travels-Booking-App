"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios"
import styles from "../../app/page.module.css";
import { redirects } from "@/next.config";
import { useRouter } from "next/navigation";

export default function Search() {
  const initState = {
    source: "",
    destination: "",
    date: "",
  };
  const [searchInfo, setSearchInfo] = useState(initState);
  const [dataSource, setDataSource] = useState([]);
  const [dataDestination, setDataDestination] = useState([]);

  const router = useRouter()

  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  useEffect(() => {
    if (searchInfo.source === "") {
      return;
    }

    let timerID = setTimeout(() => {
      handleGetRequestsource();
    }, 1000);

    return () => {
      clearTimeout(timerID);
    };
  }, [searchInfo.source]);

  useEffect(() => {
    if (searchInfo.destination === "") {
      return;
    }
    let timerID = setTimeout(() => {
      handleGetRequestdestination();
    }, 1000);

    return () => {
      clearTimeout(timerID);
    };
  }, [searchInfo.destination]);

  const handleGetRequestsource = async () => {
    let { source } = searchInfo
    try {
      let res = await axios.post("/api/home", {
        source,
      }, config);
      res = res.data;
      setDataSource(res);
    } catch (err) {
      console.log(err);
    }
  };

  const handleGetRequestdestination = async () => {
    let { destination } = searchInfo
    try {
      let res = await axios.post("/api/home", {
        destination,
      }, config);
      res = res.data;
      setDataDestination(res)
    } catch (err) {
      console.log(err);
    }
  };

  function handlechange(event) {
    setSearchInfo({ ...searchInfo, [event.target.name]: event.target.value });
  }

  function handleclicked() {
    console.log(searchInfo);
    if (searchInfo.date === "" || searchInfo.destination === "" || searchInfo.source === "") {
      alert("Please Fill All The Details");
      return;
    }
    if (source === destination) {
      alert("Source And Destination Can't Be Same");
      return;
    }
    let { source, destination, date } = searchInfo;
    getcityinfo(source, destination, date);
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log(searchInfo);
      if (searchInfo.date === "" || searchInfo.destination === "" || searchInfo.source === "") {
        alert("Please Fill All The Details");
        return;
      }
      if (searchInfo.source === searchInfo.destination) {
        alert("Source And Destination Can't Be Same");
        return;
      }
      let { source, destination, date } = searchInfo;
      getcityinfo(source, destination, date);
    }
  };


  async function getcityinfo(source, destination, date) {
    try {
      let res = await axios.put("/api/home", {
        source,
        destination,
        date,
      });
      if (res.data.status === 200) {
        router.push({
          pathname: '/selectbus',
          query: { from: source, to: destination, date: date },
        })

      } else {
        setSearchInfo(initState);
        alert("City Not Found");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.mainslider}>
      <div className="bg-hero-pattern bg-repeat-round bg-cover w-full h-[24rem] flex items-center justify-center pt-8 relative">
        <div className="grid grid-cols-1 gap-5 lg:divide-x-2  lg:grid-cols-4 lg:gap-0">
          <input
            className="placeholder-gray-500 capitalize focus:placeholder-gray-500 placeholder:pl-2 h-[46px] w-[240px] font-semibold pl-2 text-color:white"
            placeholder="Enter your source"
            type="text"
            name="source"
            onChange={handlechange}
          />
          {searchInfo.source.length > 0 ?
            <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                <li>
                  <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mockups</button>
                </li>
                <li>
                  <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Templates</button>
                </li>
                <li>
                  <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Design</button>
                </li>
                <li>
                  <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logos</button>
                </li>
              </ul>
            </div> : ""}
          <input
            className="placeholder-gray-500 capitalize focus:placeholder-gray-500 placeholder:pl-2 h-[46px] w-[240px] font-semibold pl-2 text-color:white"
            placeholder="Enter your destination"
            type="text"
            name="destination"
            onChange={handlechange}
          />
          {searchInfo.destination.length > 0 ?
            <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                <li>
                  <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mockups</button>
                </li>
                <li>
                  <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Templates</button>
                </li>
                <li>
                  <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Design</button>
                </li>
                <li>
                  <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logos</button>
                </li>
              </ul>
            </div> : ""}
          <input
            className="h-[46px] w-[240px] pl-3 pr-3 transition-all duration-300 ease-linear"
            type="date"
            name="date"
            onChange={handlechange}
          />

          <button
            onClick={handleclicked}
            onKeyDown={handleKeyDown}
            className="h-[46px] w-[240px] bg-red-500 text-white font-bold"
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
