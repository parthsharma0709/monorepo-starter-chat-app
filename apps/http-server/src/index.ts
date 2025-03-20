import express, { Response , Request} from "express"
const app= express();
app.use(express.json());

app.post("/signup", (req :Request, res:Response)=> {
    res.send("hello world")

})





app.post("/signin", (req :Request, res:Response)=> {
    res.send("hello world")

})

app.get("/chat", (req :Request, res:Response)=> {
    res.send("hello from chat endpoint")

})



app.listen(3001, ()=>{
    console.log("http-server is listening on port 3001")
})