//  Use to navigate to All post page
const express = require("express")
const app = express()

const path = require ("path")
app.get("/",(req,res)=>{
  res.render("login")
})

app.get("/",(req,res)=>{
  res.render("")
})

app.listen(3000, ()=>{
  console.log("port connected")
})
function AllPost() {
  window.location.href = "../html/bloglist.html";
}
