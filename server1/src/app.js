const express=require("express");
const AuthRoute=require("./routes/auth");
const homeRouter=require("./routes/home")
const app=express();


app.use(express.json());
app.use("/",homeRouter);
app.use("/auth",AuthRoute);


// app.get("/",(req,res)=>{

//     res.send("response");
// })

// app.post("/register",(req,res)=>{

//    console.log(req.body);
//    res.send(req.body)
// })





app.listen(8000,()=>{
    console.log("port 8000 is listening");
})