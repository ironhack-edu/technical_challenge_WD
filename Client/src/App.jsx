import "./App.css";
import PhonesListPage from "./pages/PhonesListPage";
import PhoneDetailsPage from "./pages/PhoneDetailsPage";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/phones" element={<PhonesListPage />} />
          <Route path="/phones/:Id" element={<PhoneDetailsPage />} />
          <Route path="*" element={<h1>404 Page Not Found</h1>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
