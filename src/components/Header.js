import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <header className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo/Name with gradient effect */}
                <a 
                    href="#" 
                    className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 hover:from-purple-300 hover:to-blue-300 transition-all duration-300"
                >
                    PORTFOLIO
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:block">
                    <ul className="flex space-x-8">
                        {['Home', 'About', 'Projects', 'Resume', 'Contact'].map((item) => (
                            <li key={item}>
                                <a 
                                    href={`#${item.toLowerCase()}`} 
                                    className="relative text-gray-300 hover:text-white group transition-colors duration-300"
                                >
                                    {item}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <button 
                    onClick={() => setToggleMenu(!toggleMenu)} 
                    className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label="Toggle menu"
                >
                    {toggleMenu ? (
                        <XMarkIcon className="h-6 w-6 text-white" />
                    ) : (
                        <Bars3Icon className="h-6 w-6 text-white" />
                    )}
                </button>

                {/* Mobile Menu */}
                {toggleMenu && (
                    <div className="absolute md:hidden top-20 left-0 right-0 bg-gray-900/95 backdrop-blur-lg border-t border-gray-800">
                        <nav className="px-6 py-4">
                            <ul className="flex flex-col space-y-4">
                                {['Home', 'About', 'Projects', 'Resume', 'Contact'].map((item) => (
                                    <li key={item}>
                                        <a 
                                            href={`#${item.toLowerCase()}`} 
                                            className="block py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 px-4 rounded-lg transition-colors duration-300"
                                            onClick={() => setToggleMenu(false)}
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}