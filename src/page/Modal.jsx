import React, { useState } from 'react';

function Modal({ isOpen, label, onClose, onSubmit }) {

    const [nama, setNama] = useState('');
    const [nim, setNim] = useState('');

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(nama, nim);
        setNama('');
        setNim('');
        onClose();
    }

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                    <h2 className="text-xl font-bold mb-4">{label}</h2>

                    <form onSubmit={handleSubmit}>
               
                        <div className="mb-4">
                            <label className="block text-gray-700">Nama:</label>
                            <input 
                                type="text" 
                                className="w-full px-4 py2 border rounded-lg"
                                value={nama}
                                onChange={(e) => setNama(e.target.value)}        
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Nim:</label>
                            <input 
                                type="text" 
                                className="w-full px-4 py2 border rounded-lg"
                                value={nim}
                                onChange={(e) => setNim(e.target.value)}        
                            />
                        </div>
                        <div className="flex justify-end">
                            <button type="submit" className="bg-green-500 text-white px-2 py-1 mr-2 rounded-md hover:bg-yellow-400">
                                Simpan
                            </button>
                            <button type="button" className="bg-yellow-500 text-white px-2 py-1 rounded-md hover:bg-yellow-400"onClick={onClose}>
                                Batal
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Modal;
    