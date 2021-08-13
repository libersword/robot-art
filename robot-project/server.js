
const express = require('express');
const PORT = 8080;
const app = express();
var cors = require('cors')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(8080))

app.listen(PORT, () => {
  console.log(`Server start on ${PORT}`);
})
