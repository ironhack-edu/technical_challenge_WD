import { useEffect, useState } from "react";
import { apiConnect } from "../../api/axios";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { PulseLoader } from "react-spinners";
import PhoneCard from "../../components/PhoneCard";

function HomePage() {
  const [allPhones, setAllPhones] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigator = useNavigate();

  async function getAllPhones() {
    try {
      setIsLoading(true);
      const response = await apiConnect.getAllPhones();
      setAllPhones(response?.data);
      setIsLoading(false);
    } catch (err) {
      const { response } = err;
      toast.error(response?.data || "Could not fetch data", {
        position: "top-center",
      });
    }
  }

  useEffect(() => {
    getAllPhones();
  }, []);

  return (
    <div className="min-w-full p-6">
      {isLoading ? (
        <div className="w-full h-full flex justify-center items-center">
          <PulseLoader size={32} color="blue" />
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          
          {allPhones.map((data) => {
            return <PhoneCard {...data} key={data.id} />;
          })}
        
        </div>
      )}
    </div>
  );
}

export default HomePage;
