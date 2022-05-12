const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extened: true
}));


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
})

app.listen(2110, () => {

  console.log("Server is running");
})
