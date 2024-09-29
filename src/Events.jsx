// // // // // src/components/Events.js
// // // // import React, { useEffect, useState } from 'react';
// // // // import { useNavigate } from 'react-router-dom';

// // // // const Events = () => {
// // // //     const [events, setEvents] = useState([]);
// // // //     const [loading, setLoading] = useState(true);
// // // //     const navigate = useNavigate();

// // // //     useEffect(() => {
// // // //         loadEvents();
// // // //     }, []);

// // // //     const loadEvents = () => {
// // // //         const token = localStorage.getItem('token');
// // // //         fetch('http://localhost:8080/api/events', {
// // // //             headers: {
// // // //                 'Authorization': `Bearer ${token}`
// // // //             }
// // // //         })
// // // //             .then(response => {
// // // //                 if (!response.ok) {
// // // //                     throw new Error('Failed to fetch events');
// // // //                 }
// // // //                 return response.json();
// // // //             })
// // // //             .then(data => {
// // // //                 setEvents(data);
// // // //                 setLoading(false);
// // // //             })
// // // //             .catch(error => {
// // // //                 console.error('Error loading events:', error);
// // // //                 setLoading(false);
// // // //             });
// // // //     };

// // // //     if (loading) return <div>Loading...</div>;

// // // //     return (
// // // //         <div className="p-6">
// // // //             <h2 className="text-xl font-bold mb-4">All Events</h2>
// // // //             <button
// // // //                 onClick={() => navigate('/my-events')}
// // // //                 className="px-4 py-2 bg-green-500 text-white rounded-lg mb-4"
// // // //             >
// // // //                 My Events
// // // //             </button>
// // // //             <div className="grid grid-cols-1 gap-4">
// // // //                 {events.map((event) => (
// // // //                     <div key={event.id} className="p-4 bg-white rounded-lg shadow-md">
// // // //                         <h3 className="text-lg font-bold">{event.name}</h3>
// // // //                         <div className="event-description">
// // // //                             <p><strong>Description:</strong></p>
// // // //                             {event.description ? (
// // // //                                 <div dangerouslySetInnerHTML={{ __html: event.description }} />
// // // //                             ) : (
// // // //                                 <p>No description provided.</p>
// // // //                             )}
// // // //                         </div>
// // // //                         <p><strong>Date:</strong> {event.date}</p>
// // // //                         <p><strong>Location:</strong> {event.location}</p>
// // // //                     </div>
// // // //                 ))}
// // // //             </div>
// // // //         </div>
// // // //     );
// // // // };

// // // // export default Events;

// // // // src/components/Events.jsx
// // // import React, { useEffect, useState } from 'react';
// // // import { useNavigate } from 'react-router-dom';

// // // const Events = () => {
// // //     const [events, setEvents] = useState([]);
// // //     const [loading, setLoading] = useState(true);
// // //     const navigate = useNavigate();

// // //     useEffect(() => {
// // //         loadEvents();
// // //     }, []);

// // //     const loadEvents = () => {
// // //         const token = localStorage.getItem('token');
// // //         fetch('http://localhost:8080/api/events', {
// // //             headers: {
// // //                 'Authorization': `Bearer ${token}`
// // //             }
// // //         })
// // //             .then(response => {
// // //                 if (!response.ok) {
// // //                     throw new Error('Failed to fetch events');
// // //                 }
// // //                 return response.json();
// // //             })
// // //             .then(data => {
// // //                 setEvents(data);
// // //                 setLoading(false);
// // //             })
// // //             .catch(error => {
// // //                 console.error('Error loading events:', error);
// // //                 setLoading(false);
// // //             });
// // //     };

// // //     if (loading) return <div className="text-center text-lg font-semibold">Loading...</div>;

