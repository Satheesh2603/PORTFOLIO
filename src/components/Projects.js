import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline';

export default function Projects() {
    const config = {
        projects: [
            {
                title: "Online Doctor Appointment Booking System",
                description: "Developed a comprehensive MERN stack application for college dispensary that enables students to schedule appointments with healthcare professionals, improving campus healthcare services.",
                technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
                link: "https://github.com/Satheesh2603/Doctor-appointmnet-system-mern-project-14-final-code",
                image: "bg-[url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')]"
            },
           {
    title: "Online Car Service & Spare Parts Marketplace",
    description: "Implemented a service booking and spare parts ordering system with secure payment integration, allowing users to schedule maintenance services and order car components.",
    technologies: ["React.js", "Node.js", "MongoDB", "Payment Gateway"],
    link: "https://github.com/Satheesh2603/ONLINE-CAR-SERVICE-BOOKING-AND-SPARE-PARTS-MARKETPLACE-FRONTEND",
    image: "bg-[url('https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80')]"
},
            {
                title: "Portfolio Website",
                description: "Designed and developed a modern portfolio website to showcase projects and skills using React and Tailwind CSS with futuristic UI elements.",
                technologies: ["React.js", "Tailwind CSS"],
                link: "#",
                image: "bg-[url('https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')]"
            }
        ]
    }

    return (
        <section id='projects' className="relative py-20 px-5 bg-gray-900 overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl"></div>
            </div>

            <div className="relative max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 inline-block">
                        My Projects
                    </h1>
                    <div className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full w-1/4 mx-auto mt-4"></div>
                    <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
                        Here are some of my featured projects, including those mentioned in my resume. Each represents my skills in full-stack development.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {config.projects.map((project, index) => (
                        <div 
                            key={index} 
                            className="group relative h-96 rounded-xl overflow-hidden border border-gray-800 hover:border-blue-400 transition-all duration-500"
                        >
                            {/* Project Image Background */}
                            <div className={`absolute inset-0 ${project.image} bg-cover bg-center transition-all duration-700 group-hover:scale-110`}></div>
                            
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
                            
                            {/* Content */}
                            <div className="relative h-full flex flex-col justify-end p-6">
                                <div className="transform translate-y-10 group-hover:translate-y-0 transition-all duration-500">
                                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                                    <p className="text-gray-300 mb-4">{project.description}</p>
                                    
                                    <div className="flex flex-wrap gap-2 mb-5">
                                        {project.technologies.map((tech, i) => (
                                            <span key={i} className="px-3 py-1 bg-gray-800/80 text-blue-300 text-sm rounded-full border border-gray-700">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                
                                {/* Buttons */}
                                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transform translate-y-5 group-hover:translate-y-0 transition-all duration-500">
                                    <a 
                                        href={project.link} 
                                        className="flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-colors"
                                    >
                                        <EyeIcon className="w-5 h-5 mr-2" />
                                        View Demo
                                    </a>
                                    <a 
                                        href={project.link} 
                                        className="flex items-center justify-center px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-white border border-gray-700 transition-colors"
                                    >
                                        <CodeBracketIcon className="w-5 h-5 mr-2" />
                                        Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}