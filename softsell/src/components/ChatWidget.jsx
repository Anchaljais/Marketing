import { useState, useRef, useEffect } from 'react';
import { FiMessageSquare, FiX, FiSend, FiChevronDown } from 'react-icons/fi';

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    // Example questions for quick input
    const exampleQuestions = [
    
        'I need a help',
        'How do I sell my license?',
        'What types of licenses do you buy?',
        'How long does the process take?',
        'What payment methods do you accept?',
        'Can I sell multiple licenses?',
        'Do you buy expired licenses?',
        'Okay , Thanks',
        'kaise ho?',
        'hello'
    ];

    // Scroll to bottom of chat when messages update
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    // Mock or real API call to OpenAI
    const sendMessage = async (message) => {
        setIsLoading(true);

        // Add user message to chat
        setMessages(prev => [...prev, { text: message, sender: 'user' }]);

        try {
            // For demo purposes, we'll use mock responses
            // In a real implementation, you would call the OpenAI API here:
            // const response = await fetchOpenAIResponse(message);

            // Mock response based on user question
            let responseText = "I'm sorry, I couldn't understand your question. Could you please rephrase it?";

            if (message.toLowerCase().includes('sell my license')) {
                responseText = "To sell your software license, simply fill out our contact form with details about your license. We'll provide a free valuation within 24 hours and handle the entire process for you.";
            } else if (message.toLowerCase().includes('types of licenses')) {
                responseText = "We purchase a wide range of software licenses including Microsoft, Adobe, Autodesk, Oracle, and many others. If you don't see your specific license type listed, just select 'Other' in our form and describe it.";
            } else if (message.toLowerCase().includes('how long')) {
                responseText = "The entire process typically takes 3-5 business days from initial contact to payment. Valuation is provided within 24 hours of submitting your details.";
            } else if (message.toLowerCase().includes('payment methods')) {
                responseText = "We offer multiple payment options including bank transfer, PayPal, and wire transfer. All transactions are secure and we provide documentation for your records.";
            }
            else if (message.toLowerCase().includes('ok')) {
                responseText = "Thank you for your response! If you have any other questions or need assistance, feel free to ask.";
            }
            else if (message.toLowerCase().includes('kaise ho')) {      
                responseText = "Main theek hoon, aap kaise hain? Agar aapko kisi cheez ki madad chahiye, toh zaroor poochiye.";
            }
            else if (message.toLowerCase().includes('pagal ho kya')) {          
                responseText = "Nahi, main pagal nahi hoon! Lekin agar aapko kisi cheez ki madad chahiye, toh zaroor poochiye.";
            }
            
            else if (message.toLowerCase().includes('hello')) {
                responseText = "Hey!! How can i help you";
            }
            


            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Add AI response to chat
            setMessages(prev => [...prev, { text: responseText, sender: 'ai' }]);
        } catch (error) {
            setMessages(prev => [...prev, { text: "Sorry, I'm having trouble responding right now. Please try again later.", sender: 'ai' }]);
        } finally {
            setIsLoading(false);
            setInputValue('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            sendMessage(inputValue);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {isOpen ? (
                <div className="w-80 h-[500px] bg-white dark:bg-gray-800 rounded-xl shadow-xl flex flex-col border border-gray-200 dark:border-gray-700 overflow-hidden">
                    {/* Chat header */}
                    <div className="bg-indigo-600 text-white p-4 flex justify-between items-center">
                        <h3 className="font-medium">SoftSell Assistant</h3>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-white hover:text-indigo-200 transition-colors"
                        >
                            <FiX size={20} />
                        </button>
                    </div>

                    {/* Chat messages */}
                    <div className="flex-1 p-4 overflow-y-auto">
                        <div className="space-y-4">
                            {messages.length === 0 ? (
                                <div className="text-center text-gray-500 dark:text-gray-400 py-8">
                                    <p>Hello! I'm your SoftSell assistant.</p>
                                    <p className="mt-2">How can I help you today?</p>
                                </div>
                            ) : (
                                messages.map((msg, index) => (
                                    <div
                                        key={index}
                                        className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                    >
                                        <div
                                            className={`max-w-[80%] rounded-lg px-4 py-2 ${msg.sender === 'user'
                                                ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-900 dark:text-indigo-100'
                                                : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}
                                        >
                                            {msg.text}
                                        </div>
                                    </div>
                                ))
                            )}
                            <div ref={messagesEndRef} />
                        </div>
                    </div>

                    {/* Example questions */}
                    {messages.length === 0 && (
                        <div className="px-4 pb-2">
                            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Try asking:</p>
                            <div className="grid grid-cols-2 gap-2">
                                {exampleQuestions.map((question, i) => (
                                    <button
                                        key={i}
                                        onClick={() => sendMessage(question)}
                                        className="text-xs bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded px-3 py-2 text-left transition-colors"
                                    >
                                        {question}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Input area */}
                    <form onSubmit={handleSubmit} className="p-3 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex items-center">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Type your question..."
                                className="flex-1 px-3 py-2 rounded-l-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
                                disabled={isLoading}
                            />
                            <button
                                type="submit"
                                disabled={isLoading || !inputValue.trim()}
                                className="px-3 py-2 bg-indigo-600 text-white rounded-r-lg hover:bg-indigo-700 disabled:bg-indigo-400 transition-colors"
                            >
                                {isLoading ? (
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                ) : (
                                    <FiSend size={18} />
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            ) : (
                <button
                    onClick={() => setIsOpen(true)}
                    className="w-14 h-14 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-105"
                >
                    <FiMessageSquare size={24} />
                </button>
            )}
        </div>
    );
};

export default ChatWidget;