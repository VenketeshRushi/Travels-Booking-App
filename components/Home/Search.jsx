"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../../app/page.module.css";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export default function Search() {
  const initState = {
    source: "",
    destination: "",
    date: "",
  };
  const [searchInfo, setSearchInfo] = useState(initState);
  const [dataSource, setDataSource] = useState([]);
  const [dataDestination, setDataDestination] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false); // Track if dropdown should be shown of source
  const [showDropdown1, setShowDropdown1] = useState(false);

  const router = useRouter();

  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  useEffect(() => {
    if (searchInfo.source === "") {
      setDataSource([]);
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
      setDataDestination([]);
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
    let { source } = searchInfo;
    source = source.replace(/\s+/g, "").trim();
    try {
      let res = await axios.post(
        "/api/home",
        {
          source,
        },
        config
      );
      res = res?.data?.cities ?? [];
      setDataSource(res);
    } catch (err) {
      toast.error(err.response.data.message);
      console.log(err);
    }
  };

  const handleGetRequestdestination = async () => {
    let { destination } = searchInfo;
    destination = destination.replace(/\s+/g, "").trim();
    try {
      let res = await axios.post(
        "/api/home",
        {
          destination,
        },
        config
      );
      res = res?.data?.cities ?? [];
      setDataDestination(res);
    } catch (err) {
      toast.error(err.response.data.message);
      console.log(err);
    }
  };

  function handlechangesource(event) {
    setSearchInfo({ ...searchInfo, [event.target.name]: event.target.value });
    setShowDropdown(true); // Show dropdown when input changes
    setShowDropdown1(false);
  }

  function handlechangedestination(event) {
    setSearchInfo({ ...searchInfo, [event.target.name]: event.target.value });
    setShowDropdown1(true);
    setShowDropdown(false);
  }

  function handlechange(event) {
    setSearchInfo({ ...searchInfo, [event.target.name]: event.target.value });
    setShowDropdown(false);
    setShowDropdown1(false);
  }

  function handleclicked() {
    console.log(searchInfo);
    if (
      searchInfo.date === "" ||
      searchInfo.destination === "" ||
      searchInfo.source === ""
    ) {
      toast.error("Please Fill All The Details");
      return;
    }
    if (searchInfo.source === searchInfo.destination) {
      toast.error("Source And Destination Can't Be Same");
      return;
    }
    let { source, destination, date } = searchInfo;
    // source = source.toUpperCase();
    // destination = destination.toUpperCase();
    getcityinfo(source, destination, date);
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log(searchInfo);
      if (
        searchInfo.date === "" ||
        searchInfo.destination === "" ||
        searchInfo.source === ""
      ) {
        toast.error("Please Fill All The Details");
        return;
      }
      if (searchInfo.source === searchInfo.destination) {
        toast.error("Source And Destination Can't Be Same");
        return;
      }
      let { source, destination, date } = searchInfo;
      // source = source.toUpperCase();
      // destination = destination.toUpperCase();
      getcityinfo(source, destination, date);
    }
  };

  async function getcityinfo(source, destination, date) {
    console.log(source, destination, date);
    try {
      let res = await axios.put("/api/bus", {
        source,
        destination,
        date,
      });
      console.log(res);
      if (res.status === 200) {
        console.log("hi");
        console.log(router);
        router.push({
          href: "/selectbus",
          query: { from: source, to: destination, date: date },
        });
        toast.success(res.data.message);
      } else {
        setSearchInfo(initState);
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  }

  const handleButtonClick = (name) => {
    setSearchInfo({ ...searchInfo, source: name });
    setShowDropdown(false); // Hide dropdown when an item is selected in source
  };

  const handleButtonClick1 = (name) => {
    setSearchInfo({ ...searchInfo, destination: name });
    setShowDropdown1(false); // Hide dropdown when an item is selected in destination
  };

  const handleKeyDown1 = (event) => {
    if (event.keyCode === 27) {
      // ESC key
      // Hide dropdown when ESC key is pressed
      if (event.target.name === "source") {
        setShowDropdown(false);
        setSearchInfo(initState);
      } else {
        setShowDropdown1(false);
        setSearchInfo(initState);
      }
    }
  };

  return (
    <div className={styles.mainslider}>
      <div className="bg-hero-pattern bg-repeat-round bg-cover w-full h-[24rem] flex items-center justify-center pt-8 relative">
        <div className="grid grid-cols-1 gap-5 lg:divide-x-1  lg:grid-cols-4 lg:gap-0 lg:gap-x-0">
          <div className="relative">
            <input
              className="placeholder-gray-500 capitalize focus:placeholder-gray-500 placeholder:pl-2 h-[46px] w-[240px] font-semibold pl-2 text-color:white border-r-2 border-white"
              placeholder="Enter your source"
              type="text"
              autoComplete="off"
              autoCorrect="off"
              name="source"
              value={searchInfo.source}
              onChange={handlechangesource}
              onClick={() => setShowDropdown1(false)}
              onKeyDown={handleKeyDown1}
            />
            {searchInfo.source !== "" &&
              showDropdown &&
              dataSource.length > 0 && (
                <div className="z-10 bg-gray-900 rounded-lg shadow dark:bg-gray-700 absolute w-max">
                  <ul
                    className="text-sm text-red-700 dark:text-gray-200 mb-1"
                    aria-labelledby="dropdown-button"
                  >
                    {dataSource.map((ele) => {
                      return (
                        <li key={ele.name}>
                          <button
                            type="button"
                            className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-left"
                            onClick={() => handleButtonClick(ele.name)}
                          >
                            {ele.name}, {ele.state}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
          </div>
          <div className="relative">
            <input
              className="placeholder-gray-500 capitalize focus:placeholder-gray-500 placeholder:pl-2 h-[46px] w-[240px] font-semibold pl-2 text-color:white border-r-2 border-white"
              placeholder="Enter your destination"
              type="text"
              autoComplete="off"
              autoCorrect="off"
              name="destination"
              value={searchInfo.destination}
              onChange={handlechangedestination}
              onClick={() => setShowDropdown(false)}
              onKeyDown={handleKeyDown1}
            />
            {searchInfo.destination !== "" &&
            showDropdown1 &&
            dataDestination.length > 0 ? (
              <div className="z-10 bg-gray-900 rounded-lg shadow dark:bg-gray-700 absolute w-max">
                <ul
                  className="text-sm text-red-700 dark:text-gray-200 mb-1"
                  aria-labelledby="dropdown-button"
                >
                  {dataDestination.map((ele) => {
                    return (
                      <li key={ele.name}>
                        <button
                          type="button"
                          className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-left"
                          onClick={() => handleButtonClick1(ele.name)}
                        >
                          {ele.name}, {ele.state}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : (
              ""
            )}
          </div>
          <input
            className="h-[46px] w-[240px] pl-3 pr-3 transition-all duration-300 ease-linear border-r-2 border-white"
            type="date"
            name="date"
            value={searchInfo.date}
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
