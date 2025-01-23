import express from "express"

const app = express()
const port = 3000

app.get("/api/v1/auth/login", (req,res) =>{
    res.send('berhasil login')
});

//server
app.listen(port, () => {
  console.log(`Aplikasi ini berjalan di port ${port}`)
});