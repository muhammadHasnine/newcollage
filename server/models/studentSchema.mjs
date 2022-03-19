import mongoose from 'mongoose';

const stuSchema = new mongoose.Schema({
    studentName:{
        type:String,
        require:true
    },
    session:{
        type:String,
        require:true
    },
    semester:{
        type:String,
        require:true
    },
    technology:{
        type:String,
        require:true
    },
    gender:{
        type:String,
        require:true
    },
    shift:{
        type:String,
        require:true
    },
    roll:{
        type:Number,
        require:true
    },
    gpa:{
        type:[Number],
        require:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

const studata = mongoose.model('studentCollection',stuSchema);
export default studata;
