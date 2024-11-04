import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaBook, FaSpinner, FaCopy, FaInfoCircle } from 'react-icons/fa';
import { Button } from './ui/Button'
import { Card } from './ui/Card'
import { Badge } from './ui/Badge'
import { CardContent } from './ui/CardContent'
export default function Quotes() {
    const navigate = useNavigate()
  return (
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          
          <Card className="group hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
               <FaBook className="w-8 h-8 text-primary" />
             </div>
                <h2 className="text-xl font-semibold mb-2">Booklets & Catalogs</h2>
            <p className="text-gray-600 mb-4">
              Professional printing for booklets, catalogs and magazines with various binding options.
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
  )
}
