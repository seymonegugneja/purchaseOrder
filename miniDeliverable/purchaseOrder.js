//saves data

//generates QR Code
var qrdata = document.getElementById("data");
var qrcode = new QRCode(document.getElementById("qrcode"));

function generateQR() {
    var data = qrdata.value;

    qrcode.makeCode(data);

    //quantity * price

    //sub total
    //alert(document.getElementsByName("subTotal")[0].value);
    var addTotals = [];
    var addTotalsLen = addTotals.length;
    for (var i = 0; i < addTotalsLen; i++) {
        var userInput = document.getElementsByName("subTotal")[i].value;
        addTotals.push(userInput);
    }
    //alert(addTotals);
   
    



}
