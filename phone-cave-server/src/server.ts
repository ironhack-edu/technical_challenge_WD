import express from "express";
import cors from "cors";
import phones from "./data/phones.json";

interface Phone {
  id: number;
  name: string;
  manufacturer: string;
  description: string;
  color: string;
  price: number;
  imageFileName: string;
  screen: string;
  processor: string;
  ram: number;
}

const app = express();
const PORT = 5005;

app.use(cors());
app.use(express.json());

app.get("/phones", (req, res) => {
  res.json(phones);
});

app.get("/phones/:id", (req, res) => {
  const phoneId = Number(req.params.id);
  const phone = phones.find((p: Phone) => p.id === phoneId);

  if (!phone) {
    return res.status(404).json({ message: "Phone not found" });
  }

  res.json(phone);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