// // //     return (
// // //         <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
// // //             <h2 className="text-3xl font-bold text-gray-800 mb-6">All Events</h2>
// // //             <button
// // //                 onClick={() => navigate('/my-events')}
// // //                 className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
// // //             >
// // //                 My Events
// // //             </button>
// // //             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
// // //                 {events.map((event) => (
// // //                     <div key={event.id} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
// // //                         <h3 className="text-xl font-semibold text-gray-700 mb-2">{event.name}</h3>
// // //                         <div className="event-description mb-4">
// // //                             <p className="font-medium text-gray-600 mb-1"><strong>Description:</strong></p>
// // //                             {event.description ? (
// // //                                 <div dangerouslySetInnerHTML={{ __html: event.description }} className="text-gray-800" />
// // //                             ) : (
// // //                                 <p className="text-gray-600">No description provided.</p>
// // //                             )}
// // //                         </div>
// // //                         <p className="text-gray-600"><strong>Date:</strong> {event.date}</p>
// // //                         <p className="text-gray-600"><strong>Location:</strong> {event.location}</p>
// // //                     </div>
// // //                 ))}
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // export default Events;



// // // src/components/Events.jsx
// // // import React, { useEffect, useState } from 'react';
// // // import { useNavigate } from 'react-router-dom';

// // // const Events = () => {
// // //     const [events, setEvents] = useState([]);
// // //     const [loading, setLoading] = useState(true);
// // //     const navigate = useNavigate();

// // //     useEffect(() => {
// // //         loadEvents();
// // //     }, []);

// // //     const loadEvents = () => {
// // //         const token = localStorage.getItem('token');
// // //         fetch('http://localhost:8080/api/events', {
// // //             headers: {
// // //                 'Authorization': `Bearer ${token}`
// // //             }
// // //         })
// // //             .then(response => {
// // //                 if (!response.ok) {
// // //                     throw new Error('Failed to fetch events');
// // //                 }
// // //                 return response.json();
// // //             })
// // //             .then(data => {
// // //                 setEvents(data);
// // //                 setLoading(false);
// // //             })
// // //             .catch(error => {
// // //                 console.error('Error loading events:', error);
// // //                 setLoading(false);
// // //             });
// // //     };

// // //     if (loading) return <div className="text-center text-lg font-semibold text-white">Loading...</div>;

// // //     return (
// // //         <div className="relative min-h-screen bg-cover bg-center bg-[url('C:\Users\mihir\OneDrive\Desktop\test\BgImage.jpg')]">
// // //             <div className="absolute inset-0 bg-black opacity-50"></div>
// // //             <div className="relative container mx-auto p-6 bg-gray-100 bg-opacity-80 min-h-screen">
// // //                 <h2 className="text-3xl font-bold text-gray-800 mb-6">All Events</h2>
// // //                 <button
// // //                     onClick={() => navigate('/my-events')}
// // //                     className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
// // //                 >
// // //                     My Events
// // //                 </button>
// // //                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
// // //                     {events.map((event) => (
// // //                         <div key={event.id} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
// // //                             <h3 className="text-xl font-semibold text-gray-700 mb-2">{event.name}</h3>
// // //                             <div className="event-description mb-4">
// // //                                 <p className="font-medium text-gray-600 mb-1"><strong>Description:</strong></p>
// // //                                 {event.description ? (
// // //                                     <div dangerouslySetInnerHTML={{ __html: event.description }} className="text-gray-800" />
// // //                                 ) : (
// // //                                     <p className="text-gray-600">No description provided.</p>
// // //                                 )}
// // //                             </div>
// // //                             <p className="text-gray-600"><strong>Date:</strong> {event.date}</p>
// // //                             <p className="text-gray-600"><strong>Location:</strong> {event.location}</p>
// // //                         </div>
// // //                     ))}
// // //                 </div>
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // export default Events;


// // // src/components/Events.jsx
// // import React, { useEffect, useState } from 'react';
// // import { useNavigate } from 'react-router-dom';

// // const Events = () => {
// //     const [events, setEvents] = useState([]);
// //     const [loading, setLoading] = useState(true);
// //     const navigate = useNavigate();

// //     useEffect(() => {
// //         loadEvents();
// //     }, []);

