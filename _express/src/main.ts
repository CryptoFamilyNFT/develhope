import express, { Express, Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import dotenv from "dotenv";
import { planetRouter } from "./routes/planets.router";

dotenv.config();

const main = async (): Promise<void> => {
  const app: Express = express();
  const port = process.env.PORT || 3000;


  app.get("/api", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
  });

  app.use("/api/planets", planetRouter);

  // Avvia il server
  app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });
}

main().then(() => {}).catch((error: unknown) => {
  console.error("Error starting the server:", error);
  process.exit(1);
});