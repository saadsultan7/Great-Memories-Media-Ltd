import React from 'react'
import Header from './header/header'

export default function Calculator() {
    return (
        <div className="min-h-screen bg-gray-50">
          {/* Header */}
          <Header/>         
    
          {/* Main Content */}
          <main className="max-w-7xl mx-auto p-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-blue-800 mb-6">
                Are you ready to get a quote on High Quality, Professionally Printed Booklets/Magazines?
              </h2>
    
              {/* Benefits Section */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gray-100 p-4 rounded">
                  <h3 className="font-bold text-lg mb-4">10 Great Reasons to use Short Run Printing, Ltd.:</h3>
                  <ol className="list-decimal list-inside space-y-2">
                    <li>Printed in USA (We are located in Sunny Phoenix, AZ!)</li>
                    <li>Family Owned and Operated!</li>
                    <li>Upfront, No Surprises Pricing and Delivery!</li>
                    <li>Shipping Cost Included in Quotes!</li>
                    <li>Receive your Project by your selected date!</li>
                    <li>Professional Printing on New Digital Presses!</li>
                    <li>Digital PDF Proof Included at no cost</li>
                    <li>Quality Guaranteed!</li>
                    <li>Have a question? Real Live people to help!</li>
                    <li>No order too small! (Minimum is 1 copy)</li>
                  </ol>
                </div>
                <div className="bg-gray-100 p-4 rounded">
                  <img src="https://www.shortrunprinting.com/images/BookletsMagazinesCalculatorSample.jpg" alt="Sample magazine covers" className="w-full rounded" />
                </div>
              </div>
    
              {/* Calculator Form */}
              <form className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-blue-800 mb-4">Booklets/Magazines Pricing Calculator:</h3>
                  
                  {/* Pages */}
                  <div className="mb-4">
                    <label className="block mb-2">Number of Pages in PDF File:</label>
                    <input type="number" className="border rounded px-3 py-2" min="1" placeholder='enter pages...' />
                    <p className="text-sm text-gray-600 mt-1">Please count the pages as they are numbered in a typical book and not as sheets of paper or printer spreads.</p>
                  </div>
    
                  {/* Binding Method */}
                  <div className="mb-4">
                    <label className="block mb-2">Binding Method:</label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="radio" name="binding" className="mr-2" defaultChecked />
                        <span>Saddle Stitching</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="binding" className="mr-2" />
                        <span>Perfect Binding</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="binding" className="mr-2" />
                        <span>Spiral/Plastic Coil Binding</span>
                      </label>
                    </div>
                  </div>
    
                  {/* Size */}
                  <div className="mb-4">
                    <label className="block mb-2">Please Select Final Size:</label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="radio" name="size" className="mr-2" defaultChecked />
                        <span>Large - Up To 8.5"x11"</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="size" className="mr-2" />
                        <span>Medium - Up To 6"x9"</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="size" className="mr-2" />
                        <span>Small - Up To 5.5"x8.5"</span>
                      </label>
                    </div>
                  </div>
    
                  {/* Copies */}
                  <div className="mb-4">
                    <label className="block mb-2">How Many Copies Do You Want Printed:</label>
                    <input type="number" className="border rounded px-3 w-52 py-2" min="1" max="2500" placeholder='enter copies...' />
                    <p className="text-sm text-gray-600 mt-1">Minimum 1 Quantity, Maximum 2,500 Quantity</p>
                  </div>
    
                  {/* Paper Type */}
                  <div className="mb-4">
                    <label className="block mb-2">Body Paper:</label>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-bold mb-2">Coated Papers</h4>
                        <div className="space-y-2">
                          <label className="flex items-center">
                            <input type="radio" name="paper" className="mr-2" />
                            <span>House Laser Gloss 100# TEXT</span>
                          </label>
                          <label className="flex items-center">
                            <input type="radio" name="paper" className="mr-2" />
                            <span>House Laser Gloss 80# TEXT</span>
                          </label>
                          <label className="flex items-center">
                            <input type="radio" name="paper" className="mr-2" defaultChecked />
                            <span>House Laser Gloss 70# TEXT</span>
                          </label>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-bold mb-2">Uncoated Papers</h4>
                        <div className="space-y-2">
                          <label className="flex items-center">
                            <input type="radio" name="paper" className="mr-2" />
                            <span>House Opaque 100# TEXT</span>
                          </label>
                          <label className="flex items-center">
                            <input type="radio" name="paper" className="mr-2" />
                            <span>House Opaque 80# TEXT</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
    
                  {/* Printing Options */}
                  <div className="mb-4">
                    <label className="block mb-2">Body Printing:</label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="radio" name="printing" className="mr-2" defaultChecked />
                        <span>Full Color</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="printing" className="mr-2" />
                        <span>Monochrome (Black & White)</span>
                      </label>
                    </div>
                  </div>
    
                  {/* Email */}
                  <div className="mb-4">
                    <label className="block mb-2">If You'd Like an Email Copy, Please Enter Your Address Below:</label>
                    <input type="email" className="border rounded px-3 py-2 w-full" />
                  </div>
    
                  {/* Submit */}
                  <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">
                    Get Price
                  </button>
                </div>
              </form>
            </div>
          </main>
    
          {/* Footer */}
          <footer className="bg-gray-800 text-white mt-8 py-4">
            <div className="max-w-7xl mx-auto text-center text-sm">
              <p>Copyright © 2024 Short Run Printing, Ltd.</p>
              <div className="mt-2">
                <a href="#" className="hover:text-blue-200">Home</a> |
                <a href="#" className="hover:text-blue-200"> About Us</a> |
                <a href="#" className="hover:text-blue-200"> Environmental Impact</a> |
                <a href="#" className="hover:text-blue-200"> Terms of Service</a>
              </div>
            </div>
          </footer>
        </div>
      )
}
