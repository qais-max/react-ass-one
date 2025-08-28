export default function Head() {
  return (
    <div>
      <header className="bg-gray-200">
        <nav className="flex justify-between h-20 p-2 items-center">
          <div className="lg  text-2xl">logo</div>
          <ul className="desk-nav hidden flex lg:flex text-1xl text-green-900 gap-20">
            <li>About</li>
            <li>Contact</li>
            <li>Portfolio</li>
          </ul>
          <div className="mobile-nav md:hidden  mb:block">
            <div className="hamburger h-8 w-8 flex gap-2 flex-col mr-2 ">
              <div className="bars h-1 w-8 bg-black "></div>
              <div className="bars h-1 w-8 bg-black "></div>
              <div className="bars h-1 w-8 bg-black"></div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
