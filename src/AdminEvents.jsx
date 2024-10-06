import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminEvents = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        loadEvents();
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

    const deleteEvent = (eventId) => {
        const token = localStorage.getItem('token');
        fetch(`http://localhost:8080/api/events/delete/${eventId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                if (!response.ok) {
                    return response.text().then(text => { throw new Error(text || 'Failed to delete event') });
                }
                loadEvents(); // Reload events after successful deletion
            })
            .catch(error => {
                console.error('Error deleting event:', error);
                alert(`Error: ${error.message}`);
            });
    };

    if (loading) return <div className="text-center text-lg font-semibold text-white">Loading...</div>;

    return (
        <div className="relative min-h-screen bg-cover bg-center bg-[url('https://tse1.mm.bing.net/th?id=OIP.j5sIEmjmJLdZCj44lK2fbQHaEK&pid=Api&P=0&h=220')]">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative container mx-auto p-6 bg-gray-900 bg-opacity-80 min-h-screen">
                <header className="mb-8 text-center">
                    <h2 className="text-4xl font-extrabold text-white mb-4">Admin Events Management</h2>
                </header>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {events.map((event) => (
                        <div key={event.id} className="p-6 bg-gray-800 bg-opacity-90 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-xl font-semibold text-white mb-2">{event.name}</h3>
                            <div className="mb-4 text-gray-300">
                                <p className="font-medium mb-1">
                                    <span dangerouslySetInnerHTML={{ __html: event.description || 'No description provided.' }} />
                                </p>
                                <p>{event.date}</p>
                                <p>{event.location}</p>
                            </div>
                            <div className="mt-4 flex justify-between">
                                <button
                                    onClick={() => navigate(`/edit-event/${event.id}`)}
                                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => deleteEvent(event.id)}
                                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdminEvents;
