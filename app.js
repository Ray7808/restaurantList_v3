//載入套件與檔案
const express = require("express")
const exhbs = require("express-handlebars")
const bodyParser = require("body-parser")
const methodOverride = require("method-override")
const routes = require("./routes") // 預設會抓index.js

require("./config/mongoose")

const app = express()
const port = 3000

//Template engine
app.engine("hbs", exhbs({ defaultLayout: "main", extname: "hbs" }))
app.set("view engine", "hbs")

//middleware
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true })) //拿到瀏覽器回傳的資料
app.use(methodOverride("_method"))
app.use(routes)

app.listen(port, () => {
    console.log(`Now you are listening http://localhost:${port}`)
})
