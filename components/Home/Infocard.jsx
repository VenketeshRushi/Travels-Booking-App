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
      <div className="mt-6 mb-8 w-2xl lg:w-3/6 w-2xl m-auto flex flex-row gap-6 flex-wrap items-center justify-evenly">
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
      <div className="w-full bg-orange-100 pt-5 pb-5">
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
      <div className="bg-white py-4">
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
    </>
  );
}
