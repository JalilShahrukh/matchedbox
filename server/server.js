const express = require('express'); 
const path = require('path'); 
const app = express(); 

app.use(express.static(path.join(__dirname, './../dist')));

app.get('/dist', (req, res) => { 
  res.sendFile(path.join(__dirname, './../dist/bundle.js')); 
}); 

app.get('/css', (req, res) => { 
  res.sendFile(path.join(__dirname, './../style.css')); 
}); 

app.listen(3000, () => { 
  console.log('Listening on port 3000'); 
});