import { RingLoader } from "react-spinners";

const Spinner = () => (
  <div className="spinner-container">
    <RingLoader color="#B931FC" loading={true} />
  </div>
);

export default Spinner;