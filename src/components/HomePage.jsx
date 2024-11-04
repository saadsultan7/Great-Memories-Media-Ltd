import { Link } from 'react-router-dom'
import { MdAccessTime, MdMail, MdPhone, MdFileUpload } from "react-icons/md"
import {  FaPrint,  } from "react-icons/fa"
import { Button } from './ui/Button'
import { Card } from './ui/Card'
import { Badge } from './ui/Badge'
import { CardContent } from './ui/CardContent'
import { motion } from 'framer-motion'

import React from 'react'
import './TypingText.css'
import { useNavigate } from 'react-router-dom'
import { FaBook, FaSpinner, FaCopy, FaInfoCircle } from 'react-icons/fa';
import Header from './header/header'
import image from '../assets/image2.jpg'
import Footer from './footer/Footer'
export default function HomePage() {
 const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="flex-1">
        {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-pink-200 "> */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-100">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col justify-center space-y-4"
              >
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-dark">
                    Professional Printing Solutions
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    Simply define your printing needs, and we'll handle the rest. Quality printing services available 24/7.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input 
                    type="text" 
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 ease-in-out" 
                    placeholder="Enter Quote ID" 
                  />
                  <Button variant='default' className="transition-all duration-200 ease-in-out hover:bg-primary-dark">
                    View Quote
                  </Button>
                  <Button variant='secondary' className="transition-all duration-200 ease-in-out hover:bg-gray-200">
                    Upload File
                  </Button>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="relative rounded-lg overflow-hidden shadow-xl aspect-ratio-container group">
                  <img 
                    src={image}
                    alt="Printing services illustration"
                    className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-8 lg:grid-cols-3">
              {[
                { title: "Quick Turnaround", icon: MdAccessTime,data: "When you need from just a few copies to a thousand, we are your one stop print shop. We have years of experience and the latest technology allowing us to deliver superior quality without breaking your budget. Unlike many print service providers, we have focused specifically on the short run market and will not try to be everybody's everything. We are experts in our field, we will deliver the best product as well as the best overall value."},
                { title: "Quality Guaranteed", icon: FaPrint,data:"We use only the highest quality papers to insure the highest quality output. Many people think 'Paper is Paper', that can't be further from the truth! We use fresh, ream wrapped, papers designed, and extensively tested, for the digital printing process. These high quality papers allow us a great deal of control in image quality. " },
                { title: "24/7 Support", icon: MdPhone,data:"We pride ourselves on building one of the simplest to navigate websites available. As you have likely seen, many printing websites can build you a quote, however, a number of them 'conveniently' omit charges like setup fees, file upload fees, and shipping costs. What good is a quote if it's not accurate? Our site generates accurate Quotes, including all fees in less than 30 seconds!. Also, our quotes include all shipping costs associated with doing your print job, so the price you see is the price you pay! Our website lists several delivery options so you can choose the correct delivery date to meet your needs." }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full transition-all duration-200 ease-in-out hover:shadow-lg">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                          <item.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold">{item.title}</h3>
                      </div>
                      <p className="text-gray-600 flex-grow">
                        {item.data}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
          <div className="container mx-auto px-4 py-8">
            <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold mb-4">Get an Instant Quote</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
                Choose your printing category below to get started. All quotes include shipping and are backed by our quality guarantee.
            </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          
              <Card className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                   <FaBook className="w-8 h-8 text-primary" />
                 </div>
                    <h2 className="text-xl font-semibold mb-2">Booklets & Catalogs</h2>
                <p className="text-gray-600 mb-4">
                  Professional printing for booklets, catalogs, magazines, and zines with various binding options.
                </p>
              </div>
              <div className="space-y-2 space-x-1 mb-6">
                <Badge variant="secondary">Saddle Stitching</Badge>
                <Badge variant="secondary">Perfect Binding</Badge>
                <Badge variant="secondary">Custom Covers</Badge>
                <Badge variant="secondary">UV Coating</Badge>
                </div>
                {/* <Button className="w-full">Get Booklet Quote</Button> */}
                <Button className="w-full" onClick={() => navigate('/calculator')}  >Get Booklet Quote</Button>
                </CardContent>
            </Card>
          
          {/* Spiral Bound Books Card */}
          <Card className="group hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <FaSpinner className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-xl font-semibold mb-2">Spiral Bound Books</h2>
                <p className="text-gray-600 mb-4">
                  Durable spiral binding perfect for manuals, workbooks, and presentations.
                </p>
              </div>
              <div className="space-y-2 space-x-1 mb-6">
                <Badge variant="secondary">Plastic Coil</Badge>
                <Badge variant="secondary">Custom Covers</Badge>
                <Badge variant="secondary">Cover Scoring</Badge>
                <Badge variant="secondary">Multiple Sizes</Badge>
              </div>
              <Button className="w-full" onClick={() => navigate('/calculator')}  >Get Spiral Bound Quote</Button>
            </CardContent>
          </Card>

          {/* Copy Services Card */}
          <Card className="group hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <FaCopy className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-xl font-semibold mb-2">Copy Services</h2>
                <p className="text-gray-600 mb-4">
                  High-quality color and black & white copies for all your printing needs.
                </p>
              </div>
              <div className="space-y-2 mb-6 space-x-1 " >
                <Badge variant="secondary">Color Copies</Badge>
                <Badge variant="secondary">Black & White</Badge>
                <Badge variant="secondary">Stapled Sets</Badge>
                <Badge variant="secondary">Folded Pieces</Badge>
              </div>
              {/* <Button className="w-full">Get Copy Quote</Button> */}
              <Button className="w-full" onClick={() => navigate('/calculator')}  >Get Copy Quote</Button>
            </CardContent>
          </Card>
         </div>

            {/* Customer Review Banner */}
            <div className="mt-12 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-6">
          <blockquote className="text-center">
            <p className="text-lg font-medium mb-4">
              "The magazine was very well received... You guys were amazingly honest to get it done for me. Thank you very much."
            </p>
            <footer className="text-sm text-gray-600">
              - Randy Taylor, The Copyright Registry
            </footer>
          </blockquote>
            </div>
            </div>
      </main>

   <Footer/>

    </div>
  )
}