import React from 'react'
import { navItems } from '@/Utils/StaticData'
import { NavItem } from '@/models/LandingPage/NavItems'

const Navbar = () => (
  <nav className="bg-white p-4 text-white">
    <ul className="flex justify-around">
      {navItems.map((item: NavItem) => (
        <li key={item.label}>
          <a
            href={item.href}
            className="px-4 py-2 text-black hover:text-gray-300"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  </nav>
)

export default Navbar
