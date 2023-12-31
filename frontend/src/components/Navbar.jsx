import { Link } from "react-router-dom";
import { IoReorderThreeOutline } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [isHamburgerClick, setIsHamburgerClick] = useState(false);
  return (
    <header>
      <section className="flex justify-between items-center max-w-[1200px] mx-auto p-[20px] lg:p-[30px]">
        {/* logo & title */}
        <Link className="text-xl font-medium">BreedExplorer</Link>
        {/* Hamburger-Navbar */}
        <Link
          className="lg:hidden text-3xl"
          onClick={() => setIsHamburgerClick(!isHamburgerClick)}
        >
          <IoReorderThreeOutline />
        </Link>
        {/* Navbar */}
        <div className="hidden lg:flex justify-between items-center gap-8">
          <Link className="font-medium text-lg">Home</Link>
          <Link className="font-medium text-lg">About</Link>
          <Link className="font-medium text-lg">Explore</Link>
        </div>
        {/* Hamburger-Dropdown */}
        <div
          className={`${isHamburgerClick ? "flex" : "hidden"
            } justify-center flex-col h-[calc(100vh-70px)] absolute top-[70px] w-[calc(100vw-40px)] items-end gap-5`}
        >
          <Link className="font-medium text-2xl">Home</Link>
          <Link className="font-medium text-2xl">About</Link>
          <Link className="font-medium text-2xl">Explore</Link>
        </div>
      </section>
    </header>
  );
};

export default Navbar;
