import dotenv from "dotenv";
import app from "./app";

dotenv.config();

app.listen(process.env.PORT || 3333, () => {
  console.log("Server started on port 3333!");
  console.log('TYPEORM_URL:', process.env.TYPEORM_URL);
  console.log('Enviroment:', process.env.NODE_ENV); 
});
