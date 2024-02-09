const carre = document.querySelector('.Carre');
const style = getComputedStyle(carre);

//CARRE
const StyleBackgroundColor = style.backgroundColor;
const StyleColor = style.color;
const StyleHeight = style.height;
const StyleWidth = style.width;
const StyleDisplay = style.display;

//CARRE H3
const StyleDisplayTexteSize = style.fontSize;
const StyleDisplayTexteFF = style.fontFamily;


carre.addEventListener('click', AffichageInfos);

function AffichageInfos() {
    const nom = this.className;
    const type = this.getAttribute("data-carre"); 
   
    
    alert(type + " : " + nom +  "\n" +
    	"- Background-color : " + StyleBackgroundColor + "\n" +
    	"- Color : " + StyleColor + "\n" +
    	"- Height : " + StyleHeight + "\n" +
    	"- Width : " + StyleWidth + "\n" +
    	"- Display : " + StyleDisplay + "\n" +
    	"- Display : " + " " + StyleDisplayTexteFF + " "+  "("+StyleDisplayTexteSize+")");
}
