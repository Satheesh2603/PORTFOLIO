import ResumeImg from '../assets/resume.jpg';

export default function Resume() {
    const resumePdf = process.env.PUBLIC_URL + '/SATHEESH_KUMAR_T_PROFILE.pdf';

    return (
        <section id='resume' className="relative py-20 px-5 bg-gray-900 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl animate-pulse delay-300"></div>
            </div>

            <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Resume Image with futuristic frame */}
                <div className="relative group flex justify-center">
                    <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
                    <div className="absolute inset-0 border-2 border-gray-800 rounded-xl"></div>
                    <img 
                        src={ResumeImg} 
                        alt="Resume" 
                        className="relative w-full max-w-md rounded-lg transform group-hover:-translate-y-2 transition-transform duration-500 z-10"
                    />
                    <div className="absolute -z-10 w-full h-full bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-xl top-3 left-3"></div>
                </div>

                {/* Resume Content */}
                <div className="flex flex-col space-y-8">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 inline-block">
                            My Resume
                        </h1>
                        <div className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full w-3/4 mt-2"></div>
                    </div>

                    <p className="text-xl text-gray-300">
                        Download my professional resume to learn more about my qualifications, experience, and skills.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <a 
                            href={resumePdf} 
                            download="Satheesh_Kumar_Resume.pdf"
                            className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 rounded-lg text-white font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/20"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                            </svg>
                            Download Resume
                        </a>

                        <a 
                            href="#contact" 
                            className="flex items-center justify-center px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg text-white font-medium transition-all duration-300 border border-gray-700"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                            Contact Me
                        </a>
                    </div>

                    {/* Skills Preview */}
                    <div className="pt-6">
                        <h3 className="text-xl font-semibold text-white mb-3">Skills Preview</h3>
                        <div className="grid grid-cols-2 gap-3">
                            {['MERN Stack', 'Java', 'Python', 'SQL', 'HTML/CSS'].map((skill, index) => (
                                <div key={index} className="flex items-center">
                                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                                    <span className="text-gray-300">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}