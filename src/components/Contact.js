export default function Contact() {
    const config = {
        email: 't.satheesh2003@gmail.com',
        phone: '+919940847107', // Add your actual phone number
        location: 'Oddanchatram, Tamil Nadu',
        socials: {
            github: 'https://github.com/Satheesh2603', // Add your GitHub
            linkedin: 'https://linkedin.com/in/satheesh-kumar-t/' // Add your LinkedIn
        }
    }

    return (
        <section id='contact' className="relative py-20 px-5 bg-gray-900 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl animate-pulse delay-300"></div>
            </div>

            <div className="relative max-w-4xl mx-auto text-center">
                {/* Section Header */}
                <div className="mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 inline-block">
                        Get In Touch
                    </h1>
                    <div className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full w-1/4 mx-auto mt-4"></div>
                    <p className="mt-6 text-xl text-gray-300">
                        Interested in discussing opportunities or learning more about my work? Feel free to reach out!
                    </p>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {/* Email */}
                    <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-400 transition-colors group">
                        <div className="w-14 h-14 bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/20 transition-colors">
                            <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                        <a href={`mailto:${config.email}`} className="text-blue-400 hover:text-blue-300 transition-colors">
                            {config.email}
                        </a>
                    </div>

                    {/* Phone */}
                    <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-purple-400 transition-colors group">
                        <div className="w-14 h-14 bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500/20 transition-colors">
                            <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                        <p className="text-gray-300">{config.phone}</p>
                    </div>

                    {/* Location */}
                    <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-400 transition-colors group">
                        <div className="w-14 h-14 bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/20 transition-colors">
                            <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
                        <p className="text-gray-300">{config.location}</p>
                    </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-6">
                    <a href={config.socials.github} className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-700 transition-colors border border-gray-700">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path>
                        </svg>
                    </a>
                    <a href={config.socials.linkedin} className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-700 transition-colors border border-gray-700">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}