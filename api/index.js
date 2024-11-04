import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./server/routes/UserRoutes";
import bookRoutes from "./server/routes/BookRoutes";
import borrowRoutes from "./server/routes/BorrowRoutes";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 8000;

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/books", bookRoutes);
app.use("/api/v1/borrow", borrowRoutes);

// random route
app.get("*", (req, res) => {
  res.status(200).send("Welcome to the API");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;
