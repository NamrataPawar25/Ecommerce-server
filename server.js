const express= require("express")

const categoryRoute= require("./routes/categoryRoute")
const brandRoute= require("./routes/brandRoute")


const app= express()

const port = process.env.PORT || 3000;

app.use(express.json())
app.use(cors())


app.get("/", (req, res) => res.send("Hello World"));

app.use("/api/category", categoryRoute);
app.use("/api/brand", brandRoute);


app.listen(port, () => console.log(`Example app listening on port ${port}!`));