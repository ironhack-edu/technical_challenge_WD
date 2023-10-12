const express = require('express')

const app = express();

const cors = require('cors');

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors())

const phones = require ('./data/phones.json')

app.get('/phones',(req, res)=>{ 
    res.json(phones);
})

app.get('/phones/:id', (req, res, next) => {
    const phoneId = parseInt(req.params.id);
    const phone = phones.find((p) => p.id === phoneId);
  
    if (!phone) {
      return res.status(404).send('Phone not found');
    }
    
    res.json(phone);
  });
  
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });