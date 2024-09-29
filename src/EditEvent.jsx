// src/components/EditEvent.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditEvent = () => {
    const { id } = useParams(); // Get the event ID from the URL
    const [event, setEvent] = useState({});
    const [loading, setLoading] = useState(true);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        fetch(`http://localhost:8080/api/events/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
        .then(response => response.json())
        .then(data => {
            setEvent(data);
            setName(data.name);
            setDescription(data.description);
            setDate(data.date);
            setLocation(data.location);
            setLoading(false);
        })
        .catch(error => {
            console.error('Error fetching event:', error);
            setLoading(false);
        });
    }, [id]);

    const handleEditEvent = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const updatedEvent = { name, description, date, location };

        fetch(`http://localhost:8080/api/events/${id}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedEvent),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to update event');
            }
            navigate('/events'); // Redirect to events page after successful edit
        })
        .catch(error => {
            console.error('Error updating event:', error);
        });
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl mb-4">Edit Event</h2>
            <form onSubmit={handleEditEvent}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Date</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Location</label>
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Save Changes
                </button>
            </form>
        </div>
    );
};

export default EditEvent;
