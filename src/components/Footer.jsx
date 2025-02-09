import react from "react";
import logo8x8 from "../Logos/8x8.png";
import logoOkta from "../Logos/okta.png";
import logosf from "../Logos/SF.png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6 md:flex-row md:justify-between md:items-start md:space-y-0">
          {/* Logo and company name */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold">Tools and Links</h2>
          </div>

          {/* Navigation links */}
          <div className="text-center md:text-left">
            <ul className="flex space-x-6">
              <li>
                <a href="https://www.8x8.com" className="hover:text-gray-300">
                  8x8
                </a>
              </li>
              <li>
                <a href="https://8x8.okta.com" className="hover:text-gray-300">
                  OKTA
                </a>
              </li>
              <li>
                <a href="https://support-portal.8x8.com" className="hover:text-gray-300">
                  Knowledge Base
                </a>
              </li>
              <li>
                <a href="https://8x8.cloud.usu.com/knowledgecenter/doc/Aj134bVRyE8Kvm9IZV86rVUie" className="hover:text-gray-300">
                  Contact Directory
                </a>
              </li>
            </ul>
          </div>

          {/* Social media icons */}
          <div>
            <div className="flex justify-center space-x-4">
              <a href="https://support-portal.8x8.com" className="hover:opacity-80">
                <img src={logo8x8} alt="8x8" className="w-10 h-10" />
              </a>
              <a href="https://8x8.okta.com" className="hover:opacity-80">
                <img src={logoOkta} alt="okta" className="w-10 h-10" />
              </a>
              <a href="https://8x8.okta.com/home/salesforce/0oa13xf01tOIsGNwF297/46" className="hover:opacity-80">
                <img src={logosf} alt="SF" className="w-10 h-10" />
              </a>
              <a href="https://ops-tools.8x8.com" className="hover:opacity-80">
                <img src={logo8x8} alt="8x8" className="w-10 h-10" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Jeruz Abiera. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
