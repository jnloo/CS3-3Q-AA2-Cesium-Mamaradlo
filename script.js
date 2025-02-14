function calculateCreatures() {
   
    let P0 = parseFloat(prompt("Enter the initial population: "));
    let r = parseFloat(prompt("Enter the growth rate in decimal (between 0 and 1): "));
    let t = parseFloat(prompt("Enter the time in hours: "));

    let P = Math.round(P0 * Math.pow(Math.E,r * t));
	
    let region = prompt("Enter the monster's region/location: ");
    let monstername = prompt("Enter the monster's name: ");

    let monsterinformation = (region + " " + monstername).toUpperCase();

    document.getElementById("result").innerHTML = 'After ' + t + ' hours, the population of ' + monsterinformation + ' has risen to ' + P; 
{
