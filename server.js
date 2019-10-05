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



const item1 = new Volunteer({
   "startLocation": {
      "description": "",
      "type": "Point",
      "coordinates": [-80.185942,24.774772],
      "address": ""
    },

    "_id": "5c88fa8cf4afda39709c2955",
    "name": "Sai",
    "location":
      {
        "_id": "5c88fa8cf4afda39709c2959",
        "description": "Delhi Airport",
        "type": "Point",
        "coordinates": [77.1176126,28.5638968],
        "day": 1
      }
  }
)



const item2 = new Volunteer({
  "startLocation": {
    "description": "",
    "type": "Point",
    "coordinates": [-115.570154, 51.178456],
    "address": ""
  },

  "_id": "5c88fa8cf4afda39709c2951",
  "name": "Keshav",

  "location":
    {
      "_id": "5c88fa8cf4afda39709c2954",
      "description": "",
      "type": "Point",
      "coordinates": [75.11852,26.5488228],
      "day": 1
    }
})

const item3={
  "startLocation": {
    "description": "",
    "type": "Point",
    "coordinates": [-115.570154, 51.178456],
    "address": ""
  },

  "_id": "5c88fa8cf4afda39709c2951",
  "name": "Keshav",

  "location":
    {
      "_id": "5c88fa8cf4afda39709c2954",
      "description": "",
      "type": "Point",
      "coordinates": [-116.214531, 51.417611],
      "day": 1
    }
}

// console.log(item2);
// const item4=JSON.stringify(item2)
// console.log(item3.location['coordinates']);

const defaultItems = [item1, item2];
const  locations=[];


//
// defaultItems.forEach((item)=>{
// locations.push(item.location['coordinates'])
// })
// console.log(locations);



const found=[];
const coordinates=[];
app.get('/',(req,res)=>{
// res.status(200).json("hi,everything ok here")
// res.render('home');
Volunteer.find({}, (err, foundItems) => {
  if (foundItems.length === 0) {
    Volunteer.insertMany(defaultItems, (err) => {
      if (err) {
        console.log("Error!");
      } else
        console.log("Successfully saved!");
    })
    res.redirect("/")}else{
      const found=JSON.stringify(foundItems)
      // console.log(foundItems);
      foundItems.forEach((item)=>{
        // console.log(item.location['coordinates']);
      if(locations.length<foundItems.length)
      locations.push(item.location['coordinates'])
  })
  console.log(locations);
      // console.log(locations);
//
// locations.forEach(loc=>{
//   coordinates.push(loc['day'])
// })
// console.log(coordinates);

      res.render('home',{items:foundItems,locations:locations});
    }
})

})

app.use('/',volunteerRoutes)



app.listen(process.env.PORT||3000,()=>{
  console.log("server started");
})
