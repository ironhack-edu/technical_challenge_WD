import { useEffect } from "react";
import { apiConnect } from "../../api/axios";

function HomePage() {
  const [allPhones, setAllPhones] = useEffect([]);
  const [isLoading, setIsLoading] = useEffect(false);

  async function getAllPhones() {
    try {
      setIsLoading(true);
      const response = await apiConnect.getAllPhones();
      setAllPhones(response.data);
      setIsLoading(false);
    } catch (err) {
      const { response } = err;
    }
  }

  useEffect(() => {
    getAllPhones();
  }, []);

  return (
    <div>
      <h1>Home page</h1>
    </div>
  );
}

export default HomePage;
