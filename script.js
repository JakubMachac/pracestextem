function zpracuj() {
let v = document.getElementById("vstup").value;
let s = "<pre style='background-color:silver'>";
s += "*" + v + "*<br>";
v= v.trim(); //odstrani krajni mezery
s += "*" + v + "*<br>";
v= v.toLowerCase(); //prevede na mala pismena
s += "*" + v + "*<br>";
//v= v.toUpperCase(); prevede na velka pismena
//s += "*" + v + "*<br>";

let i = v.indexOf(" "); //pozice v textu
console.log(i);
if (i > -1){
  let jm = v.substr(0, i); //cast textu
  s += "jm: *" + jm + "*<br>";
  let pr = v.substr(i+1); //cast textu
s += "pr: *" + pr + "*<br>";
}

let em = v.replace("@","(zavinac)"); //nahrada textu
s += "em: *" + em + "*<br>";

let c = parseInt(v); //prevod na cele cislo
s += "c: *" + c + "*<br>";

let f = parseFloat(v); //prevod na cele cislo
s += "f: *" + f + "*<br>";

let n = Number(v); //prevod na cislo
s += "n: *" + n + "*<br>";

s +=  "</pre>";
document.getElementById("vystup").innerHTML = s;
}