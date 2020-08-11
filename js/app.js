//import functions  from "./functions";
function smallText(txt) {
    return txt.toLowerCase();
}
const ile_lat = 4;
const txt = smallText(`Mój pies ma ${ile_lat}!`);
console.log(txt.charAt(0).toUpperCase() + txt.substr(1));
