import { useState, useEffect } from 'react';
import { FiMoon, FiSun, FiMenu, FiX } from 'react-icons/fi';

const Navbar = ({ darkMode, setDarkMode }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'How It Works', href: '#how-it-works' },
        { name: 'Why Choose Us', href: '#why-choose-us' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled
            ? 'bg-gray-100/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-800 dark:border-gray-800 py-3'
            : 'bg-gray-100/60 dark:bg-gray-900/50 py-4'
            }`}>
          
            <div className="max-w-6xl mx-auto px-5">
                <div className="flex justify-between items-center">
                    {/* Minimal logo */}
                    <a href="#" className="flex items-center">
                        <span className="text-xl font-normal text-gray-800 dark:text-gray-100">
                            <span className="font-medium">Soft</span>Sell
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <div className="flex space-x-6">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="relative text-sm font-medium text-gray-800 dark:text-gray-300 hover:text-gray-950 dark:hover:text-white transition-colors"
                                >
                                    {item.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gray-800 dark:bg-white transition-all duration-300 hover:w-full"></span>
                                </a>
                              
                            ))}
                        </div>

                        <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-gray-200 dark:border-gray-700">
                            <button
                                onClick={() => setDarkMode(!darkMode)}
                                className="p-1.5 rounded-md hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors"
                            >
                                {darkMode ? (
                                    <FiSun className="h-4 w-4 text-gray-300" />
                                ) : (
                                    <FiMoon className="h-4 w-4 text-gray-600" />
                                )}
                            </button>
                            {/* text-indigo-600 dark:text-indigo-400 */}
                            <a
                                href="#contact"
                                className="px-3 py-1.5  text-sm font-normal text-white bg-indigo-700 dark:text-white border border-gray-300 dark:border-gray-600 rounded-md hover:bg-white/150 dark:hover:bg-gray-800/70 transition-colors"
                            > 
                                Get Quote
                            </a>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center space-x-3">
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="p-1.5 rounded-md hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
                        >
                            {darkMode ? (
                                <FiSun className="h-5 w-5 text-gray-300" />
                            ) : (
                                <FiMoon className="h-5 w-5 text-gray-600" />
                            )}
                        </button>
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-1.5 rounded-md hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
                        >
                            {mobileMenuOpen ? (
                                <FiX className="h-5 w-5" />
                            ) : (
                                <FiMenu className="h-5 w-5" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-t border-gray-100 dark:border-gray-800">
                    <div className="px-5 py-3 space-y-2">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="block px-3 py-2 text-sm font-normal text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-md hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="block px-3 py-2 mt-2 text-sm font-normal text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 rounded-md hover:bg-white/70 dark:hover:bg-gray-800/70 transition-colors text-center"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Get Quote
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;