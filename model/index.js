import mongoose from "mongoose";

mongoose
  .connect(`${process.env.MONGODB_URL}/${process.env.MONGODB_NAME}`)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));

  export default mongoose