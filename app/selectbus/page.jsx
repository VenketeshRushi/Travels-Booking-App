"use client";

import { useEffect, useState } from "react";

export default function Selectbus() {
  const initialData1 = {
    SEATER: false,
    SLEEPER: false,
    AC: false,
    NONAC: false,
    DTB6: false,
    DT612: false,
    DT126: false,
    DTA6: false,
    ATB6: false,
    AT612: false,
    AT126: false,
    ATA6: false,
  };
  const [change, setChange] = useState(initialData1);
  useEffect(() => {
    console.log("inside", change);
  }, [change]);
  function handlechange(name) {
    console.log(name);
    setChange({
      ...change,
      [name]: !change[name],
    });
  }
  return (
    <>
      <div className="w-full flex items-start justify-between">
        <div className="border-1 w-1/5 flex flex-col bg-slate-100border border-neutral-400 rounded-xl shadow-3xl drop-shadow-2xl pb-3">
          <h1 className="pl-2 mt-2 mb-2 text-lg font-bold text-gray-900 border-y-2 border-x-2 rounded border-gray-200 pb-1 pt-1">
            FILTERS
          </h1>
          <h1 className="ml-2 mt-1 mb-1 border-b-2 border-gray-400 text-lg font-medium text-gray-900">
            BUS TYPES
          </h1>
          <div className="relative flex items-center justify-between overflow-hidden">
            <span className="ml-2 text-lg font-medium text-gray-700 hover:text-gray-900">
              Seater
            </span>
            <div className="flex">
              <label class="inline-flex relative items-center mr-5 cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={change.SEATER}
                  name="SEATER"
                  readOnly
                />
                <div
                  name="SEATER"
                  onClick={() => handlechange("SEATER")}
                  className="w-11 h-6 bg-gray-900 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
                ></div>
              </label>
            </div>
          </div>
          <div className="relative flex items-center justify-between  overflow-hidden">
            <span className="ml-2 text-lg font-medium text-gray-700 hover:text-gray-900">
              Sleeper
            </span>
            <div className="flex">
              <label class="inline-flex relative items-center mr-5 cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  name="SLEEPER"
                  checked={change.SLEEPER}
                  readOnly
                />
                <div
                  name="SLEEPER"
                  onClick={() => handlechange("SLEEPER")}
                  className="w-11 h-6 bg-gray-900 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
                ></div>
              </label>
            </div>
          </div>
          <div className="relative flex items-center justify-between  overflow-hidden">
            <span className="ml-2 text-lg font-medium text-gray-700 hover:text-gray-900">
              Ac
            </span>
            <div className="flex">
              <label class="inline-flex relative items-center mr-5 cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={change.AC}
                  name="AC"
                  readOnly
                />
                <div
                  name="AC"
                  onClick={() => handlechange("AC")}
                  className="w-11 h-6 bg-gray-900 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
                ></div>
              </label>
            </div>
          </div>
          <div className="relative flex items-center justify-between  overflow-hidden">
            <span className="ml-2 text-lg font-medium text-gray-700 hover:text-gray-900">
              Non-Ac
            </span>
            <div className="flex">
              <label class="inline-flex relative items-center mr-5 cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  name="NONAC"
                  checked={change.NONAC}
                  readOnly
                />
                <div
                  name="NONAC"
                  onClick={() => handlechange("NONAC")}
                  className="w-11 h-6 bg-gray-900 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
                ></div>
              </label>
            </div>
          </div>
          <h1 className="ml-2 mt-4 mb-1 border-b-2 border-gray-400  text-lg font-medium text-gray-900">
            DEPARTURE TIME
          </h1>
          <div className="relative flex items-center justify-between overflow-hidden">
            <span className="ml-2 text-lg font-medium text-gray-700 hover:text-gray-900">
              Before 6 am
            </span>
            <div className="flex">
              <label class="inline-flex relative items-center mr-5 cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={change.DT612}
                  name="DT612"
                  readOnly
                />
                <div
                  name="DT612"
                  onClick={() => handlechange("DT612")}
                  className="w-11 h-6 bg-gray-900 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
                ></div>
              </label>
            </div>
          </div>
          <div className="relative flex items-center justify-between  overflow-hidden">
            <span className="ml-2 text-lg font-medium text-gray-700 hover:text-gray-900">
              6 am to 12 pm
            </span>
            <div className="flex">
              <label class="inline-flex relative items-center mr-5 cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  name="DT612"
                  checked={change.DT612}
                  readOnly
                />
                <div
                  name="DT612"
                  onClick={() => handlechange("DT612")}
                  className="w-11 h-6 bg-gray-900 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
                ></div>
              </label>
            </div>
          </div>
          <div className="relative flex items-center justify-between  overflow-hidden">
            <span className="ml-2 text-lg font-medium text-gray-700 hover:text-gray-900">
              12pm to 6 pm
            </span>
            <div className="flex">
              <label class="inline-flex relative items-center mr-5 cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={change.DT126}
                  name="DT126"
                  readOnly
                />
                <div
                  name="DT126"
                  onClick={() => handlechange("DT126")}
                  className="w-11 h-6 bg-gray-900 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
                ></div>
              </label>
            </div>
          </div>
          <div className="relative flex items-center justify-between  overflow-hidden">
            <span className="ml-2 text-lg font-medium text-gray-700 hover:text-gray-900">
              After 6 pm
            </span>
            <div className="flex">
              <label class="inline-flex relative items-center mr-5 cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  name="DTA6"
                  checked={change.DTA6}
                  readOnly
                />
                <div
                  name="DTA6"
                  onClick={() => handlechange("DTA6")}
                  className="w-11 h-6 bg-gray-900 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
                ></div>
              </label>
            </div>
          </div>
          <h1 className="ml-2 mt-4 mb-1 border-b-2 border-gray-400 text-lg font-medium text-gray-900">
            {" "}
            ARRIVAL TIME
          </h1>
          <div className="relative flex items-center justify-between overflow-hidden">
            <span className="ml-2 text-lg font-medium text-gray-700 hover:text-gray-900">
              Before 6 am
            </span>
            <div className="flex">
              <label class="inline-flex relative items-center mr-5 cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={change.ATB6}
                  name="ATB6"
                  readOnly
                />
                <div
                  name="ATB6"
                  onClick={() => handlechange("ATB6")}
                  className="w-11 h-6 bg-gray-900 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
                ></div>
              </label>
            </div>
          </div>
          <div className="relative flex items-center justify-between  overflow-hidden">
            <span className="ml-2 text-lg font-medium text-gray-700 hover:text-gray-900">
              6 am to 12 pm
            </span>
            <div className="flex">
              <label class="inline-flex relative items-center mr-5 cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  name="AT612"
                  checked={change.AT612}
                  readOnly
                />
                <div
                  name="AT612"
                  onClick={() => handlechange("AT612")}
                  className="w-11 h-6 bg-gray-900 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
                ></div>
              </label>
            </div>
          </div>
          <div className="relative flex items-center justify-between  overflow-hidden">
            <span className="ml-2 text-lg font-medium text-gray-700 hover:text-gray-900">
              12pm to 6 pm
            </span>
            <div className="flex">
              <label class="inline-flex relative items-center mr-5 cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={change.AT126}
                  name="AT126"
                  readOnly
                />
                <div
                  name="AT126"
                  onClick={() => handlechange("AT126")}
                  className="w-11 h-6 bg-gray-900 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
                ></div>
              </label>
            </div>
          </div>
          <div className="relative flex items-center justify-between  overflow-hidden">
            <span className="ml-2 text-lg font-medium text-gray-700 hover:text-gray-900">
              After 6 pm
            </span>
            <div className="flex">
              <label class="inline-flex relative items-center mr-5 cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  name="ATA6"
                  checked={change.ATA6}
                  readOnly
                />
                <div
                  name="ATA6"
                  onClick={() => handlechange("ATA6")}
                  className="w-11 h-6 bg-gray-900 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
                ></div>
              </label>
            </div>
          </div>
        </div>
        <div className="border-2 border-black w-3/4">
          <h1 className="ml-2 text-lg font-medium text-gray-700 hover:text-gray-900">
            Busses will be shown here
          </h1>
        </div>
      </div>
    </>
  );
}
