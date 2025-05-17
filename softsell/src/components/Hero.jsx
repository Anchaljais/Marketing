import { FiArrowRight, FiCheck } from 'react-icons/fi'

const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-white dark:bg-gray-900 pt-28 pb-16 md:pt-36 md:pb-24 px-6 sm:px-8">
            {/* Background gradient */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/2 w-[800px] -translate-x-1/2 -translate-y-1/4">
                    <div className="aspect-w-1 aspect-h-1 bg-gradient-to-r from-indigo-100 to-teal-100 dark:from-indigo-900/30 dark:to-teal-900/30 rounded-full blur-3xl opacity-50 dark:opacity-30" />
                </div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div>
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 text-sm font-medium mb-4">
                            <FiCheck className="mr-2" />
                            Trusted by 500+ companies
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-gray-900 dark:text-white leading-tight mb-6">
                            Monetize Your Unused <span className="text-indigo-600 dark:text-indigo-400">Software Assets</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
                            SoftSell provides enterprise-grade solutions to recover value from your shelfware licenses through our verified marketplace and secure transaction platform.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-10">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors shadow-sm hover:shadow-md"
                            >
                                Get Instant Valuation
                                <FiArrowRight className="ml-2" />
                            </a>
                            <a
                                href="#how-it-works"
                                className="inline-flex items-center justify-center px-6 py-3.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                            >
                                How It Works
                            </a>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="flex -space-x-2">
                                {[1, 2, 3].map((item) => (
                                    <img
                                        key={item}
                                        src={`https://randomuser.me/api/portraits/${item % 2 === 0 ? 'women' : 'men'}/${item + 20}.jpg`}
                                        alt="User"
                                        className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800"
                                    />
                                ))}
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                <p>Join <span className="font-medium text-gray-700 dark:text-gray-200">250+ businesses</span> who sold licenses last month</p>
                            </div>
                        </div>
                    </div>

                    {/* Image/Graphic */}
                    <div className="relative">
                        <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                alt="Dashboard showing software licenses"
                                className="w-full h-auto"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                                <div className="text-white">
                                    <p className="text-sm font-medium mb-1">Sample Dashboard</p>
                                    <h3 className="text-lg font-semibold">License Management Portal</h3>
                                </div>
                            </div>
                        </div>

                        {/* Floating stats */}
                        <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 w-40">
                            <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Avg. payout</p>
                            <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">$4,250</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero