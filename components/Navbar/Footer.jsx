export default function Footer() {
  return (
    <div className="border-t border-gray-200 bg-gray-900">
      <div
        className="
        container
        flex flex-col flex-wrap
        px-4
        py-16
        mx-auto
        md:items-center
        lg:items-start
        md:flex-row md:flex-nowrap
      "
      >
        <div className="justify-between w-full mt-4 text-center lg:flex">
          <div className="w-full px-4 lg:w-1/3 md:w-1/2">
            <h2 className="mb-2 font-bold tracking-widest text-white">
              Useful Links
            </h2>
            <ul className="mb-8 space-y-2 text-sm list-none">
              <li>
                <a className="text-white hover:text-red-500">Home</a>
              </li>
              <li>
                <a className="text-white hover:text-red-500">About Us</a>
              </li>
              <li>
                <a className="text-white hover:text-red-500">Blogs</a>
              </li>
              <li>
                <a className="text-white hover:text-red-500">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="w-full px-4 lg:w-1/3 md:w-1/2">
            <h2 className="mb-2 font-bold tracking-widest text-white">
              Useful Links
            </h2>
            <ul className="mb-8 space-y-2 text-sm list-none">
              <li>
                <a className="text-white hover:text-red-500">Home</a>
              </li>
              <li>
                <a className="text-white hover:text-red-500">About Us</a>
              </li>
              <li>
                <a className="text-white hover:text-red-500">Blogs</a>
              </li>
              <li>
                <a className="text-white hover:text-red-500">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="w-full px-4 lg:w-1/3 md:w-1/2">
            <h2 className="mb-2 font-bold tracking-widest text-white">
              Useful Links
            </h2>
            <ul className="mb-8 space-y-2 text-sm list-none">
              <li>
                <a className="text-white hover:text-red-500">Home</a>
              </li>
              <li>
                <a className="text-white hover:text-red-500">About Us</a>
              </li>
              <li>
                <a className="text-white hover:text-red-500">Blogs</a>
              </li>
              <li>
                <a className="text-white hover:text-red-500">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-shrink-0 w-64  mx-auto md:mx-0 md:text-left">
          <p className="border-3 border-white  text-2xl font-bold text-red-500 ">
            RedBus
          </p>
          <p className="mt-2 text-sm text-white">
            Your Travel Partner Always...
          </p>
          <div className="flex items-left justify-center flex-col lg:flex-row mt-4">
            <input
              type="text"
              className="w-max h-auto p-2 text-sm border border-grey-light round text-grey-dark"
              placeholder="Your email address"
            />
            <button className="h-auto mt-2 lg:mt-0 p-3 w-max text-xs text-white bg-red-600 rounded-sm">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
