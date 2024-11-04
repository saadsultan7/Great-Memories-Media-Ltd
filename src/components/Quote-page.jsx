import { Link } from 'react-router-dom';
import { FaBook, FaSpinner, FaCopy, FaInfoCircle } from 'react-icons/fa';
import { MdDescription } from 'react-icons/md';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
import { CardContent } from './ui/CardContent';
import { Badge } from './ui/Badge';
import { useNavigate } from 'react-router-dom'
import Header from './header/Header';
import Quotes from './Quotes';
export default function QuotePage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50">
        <Header/>
      <div className="container mx-auto px-4 py-8">
            <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold mb-4">Get an Instant Quote</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
                Choose your printing category below to get started. All quotes include shipping and are backed by our quality guarantee.
            </p>
            </div>

          <Quotes/>

            {/* Additional Information Section */}
            <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="flex items-start space-x-3">
            <div className="mt-1">
              <MdDescription className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Family Owned & Operated</h3>
              <p className="text-gray-600 text-sm">
                Based in Phoenix, AZ. 100% of our printing is done in-house and in Arizona.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="mt-1">
              <FaInfoCircle className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Shipping Included</h3>
              <p className="text-gray-600 text-sm">
                All quotes include shipping to arrive by your selected delivery date.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="mt-1">
              <FaInfoCircle className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600 text-sm">
                Every project is backed by our satisfaction guarantee.
              </p>
            </div>
          </div>
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
        </div>
  );
}