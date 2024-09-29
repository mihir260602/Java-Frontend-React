// // // src/components/LandingPage.jsx
import React from 'react';
import './smooth-scroll.css'; // Import the smooth scroll CSS file

const LandingPage = ({ onLoginClick, onRegisterClick }) => {
    return (
        <div>
            {/* Navigation Bar */}
            <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
                <div className="container mx-auto px-4 py-3 flex justify-between">
                    <a href="#home" className="text-purple-700 font-bold hover:text-purple-500">Home</a>
                    <a href="#about" className="text-purple-700 font-bold hover:text-purple-500">About Us</a>
                    <a href="#contact" className="text-purple-700 font-bold hover:text-purple-500">Contact</a>
                    <a href="#get-started" className="text-purple-700 font-bold hover:text-purple-500">Get Started</a>
                </div>
            </nav>

            {/* Home Section with Background Image */}
            <section
                id="home"
                className="flex flex-col items-center justify-center h-screen bg-cover bg-center"
                style={{ backgroundImage: "url('" }} // Replace with actual image URL
            >
                <div className="text-center mb-12">
                    {/* <h1 className="text-6xl font-extrabold text-white mb-4 tracking-wider drop-shadow-lg">
                        Event Management
                    </h1>
                    <p className="text-xl text-gray-200 max-w-md mx-auto leading-relaxed drop-shadow-sm">
                        Seamlessly organize, manage, and attend events with our all-in-one solution.
                    </p> */}
                </div>
                {/* <div className="flex space-x-6">
                    <button
                        onClick={onLoginClick}
                        className="px-8 py-3 bg-white text-purple-700 rounded-lg shadow-lg font-semibold hover:bg-purple-700 hover:text-white transition duration-300 transform hover:-translate-y-1"
                    >
                        Login
                    </button>
                    <button
                        onClick={onRegisterClick}
                        className="px-8 py-3 bg-white text-pink-700 rounded-lg shadow-lg font-semibold hover:bg-pink-700 hover:text-white transition duration-300 transform hover:-translate-y-1"
                    >
                        Register
                    </button>
                </div> */}
            </section>

            {/* About Us Section with Solid Background */}
            <section id="about" className="flex flex-col md:flex-row items-center justify-between h-screen bg-white px-4 py-12">
                <div className="md:w-1/2 p-8">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
                </div>
                <div className="md:w-1/2 p-8">
                    <p className="text-lg text-gray-600">
                        Welcome to our Event Management website! We specialize in helping you seamlessly organize and manage events with our user-friendly platform. Whether you are planning a corporate event, a wedding, or a casual get-together, we provide all the tools you need to ensure your event is a success.
                    </p>
                </div>
                <div className="w-full md:w-1/2 p-8">
                    <img
                        //src="https://via.placeholder.com/600x400"
                        alt="About Us"
                       // className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
            </section>

            {/* Contact Section with Solid Background */}
            <section id="contact" className="flex flex-col items-center justify-center h-screen bg-gray-100 px-4 py-12">
                <div className="w-full max-w-md bg-white rounded-lg p-8 shadow-md">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
                    <p className="text-lg text-gray-600 mb-8">Have any questions or queries? Feel free to contact us!</p>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                            <input
                                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none"
                                type="text"
                                id="name"
                                placeholder="Your Name"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                            <input
                                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none"
                                type="email"
                                id="email"
                                placeholder="Your Email"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
                            <textarea
                                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none"
                                id="message"
                                placeholder="Your Message"
                                rows="4"
                            ></textarea>
                        </div>
                        <button
                            onClick={onRegisterClick}
                            className="w-full px-8 py-3 bg-purple-700 text-white rounded-lg shadow-lg font-semibold hover:bg-purple-800 transition duration-300"
                        >
                            Get Started
                        </button>
                    </form>
                </div>
            </section>

            {/* Get Started Section with Solid Background */}
            <section id="get-started" className="flex flex-col items-center justify-center h-screen bg-white px-4 py-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Ready to Get Started?</h2>
                {/* <button
                    onClick={onRegisterClick}
                    className="px-8 py-3 bg-purple-700 text-white rounded-lg shadow-lg font-semibold hover:bg-purple-800 transition duration-300"
                >
                    Register Now
                </button> */}
                <div className="flex space-x-6">
                    <button
                        onClick={onLoginClick}
                        className="px-8 py-3 bg-white text-purple-700 rounded-lg shadow-lg font-semibold hover:bg-purple-700 hover:text-white transition duration-300 transform hover:-translate-y-1"
                    >
                        Login
                    </button>
                    <button
                        onClick={onRegisterClick}
                        className="px-8 py-3 bg-white text-pink-700 rounded-lg shadow-lg font-semibold hover:bg-pink-700 hover:text-white transition duration-300 transform hover:-translate-y-1"
                    >
                        Register
                    </button>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
