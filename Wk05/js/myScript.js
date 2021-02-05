function poundsToKg(){
    //INPUT - get weight in KG
    let pounds = parseFloat(document.getElementById('pounds').value);
    //PROCESS - divide weight in pounds by 2.20462262185 
    let kg = pounds / 2.20462262185;
    //OUTPUT - weight converted in kg
    document.getElementById('output').innerHTML = kg.toFixed(1) + " kg";
}