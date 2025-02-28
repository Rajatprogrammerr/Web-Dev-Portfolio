import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js"
import { formData } from "./controller/form.js"
import cors from "cors"
// import bodyParser from "body-parser"
import path from "path"

dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000
const __dirname = path.resolve()

// app.use(bodyParser.json())
app.use(cors())
app.use(express.json())
app.post('/contact', formData)
   
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/dist')))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
    })
}


app.listen(PORT, () => {
    connectDB()
    console.log(`Example app listening on port ${PORT}`)
})