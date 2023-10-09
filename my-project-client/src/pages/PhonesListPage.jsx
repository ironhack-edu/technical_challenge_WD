import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function PhonesListPage() {
    const [phones, setPhones] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getAllPhones = () => {
        axios
            .get(`${import.meta.env.VITE_API_URL}/api/phones`)
            .then((response) => {
                setPhones(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    };

    useEffect(() => {
        getAllPhones();
    }, []);

    if (loading) {
        return <p>Loading</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <div className="flex justify-center items-center min-h-screen p-2">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-screen-xl mx-auto">
                {phones.map((phone) => (
                    <div
                        key={phone.id}
                        className="bg-white p-6 rounded-xl shadow-lg hover:bg-gray-100 transform hover:scale-105 transition duration-300"
                    >
                        <Link
                            to={`/phones/${phone.id}`}
                            className="cursor-pointer"
                        >
                            <img
                                src={`/images/${phone.imageFileName}`}
                                alt={phone.name}
                                className="w-full h-72 object-cover object-center rounded-md"
                            />
                            <h2 className="text-xl font-semibold mt-4">
                                {phone.name}
                            </h2>
                            <p className="text-gray-600 text-sm mt-2">
                                {phone.description}
                            </p>
                            <div className="mt-4">
                                <p className="text-gray-700">
                                    Price: ${phone.price}
                                </p>
                                <p className="text-gray-700">
                                    Color: {phone.color}
                                </p>
                                <p className="text-gray-700">
                                    Screen: {phone.screen}
                                </p>
                                <p className="text-gray-700">
                                    Processor: {phone.processor}
                                </p>
                                <p className="text-gray-700">
                                    RAM: {phone.ram} GB
                                </p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
