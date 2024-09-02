import mongoose from "mongoose";
 
const Schema = new mongoose.Schema({
    name :  {type:String, required:true,trim:true},
    dept : {type:String, required:true, trim:true }

})

const student = mongoose.model("students",Schema);


async function createStu(){
    try{
        const s1 = new  student({
            name : "Rahul",
            dept : "CSE"
        })
        const result = await student.find()
        console.log(result)

    }catch(err){
        console.log(err)
    }

}

// async fuction createStu(){
//     try{
//         const s1 = new  student({
//             name : "Rahul",
//             dept : "CSE"
//         })
//         const result = await s1.save()
//         console.log(result)

//     }catch(err){
//         console.log(err)
//     }
// }
export default createStu();