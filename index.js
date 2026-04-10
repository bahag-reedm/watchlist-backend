import express from 'express';
import cors from 'cors';
import "dotenv/config"
import { sequelize } from "./db/db.js";
// import  usersRoutes  from "./routes/usersRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import moviesRoutes from "./routes/moviesRoutes.js";
import watchlistsRoutes from "./routes/watchlistsRoutes.js";
import {applyAssociations} from "./models/associations.js";
import commentsRoutes from "./routes/commentsRoutes.js";

const app = express();
const PORT  = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", authRoutes, moviesRoutes, watchlistsRoutes, commentsRoutes);


app.listen(PORT, "0.0.0.0", async () => {
  console.log(`server is listening on PORT ${PORT}`)
  try {
    await sequelize.authenticate()
    await applyAssociations()
    await sequelize.sync({ alter:true });
  } catch (error) {
    console.log(error);
  }
});