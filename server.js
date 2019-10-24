const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/weather',(req,res)=>{
res.sendFile(__dirname + '/public/index.html');
})

app.listen(3000,()=>{console.log('Running on port 3000')});
