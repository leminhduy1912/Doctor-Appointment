import mongoose from "mongoose";

const connectDB = async () => {
    console.log("url",process.env.MONGODB_URL)
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    } catch (error) {
        console.error("Database connection error:", error);
        process.exit(1); 
    }
};

mongoose.connection.on("connected", () => {
    console.log("MongoDB connection established");
});

mongoose.connection.on("error", (err) => {
    console.error("MongoDB connection error:", err);
});

export default connectDB;
