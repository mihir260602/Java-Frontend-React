// src/components/MyEvents.jsx

import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Import icons

const MyEvents = ({ onEdit, onCreate }) => {
    const [myEvents, setMyEvents] = useState([]);
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);
    const [currentEvent, setCurrentEvent] = useState(null);
    const [newEvent, setNewEvent] = useState({ name: '', description: '', date: '', location: '' });

    useEffect(() => {
        loadMyEvents();
    }, []);

    const loadMyEvents = () => {
        const token = localStorage.getItem('token');
        const username = localStorage.getItem('username');
        fetch(`http://localhost:8080/api/events/user/${username}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then(data => setMyEvents(data))
            .catch(error => console.error('Error loading my events:', error));
    };

    const handleCreateEvent = () => {
        const apiUrl = 'http://localhost:8080/api/events/create';
        const username = localStorage.getItem('username');
        const eventWithUser = { ...newEvent, username };

        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(eventWithUser),
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    console.log('Event created successfully:', data);
                    setShowCreateForm(false);
                    loadMyEvents();
                } else {
                    console.error('Error creating event');
                }
            })
            .catch(error => console.error('Error creating event:', error));
    };

    const handleEditEvent = (eventId) => {
        const apiUrl = `http://localhost:8080/api/events/update/${eventId}`;
        fetch(apiUrl, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(currentEvent),
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    console.log('Event updated successfully:', data);
                    setShowEditForm(false);
                    loadMyEvents();
                } else {
                    console.error('Error updating event');
                }
            })
            .catch(error => console.error('Error updating event:', error));
    };

    const handleDeleteEvent = (eventId) => {
        fetch(`http://localhost:8080/api/events/delete/${eventId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(() => loadMyEvents())
            .catch(error => console.error('Error deleting event:', error));
    };

    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">My Events</h2>
            <button
                onClick={() => setShowCreateForm(true)}
                className="px-6 py-3 bg-green-600 text-white rounded-lg mb-6 hover:bg-green-700 transition duration-300 shadow-md hover:shadow-lg"
            >
                Create New Event
            </button>
            {showCreateForm && (
                <div className="mb-6 p-6 bg-white rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900">Create Event</h3>
                    <input
                        type="text"
                        className="border border-gray-300 rounded-lg p-3 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Event Name"
                        value={newEvent.name}
                        onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
                    />
                    <CKEditor
                        editor={ClassicEditor}
                        data={newEvent.description}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            setNewEvent({ ...newEvent, description: data });
                        }}
                        className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
                    />
                    <input
                        type="date"
                        className="border border-gray-300 rounded-lg p-3 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={newEvent.date}
                        onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                    />
                    <input
                        type="text"
                        className="border border-gray-300 rounded-lg p-3 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Event Location"
                        value={newEvent.location}
                        onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
                    />
                    <button
                        onClick={handleCreateEvent}
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg"
                    >
                        Save Event
                    </button>
                </div>
            )}
            {showEditForm && currentEvent && (
                <div className="mb-6 p-6 bg-white rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900">Edit Event</h3>
                    <input
                        type="text"
                        className="border border-gray-300 rounded-lg p-3 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Event Name"
                        value={currentEvent.name}
                        onChange={(e) => setCurrentEvent({ ...currentEvent, name: e.target.value })}
                    />
                    <CKEditor
                        editor={ClassicEditor}
                        data={currentEvent.description}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            setCurrentEvent({ ...currentEvent, description: data });
                        }}
                        className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
                    />
                    <input
                        type="date"
                        className="border border-gray-300 rounded-lg p-3 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={currentEvent.date}
                        onChange={(e) => setCurrentEvent({ ...currentEvent, date: e.target.value })}
                    />
                    <input
                        type="text"
                        className="border border-gray-300 rounded-lg p-3 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Event Location"
                        value={currentEvent.location}
                        onChange={(e) => setCurrentEvent({ ...currentEvent, location: e.target.value })}
                    />
                    <button
                        onClick={() => handleEditEvent(currentEvent.id)}
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg"
                    >
                        Update Event
                    </button>
                </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {myEvents.map((event) => (
                    <div key={event.id} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h3 className="text-lg font-semibold text-gray-900">{event.name}</h3>
                        <p className="mt-2 text-gray-600"><strong>Description:</strong></p>
                        <div
                            className="event-description text-gray-600 mt-2"
                            dangerouslySetInnerHTML={{ __html: event.description }}
                        />
                        <p className="mt-2 text-gray-600"><strong>Date:</strong> {event.date}</p>
                        <p className="mt-2 text-gray-600"><strong>Location:</strong> {event.location}</p>
                        <div className="mt-4 flex space-x-3">
                            <button
                                onClick={() => {
                                    setCurrentEvent(event);
                                    setShowEditForm(true);
                                }}
                                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 shadow-md hover:shadow-lg flex items-center space-x-2"
                            >
                                <FaEdit />
                                <span>Edit</span>
                            </button>
                            <button
                                onClick={() => handleDeleteEvent(event.id)}
                                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300 shadow-md hover:shadow-lg flex items-center space-x-2"
                            >
                                <FaTrash />
                                <span>Delete</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyEvents;
