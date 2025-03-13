const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());


app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.send('Echo Service is running. Send a POST request to /echo with your data.');
});


app.post('/echo', (req, res) => {

  res.json({
    message: 'Echo response',
    receivedData: req.body,
    timestamp: new Date().toISOString()
  });
});


app.listen(port, () => {
  console.log(`Echo service listening on port ${port}`);
});
