// import mongoose from "mongoose";
import { connect } from 'mongoose'

const connectDb = async () => {
  const { connection } = await connect(
    "mongodb://127.0.0.1:27017/popeye"
  );
  console.log(connection.host);
};

export default connectDb;
