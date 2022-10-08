
function upperCase() {
    // get the value of input field
    var value1 = document.getElementById('inputField').value;

    // convert in the uppercase
    var convertValue = value1.toUpperCase(0,value1.length);

    // print the value
    document.getElementById('showData-1').innerHTML = convertValue;

    if(value1==""){
        confirm("enter the text");
        console.log(value1);
    }
    

}

function lowerCase() {
    // get the value of input field
    var value2 = document.getElementById('inputField').value;

    // convert in the uppercase
    var convertValue = value2.toLowerCase(0,value2.length);

    // print the value
    document.getElementById('showData-2').innerHTML = convertValue;

    if(value2==""){
        confirm("enter the text")
    }

}