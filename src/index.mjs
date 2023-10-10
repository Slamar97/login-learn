import express from "express"
import * as dotenv from 'dotenv'
import {login} from "./login.mjs"
import {register} from "./register.mjs";

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.get('/', (req, res) => {
    res.send('HW')
})

app.post('/loginAPI', ((req, res) => {
    login(req.body)
    res.send('Are you trying to log in?')
}))

app.post('/registerAPI', ((req, res) => {
    register(req.body);
}))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})