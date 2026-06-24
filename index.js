const express = require("express")
const path = require("path")
const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname, "/public")))


// app.get("/", (req, resp)=> {
//     resp.send("Our first API endpoint");
// });

app.get("/", (req, resp) =>{
    resp.sendFile(path.join(__dirname, "Project", "Homepage.html"))
})

app.get("/contact", (x, y) =>{
    y.sendFile(path.join(__dirname, "Project", "contact us.htm"))
})

app.get("/project", (req, resp) => {
    // resp.sendFile(path.join(__dirname, "Project", "project.html"))
    resp.redirect("/allproject")
})

app.get("/allproject", (req, resp) => {
    resp.sendFile(path.join(__dirname, "Project", "project.html"))
});

app.use( (req, resp) => {
    resp.status(404).sendFile(path.join(__dirname, "project", "404.html"), err => {
        if(err){
        resp.status(404).send("404 not found")
    }
    })
})

app.listen(port, () => {
    console.log("server is running");
});