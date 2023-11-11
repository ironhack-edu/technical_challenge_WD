import { useEffect, useState } from "react";
import { apiConnect } from "../../api/axios";

function AboutPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [phoneDetails, setPhoneDetails] = useState();
  const { id } = useParams();

  async function getPhoneDetailsById(id) {
    try {
      setIsLoading(true);
      const response = await apiConnect.getPhoneById(id);
      setPhoneDetails(response.data);
      setIsLoading(false);
    } catch (err) {}
  }

  useEffect(() => {
    getPhoneDetailsById(id);
  }, [id]);

  return (
    <div>
      <h1>About page</h1>
    </div>
  );
}

export default AboutPage;
