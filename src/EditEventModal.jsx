// src/components/EditEventModal.jsx
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const EditEventModal = ({ event, onSave }) => {
    const [name, setName] = useState(event.name);
    const [description, setDescription] = useState(event.description);
    const [error, setError] = useState('');

    const handleSave = () => {
        if (!name || !description) {
            setError('Please fill in all fields');
            return;
        }
        onSave({ ...event, name, description });
    };

    return (
        <div className="p-8 max-w-lg mx-auto bg-white rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Edit Event</h2>
            {error && <p className="text-red-600 mb-4">{error}</p>}
            <input
                type="text"
                className="border border-gray-300 rounded-lg p-3 mb-5 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Event Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <div className="mb-5">
                <CKEditor
                    editor={ClassicEditor}
                    data={description}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        setDescription(data);
                    }}
                />
            </div>
            <button
                onClick={handleSave}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg w-full hover:bg-blue-700 transition duration-200 ease-in-out"
            >
                Save
            </button>
        </div>
    );
};

export default EditEventModal;
