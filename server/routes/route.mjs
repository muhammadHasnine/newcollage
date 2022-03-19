import express from 'express';
import stuSchema from '../models/studentSchema.mjs'
const route = express.Router();

route.post("/postRegist",async(req,res)=>{
    const {stuname,session,semester,techno,gender,shift,roll,point} = req.body
    const stdata = new stuSchema({
        studentName:stuname,
        roll:roll,
        gpa:point,
        session:session,
        semester:semester,
        technology:techno,
        gender:gender,
        shift:shift
    })
    try {
        await stdata.save()
    } catch (error) {
        console.log(error)
    }
})
route.get('/read',async(req,res)=>{
    stuSchema.find({},(err,result)=>{
        if(err){
            res.send(err)
        }
        res.send(result)
    })
})
route.delete('/delete/:ids',async(req,res)=>{
    const id = req.params.ids
    try {
        await stuSchema.findByIdAndDelete(id).exec();
        res.send('deleted')
    } catch (error) {
        console.log(error)
    }
})
export default route;