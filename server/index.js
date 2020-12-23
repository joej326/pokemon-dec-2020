const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();
const assetFolder  = path.resolve(__dirname, './../dist/pokemon');

app.use(express.static(path.join(__dirname, './../dist/pokemon')));

app.use(bodyParser.json());

app.get('/', (req, res) => res.sendFile(path.resolve(assetFolder, 'index.html')));


app.listen(3000,()=>{
  console.log('show time, folks.');
})
