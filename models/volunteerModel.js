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
  location:
    {
      type: {
        type: String,
        default: 'Point',
        enum: ['Point']
      },
      coordinates: [Number],
      address: String,
      description: String    }
})


volunteerSchema.index({startLocation:'2dsphere'})

const Volunteer=mongoose.model('Volunteer',volunteerSchema);




module.exports=Volunteer
