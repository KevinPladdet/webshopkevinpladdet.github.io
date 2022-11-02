const Pencil =
{
    price: 6.90, stock: 5, bought: 0
}

const Eraser =
{
    price: 5, stock: 7, bought: 0
}

const Scissors =
{
    price: 2.50, stock: 10, bought: 0
}


var PencilTotal = 0;
var EraserTotal = 0;
var ScissorsTotal = 0; 
var Summary = 0;
var Total = 0; 
let ShowTotal = 0;
let ShowSummary = 0;
function totals(){
    PencilTotal = Pencil.bought * Pencil.price;
    EraserTotal = Eraser.bought * Eraser.price;
    ScissorsTotal = Scissors.bought * Scissors.price; 
    Summary = ScissorsTotal + EraserTotal + PencilTotal;
    Total = Summary * 1.21;
    ShowTotal = Total.toFixed(2);
    ShowSummary = Summary.toFixed(2);
}

function ProductOne() {



    if (Pencil.stock <= 1) {
        Pencil.stock = 0;
        document.getElementById("pencilbutton").style.display="none";
    }
    else {
        Pencil.stock = Pencil.stock - 1;
        document.getElementById("pencilstock").innerHTML = Pencil.stock;
    }
    Pencil.bought = Pencil.bought + 1;

    totals();

    document.getElementById("summary").innerHTML = ShowSummary;
    document.getElementById("total").innerHTML = ShowTotal;

    Loads();

}

function ProductTwo() {

    if (Eraser.stock <= 1) {
        Eraser.stock = 0;
        document.getElementById("eraserbutton").style.display="none";
    }
    else {
        Eraser.stock = Eraser.stock - 1;
        document.getElementById("eraserstock").innerHTML = Eraser.stock;
    }

    Eraser.bought = Eraser.bought + 1;

    totals();
    
    document.getElementById("summary").innerHTML = ShowSummary;
    document.getElementById("total").innerHTML = ShowTotal;

    Loads();

}

function ProductThree() {

    if (Scissors.stock <= 1) {
        Scissors.stock = 0;
        document.getElementById("scissorsbutton").style.display="none";
    }
    else {
        Scissors.stock = Scissors.stock - 1;
        document.getElementById("scissorsstock").innerHTML = Scissors.stock;
    }

    Scissors.bought = Scissors.bought + 1;

    totals();
    
    document.getElementById("summary").innerHTML = ShowSummary;
    document.getElementById("total").innerHTML = ShowTotal;

    Loads();

}

function CheckoutButton() {

    var x = document.getElementById("checkout");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function Loads() {

    document.getElementById("pencilprice").innerHTML = "&euro; " + Pencil.price;

    document.getElementById("pencilstock").innerHTML = "Stock: " + Pencil.stock;

    document.getElementById("eraserprice").innerHTML = "&euro; " + Eraser.price;

    document.getElementById("eraserstock").innerHTML = "Stock: " + Eraser.stock;

    document.getElementById("scissorsprice").innerHTML = "&euro; " + Scissors.price;

    document.getElementById("scissorsstock").innerHTML = "Stock: " + Scissors.stock;

    document.getElementById("summary").innerHTML = "&euro; " + ShowSummary;

    document.getElementById("total").innerHTML = "&euro; " + ShowTotal;
}
