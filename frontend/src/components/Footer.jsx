import Logo from "../assets/Logo.png"

function Footer() {
  return (
    <div className="bg-gradient-to-r from-[#DE4982] to-[#EC8F4F] w-full">
      <div className="mx-auto mt-12 max-w-7xl bg-gradient-to-r from-[#DE4982] to-[#EC8F4F]">
        <footer className="px-4 py-10">
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            <div className="mb-8 lg:mb-0 grid col-span-3">
              <img src={Logo} alt="Logo" className="h-[15rem]"/>
              <p className="text-white mx-auto w-full"> &copy; All rights reserved</p>
            </div>
            <div className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-bold text-white">Social Links</p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-200">
                <li><a href="https://www.instagram.com/satwick_rockzz/" target="_blank">Instagram</a></li>
                <li><a href="https://www.linkedin.com/in/satwick-modekurthi/" target="_blank">Linkedin</a></li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
