import express, { Request, Response } from "express";

const app = express();

app.use(express.json());

app.get("/animals", (req: Request, res: Response) => {
  try {
    res.status(200).json({ message: "success!" });
  } catch (error) {
    res.status(404).json({
      status_message: "failed",
      error_message: error,
    });
  }
});

app.get("/animals/:id", (req: Request, res: Response) => {
  try {
    res.status(200).json({ message: "success!" });
  } catch (error) {
    res.status(404).json({
      status_message: "failed",
      error_message: error,
    });
  }
});

app.post("/animals", (req: Request, res: Response) => {});

app.patch("/animals/:id", (req: Request, res: Response) => {});

app.delete("/animals/:id", (req: Request, res: Response) => {});

const port = 8000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
