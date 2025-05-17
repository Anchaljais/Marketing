import { FiAward, FiShield, FiZap, FiHeadphones, FiArrowRight } from 'react-icons/fi'

const WhyChooseUs = () => {
    const benefits = [
        {
            icon: <FiAward className="w-5 h-5" />,
            title: "Industry-Leading Rates",
            description: "Maximize your returns with our competitive pricing model that outperforms market standards.",
            color: "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400"
        },
        {
            icon: <FiShield className="w-5 h-5" />,
            title: "Enterprise-Grade Security",
            description: "256-bit encryption and SOC 2 compliance ensure your transactions remain protected.",
            color: "bg-teal-100 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400"
        },
        {
            icon: <FiZap className="w-5 h-5" />,
            title: "24-Hour Payments",
            description: "Instant electronic transfers with no hidden fees or lengthy processing times.",
            color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
        },
        {
            icon: <FiHeadphones className="w-5 h-5" />,
            title: "White-Glove Service",
            description: "Dedicated account managers provide end-to-end support throughout the process.",
            color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400"
        }
    ]

    return (
        <section id="why-choose-us" className="py-20 px-6 bg-white dark:bg-gray-950">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 rounded-full mb-4 uppercase">
                        Our Advantages
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        The SoftSell <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-teal-600">Difference</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Why leading enterprises choose our platform to monetize their software assets
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="group relative bg-white dark:bg-gray-900 p-8 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className={`flex items-center justify-center w-12 h-12 rounded-lg ${benefit.color} mb-6 transition-colors duration-300 group-hover:opacity-90`}>
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                {benefit.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="bg-gray-900 dark:bg-gray-800 rounded-2xl p-8 md:p-10 text-white overflow-hidden relative">
                    <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-indigo-500 to-teal-500"></div>

                    <div className="relative z-10 md:flex items-center justify-between">
                        <div className="mb-6 md:mb-0 md:max-w-xl">
                            <h3 className="text-2xl md:text-3xl font-bold mb-3">Maximize Your Software Asset Value</h3>
                            <p className="opacity-90">Join Fortune 500 companies and growing businesses leveraging our secure marketplace</p>
                        </div>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center px-8 py-3.5 bg-white hover:bg-gray-100 text-gray-900 font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                        >
                            Request Professional Assessment
                            <FiArrowRight className="ml-3" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs