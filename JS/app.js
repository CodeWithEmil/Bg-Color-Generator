
//Just a few styles that will be used when the page first loads :D
document.querySelector("#box").style.border = "2px solid #000";
document.querySelector("a").style.color = "#000";

//Color Picker Function Starts
let backgroundColor = () => {

    //Previous styles are taken away
    document.querySelector("#box").style.border = "none";
    document.querySelector("a").style.color = "#fff";

    //Operation is made
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);

    //Hex Color defined
    let hexColor = "#" + randomColor;

    //In case you want to have the text the same color as the background:
    document.querySelector("span").style.color = hexColor;


    //Background Color is changed
    document.querySelector("#backgroundChange").style.backgroundColor = hexColor;

    //The Span tag that will display the color's hex is changed
    document.querySelector("#editableText").innerHTML = hexColor;

    //Title tag's text is changed
    document.querySelector("#editableText").title = "Hex: " + hexColor;

    let uwu = getBrightness(hexColor);

    document.querySelector("a").style.color = uwu;
}

//Changing the text's color
let getBrightness = color => {
    color = color.replace("#", "");
    var r = parseInt(color.substr(0,2),16);
    var g = parseInt(color.substr(2,2),16);
    var b = parseInt(color.substr(4,2),16);
    var yiq = ((r*299)+(g*587)+(b*114))/1000;

    /*console.log(yiq);
    console.log(`From R, we have ${r}.`);
    console.log(`From G, we have ${g}.`);
    console.log(`From B, we have ${b}.`);*/

    return (yiq >= 128) ? 'black' : 'white';
}

document.querySelector("button").addEventListener("click", backgroundColor);