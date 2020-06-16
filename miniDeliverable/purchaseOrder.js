//generates QR Code
var qrdata = document.getElementById("data");
var qrcode = new QRCode(document.getElementById("qrcode"));

function generateQR() {
    var data = qrdata.value;

    qrcode.makeCode(data);
}