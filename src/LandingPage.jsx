// // // // // src/components/LandingPage.jsx
// import './smooth-scroll.css'; // Import the smooth scroll CSS file
// import EImage from './assets/E.png'; // Adjust the path based on your file structure

// const LandingPage = ({ onLoginClick, onRegisterClick }) => {
//     return (
//         <div>
//             {/* Navigation Bar */}
//             <nav className="fixed top-0 left-0 w-full bg-black z-50">
//                 <div className="container mx-auto px-4 py-4 flex justify-between">
//                     <a href="#home" className="text-white font-bold hover:text-purple-300">Home</a>
//                     <a href="#about" className="text-white font-bold hover:text-purple-300">About Us</a>
//                     <a href="#contact" className="text-white font-bold hover:text-purple-300">Contact</a>
//                     <a href="#get-started" className="text-white font-bold hover:text-purple-300">Get Started</a>
//                 </div>
//             </nav>

//             {/* Home Section with Fullscreen Background Image */}
//             <section
//                 id="home"
//                 className="relative flex flex-col items-center justify-center h-screen bg-black text-white"
//                 style={{
//                     backgroundImage: "url('https://tse1.mm.bing.net/th?id=OIP.j5sIEmjmJLdZCj44lK2fbQHaEK&pid=Api&P=0&h=220')", // Replace with actual image URL
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'top', // Align the image to the top
//                     // backgroundRepeat: 'no-repeat',
//                     backgroundColor: "black",
//                 }}
//             >
//                 <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay for better text visibility */}
//                 <div className="relative z-10 text-center">
//                     <h1 className="text-6xl font-extrabold mb-5 tracking-wider drop-shadow-lg">
//                         Event Management
//                     </h1>
//                     <p className="text-xl max-w-md mx-auto leading-relaxed drop-shadow-sm">
//                         Seamlessly organize, manage, and attend events with our all-in-one solution.
//                     </p>
//                 </div>
//             </section>

//             {/* About Us Section */}
//             <section id="about" className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-white px-4 py-12">
//                 <div className="md:w-1/2 p-8">
//                     <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
//                     <p className="text-lg text-gray-600">
//                         Welcome to our Event Management website! We specialize in helping you seamlessly organize and manage events with our user-friendly platform.
//                     </p>
//                 </div>
//                 <div className="w-full md:w-1/2 p-8">
//                     <img src={EImage} alt="About Us" className="w-full h-auto rounded-lg shadow-lg" />
//                 </div>
//             </section>

//             {/* Contact Section */}
//             <section id="contact" className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 py-12">
//                 <div className="w-full max-w-md bg-white rounded-lg p-8 shadow-md">
//                     <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
//                     <p className="text-lg text-gray-600 mb-8">Have any questions or queries? Feel free to contact us!</p>
//                     <form>
//                         <div className="mb-4">
//                             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
//                             <input className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none" type="text" id="name" placeholder="Your Name" />
//                         </div>
//                         <div className="mb-4">
//                             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
//                             <input className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none" type="email" id="email" placeholder="Your Email" />
//                         </div>
//                         <div className="mb-4">
//                             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
//                             <textarea className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none" id="message" placeholder="Your Message" rows="4"></textarea>
//                         </div>
//                         <button onClick={onRegisterClick} className="w-full px-8 py-3 bg-purple-700 text-white rounded-lg shadow-lg font-semibold hover:bg-purple-800 transition duration-300">
//                             Get Started
//                         </button>
//                     </form>
//                 </div>
//             </section>

//             {/* Get Started Section */}
//             <section id="get-started" className="flex flex-col items-center justify-center min-h-screen bg-white px-4 py-12">
//                 <h2 className="text-4xl font-bold text-gray-800 mb-4">Ready to Get Started?</h2>
//                 <div className="flex space-x-6">
//                     <button onClick={onLoginClick} className="px-8 py-3 bg-white text-purple-700 rounded-lg shadow-lg font-semibold hover:bg-purple-700 hover:text-white transition duration-300 transform hover:-translate-y-1">
//                         Login
//                     </button>
//                     <button onClick={onRegisterClick} className="px-8 py-3 bg-white text-pink-700 rounded-lg shadow-lg font-semibold hover:bg-pink-700 hover:text-white transition duration-300 transform hover:-translate-y-1">
//                         Register
//                     </button>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default LandingPage;