// //     const loadEvents = () => {
// //         const token = localStorage.getItem('token');
// //         fetch('http://localhost:8080/api/events', {
// //             headers: {
// //                 'Authorization': `Bearer ${token}`
// //             }
// //         })
// //             .then(response => {
// //                 if (!response.ok) {
// //                     throw new Error('Failed to fetch events');
// //                 }
// //                 return response.json();
// //             })
// //             .then(data => {
// //                 setEvents(data);
// //                 setLoading(false);
// //             })
// //             .catch(error => {
// //                 console.error('Error loading events:', error);
// //                 setLoading(false);
// //             });
// //     };

// //     if (loading) return <div className="text-center text-lg font-semibold text-white">Loading...</div>;

// //     return (
// //         <div className="relative min-h-screen bg-cover bg-center bg-[url('C:\Users\mihir\OneDrive\Desktop\test\BgImage.jpg')]">
// //             <div className="absolute inset-0 bg-black opacity-50"></div>
// //             <div className="relative container mx-auto p-6 bg-gray-100 bg-opacity-80 min-h-screen">
// //                 <h2 className="text-3xl font-bold text-gray-800 mb-6">All Events</h2>
// //                 <button
// //                     onClick={() => navigate('/my-events')}
// //                     className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
// //                 >
// //                     My Events
// //                 </button>
// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
// //                     {events.map((event) => (
// // //                         <div key={event.id} className="p-6 bg-gray-200 bg-opacity-70 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
// // //                             <h3 className="text-xl font-semibold text-gray-700 mb-2">{event.name}</h3>
// // //                             <div className="event-description mb-4">
// // //                                 <p className="font-medium text-gray-600 mb-1"><strong>Description:</strong></p>
// // //                                 {event.description ? (
// // //                                     <div dangerouslySetInnerHTML={{ __html: event.description }} className="text-gray-800" />
// // //                                 ) : (
// // //                                     <p className="text-gray-600">No description provided.</p>
// // //                                 )}
// // //                             </div>
// // //                             <p className="text-gray-600"><strong>Date:</strong> {event.date}</p>
// // //                             <p className="text-gray-600"><strong>Location:</strong> {event.location}</p>
// // //                         </div>
// // //                     ))}
// // //                 </div>
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // export default Events;


// // // src/components/Events.jsx
// // import React, { useEffect, useState } from 'react';
// // import { useNavigate } from 'react-router-dom';

// // const Events = () => {
// //     const [events, setEvents] = useState([]);
// //     const [loading, setLoading] = useState(true);
// //     const navigate = useNavigate();

// //     useEffect(() => {
// //         loadEvents();
// //     }, []);

// //     const loadEvents = () => {
// //         const token = localStorage.getItem('token');
// //         fetch('http://localhost:8080/api/events', {
// //             headers: {
// //                 'Authorization': `Bearer ${token}`
// //             }
// //         })
// //             .then(response => {
// //                 if (!response.ok) {
// //                     throw new Error('Failed to fetch events');
// //                 }
// //                 return response.json();
// //             })
// //             .then(data => {
// //                 setEvents(data);
// //                 setLoading(false);
// //             })
// //             .catch(error => {
// //                 console.error('Error loading events:', error);
// //                 setLoading(false);
// //             });
// //     };

// //     if (loading) return <div className="text-center text-lg font-semibold text-white">Loading...</div>;

// //     return (
// //         <div className="relative min-h-screen bg-cover bg-center bg-[url('C:\Users\mihir\OneDrive\Desktop\test\BgImage.jpg')]">
// //             <div className="absolute inset-0 bg-black opacity-50"></div>
// //             <div className="relative container mx-auto p-6 bg-gray-100 bg-opacity-80 min-h-screen">
// //                 <h2 className="text-3xl font-bold text-gray-800 mb-6">All Events</h2>
// //                 <button
// //                     onClick={() => navigate('/my-events')}
// //                     className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
// //                 >
// //                     My Events
// //                 </button>
// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
// //                     {events.map((event) => (
// //                         <div key={event.id} className="p-6 bg-gray-200 bg-opacity-70 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
// //                             <h3 className="text-xl font-semibold text-gray-700 mb-2">{event.name}</h3>
// //                             <div className="mb-4">
// //                                 <p className="font-medium text-gray-600 mb-1">
// //                                     <strong>Description:</strong> {event.description || 'No description provided.'}
// //                                 </p>
// //                                 <p className="text-gray-600">
// //                                     <strong>Date:</strong> {event.date}
// //                                 </p>
// //                                 <p className="text-gray-600">
// //                                     <strong>Location:</strong> {event.location}
// //                                 </p>
// //                             </div>
// //                         </div>
// //                     ))}
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default Events;
// // src/components/Events.jsx
// // import React, { useEffect, useState } from 'react';
// // import { useNavigate } from 'react-router-dom';

