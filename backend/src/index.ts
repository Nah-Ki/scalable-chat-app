import cors from "cors";
import "dotenv/config";
import express, { Application, Request, Response } from "express";
import Routes from "./routes/index.js";
const app: Application = express();
const PORT = process.env.PORT || 7000;

// * Middleware
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) => {
  return res.send("It's working 🙌");
});

// Routes
app.use("/api", Routes);

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
