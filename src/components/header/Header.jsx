import React from 'react'
import { Link } from 'react-router-dom'
import { MdAccessTime, MdMail, MdPhone, MdFileUpload } from "react-icons/md"
import { FaQuoteLeft, FaPrint, FaLeaf, FaGooglePlay, FaApple } from "react-icons/fa"
export default function Header() {
  return (
     <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" to="/">
          <FaPrint className="h-6 w-6" />
          <div className="text-lg font-mono text-gray-800 typing-container">
            <span className="m-2 text-xl font-bold">Short Run Printing, Ltd.</span>
          </div>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4 relative group" to="/quote">
            <span className="relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 inline-block">
              Get a Quote
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 opacity-0 group-hover:opacity-75 blur-lg transition-all duration-300 group-hover:scale-125"></span>
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 relative group" to="/services">
            <span className="relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 inline-block">
              FAQ/Resources
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-500 opacity-0 group-hover:opacity-75 blur-lg transition-all duration-300 group-hover:scale-125"></span>
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 relative group" to="/services">
            <span className="relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 inline-block">
              Services
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-red-500 opacity-0 group-hover:opacity-75 blur-lg transition-all duration-300 group-hover:scale-125"></span>
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 relative group" to="/about">
            <span className="relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 inline-block">
              About Us
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-cyan-500 opacity-0 group-hover:opacity-75 blur-lg transition-all duration-300 group-hover:scale-125"></span>
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 relative group" to="/contact">
            <span className="relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 inline-block">
              Print Samples
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-pink-400 to-orange-500 opacity-0 group-hover:opacity-75 blur-lg transition-all duration-300 group-hover:scale-125"></span>
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 relative group" to="/contact">
            <span className="relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 inline-block">
              How To Order
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 opacity-0 group-hover:opacity-75 blur-lg transition-all duration-300 group-hover:scale-125"></span>
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 relative group" to="/contact">
            <span className="relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 inline-block">
              My Account
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-red-400 to-purple-500 opacity-0 group-hover:opacity-75 blur-lg transition-all duration-300 group-hover:scale-125"></span>
          </Link>
        </nav>
      </header>
  )
}
