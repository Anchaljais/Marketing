import { useState } from 'react'
import { FiSend, FiCheckCircle, FiInfo } from 'react-icons/fi'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        licenseType: '',
        message: ''
    })

    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitSuccess, setSubmitSuccess] = useState(false)

    const licenseTypes = [
        'Microsoft',
        'Adobe',
        'Autodesk',
        'Oracle',
        'Other'
    ]

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
    }

    const validate = () => {
        const newErrors = {}
        if (!formData.name.trim()) newErrors.name = 'Required'
        if (!formData.email.trim()) {
            newErrors.email = 'Required'
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = 'Invalid email'
        }
        if (!formData.licenseType) newErrors.licenseType = 'Required'
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (validate()) {
            setIsSubmitting(true)
            setTimeout(() => {
                setIsSubmitting(false)
                setSubmitSuccess(true)
                setFormData({ name: '', email: '', company: '', licenseType: '', message: '' })
            }, 1000)
        }
    }

    return (
        <section id="contact" className="py-16 bg-white dark:bg-gray-900 px-6">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                        Get Your Free Valuation
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300">
                        Complete this short form and we'll contact you within 24 hours
                    </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                    {submitSuccess ? (
                        <div className="text-center p-6">
                            <FiCheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                Thank You!
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                We've received your request and will contact you shortly.
                            </p>
                            <button
                                onClick={() => setSubmitSuccess(false)}
                                className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm"
                            >
                                Submit Another Request
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full px-3 py-2 rounded-md border ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} dark:bg-gray-700 dark:text-white`}
                                    />
                                    {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full px-3 py-2 rounded-md border ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} dark:bg-gray-700 dark:text-white`}
                                    />
                                    {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Company
                                </label>
                                <input
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    License Type <span className="text-red-500">*</span>
                                </label>
                                <select
                                    name="licenseType"
                                    value={formData.licenseType}
                                    onChange={handleChange}
                                    className={`w-full px-3 py-2 rounded-md border ${errors.licenseType ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} dark:bg-gray-700 dark:text-white`}
                                >
                                    <option value="">Select an option</option>
                                    {licenseTypes.map((type) => (
                                        <option key={type} value={type}>{type}</option>
                                    ))}
                                </select>
                                {errors.licenseType && <p className="mt-1 text-xs text-red-500">{errors.licenseType}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Details (Optional)
                                </label>
                                <textarea
                                    name="message"
                                    rows="3"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                />
                            </div>

                            <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                                <FiInfo className="mr-2 flex-shrink-0" />
                                <p>We'll never share your information with third parties.</p>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full mt-4 px-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md flex items-center justify-center"
                            >
                                {isSubmitting ? (
                                    'Processing...'
                                ) : (
                                    <>
                                        Submit Request <FiSend className="ml-2" />
                                    </>
                                )}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    )
}

export default ContactForm