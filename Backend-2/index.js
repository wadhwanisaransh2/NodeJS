
const express = require('express')
const app = express()
const port = 8080;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
app.get("/search",(req,res)=>{
  let {q} = req.query;  
  res.send(`<h1>This account belongs to ${q}</h1>`);
})
