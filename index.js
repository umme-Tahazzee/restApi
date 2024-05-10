require("dotenv").config()

const app = require("./app");

const PORT = process.env.PORT || 4000


app.listen(PORT, (req,res)=>{
      console.log(`server at running at http://localhost:${PORT}`);
})