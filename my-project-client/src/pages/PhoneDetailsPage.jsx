import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { css } from "@emotion/react";
import { ClipLoader } from "react-spinners";

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

export default function PhoneDetailsPage() {
    const { phoneId } = useParams();
    const [phone, setPhone] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getPhoneDetails = () => {
        axios
            .get(`${import.meta.env.VITE_API_URL}/api/phones/${phoneId}`)
            .then((response) => {
                setPhone(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    };

    useEffect(() => {
        getPhoneDetails();
    }, [phoneId]);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen p-2">
                <ClipLoader
                    css={override}
                    size={50}
                    color={"#00FF00"}
                    loading={loading}
                />
            </div>
        );
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <div className="flex justify-center items-center min-h-screen p-2">
            <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-10">
                <div className="w-full sm:w-1/2">
                    <img
                        src={`/images/${phone.imageFileName}`}
                        alt={phone.name}
                        className="w-full h-auto object-cover rounded-md"
                    />
                </div>
                <div className="w-full sm:w-1/2">
                    <h2 className="text-3xl font-semibold">{phone.name}</h2>
                    <p className="text-gray-600 text-sm mt-2">
                        {phone.description}
                    </p>
                    <div className="mt-4">
                        <p className="text-gray-700">Price: ${phone.price}</p>
                        <p className="text-gray-700">Color: {phone.color}</p>
                        <p className="text-gray-700">Screen: {phone.screen}</p>
                        <p className="text-gray-700">
                            Processor: {phone.processor}
                        </p>
                        <p className="text-gray-700">RAM: {phone.ram} GB</p>
                    </div>
                    <br />
                    <Link
                        to="/phones"
                        className="mt-8 mx-auto px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-red-600"
                    >
                        Back to Phones List
                    </Link>
                </div>
            </div>
        </div>
    );
}
