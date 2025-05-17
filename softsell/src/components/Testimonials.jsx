import { FiStar } from 'react-icons/fi'
import { FiArrowRight } from 'react-icons/fi'

const Testimonials = () => {
    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "IT Director",
            company: "TechCorp Inc.",
            content: "SoftSell helped us recover over $45,000 in unused Adobe licenses. The process was seamless and their team was incredibly professional throughout.",
            rating: 5,
            initials: "TC"
        },
        {
            name: "Michael Chen",
            role: "CFO",
            company: "DataSystems LLC",
            content: "As a CFO, I'm always looking for ways to optimize our assets. SoftSell provided an excellent return on our unused Microsoft licenses with minimal effort on our part.",
            rating: 5,
            initials: "DS"
        }
    ]

    return (
        <section id="Testimonials" className="py-16 bg-gray-140 dark:bg-gray-950 px-6">

            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        Trusted by Industry Leaders
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Don't just take our word for it - hear from our clients
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700"
                        >
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <FiStar
                                        key={i}
                                        className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
                                    />
                                ))}
                            </div>
                            <blockquote className="text-gray-600 dark:text-gray-300 mb-6">
                                "{testimonial.content}"
                            </blockquote>
                            <div className="flex items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                                <div className="bg-indigo-100 dark:bg-indigo-900 w-12 h-12 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-300 font-bold mr-4">
                                    {testimonial.initials}
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                                    <p className="text-gray-600 dark:text-gray-400">{testimonial.role}, {testimonial.company}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a
                        href="#contact"
                        className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
                    >
                        Speak With Our Team
                        <FiArrowRight className="ml-2" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Testimonials