import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <div className="md:w-2/5 xl:w-1/5 bg-gray-800 ">
        <div className="p-6">
          <p className="uppercase text-white text-2xl tracking-wide font-bold text-center">
            Restaurant App
          </p>
          <p className="mt-3 text-gray-500">Admin You Restaurant: </p>
          <nav className="mt-10">
            <Link
              href="/orders"
              activeClassName="text-yellow-500"
              className="p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900"
            >
              Orders
            </Link>
            <Link
              href="/menu"
              activeClassName="text-yellow-500"
              className="p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900"
            >
              Menu
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavBar;
