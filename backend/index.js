const express = require("express")
const path = require("path")
const fs = require("fs")
const app = express()
const {Client} = require("pg")
const jwt = require("jsonwebtoken")
const cors = require("cors")
const multer = require("multer")

const users = require("./users.json")
require("dotenv").config({path:"../.env"})
app.use(cors({
  origin:"http://localhost:5173",
  credentials:true
}))
const client = new Client({
  user:process.env.PG_USERNAME,
  password:process.env.PG_PASSWORD,
  host:process.env.PG_HOST,
  database : process.env.PG_DATABASE,
  port:process.env.PG_PORT
})
client.connect().then(()=>{console.log("db connected")}).catch((err)=>{console.log(err)})
app.use(express.static(path.join(__dirname,'../frontend/' , 'time-capsule-2.0/dist')))
app.use(express.json())

function bodyManipulation(req,res,next){
  const body = req.body
  const signedToken = jwt.sign(body , process.env.JWT_SECRET_KEY)
  body.signedToken = signedToken
  next()
}
app.post("/api/users" ,bodyManipulation, (req,res)=>{
  const body = req.body
  const date = new Date()
  body.date = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`
  users.push(body)
  fs.writeFile("./users.json" , JSON.stringify(users) , (err)=>{
    if(!err){
      console.log("successful write")
      client.query(`INSERT INTO users(
 email ,
 password ,
 date ,
 signedToken
)
VALUES($1,$2,$3,$4);` , [users[users.length-1].email , users[users.length-1].password , users[users.length-1].date , users[users.length-1].signedToken])
    }else{
      console.log("error writing")
    }
  })
  res.send(JSON.stringify(body))
})

app.post("/api/users/check"  , async (req,res)=>{
  const body = req.body
  const resp = await client.query(`SELECT id , email , password FROM users WHERE email=$1 AND password=$2 ` , [body.email , body.password])
  
  if(resp.rows.length>0){
    const number = (resp.rows[0].id)-1
    const decoded = jwt.verify(users[number].signedToken , process.env.JWT_SECRET_KEY)
    res.send(decoded)
  }
})
const storage = multer.diskStorage({
    destination:function(req,file,cb){
      return cb(null,"./capsule-uploads")
    },
    filename:function(req,file,cb){
      const name = `${file.fieldname} - ${Date.now()}`
      return cb(null,name)
    }
  })
  const upload = multer({ storage })
app.post("/uploads" , upload.single("capsule-pics") , (req,res)=>{
  console.log(req.file)
  console.log(req.body)
  
  res.redirect("http://localhost:5173/explore")
})
app.listen(process.env.PORT ,  ()=>{
  console.log("server runnin")
})
