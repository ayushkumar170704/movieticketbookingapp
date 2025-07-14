import mongoose from "mongoose";

const connectDB = async() =>{
    try {
        mongoose.connection.on('Connected',()=> console.log('Database Connected'));
    
        await mongoose.connect(`${process.env.MONGODB_URI}/movieticketbookingapp`)
    } catch(error){
        console.log(error.message);
        

    }
}



export default connectDB;