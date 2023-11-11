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
      setPhoneDetails(response.data);
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
    <div>
      <h1>Phone details</h1>
    </div>
  );
}

export default PhoneDetailsPage;
