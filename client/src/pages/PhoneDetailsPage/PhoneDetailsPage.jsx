import { useEffect, useState } from "react";
import { apiConnect } from "../../api/axios";
import { useParams } from "react-router";
import toast from "react-hot-toast";

function PhoneDetailsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [phoneDetails, setPhoneDetails] = useState();
  const { id } = useParams();

  async function getPhoneDetailsById(id) {
    try {
      setIsLoading(true);
      const response = await apiConnect.getPhoneById(id);
      console.log(response.data);
      setPhoneDetails(response?.data[0]);
      setIsLoading(false);
    } catch (err) {
      const { response } = err;
      toast.error(response?.data || "Could not get phone data", {
        position: "top-center",
      });
    }
  }

  useEffect(() => {
    getPhoneDetailsById(id);
  }, [id]);

  return (
    <div className="container mx-auto mt-8">
      {isLoading ? (
        ""
      ) : (
        <div className="max-w-2xl mx-auto bg-white p-8 shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold">{phoneDetails?.name}</h1>
            <span className="text-2xl font-bold text-blue-500">
              ${phoneDetails?.price}
            </span>
          </div>
          <div className="flex">
            <img
              className="w-1/2 rounded-lg mr-4"
              src={phoneDetails?.imageFileName && require(`../../assets/images/${phoneDetails?.imageFileName}`)}
              alt={`${phoneDetails?.name} - ${phoneDetails?.color}`}
            />
            <div className="w-1/2">
              <p className="text-gray-700 mb-4">{phoneDetails?.description}</p>
              <ul className="list-disc list-inside">
                <li>
                  <strong>Manufacturer:</strong> {phoneDetails?.manufacturer}
                </li>
                <li>
                  <strong>Color:</strong> {phoneDetails?.color}
                </li>
                <li>
                  <strong>Screen:</strong> {phoneDetails?.screen}
                </li>
                <li>
                  <strong>Processor:</strong> {phoneDetails?.processor}
                </li>
                <li>
                  <strong>RAM:</strong> {phoneDetails?.ram}GB
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PhoneDetailsPage;