// // const Events = () => {
// //     const [events, setEvents] = useState([]);
// //     const [loading, setLoading] = useState(true);
// //     const navigate = useNavigate();

// //     useEffect(() => {
// //         loadEvents();
// //     }, []);

// //     const loadEvents = () => {
// //         const token = localStorage.getItem('token');
// //         fetch('http://localhost:8080/api/events', {
// //             headers: {
// //                 'Authorization': `Bearer ${token}`
// //             }
// //         })
// //             .then(response => {
// //                 if (!response.ok) {
// //                     throw new Error('Failed to fetch events');
// //                 }
// //                 return response.json();
// //             })
// //             .then(data => {
// //                 setEvents(data);
// //                 setLoading(false);
// //             })
// //             .catch(error => {
// //                 console.error('Error loading events:', error);
// //                 setLoading(false);
// //             });
// //     };

// //     if (loading) return <div className="text-center text-lg font-semibold text-white">Loading...</div>;

// //     return (
// //         <div className="relative min-h-screen bg-cover bg-center bg-[url('C:\Users\mihir\OneDrive\Desktop\test\BgImage.jpg')]">
// //             <div className="absolute inset-0 bg-black opacity-50"></div>
// //             <div className="relative container mx-auto p-6 bg-gray-100 bg-opacity-80 min-h-screen">
// //                 <header className="mb-8">
// //                     <h2 className="text-4xl font-extrabold text-gray-900 mb-4">All Events</h2>
// //                     <button
// //                         onClick={() => navigate('/my-events')}
// //                         className="px-5 py-2 border border-gray-300 text-gray-800 rounded-lg bg-white shadow-sm hover:bg-gray-100 transition duration-300"
// //                     >
// //                         View My Events
// //                     </button>
// //                 </header>
// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
// //                     {events.map((event) => (
// //                         <div key={event.id} className="p-6 bg-gray-200 bg-opacity-70 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
// //                             <h3 className="text-xl font-semibold text-gray-700 mb-2">{event.name}</h3>
// //                             <div className="mb-4">
// //                                 <p className="font-medium text-gray-600 mb-1">
// //                                     <strong>Description:</strong> {event.description || 'No description provided.'}
// //                                 </p>
// //                                 <p className="text-gray-600">
// //                                     <strong>Date:</strong> {event.date}
// //                                 </p>
// //                                 <p className="text-gray-600">
// //                                     <strong>Location:</strong> {event.location}
// //                                 </p>
// //                             </div>
// //                         </div>
// //                     ))}
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default Events;


// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Events = () => {
//     const [events, setEvents] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const navigate = useNavigate();

//     useEffect(() => {
//         loadEvents();
//     }, []);

//     const loadEvents = () => {
//         const token = localStorage.getItem('token');
//         fetch('http://localhost:8080/api/events', {
//             headers: {
//                 'Authorization': `Bearer ${token}`
//             }
//         })
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch events');
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 setEvents(data);
//                 setLoading(false);
//             })
//             .catch(error => {
//                 console.error('Error loading events:', error);
//                 setLoading(false);
//             });
//     };

//     if (loading) return <div className="text-center text-lg font-semibold text-white">Loading...</div>;

