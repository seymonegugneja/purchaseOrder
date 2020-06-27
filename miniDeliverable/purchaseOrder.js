function submitInfo() {
    // validates form info
    //purchase order number
    var purchaseValidate = document.getElementById('purchaseNo').value;
    if (!purchaseValidate) {
        alert('Purchase Order Number must be filled out.');
        return false;
    } else {
        var purchaseNoVal = purchaseValidate;
    }
    //date
    var dateValidate = document.getElementById('date').value;
    if (!dateValidate) {
        alert('Date must be filled out.');
        return false;
    } else {
        var dateVal = dateValidate;
    }
    //vendor name
    var vnValidate = document.getElementById('vendorName').value;
    if (!vnValidate) {
        alert('Vendor name must be filled out.');
        return false;
    } else {
        var vnVal = vnValidate;
    }
    //vendor contact person
    var vcpValidate = document.getElementById('contact1').value;
    if (!vcpValidate) {
        alert('Contact person must be filled out.');
        return false;
    } else {
        var vcpVal = vcpValidate;
    }
    //vendor street address
    var vsaValidate = document.getElementById('address1').value;
    if (!vsaValidate) {
        alert('Street address must be filled out.');
        return false;
    } else {
        var vsaVal = vsaValidate;
    }
    //vendor city
    var vcityValidate = document.getElementById('city1').value;
    if (!vcityValidate) {
        alert('City must be filled out.');
        return false;
    } else {
        var vcityVal = vcityValidate;
    }
    //vendor state
    var vstateValidate = document.getElementById('state1').value;
    if (!vstateValidate) {
        alert('State must be filled out.');
        return false;
    } else {
        var vstateVal = vstateValidate;
    }
    //vendor zip code
    var vzipValidate = document.getElementById('zip1').value;
    if (!vzipValidate) {
        alert('Zip code must be filled out.');
        return false;
    } else {
        var vzipVal = vzipValidate;
    }
    //vendor phone number
    var vphoneValidate = document.getElementById('phone1').value;
    if (!vphoneValidate) {
        alert('Phone number must be filled out.');
        return false;
    } else {
        var vphoneVal = vphoneValidate;
    }
    //vendor email
    var vemailValidate = document.getElementById('email1').value;
    if (!vemailValidate) {
        alert('Email must be filled out.');
        return false;
    } else {
        var vemailVal = vemailValidate;
    }
    //shipping contact person
    var scontactValidate = document.getElementById('contact2').value;
    if (!scontactValidate) {
        alert('Contact person must be filled out.');
        return false;
    } else {
        var scontactVal = scontactValidate;
    }
    //shipping address
    var saddressValidate = document.getElementById('address2').value;
    if (!saddressValidate) {
        alert('Address must be filled out.');
        return false;
    } else {
        var saddressVal = saddressValidate;
    }
    //shipping city
    var scityValidate = document.getElementById('city2').value;
    if (!scityValidate) {
        alert('City must be filled out.');
        return false;
    } else {
        var scityVal = scityValidate;
    }
    //shipping state
    var sstateValidate = document.getElementById('state2').value;
    if (!sstateValidate) {
        alert('State must be filled out.');
        return false;
    } else {
        var sstateVal = sstateValidate;
    }
    //shipping zip
    var szipValidate = document.getElementById('zip2').value;
    if (!szipValidate) {
        alert('Zip code must be filled out.');
        return false;
    } else {
        var szipVal = szipValidate;
    }
    //shipping phone
    var sphoneValidate = document.getElementById('phone2').value;
    if (!sphoneValidate) {
        alert('Phone number must be filled out.');
        return false;
    } else {
        var sphoneVal = sphoneValidate;
    }
    //shipping email
    var semailValidate = document.getElementById('email2').value;
    if (!semailValidate) {
        alert('Email must be filled out.');
        return false;
    } else {
        var semailVal = semailValidate;
    }
    //ship via
    var shipValidate = document.getElementById('shipVia').value;
    if (!shipValidate) {
        alert('Shipping via must be filled out.');
        return false;
    } else {
        var shipVal = shipValidate;
    }
    //shipping method
    var smethodValidate = document.getElementById('shippingMethod').value;
    if (!smethodValidate) {
        alert('Shipping method must be filled out.');
        return false;
    } else {
        var smethodVal = smethodValidate;
    }
    //shipping terms
    var stermsValidate = document.getElementById('shippingTerms').value;
    if (!stermsValidate) {
        alert('Shipping terms must be filled out.');
        return false;
    } else {
        var stermsVal = stermsValidate;
    }
    //shipping delivery date
    var sdateValidate = document.getElementById('delivDate').value;
    if (!sdateValidate) {
        alert('Delivery date must be filled out.');
        return false;
    } else {
        var sdateVal = sdateValidate;
    }
    //ID1 
    var fidValidate = document.getElementById('id1').value;
    if (!fidValidate) {
        alert('Item ID must be filled out.');
        return false;
    } else {
        var fidVal = fidValidate;
    }
    //item1
    var fitemValidate = document.getElementById('item1').value;
    if (!fitemValidate) {
        alert('Item must be filled out.');
        return false;
    } else {
        var fitemVal = fitemValidate;
    }
    //description 1
    var fdescValidate = document.getElementById('desc1').value;
    if (!fdescValidate) {
        alert('Description must be filled out.');
        return false;
    } else {
        var fdescVal = fdescValidate;
    }
    //quantity 1
    var fquanValidate = document.getElementById('quantity1').value;
    if (!fquanValidate) {
        alert('Quantity must be filled out.');
        return false;
    } else {
        var fquanVal = fquanValidate;
    }
    //number 1
    var fnumbValidate = document.getElementById('number1').value;
    if (!fnumbValidate) {
        alert('Number must be filled out.');
        return false;
    } else {
        var fnumbVal = fnumbValidate;
    }
    //total 1
    var ftotalValidate = document.getElementById('total1').value;
    if (!ftotalValidate) {
        alert('Total must be filled out.');
        return false;
    } else {
        var ftotalVal = ftotalValidate;
    }
    //ID 2
    var sidValidate = document.getElementById('id2').value;
    if (!sidValidate) {
        alert('Item ID must be filled out.');
        return false;
    } else {
        var sidVal = sidValidate;
    }
    //item 2
    var sitemValidate = document.getElementById('item2').value;
    if (!sitemValidate) {
        alert('Item must be filled out.');
        return false;
    } else {
        var sitemVal = sitemValidate;
    }
    //description 2
    var sdescValidate = document.getElementById('desc2').value;
    if (!sdescValidate) {
        alert('Description must be filled out.');
        return false;
    } else {
        var sdescVal = sdescValidate;
    }
    //quantity 2
    var squanValidate = document.getElementById('quantity2').value;
    if (!squanValidate) {
        alert('Quantity must be filled out.');
        return false;
    } else {
        var squanVal = squanValidate;
    }
    //number 2 -- 
    var snumbValidate = document.getElementById('number2').value;
    if (!snumbValidate) {
        alert('Number must be filled out.');
        return false;
    } else {
        var snumbVal = snumbValidate;
    }
    //total 2
    var stotalValidate = document.getElementById('total2').value;
    if (!stotalValidate) {
        alert('Total must be filled out.');
        return false;
    } else {
        var stotalVal = stotalValidate;
    }
    //ID 3
    var thidValidate = document.getElementById('id3').value;
    if (!thidValidate) {
        alert('Item ID must be filled out.');
        return false;
    } else {
        var thidVal = thidValidate;
    }
    //item 3
    var thitemValidate = document.getElementById('item3').value;
    if (!thitemValidate) {
        alert('Item must be filled out.');
        return false;
    } else {
        var thitemVal = thitemValidate;
    }
    //description 3
    var thdescValidate = document.getElementById('desc3').value;
    if (!thdescValidate) {
        alert('Description must be filled out.');
        return false;
    } else {
        var thdescVal = thdescValidate;
    }
    //quantity 3
    var thquanValidate = document.getElementById('quantity3').value;
    if (!thquanValidate) {
        alert('Quantity must be filled out.');
        return false;
    } else {
        var thquanVal = thquanValidate;
    }
    //number 3
    var thnumbValidate = document.getElementById('number3').value;
    if (!thnumbValidate) {
        alert('Number must be filled out.');
        return false;
    } else {
        var thnumbVal = thnumbValidate;
    }
    //total 3
    var thtotalValidate = document.getElementById('total3').value;
    if (!thtotalValidate) {
        alert('Total must be filled out.');
        return false;
    } else {
        var thtotalVal = thtotalValidate;
    }
    //ID 4
    var foidValidate = document.getElementById('id4').value;
    if (!foidValidate) {
        alert('Item ID must be filled out.');
        return false;
    } else {
        var foidVal = foidValidate;
    }
    //item 4
    var foitemValidate = document.getElementById('item4').value;
    if (!foitemValidate) {
        alert('Item must be filled out.');
        return false;
    } else {
        var foitemVal = foitemValidate;
    }
    //description 4
    var fodescValidate = document.getElementById('desc4').value;
    if (!fodescValidate) {
        alert('Description must be filled out.');
        return false;
    } else {
        var fodescVal = fodescValidate;
    }
    //quantity 4
    var foquanValidate = document.getElementById('quantity4').value;
    if (!foquanValidate) {
        alert('Quantity must be filled out.');
        return false;
    } else {
        var foquanVal = foquanValidate;
    }
    //number 4
    var fonumbValidate = document.getElementById('number4').value;
    if (!fonumbValidate) {
        alert('Number must be filled out.');
        return false;
    } else {
        var fonumbVal = fonumbValidate;
    }
    //total 5
    var fitotalValidate = document.getElementById('total5').value;
    if (!fitotalValidate) {
        alert('Total must be filled out.');
        return false;
    } else {
        var fitotalVal = fitotalValidate;
    }
    //ID 5
    var fiidValidate = document.getElementById('id5').value;
    if (!fiidValidate) {
        alert('Item ID must be filled out.');
        return false;
    } else {
        var fiidVal = fiidValidate;
    }
    //item 5
    var fiitemValidate = document.getElementById('item5').value;
    if (!fiitemValidate) {
        alert('Item must be filled out.');
        return false;
    } else {
        var fiitemVal = fiitemValidate;
    }
    //description 5
    var fidescValidate = document.getElementById('desc5').value;
    if (!fidescValidate) {
        alert('Description must be filled out.');
        return false;
    } else {
        var fidescVal = fidescValidate;
    }
    //quantity 5
    var fiquanValidate = document.getElementById('quantity5').value;
    if (!fiquanValidate) {
        alert('Quantity must be filled out.');
        return false;
    } else {
        var fiquanVal = fiquanValidate;
    }
    //number 6
    var sinumbValidate = document.getElementById('number6').value;
    if (!sinumbValidate) {
        alert('Number must be filled out.');
        return false;
    } else {
        var sinumbVal = sinumbValidate;
    }
    //total 6
    var sitotalValidate = document.getElementById('total6').value;
    if (!sitotalValidate) {
        alert('Total must be filled out.');
        return false;
    } else {
        var sitotalVal = sitotalValidate;
    }
    //ID 6
    var siidValidate = document.getElementById('id6').value;
    if (!siidValidate) {
        alert('Item ID must be filled out.');
        return false;
    } else {
        var siidVal = siidValidate;
    }
    //item 6
    var siitemValidate = document.getElementById('item6').value;
    if (!siitemValidate) {
        alert('Item must be filled out.');
        return false;
    } else {
        var siitemVal = siitemValidate;
    }
    //description 6
    var sidescValidate = document.getElementById('desc6').value;
    if (!sidescValidate) {
        alert('Description must be filled out.');
        return false;
    } else {
        var sidescVal = sidescValidate;
    }
    //quantity 6
    var siquanValidate = document.getElementById('quantity6').value;
    if (!siquanValidate) {
        alert('Quantity must be filled out.');
        return false;
    } else {
        var siquanVal = siquanValidate;
    }
    //number 6
    var sinumbValidate = document.getElementById('number6').value;
    if (!sinumbValidate) {
        alert('Number must be filled out.');
        return false;
    } else {
        var sinumbVal = sinumbValidate;
    }
    //total 6
    var sitotalValidate = document.getElementById('total6').value;
    if (!sitotalValidate) {
        alert('Total must be filled out.');
        return false;
    } else {
        var sitotalVal = sitotalValidate;
    }
    //ID 7
    var seidValidate = document.getElementById('id7').value;
    if (!seidValidate) {
        alert('Item ID must be filled out.');
        return false;
    } else {
        var seidVal = seidValidate;
    }
    //item 7
    var seitemValidate = document.getElementById('item7').value;
    if (!seitemValidate) {
        alert('Item must be filled out.');
        return false;
    } else {
        var seitemVal = seitemValidate;
    }
    //description 7
    var sedescValidate = document.getElementById('desc7').value;
    if (!sedescValidate) {
        alert('Description must be filled out.');
        return false;
    } else {
        var sedescVal = sedescValidate;
    }
    //quantity 7
    var sequanValidate = document.getElementById('quantity7').value;
    if (!sequanValidate) {
        alert('Quantity must be filled out.');
        return false;
    } else {
        var sequanVal = sequanValidate;
    }
    //number 7 
    var senumbValidate = document.getElementById('number7').value;
    if (!senumbValidate) {
        alert('Number must be filled out.');
        return false;
    } else {
        var senumbVal = senumbValidate;
    }
    //total 7
    var setotalValidate = document.getElementById('total7').value;
    if (!setotalValidate) {
        alert('Total must be filled out.');
        return false;
    } else {
        var setotalVal = setotalValidate;
    }
    //ID 8
    var eidValidate = document.getElementById('id8').value;
    if (!eidValidate) {
        alert('Item ID must be filled out.');
        return false;
    } else {
        var eidVal = eidValidate;
    }
    //item 8
    var eitemValidate = document.getElementById('item8').value;
    if (!eitemValidate) {
        alert('Item must be filled out.');
        return false;
    } else {
        var eitemVal = eitemValidate;
    }
    //description 8
    var edescValidate = document.getElementById('desc8').value;
    if (!edescValidate) {
        alert('Description must be filled out.');
        return false;
    } else {
        var edescVal = edescValidate;
    }
    //quantity 8
    var equanValidate = document.getElementById('quantity8').value;
    if (!equanValidate) {
        alert('Quantity must be filled out.');
        return false;
    } else {
        var equanVal = equanValidate;
    }
    //number 8
    var enumbValidate = document.getElementById('number8').value;
    if (!enumbValidate) {
        alert('Number must be filled out.');
        return false;
    } else {
        var enumbVal = enumbValidate;
    }
    //total 8
    var etotalValidate = document.getElementById('total8').value;
    if (!etotalValidate) {
        alert('Total must be filled out.');
        return false;
    } else {
        var etotalVal = etotalValidate;
    }
    //ID 9
    var nidValidate = document.getElementById('id9').value;
    if (!nidValidate) {
        alert('Item ID must be filled out.');
        return false;
    } else {
        var nidVal = nidValidate;
    }
    //item 9
    var nitemValidate = document.getElementById('item9').value;
    if (!nitemValidate) {
        alert('Item must be filled out.');
        return false;
    } else {
        var nitemVal = nitemValidate;
    }
    //description 9
    var ndescValidate = document.getElementById('desc9').value;
    if (!ndescValidate) {
        alert('Description must be filled out.');
        return false;
    } else {
        var ndescVal = ndescValidate;
    }
    //quantity 9
    var nquanValidate = document.getElementById('quantity9').value;
    if (!nquanValidate) {
        alert('Quantity must be filled out.');
        return false;
    } else {
        var nquanVal = nquanValidate;
    }
    //number 9
    var nnumbValidate = document.getElementById('number9').value;
    if (!nnumbValidate) {
        alert('Number must be filled out.');
        return false;
    } else {
        var nnumbVal = nnumbValidate;
    }
    //total 9
    var ntotalValidate = document.getElementById('total9').value;
    if (!ntotalValidate) {
        alert('Total must be filled out.');
        return false;
    } else {
        var ntotalVal = ntotalValidate;
    }
    //ID 10
    var teidValidate = document.getElementById('id10').value;
    if (!teidValidate) {
        alert('Item ID must be filled out.');
        return false;
    } else {
        var teidVal = teidValidate;
    }
    //item10
    var teitemValidate = document.getElementById('item10').value;
    if (!teitemValidate) {
        alert('Item must be filled out.');
        return false;
    } else {
        var teitemVal = teitemValidate;
    }
    //description 10
    var tedescValidate = document.getElementById('desc10').value;
    if (!tedescValidate) {
        alert('Description must be filled out.');
        return false;
    } else {
        var tedescVal = tedescValidate;
    }
    //quantity 10
    var tequanValidate = document.getElementById('quantity10').value;
    if (!tequanValidate) {
        alert('Quantity must be filled out.');
        return false;
    } else {
        var tequanVal = tequanValidate;
    }
    //number 10
    var tenumbValidate = document.getElementById('number10').value;
    if (!tenumbValidate) {
        alert('Number must be filled out.');
        return false;
    } else {
        var tenumbVal = tenumbValidate;
    }
    //total 10
    var tetotalValidate = document.getElementById('total10').value;
    if (!tetotalValidate) {
        alert('Total must be filled out.');
        return false;
    } else {
        var tetotalVal = tetotalValidate;
    }
    //shipping total
    var stotValidate = document.getElementById('sTotal').value;
    if (!stotValidate) {
        alert('Shipping total must be filled out.');
        return false;
    } else {
        var stotVal = stotValidate;
    }
    //discount
    var disValidate = document.getElementById('discount').value;
    if (!disValidate) {
        alert('Discount must be filled out.');
        return false;
    } else {
        var disVal = disValidate;
    }
    //sales tax
    var taxValidate = document.getElementById('tax').value;
    if (!taxValidate) {
        alert('Sales tax must be filled out.');
        return false;
    } else {
        var taxVal = taxValidate;
    }
    //shipping
    var shValidate = document.getElementById('shipping').value;
    if (!shValidate) {
        alert('Shipping must be filled out.');
        return false;
    } else {
        var shVal = shValidate;
    }
    //grand total
    var gtValidate = document.getElementById('gTotal').value;
    if (!gtValidate) {
        alert('Grand total must be filled out.');
        return false;
    } else {
        var gtVal = gtValidate;
    }
    //opens and prints info to a new page
    var shippingLabel = window.open();
    shippingLabel.document.write('<title>GPC Shipping Label</title>');
    //top right info
    shippingLabel.document.write('<p>Shipping label created on: ' + Date() + '</p>');
    shippingLabel.document.write('<p>Purchase Order Number: ' + purchaseNoVal + '</p>');
    //vendor info
    shippingLabel.document.write('<p> From: </p>')
    shippingLabel.document.write('<p>' + vcpVal + '</p>');
    shippingLabel.document.write('<p>' + vsaVal + '</p>');
    shippingLabel.document.write('<p>' + vcityVal + ', ' + vstateVal + ' ' + vzipVal + '</p>');
    //ship to info
    shippingLabel.document.write('<p> Ship To: </p>')
    shippingLabel.document.write('<p>' + scontactVal + '</p>');
    shippingLabel.document.write('<p>' + saddressVal + '</p>');
    shippingLabel.document.write('<p>' + scityVal + ', ' + sstateVal + ' ' + szipVal + '</p>');
    //order
    shippingLabel.document.write('<p> Order: </p>')
    shippingLabel.document.write('<p>' + fquanVal + ', ' + fitemVal + '</p>');
    shippingLabel.document.write('<p>' + squanVal + ', ' + sitemVal + '</p>');
    shippingLabel.document.write('<p>' + thquanVal + ', ' + thitemVal + '</p>');
    shippingLabel.document.write('<p>' + foquanVal + ', ' + foitemVal + '</p>');
    shippingLabel.document.write('<p>' + fiquanVal + ', ' + fiitemVal + '</p>');
    shippingLabel.document.write('<p>' + siquanVal + ', ' + siitemVal + '</p>');
    shippingLabel.document.write('<p>' + sequanVal + ', ' + seitemVal + '</p>');
    shippingLabel.document.write('<p>' + equanVal + ', ' + eitemVal + '</p>');
    shippingLabel.document.write('<p>' + nquanVal + ', ' + nitemVal + '</p>');
    shippingLabel.document.write('<p>' + tequanVal + ', ' + teitemVal + '</p>');
    //ship via info
    shippingLabel.document.write('<p>Ship Via: ' + shipVal + ', Shipping Method: ' + smethodVal + ', Shipping Terms: ' + stermsVal + ', Delivery Date: ' + sdateVal + '</p>');
    //closes page and prints
    shippingLabel.document.close(); //please don't touch this
    shippingLabel.focus(); //please don't touch this
    shippingLabel.print(); //please don't touch this. this is what makes the label print
    //saves info

}
