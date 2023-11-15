import mongoose from "mongoose";

const URI="mongodb://127.0.0.1/miprimerachamba"

mongoose.connect(URI).then(()=>{
    console.log("mi primera database :v")
}).catch((err)=>{
    console.error(`ERROR:${err}`)
})