//     return (
//         <div className="relative min-h-screen bg-cover bg-center bg-[url('C:\Users\mihir\OneDrive\Desktop\test\BgImage.jpg')]">
//             <div className="absolute inset-0 bg-black opacity-50"></div>
//             <div className="relative container mx-auto p-6 bg-gray-100 bg-opacity-80 min-h-screen">
//                 <header className="mb-8">
//                     <h2 className="text-4xl font-extrabold text-gray-900 mb-4">All Events</h2>
//                     <button
//                         onClick={() => navigate('/my-events')}
//                         className="px-5 py-2 border border-gray-300 text-gray-800 rounded-lg bg-white shadow-sm hover:bg-gray-100 transition duration-300"
//                     >
//                         View My Events
//                     </button>
//                 </header>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
//                     {events.map((event) => (
//                         <div key={event.id} className="p-6 bg-gray-200 bg-opacity-70 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
//                             <h3 className="text-xl font-semibold text-gray-700 mb-2">{event.name}</h3>
//                             <div className="mb-4">
//                                 <p className="font-medium text-gray-600 mb-1">
//                                     <strong> <span dangerouslySetInnerHTML={{ __html: event.description || 'No description provided.' }} /></strong>
//                                     {/* <span dangerouslySetInnerHTML={{ __html: event.description || 'No description provided.' }} /> */}
//                                 </p>
//                                 <p className="text-gray-600">
//                                     <strong></strong> {event.date}
//                                 </p>
//                                 <p className="text-gray-600">
//                                     <strong></strong> {event.location}
//                                 </p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Events;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Events = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false); // Track if the logged-in user is an admin
    const navigate = useNavigate();

    useEffect(() => {
        loadEvents();
        checkIfAdmin(); // Check if the user is an admin
    }, []);

    const loadEvents = () => {
        const token = localStorage.getItem('token');
        fetch('http://localhost:8080/api/events', {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch events');
                }
                return response.json();
            })
            .then(data => {
                setEvents(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error loading events:', error);
                setLoading(false);
            });
    };

    const checkIfAdmin = () => {
        const token = localStorage.getItem('token');
        fetch('http://localhost:8080/api/users/mj', {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch user info');
                }
                return response.json();
            })
            .then(userData => {
                if (userData.roles.includes('ADMIN')) {
                    setIsAdmin(true); // Set if the user is an admin
                }
            })
            .catch(error => {
                console.error('Error fetching user info:', error);
            });
    };
    const deleteEvent = (eventId) => {
        const token = localStorage.getItem('token');
        fetch(`http://localhost:8080/api/events/${eventId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
        .then(response => {
            if (!response.ok) {
                // Log detailed error response for debugging
                return response.text().then(text => { throw new Error(text || 'Failed to delete event') });
            }
            // Reload events after successful deletion
            loadEvents();
        })
        .catch(error => {
            console.error('Error deleting event:', error);
            alert(`Error: ${error.message}`);
        });
    };
    

    if (loading) return <div className="text-center text-lg font-semibold text-white">Loading...</div>;

    return (
        <div className="relative min-h-screen bg-cover bg-center bg-[url('C:/Users/mihir/OneDrive/Desktop/test/BgImage.jpg')]">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative container mx-auto p-6 bg-gray-100 bg-opacity-80 min-h-screen">
                <header className="mb-8">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-4">All Events</h2>
                    <button
                        onClick={() => navigate('/my-events')}
                        className="px-5 py-2 border border-gray-300 text-gray-800 rounded-lg bg-white shadow-sm hover:bg-gray-100 transition duration-300"
                    >
                        View My Events
                    </button>
                </header>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    {events.map((event) => (
                        <div key={event.id} className="p-6 bg-gray-200 bg-opacity-70 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">{event.name}</h3>
                            <div className="mb-4">
                                <p className="font-medium text-gray-600 mb-1">
                                    <span dangerouslySetInnerHTML={{ __html: event.description || 'No description provided.' }} />
                                </p>
                                <p className="text-gray-600">{event.date}</p>
                                <p className="text-gray-600">{event.location}</p>
                            </div>
                            {isAdmin && (
                                <div className="mt-4">
                                    <button
                                        onClick={() => navigate(`/edit-event/${event.id}`)}
                                        className="px-4 py-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => deleteEvent(event.id)}
                                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                                    >
                                        Delete
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Events;
