const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const { errors } = require("celebrate");
const { requestLogger, errorLogger } = require("./middlewares/logger");
const { handleErrors } = require("./middlewares/handleErrors");
require("dotenv").config();
const Router = require("./routes");
const { requestRateLimiter } = require("./middlewares/requestRateLimiter");
const { NODE_ENV, PORT, URI } = require("./utils/config");

mongoose
  .connect(
    NODE_ENV !== "production" ? "mongodb://127.0.0.1:27017/bitfilmsdb" : URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

const app = express();
app.use(
  cors({ origin: ["https://ststas.dev/movies-explorer"], credentials: true })
);
app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(requestLogger);
app.use(requestRateLimiter);
app.use("/movies-explorer/api", Router);
app.use(errorLogger);
app.use(errors());
app.use(handleErrors);
app.listen(PORT || 4003, () => {
  console.log(`Server running on port ${PORT}`);
});
