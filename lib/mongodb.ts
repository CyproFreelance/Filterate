import mongoose from 'mongoose'

export const connectMongoDB = async () => {
    try{
        // const mongodburi = process.env.MONGODB_URL
        await mongoose.connect('mongodb+srv://acccypro:LTcdhRlCatizElZP@cluster0.llfagqa.mongodb.net/filtrate')
        console.log('connected to mongodb')
    }catch(error){
        console.log('failed connecting to mongodb')
    }    
}