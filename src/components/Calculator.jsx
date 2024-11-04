import React, { useEffect, useState } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
export default function Calculator() {
    const [price, setPrice] = useState(null); // State to store the price

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Set a dummy price here, e.g., "$150.00"
        setPrice("$150.00");
        console.log('ll')
        toast.success('its successfully submited', { autoClose: 2000 });

    };

    return (

        <div className="min-h-screen bg-gray-50">
        <ToastContainer
            position="top-center"
            hideProgressBar={true}
            newestOnTop={true}
            autoClose={false}
            pauseOnFocusLoss={false}
            role="alert"
            theme="light"
            className="mx-auto mt-4 flex w-[90%] max-w-[500px] flex-col items-center gap-3 px-3 sm:mt-0 sm:w-max sm:min-w-[300px] sm:gap-0 sm:px-0 md:w-[200px]"
            toastClassName="text-primary-500 gap-2"
          />
            <Header/>
            
            <main className="max-w-7xl mx-auto p-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-bold text-blue-800 mb-6">
                        Are you ready to get a quote on High Quality, Professionally Printed Booklets/Magazines?
                    </h2>

                    {/* Benefits Section */}
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div className="bg-gray-100 p-4 rounded">
                            <h3 className="font-bold text-lg mb-4">10 Great Reasons to use Great Memories Media Ltd:</h3>
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
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <h3 className="text-xl font-bold text-blue-800 mb-4">Booklets/Magazines Pricing Calculator:</h3>
                            
                            {/* Pages */}
                            <div className="mb-4">
                                <label htmlFor="pages" className="block mb-2">Number of Pages in PDF File:</label>
                                <input type="number" id="pages" className="border rounded px-3 py-2" min="1" placeholder='enter pages...' />
                                <p className="text-sm text-gray-600 mt-1">Please count the pages as they are numbered in a typical book and not as sheets of paper or printer spreads.</p>
                            </div>

                            {/* Binding Method */}
                            <div className="mb-4">
                                <label className="block mb-2">Binding Method:</label>
                                <div className="space-y-2">
                                    <label className="flex items-center">
                                        <input type="radio" name="binding" value="saddle" className="mr-2" defaultChecked />
                                        <span>Saddle Stitching</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="radio" name="binding" value="perfect" className="mr-2" />
                                        <span>Perfect Binding</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="radio" name="binding" value="spiral" className="mr-2" />
                                        <span>Spiral/Plastic Coil Binding</span>
                                    </label>
                                </div>
                            </div>

                            {/* Size */}
                            <div className="mb-4">
                                <label className="block mb-2">Please Select Final Size:</label>
                                <div className="space-y-2">
                                    <label className="flex items-center">
                                        <input type="radio" name="size" value="large" className="mr-2" defaultChecked />
                                        <span>Large - Up To 8.5"x11"</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="radio" name="size" value="medium" className="mr-2" />
                                        <span>Medium - Up To 6"x9"</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="radio" name="size" value="small" className="mr-2" />
                                        <span>Small - Up To 5.5"x8.5"</span>
                                    </label>
                                </div>
                            </div>

                            {/* Copies */}
                            <div className="mb-4">
                                <label htmlFor="copies" className="block mb-2">How Many Copies Do You Want Printed:</label>
                                <input type="number" id="copies" className="border rounded px-3 w-52 py-2" min="1" max="2500" placeholder='enter copies...' />
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
                                                <input type="radio" name="paper" value="gloss100" className="mr-2" />
                                                <span>House Laser Gloss 100# TEXT</span>
                                            </label>
                                            <label className="flex items-center">
                                                <input type="radio" name="paper" value="gloss80" className="mr-2" />
                                                <span>House Laser Gloss 80# TEXT</span>
                                            </label>
                                            <label className="flex items-center">
                                                <input type="radio" name="paper" value="gloss70" className="mr-2" defaultChecked />
                                                <span>House Laser Gloss 70# TEXT</span>
                                            </label>
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <h4 className="font-bold mb-2">Uncoated Papers</h4>
                                        <div className="space-y-2">
                                            <label className="flex items-center">
                                                <input type="radio" name="paper" value="opaque100" className="mr-2" />
                                                <span>House Opaque 100# TEXT</span>
                                            </label>
                                            <label className="flex items-center">
                                                <input type="radio" name="paper" value="opaque80" className="mr-2" />
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
                                        <input type="radio" name="printing" value="fullColor" className="mr-2" defaultChecked />
                                        <span>Full Color</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="radio" name="printing" value="monochrome" className="mr-2" />
                                        <span>Monochrome (Black & White)</span>
                                    </label>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="mb-4">
                                <label htmlFor="email" className="block mb-2">If You'd Like an Email Copy, Please Enter Your Address Below:</label>
                                <input type="email" id="email" className="border rounded px-3 py-2 w-full" />
                            </div>

                            {/* Submit */}
                            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">
                                Get Price
                            </button>

                            {/* Display Dummy Price */}
                            {price && (
                                <div className="mt-4 text-lg font-bold text-black">
                                    Estimated Price: {price}
                                </div>
                            )}
                        </div>
                    </form>
                </div>
            </main>

            <Footer/>
        </div>
    )
}
