import { MdAccessTime, MdMail, MdPhone } from "react-icons/md";
import { FaLeaf, FaPrint } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-8 py-6">
      <div className="max-w-7xl mx-auto text-center text-sm space-y-4">
        <p className="flex items-center justify-center space-x-2">
          <FaPrint />
          <span>Copyright © 2024 Great Memories Media Ltd.</span>
        </p>
        <div className="space-x-4">
          <a href="#" className="hover:text-blue-200">Home</a>
          <a href="#" className="hover:text-blue-200">About Us</a>
          <a href="#" className="hover:text-blue-200">Environmental Impact</a>
          <a href="#" className="hover:text-blue-200">Terms of Service</a>
        </div>
        <div className="mt-4 text-xs text-gray-400 space-y-2">
          <p className="flex items-center justify-center space-x-1">
            <MdAccessTime />
            <span>Hours: 8:30AM - 4:30PM M-Thur | 8:30AM - 2:00PM Fri</span>
          </p>
          <p className="flex items-center justify-center space-x-1">
            <MdAccessTime />
            <span>Current Time: 10:18AM</span>
          </p>
        </div>
        <div className="mt-2 space-y-1">
          <p className="flex items-center justify-center space-x-1">
            <MdPhone />
            <a href="tel:+18556295162" className="hover:text-blue-200">855.629.5162</a>
          </p>
          <p className="flex items-center justify-center space-x-1">
            <MdMail />
            <a href="mailto:info@ShortRunPrintingLtd.com" className="hover:text-blue-200">info@ShortRunPrintingLtd.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