import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const LandingPage = ({ onLoginClick, onRegisterClick }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="font-sans">
            {/* Navigation Bar */}
            {/* <nav className="fixed w-full z-50 bg-transparent backdrop-blur-md">
                <div className="container mx-auto flex items-center justify-between py-4 px-6 md:px-10">
                    <div className="text-pink text-2xl font-bold">Event Master</div>
                    <div className="hidden md:flex space-x-8 text-pink">
                        <a href="#home" className="hover:text-pink-300 transition text-pink">Home</a>
                        <a href="#about" className="hover:text-pink-300 transition text-pink">About</a>
                        <a href="#services" className="hover:text-pink-300 transition text-pink">Services</a>
                        <a href="#contact" className="hover:text-pink-300 transition text-pink">Contact</a>
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
                            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
            {/* {menuOpen && (
                    <div className="md:hidden bg-black text-white text-center py-6">
                        <a href="#home" className="block py-2 hover:text-pink-300 text-pink" onClick={() => setMenuOpen(false)}>Home</a>
                        <a href="#about" className="block py-2 hover:text-pink-300 text-pink" onClick={() => setMenuOpen(false)}>About</a>
                        <a href="#services" className="block py-2 hover:text-pink-300 text-pink" onClick={() => setMenuOpen(false)}>Services</a>
                        <a href="#contact" className="block py-2 hover:text-pink-300 text-pink" onClick={() => setMenuOpen(false)}>Contact</a>
                    </div>
                )}
            </nav>  */}

            <nav className="fixed w-full z-50 bg-transparent backdrop-blur-md">
                <div className="container mx-auto flex items-center justify-between py-4 px-6 md:px-10">
                    <div className="text-pink-500 text-2xl font-bold">Event Master</div>
                    <div className="hidden md:flex space-x-8 text-pink-500">
                        <a href="#home" className="hover:text-pink-300 transition text-pink-500">Home</a>
                        <a href="#about" className="hover:text-pink-300 transition text-pink-500">About</a>
                        <a href="#services" className="hover:text-pink-300 transition text-pink-500">Services</a>
                        <a href="#contact" className="hover:text-pink-300 transition text-pink-500">Contact</a>
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
                            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="md:hidden bg-black text-white text-center py-6">
                        <a href="#home" className="block py-2 hover:text-pink-300 text-pink-500" onClick={() => setMenuOpen(false)}>Home</a>
                        <a href="#about" className="block py-2 hover:text-pink-300 text-pink-500" onClick={() => setMenuOpen(false)}>About</a>
                        <a href="#services" className="block py-2 hover:text-pink-300 text-pink-500" onClick={() => setMenuOpen(false)}>Services</a>
                        <a href="#contact" className="block py-2 hover:text-pink-300 text-pink-500" onClick={() => setMenuOpen(false)}>Contact</a>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section
                id="home"
                className="relative flex flex-col items-center justify-center h-screen bg-cover bg-center text-white"
                style={{ backgroundImage: "url('/BgImage.jpg')" }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative z-10 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
                        Elevate Your Events
                    </h1>
                    <p className="text-lg md:text-2xl max-w-lg mx-auto mb-6">
                        Plan, Manage, and Attend Events with Ease
                    </p>
                    <div className="flex space-x-6 justify-center">
                        <button
                            onClick={onRegisterClick}
                            className="px-8 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-full shadow-lg font-semibold transition"
                        >
                            Get Started
                        </button>
                        <button
                            onClick={onLoginClick}
                            className="px-8 py-3 bg-white text-black hover:bg-pink-600 hover:text-white rounded-full shadow-lg font-semibold transition"
                        >
                            Login
                        </button>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="min-h-screen bg-white text-gray-900 py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">About Us</h2>
                    <p className="text-lg md:text-xl max-w-4xl mx-auto mb-12">
                        We provide cutting-edge solutions to help you manage your events efficiently and professionally.
                    </p>
                    <div className="flex flex-col md:flex-row justify-between">
                        <div className="p-6">
                            <img src="/E.png" alt="Event Management" className="rounded-lg shadow-lg" /> {/* Ensure the image is in the public folder */}
                        </div>
                        <div className="flex flex-col justify-center p-6 text-left">
                            <h3 className="text-3xl font-semibold mb-4">Why Choose Us?</h3>
                            <p className="text-lg mb-4">
                                We make event management simple, from small private events to large-scale conferences.
                            </p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Easy to use platform</li>
                                <li>Detailed event tracking</li>
                                <li>Secure and reliable</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="min-h-screen bg-gray-100 py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 bg-white rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold mb-4">Event Creation</h3>
                            <p className="text-lg">Easily create and manage your own events with powerful tools.</p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold mb-4">Event Registration</h3>
                            <p className="text-lg">Allow participants to register, track, and attend events effortlessly.</p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold mb-4">Real-Time Analytics</h3>
                            <p className="text-lg">Track attendance and event success in real time with our advanced analytics.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="min-h-screen bg-white py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">Get in Touch</h2>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12">
                        Have any questions? Reach out to us, and we’ll be happy to help.
                    </p>
                    <div className="max-w-md mx-auto bg-gray-100 p-8 rounded-lg shadow-lg">
                        <form>
                            <div className="mb-6">
                                <label className="block text-left font-bold mb-2" htmlFor="name">Name</label>
                                <input
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                                    type="text"
                                    id="name"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-left font-bold mb-2" htmlFor="email">Email</label>
                                <input
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                                    type="email"
                                    id="email"
                                    placeholder="Your Email"
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-left font-bold mb-2" htmlFor="message">Message</label>
                                <textarea
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                                    id="message"
                                    rows="4"
                                    placeholder="Your Message"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 rounded-lg transition"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
