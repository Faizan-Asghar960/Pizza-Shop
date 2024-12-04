import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => (
  <nav className="bg-red-600 p-4">
    <div className="flex items-center justify-between max-w-7xl mx-auto">
      {/* Logo and Name */}
      <div className="flex items-center space-x-2">
        <Image src="/logo.jpg" alt="Pizza Shop Logo" width={40} height={40} />
        <span className="text-white text-xl font-bold"> A1 Pizza Shop</span>
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-4 text-white">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/menu">Menu</Link></li>
        <li><Link href="/Deels">Deals</Link></li>
        <li><Link href="/Contact">Contact</Link></li> {/* Updated to lowercase */}
      </ul>
    </div>
  </nav>
);

export default Navbar;
