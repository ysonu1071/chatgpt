const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/chatgpt")
// mongoose.connect(process.env["DB_URL"])
.then(()=>{
    console.log("db connected!");
})
.catch((err)=>{
    console.log(err.message);
})


// apikey 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 