import dotenv from "dotenv";
import app from "./app";

dotenv.config();

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started on port 3333!");
});
