const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended :true}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/calculatorUI.html")
});

app.post("/", (req, res) => {
    console.log(req.body);
    const firstNumber = parseFloat(req.body.FirstNumber);
    const secondNumber = parseFloat(req.body.SecondNumber);
    const buttonType = req.body.button;
    console.log(firstNumber + " and " + secondNumber);
    var result = 0;
    if(buttonType === "+")
    result = firstNumber + secondNumber;
    else if(buttonType === "-")
    result = firstNumber - secondNumber;
    else if(buttonType === "*")
    result = firstNumber * secondNumber;
    else if(buttonType === "/")
    {
        if(secondNumber === 0)
        {
            result = "Cannot divide by Zero!!";
        }
        else
        {
            result= firstNumber/secondNumber;
        }
    }
    var ans = "<h1> Your Answer = " + result + "</h1>";
    res.send(ans);
})

app.listen(3000, () =>{
    console.log("Server is running at port 3000!!")
})