import { FiUpload, FiDollarSign, FiCheckCircle, FiArrowRight } from 'react-icons/fi'

const HowItWorks = () => {
    const steps = [
        {
            icon: <FiUpload className="w-5 h-5" />,
            title: "Submit Licenses",
            description: "Upload your software license details through our encrypted portal",
            color: "from-indigo-500 to-indigo-600"
        },
        {
            icon: <FiDollarSign className="w-5 h-5" />,
            title: "Receive Valuation",
            description: "Get a competitive market-based offer in minutes",
            color: "from-blue-500 to-blue-600"
        },
        {
            icon: <FiCheckCircle className="w-5 h-5" />,
            title: "Complete Sale",
            description: "Secure payment transferred within 24 hours",
            color: "from-teal-500 to-teal-600"
        }
    ]

    return (
        <section id="how-it-works" className="py-16 bg-gray-100 dark:bg-gray-950 px-6">

            <div className="max-w-6xl mx-auto flex flex-col min-h-[600px]"> {/* Added min-height and flex-col */}
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 rounded-full mb-4 uppercase">
                        How It Works
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Sell Software Licenses in <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-teal-600">3 Simple Steps</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Our streamlined process maximizes your return with minimal effort
                    </p>
                </div>

                {/* Steps container with flex-grow */}
                <div className="relative flex-grow mb-8"> {/* Changed to flex-grow */}
                    {/* Progress line */}
                    <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-indigo-500/20 via-blue-500/20 to-teal-500/20"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 h-full">
                        {steps.map((step, index) => (
                            <div key={index} className="relative z-10 flex flex-col">
                                {/* Step indicator */}
                                <div className="flex flex-col items-center mb-8">
                                    <div className={`flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${step.color} text-white font-medium shadow-lg`}>
                                        {index + 1}
                                    </div>
                                    {index < steps.length - 1 && (
                                        <div className="md:hidden absolute -bottom-10 left-1/2 transform -translate-x-1/2">
                                            <svg className="w-6 h-6 text-gray-300 dark:text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                            </svg>
                                        </div>
                                    )}
                                </div>

                                {/* Step card */}
                                <div className="bg-white dark:bg-gray-900 p-8 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all duration-300 flex-grow">
                                    <div className={`flex items-center justify-center w-14 h-14 mx-auto mb-6 rounded-lg bg-gradient-to-r ${step.color} text-white shadow-md`}>
                                        {step.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-center text-gray-900 dark:text-white mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-center">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Button - Now properly positioned at the bottom */}
                <div className="text-center mt-auto pt-8"> {/* Added mt-auto and padding */}
                    <a
                        href="#contact"
                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-teal-600 hover:from-indigo-700 hover:to-teal-700 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                    >
                        Get Started Today
                        <FiArrowRight className="ml-3 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks