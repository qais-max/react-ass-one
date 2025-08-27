export default function Head() {
  return (
    <div>
      <header className="bg-gray-200">
        <nav className="flex justify-between h-20 p-2 items-center">
          <div className="lg ">logo</div>
          <ul className="desk-nav hi flex mb:hidden  gap-20">
            <li>About</li>
            <li>Contact</li>
            <li>Portfolio</li>
          </ul>
          <div className="mobile-nav md:hidden  mb:block">
            <div className="hamburger h-20 bg-white  flex">
              <div className="bars "></div>
              <div className="bars"></div>
              <div className="bars"></div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
