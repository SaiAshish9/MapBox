const express=require('express');
const app=express();
const ejs=require('ejs')
const bodyParser=require('body-parser');
const mongoose=require('mongoose')
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
mongoose.connect("mongodb://localhost:27017/mapboxapiDB",{useNewUrlParser:true})
app.set('view engine','ejs')
app.use(express.static("public"))
const Volunteer=require('./models/volunteerModel')

const volunteerRoutes=require('./routes/volunteerRoutes')


//
// const item1 = new Volunteer({
//   name: "sai."
// })
// const item2 = new Volunteer({
//   name: "keshav"
// })
// const item3 = new Volunteer({
//   name: "rajat"
// })
//
// const defaultItems = [item1, item2, item3];


app.get('/',(req,res)=>{
// res.status(200).json("hi,everything ok here")
// res.render('home');
Volunteer.find({}, (err, foundItems) => {
   res.render('home',{items:foundItems});
})

})

app.use('/',volunteerRoutes)



app.listen(process.env.PORT||3000,()=>{
  console.log("server started");
})
