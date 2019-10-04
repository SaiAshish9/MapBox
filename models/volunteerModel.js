const mongoose=require('mongoose')

const volunteerSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  startLocation: {
    type: {
      type: String,
      default: 'Point',
      enum: ['Point']
    },
    coordinates: [Number],
    address: String,
    description: String
  },
  locations: [
    {
      type: {
        type: String,
        default: 'Point',
        enum: ['Point']
      },
      coordinates: [Number],
      address: String,
      description: String,
      day: Number
    }]
})


volunteerSchema.index({startLocation:'2dsphere'})

const Volunteer=mongoose.model('Volunteer',volunteerSchema);




module.exports=Volunteer
