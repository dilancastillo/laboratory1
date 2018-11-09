/** <h1>BANCOLOMBIA</h1>
 * var presentValue = parseInt(prompt("Ingrese el valor de la consignacion"));
    document.write("Valor consignado: ",presentValue, "<br>");
var int = 2;
var months = 60;

interest = (presentValue * int) / 100;
    console.log("interes",interest);
money = interest * 60;
    console.log("money",money);
result = interest + money;
    console.log("resultado",result);
document.write("Valor futuro en 5 años: ",result);*/


/** <h1>FRUTILANDIA</h1>
var kilo = parseInt(prompt("Ingrese la cantidad de quilos que desea comprar"));
console.log("Quilos",kilo);
var price = kilo * 4200;
    document.write("<p>La compra tiene un valor de: "+price+"<br>");
if(kilo > 0 && kilo < 2){
    discoun=0;
        document.write("<p>El valor del descuento es: "+discount + "</p>");
}
else if(kilo >= 2,01 && kilo < 5){
    discoun=10;
    var discountValue = (price*discoun)/100;
    discount = price-discountValue;
        document.write("<p>El valor del descuento es: "+discountValue + "</p>");
        document.write("<p>Total a pagar: "+ discount + "</p>");
}
else if(kilo >= 5,01 && kilo < 10){
    discoun=15;
    discountValue = (price*discoun)/100;
    discount = price-discountValue;
    document.write("<p>El valor del descuento es: "+discountValue + "</p>");
    document.write("<p>Total a pagar: "+ discount + "</p>");
}
else if(kilo > 10){
    discoun=20;
    discountValue = (price*discoun)/100;
    discount = price-discountValue;
        document.write("<p>El valor del descuento es: "+discountValue + "</p>");
        document.write("<p>Total a pagar: "+ discount + "</p>");

}*/



var sum = 0;
var count = 0;
var number = 0;
while(num > 0){
    number = parseInt(prompt("Ingrese un numero"));
    if(!isNaN(number) && number >= 0){
        sum += number;
        count++;
    }
}



