require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./config/db");
const userRoutes = require("./routes/UserRoute");
const authRoutes = require("./routes/AuthRoute");
const loanRoutes = require("./routes/LoanRoute");
const stripeRoutes = require("./routes/StripeRoute");

//DB Connection
db();

//middlewares
app.use(express.json());
app.use(cors());

//routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/loans",loanRoutes);
app.use("/api/stripe",stripeRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
