const express = require("express");
const app = express();
const path = require("path");
const exphbs = require("express-handlebars");
const members = require("./Members");
// const logger = require("./middleware/logger");
const PORT = process.env.PORT || 3000;

// Init middleware
// app.use(logger);

// Handlebars Middleware
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Body Parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// const allMembers = [members]

// Render HomePage
app.get("/", (req, res) => {
  res.render("index", { title: "Member App", members });
});

// Set Static Folder
app.use(express.static(path.join(__dirname, "public")));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'))
// });

// Members API Routes
app.use("/api/members", require("./routes/api/members"));

app.listen(PORT, () => {
  console.log(`Server Started On Port ${PORT}`);
});
