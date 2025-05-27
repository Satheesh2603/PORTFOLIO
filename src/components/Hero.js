import HeroImg from '../assets/photo.jpg';
import { AiOutlineLinkedin, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";

export default function Hero() {
    const config = {
        subtitle: 'I\'m a Full-stack developer',
        social: {
            linkedin: 'https://www.linkedin.com/in/satheesh-kumar-t/',
            github: 'https://github.com/Satheesh2603',
            email: 'mailto:t.satheesh2003@gmail.com',
            phone: 'tel:+919940847107'
        }
    }

    return (
        <section className="relative px-5 py-20 md:py-32 bg-gray-900 overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl"></div>
            </div>
            
            <div className="relative container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 z-10">
                <div className="md:w-1/2 flex flex-col space-y-8">
                    <div className="transition-opacity duration-1000 opacity-100">
                        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                                Hi, I'm
                            </span><br />
                            <span className="text-white">SATHEESH KUMAR T</span>
                        </h1>
                        
                        <p className="text-xl md:text-2xl text-gray-300 mt-4 font-medium">
                            {config.subtitle}
                        </p>
                    </div>
                    
                    <div className="flex space-x-6 pt-4">
                        <a 
                            href={config.social.linkedin} 
                            className="text-[#0077B5] hover:bg-[#0077B5]/10 transition-all duration-300 p-2 rounded-full border border-[#0077B5]/30 hover:border-[#0077B5]"
                            aria-label="LinkedIn"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <AiOutlineLinkedin size={24} />
                        </a>
                        <a 
                            href={config.social.github} 
                            className="text-gray-300 hover:bg-gray-300/10 transition-all duration-300 p-2 rounded-full border border-gray-300/30 hover:border-gray-300"
                            aria-label="GitHub"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FiGithub size={24} />
                        </a>
                        <a 
                            href={config.social.email} 
                            className="text-[#EA4335] hover:bg-[#EA4335]/10 transition-all duration-300 p-2 rounded-full border border-[#EA4335]/30 hover:border-[#EA4335]"
                            aria-label="Email"
                        >
                            <AiOutlineMail size={24} />
                        </a>
                       <a 
    href={config.social.phone} 
    className="text-[#25D366] hover:bg-[#25D366]/10 transition-all duration-300 p-2 rounded-full border border-[#25D366]/30 hover:border-[#25D366]"
    aria-label="Phone"
>
    <AiOutlinePhone size={24} />
</a>
                    </div>
                </div>
                
                <div className="md:w-1/3 relative">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
                        <img 
                            src={HeroImg} 
                            alt="Satheesh Kumar T" 
                            className="relative w-full max-w-md rounded-lg border-2 border-gray-800 transform group-hover:-translate-y-2 transition-transform duration-500"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}