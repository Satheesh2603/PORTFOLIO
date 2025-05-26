import AboutImg from '../assets/about.png';
import { useState } from 'react';

export default function About() {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const config = {
        intro: "Full-stack developer specializing in MERN stack applications",
        about: [
            "Experienced in building scalable web applications using modern technologies like React.js, Node.js, and MongoDB",
            "Skilled in database design and implementation with expertise in SQL and NoSQL solutions",
            "Passionate about creating efficient systems with strong foundations in data structures",
            "Proficient in Java and Python programming with problem-solving capabilities",
            "Linux enthusiast with system administration workshop experience"
        ]
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            const response = await fetch('https://formspree.io/f/movdoykq', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    _replyto: formData.email,
                    _subject: `Hire Request from ${formData.name}`,
                    _to: 't.satheesh2003@gmail.com'
                }),
            });

            if (response.ok) {
                setSubmitMessage('Thank you! Your message has been sent successfully.');
                setFormData({
                    name: '',
                    email: '',
                    company: '',
                    message: ''
                });
                setTimeout(() => {
                    setShowForm(false);
                    setSubmitMessage('');
                }, 3000);
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            setSubmitMessage('Error sending message. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="bg-gray-900 text-gray-100 py-16 px-4 sm:px-6 lg:px-8" id="about">
            {/* About Section */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
                    <img 
                        src={AboutImg} 
                        alt="Satheesh Kumar T" 
                        className="relative rounded-lg w-full h-auto border-2 border-gray-800 transform group-hover:-translate-y-1 transition-transform duration-300"
                    />
                </div>

                <div className="space-y-8">
                    <div className="inline-block">
                        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                            About Me
                        </h1>
                        <div className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full w-3/4 mt-2"></div>
                    </div>

                    <p className="text-xl text-gray-300">{config.intro}</p>

                    <ul className="space-y-4">
                        {config.about.map((item, index) => (
                            <li key={index} className="flex items-start">
                                <span className="flex-shrink-0 mt-1 mr-3 text-blue-400">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </span>
                                <span className="text-gray-300">{item}</span>
                            </li>
                        ))}
                    </ul>

                    {/* Hire Me Button */}
                    <div className="pt-6">
                        <button
                            onClick={() => setShowForm(!showForm)}
                            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            {showForm ? 'Close Form' : 'Hire Me'}
                        </button>
                    </div>

                    {/* Contact Form */}
                    {showForm && (
                        <div className="mt-8 bg-gray-800 p-6 rounded-lg border border-gray-700">
                            {submitMessage ? (
                                <div className="text-center py-4">
                                    <p className={`text-lg ${submitMessage.includes('Thank you') ? 'text-green-400' : 'text-red-400'}`}>
                                        {submitMessage}
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
                                            Company (Optional)
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                                            Role
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows="1"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                                        ></textarea>
                                    </div>
                                    <div className="pt-2">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className={`w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105'} shadow-lg`}
                                        >
                                            {isSubmitting ? 'Sending...' : 'Submit'}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Education Section */}
            <div className="max-w-7xl mx-auto mt-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 inline-block">
                        Education
                    </h2>
                    <div className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full w-1/4 mx-auto mt-2"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* MCA */}
                    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-400 transition-colors group">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-xl font-bold text-white">Master of Computer Applications</h3>
                                <p className="text-blue-400">Kongu Engineering College, Perundurai</p>
                            </div>
                            <span className="bg-blue-900 text-blue-100 text-xs px-3 py-1 rounded-full">2023-2025</span>
                        </div>
                        <div className="mt-4 flex items-center">
                            <div className="w-full bg-gray-700 rounded-full h-2.5">
                                <div 
                                    className="bg-gradient-to-r from-purple-500 to-blue-500 h-2.5 rounded-full" 
                                    style={{ width: '84.7%' }}
                                ></div>
                            </div>
                            <span className="ml-3 text-sm font-medium text-white">8.47 CGPA</span>
                        </div>
                    </div>

                    {/* B.Sc */}
                    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-400 transition-colors group">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-xl font-bold text-white">B.Sc Information Technology</h3>
                                <p className="text-blue-400">Kongu Arts and Science College, Erode</p>
                            </div>
                            <span className="bg-blue-900 text-blue-100 text-xs px-3 py-1 rounded-full">2020-2023</span>
                        </div>
                        <div className="mt-4 flex items-center">
                            <div className="w-full bg-gray-700 rounded-full h-2.5">
                                <div 
                                    className="bg-gradient-to-r from-purple-500 to-blue-500 h-2.5 rounded-full" 
                                    style={{ width: '77%' }}
                                ></div>
                            </div>
                            <span className="ml-3 text-sm font-medium text-white">77%</span>
                        </div>
                    </div>

                    {/* HSC */}
                    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-400 transition-colors group">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-xl font-bold text-white">Higher Secondary (HSC)</h3>
                                <p className="text-blue-400">Sri Krishna Matriculation Higher Secondary School</p>
                            </div>
                            <span className="bg-blue-900 text-blue-100 text-xs px-3 py-1 rounded-full">2019-2020</span>
                        </div>
                        <div className="mt-4 flex items-center">
                            <div className="w-full bg-gray-700 rounded-full h-2.5">
                                <div 
                                    className="bg-gradient-to-r from-purple-500 to-blue-500 h-2.5 rounded-full" 
                                    style={{ width: '72.6%' }}
                                ></div>
                            </div>
                            <span className="ml-3 text-sm font-medium text-white">72.6%</span>
                        </div>
                    </div>

                    {/* SSLC */}
                    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-400 transition-colors group">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-xl font-bold text-white">Secondary School (SSLC)</h3>
                                <p className="text-blue-400">Sri Krishna Matriculation Higher Secondary School</p>
                            </div>
                            <span className="bg-blue-900 text-blue-100 text-xs px-3 py-1 rounded-full">2017-2018</span>
                        </div>
                        <div className="mt-4 flex items-center">
                            <div className="w-full bg-gray-700 rounded-full h-2.5">
                                <div 
                                    className="bg-gradient-to-r from-purple-500 to-blue-500 h-2.5 rounded-full" 
                                    style={{ width: '89.6%' }}
                                ></div>
                            </div>
                            <span className="ml-3 text-sm font-medium text-white">89.6%</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}