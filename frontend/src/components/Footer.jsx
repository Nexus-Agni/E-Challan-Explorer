function Footer() {
  return (
    <div className="bg-gradient-to-r from-[#DE4982] to-[#EC8F4F] w-full">
      <div className="mx-auto mt-12 max-w-7xl bg-gradient-to-r from-[#DE4982] to-[#EC8F4F]">
        <footer className="px-4 py-10">
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            <div className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-bold text-white">Company</p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-200">
                <li>About us</li>
                <li>Company History</li>
                <li>Our Team</li>
                <li>Our Vision</li>
                <li>Press Release</li>
              </ul>
            </div>
            <div className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-bold text-white">Our Stores</p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-200">
                <li>Washington</li>
                <li>New Hampshire</li>
                <li>Maine</li>
                <li>Texas</li>
                <li>Indiana</li>
              </ul>
            </div>
            <div className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-bold text-white">Services</p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-200">
                <li>UI / UX Design</li>
                <li>App Development</li>
                <li>API reference</li>
                <li>API status</li>
                <li>Documentation</li>
              </ul>
            </div>
            <div className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-bold text-white">Legal</p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-200">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookie Policy</li>
                <li>Disclaimer</li>
                <li>Media Policy</li>
              </ul>
            </div>
            <div className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-bold text-white">Social Links</p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-200">
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Linkedin</li>
                <li>YouTube</li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
