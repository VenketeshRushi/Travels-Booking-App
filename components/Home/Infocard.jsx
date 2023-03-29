import Image from "next/image";

export default function Infocard() {
  const stats = [
    {
      id: 1,
      name: "redBus is trusted by over 36 million happy customers globally",
      value: "36 M",
      extra: "CUSTOMERS",
    },
    {
      id: 2,
      name: "network of over 3500 bus operators worldwide",
      value: "3500",
      extra: "OPERATORS",
    },
    {
      id: 3,
      name: "Over 220 million trips booked using redBus",
      value: "220+ M",
      extra: "BUS TICKETS",
    },
  ];
  return (
    <>
      <div className="mt-6 mb-8 w-2xl lg:w-3/6 m-auto flex flex-row gap-6 flex-wrap items-center justify-evenly">
        <article className="flex max-w-xl rounded bg-white flex-col items-center justify-between shadow-3xl p-5 px-10 transform  hover:scale-110 transition duration-200">
          <h3 className="mt-3 mb-3 text-xs text-center text-gray-900 ">
            Save upto Rs 300 on Ap and TS route
          </h3>

          <Image
            src="/superhit.png"
            width={200}
            height={200}
            priority
            alt="superhit"
          />

          <h3 className="mt-4 w-max text-xs font-semibold text-gray-900">
            <p>Use Code SUPERHIT</p>
          </h3>
        </article>
        <article className="flex max-w-xl rounded bg-white flex-col items-center justify-between shadow-3xl p-5 px-10 transform  hover:scale-110 transition duration-200">
          <h3 className="mt-3 mb-3 text-xs text-center text-gray-900">
            Save upto Rs 300 on Ap and TS route
          </h3>

          <Image
            src="/rb200.png"
            width={200}
            height={200}
            priority
            alt="superhit"
          />

          <h3 className="mt-4 w-max text-xs text-center font-semibold text-gray-900">
            <p>Use Code SUPERHIT</p>
          </h3>
        </article>
      </div>
      <div className="w-full bg-amber-50 pt-5 pb-8">
        <div className=" mx-auto w-full lg:mx-0 flex flex-col items-center">
          <div>
            <Image
              src="/promise.png"
              className="w-[100px] h-[100px]"
              width={100}
              height={100}
              priority
              alt="superhit"
            />
          </div>
          <h2 className="mt-3 text-2xl text-center font-semibold tracking-tight text-gray-600 sm:text-3xl">
            WE PROMISE TO DELIVER
          </h2>
        </div>
        <div className="mt-6 flex items-center justify-center w-full">
          <div className=" max-w-4xl bg-white grid gap-y-0 grid-cols-1 text-center lg:grid-cols-3 ">
            <article className="border-1 border-gray-600 flex max-w-xs  bg-white flex-col items-center shadow-3xl p-10">
              <Image
                className="w-[110px] h-[90px]"
                src="/1.png"
                width={100}
                height={100}
                priority
                alt="superhit"
              />
              <h3 className="mt-7 tracking-wide leading-10 mb-2 text-xs text-center text-gray-900 uppercase">
                UNMATCHED BENEFITS
              </h3>

              <h3 className="text-xs font-semibold text-gray-900">
                <p>
                  We take care of your travel beyond ticketing by providing you
                  with innovative and unique benefits.
                </p>
              </h3>
            </article>
            <article className="border-1 border-gray-600 flex max-w-xs  bg-white flex-col items-center shadow-3xl p-10">
              <Image
                className="w-[110px] h-[90px]"
                src="/2.png"
                width={100}
                height={90}
                priority
                style={{ objectFit: "contain" }}
                alt="superhit"
              />
              <h3 className="mt-7 tracking-wide leading-10 mb-2 text-xs text-center text-gray-900 uppercase">
                SUPERIOR CUSTOMER SERVICE
              </h3>

              <h3 className="text-xs text-center font-semibold text-gray-900">
                <p>
                  We put our experience and relationships to good use and are
                  available to solve your travel issues.
                </p>
              </h3>
            </article>
            <article className="border-1 border-gray-600 flex max-w-xs  bg-white flex-col items-center shadow-3xl p-10">
              <Image
                className="w-[100px] h-[90px]"
                src="/3.png"
                width={110}
                height={100}
                priority
                alt="superhit"
              />

              <h3 className="mt-7 tracking-wide mb-2 leading-10 text-xs text-center text-gray-900 uppercase">
                LOWEST PRICES
              </h3>

              <h3 className="text-xs text-center font-semibold text-gray-900">
                <p>
                  We always give you the lowest price with the best partner
                  offers.
                </p>
              </h3>
            </article>
          </div>
        </div>
      </div>
      <section className="mb-12 mt-8 text-gray-800 border-b-2 border-gray-300 text-center">
        <h2 className="text-3xl text-gray-700 mb-10">AWARDS & RECOGNITION</h2>
        <div className="grid gap-x-6 lg:gap-x-12 md:grid-cols-3">
          <div className="mb-24 md:mb-0">
            <div className="rounded-lg h-full block bg-white">
              <div className="flex justify-center">
                <div className="flex justify-center">
                  <Image
                    src="/Business_Standard1.png"
                    className="mx-auto"
                    alt="Business_Standard1"
                    width={250}
                    height={200}
                  />
                </div>
              </div>
              <h5 className="text-lg mt-0 mb-4">Most Innovaive Company</h5>
            </div>
          </div>
          <div className="mb-24 md:mb-0">
            <div className="rounded-lg h-full block bg-white">
              <div className="flex justify-center">
                <div className="flex justify-center">
                  <Image
                    src="/Brand_Trust_Report.png"
                    className="mx-auto"
                    alt="Brand_Trust_Report"
                    width={250}
                    height={200}
                  />
                </div>
              </div>
              <h5 className="text-lg mt-8 mb-4">Most Trusted Brand</h5>
            </div>
          </div>
          <div className="mb-24 md:mb-0">
            <div className="rounded-lg h-full block bg-white">
              <div className="flex justify-center">
                <div className="flex justify-center">
                  <Image
                    src="/Eye_for_Travel1.png"
                    className="mx-auto"
                    alt="Eye_for_Travel1"
                    width={250}
                    height={200}
                  />
                </div>
              </div>
              <h5 className="text-lg mt-9 mb-4">Mobile Innovation Award</h5>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-white border-b-2 pb-14 border-gray-300">
        <h2 className="mt-3 mb-10 text-2xl text-center font-semibold tracking-tight text-gray-600 sm:text-3xl">
          THE NUMBERS ARE GROWING!
        </h2>
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-y-16 gap-x-8 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="mx-auto flex max-w-xs flex-col gap-y-0"
              >
                <p className="text-base leading-7 text-gray-600">
                  {stat.extra}
                </p>
                <div>
                  <dd className="order-first text-2xl tracking-tight text-red-500 sm:text-5xl">
                    {stat.value}
                  </dd>

                  <dt className="mt-2 text-base leading-7 text-gray-600">
                    {stat.name}
                  </dt>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <footer className="bg-amber-50 pt-6 pb-6 text-center text-gray-700">
        <div className="container p-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4">
            <div className="mb-6">
              <h5 className="mb-2.5 font-bold uppercase ">Top Bus Routes</h5>
              <ul className="mb-0 list-none">
                <li>
                  <p>Hyderabad to Bangalore Bus</p>
                </li>
                <li>
                  <p>Bangalore to Chennai Bus</p>
                </li>
                <li>
                  <p>Pune to Bangalore Bus</p>
                </li>
                <li>
                  <p>Mumbai to Bangalore Bus</p>
                </li>
              </ul>
            </div>
            <div className="mb-6">
              <h5 className="mb-2.5 font-bold uppercase ">Top Cities</h5>
              <ul className="mb-0 list-none">
                <li>
                  <p>Hyderabad Bus Tickets</p>
                </li>
                <li>
                  <p>Bangalore Bus Tickets</p>
                </li>
                <li>
                  <p>Chennai Bus Tickets</p>
                </li>
                <li>
                  <p>Pune Bus Tickets</p>
                </li>
              </ul>
            </div>
            <div className="mb-6">
              <h5 className="mb-2.5 font-bold uppercase ">Other</h5>
              <ul className="mb-0 list-none">
                <li>
                  <p>TSRTC</p>
                </li>
                <li>
                  <p>SBSTC</p>
                </li>
                <li>
                  <p>RSRTC</p>
                </li>
                <li>
                  <p>KeralaRTC</p>
                </li>
              </ul>
            </div>
            <div className="mb-6">
              <h5 className="mb-2.5 font-bold uppercase ">
                Tempo Traveller in Cities
              </h5>
              <ul className="mb-0 list-none">
                <li>
                  <p>Tempo traveller in Bangalore</p>
                </li>
                <li>
                  <p>Tempo traveller in Chennai</p>
                </li>
                <li>
                  <p>Tempo traveller in Mumbai</p>
                </li>
                <li>
                  <p>Tempo traveller in Hydrabad</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
