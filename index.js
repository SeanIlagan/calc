const express = require('express');
const app = express();

// tell the app to use EJS as our view engine
app.set("view engine", "ejs");

// UI
app.get('/', (req,res) => {
    res.send(
        `
        <h1>Add!</h1>
        <form name ="frm1">
            First number: <input type="text" name="number1"><br>
            Second number: <input type="text" name="number2"><br>
            Result: <input type ="text" name="res"><br>
            <input type="button" value="Add" onClick ="sum()">
        </form>

        <script type = "text/javascript">
            function sum() {
                var num1, num2, sum;
                num1 = Number(document.frm1.number1.value)
                num2 = Number(document.frm1.number2.value)
                sum = num1+num2
                document.frm1.res.value=sum;
            }
        </script>
        `
    );
});



// add numbers
app.get('/add/:num1/:num2', function (req, res) {
    var num1 = parseInt(req.params.num1)
    var num2 = parseInt(req.params.num2)
    var sum = (num1 + num2).toString()
    res.send(sum)
});


app.listen(3000, () => console.log("Working!!"))