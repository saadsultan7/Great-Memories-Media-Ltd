import { Link } from 'react-router-dom';
import { FaBook, FaSpinner, FaCopy, FaInfoCircle } from 'react-icons/fa';
import { MdDescription } from 'react-icons/md';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
import { CardContent } from './ui/CardContent';
import { Badge } from './ui/Badge';
import { useNavigate } from 'react-router-dom'
import Header from './header/header';
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Booklets & Catalogs Card */}
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
              <div className="space-y-2 mb-6">
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