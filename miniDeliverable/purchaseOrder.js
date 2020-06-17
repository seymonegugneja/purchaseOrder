//Sub total


//generates QR Code
var qrdata = document.getElementById("data");
var qrcode = new QRCode(document.getElementById("qrcode"));

function generateQR() {
    var data = qrdata.value;

    qrcode.makeCode(data);

    //sub total
    //doesn't work yet
    function findTotal(){
        var arr = document.getElementsByName('subTotal').value;
        var tot=0;
        for(var i=0;i<arr.length;i++){
            if(parseInt(arr[i].value))
                tot += parseInt(arr[i].value);
        }
        document.getElementById('subTot').value = tot;
    }
    



}
