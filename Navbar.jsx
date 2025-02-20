import { Link } from 'react-router-dom';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Genmeds</Link>
        
        <div className="flex items-center space-x-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search medicines..."
              className="pl-10 pr-4 py-2 rounded-lg text-gray-900"
            />
            <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-3 text-gray-500" />
          </div>
          <Link to="/" className="hover:text-blue-200">Find Stores</Link>
          <Link to="/" className="hover:text-blue-200">Compare Prices</Link>
          <Link to="/signin" className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50">
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
}
