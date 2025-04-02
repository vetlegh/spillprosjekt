//#region 
// ALDRI ENDRE NOE INNEN FOR Regionen
import * as Blocks from "./barneprat/blocks.mjs";
import * as Actions from "./barneprat/actions.mjs";
import * as Utils from "./barneprat/utils.mjs";
import { removeAll } from "./barneprat/globalTimer.mjs";

const GaaTil = (maal) => {
    document.body.innerHTML = "";
    removeAll();
    maal();
}

const Start = (maal) => {
    if (window.location.hash) {
        maal = window.location.hash.replace("#", "")
        eval(maal)();
    } else {
        GaaTil(maal);
    }
}
//#endregion
const bakgrunnsbilde = "bilder/bakgrunnsbilde.png";
const astronaut1 = "bilder/astronaut1.png";
const astronaut2 = "bilder/astronaut2.png";
const flagg = "bilder/flagg.png"
const ipadbredde = 2160;
const ipadhøyde = 1620;

Start(bildeeks);


// Disse scenene er her som eksempler. Du kan ta dem bort eller endre dem. 

function Velkommen() {
    const velkommen = new Blocks.Text("Trykk på denne teksten", { style: "overskrift", x: 0, y: 0, width: 100, height: 100 });
    Actions.Click(velkommen, () => {
        GaaTil(scene2);
    })
}

function scene2() {
    new Blocks.Text("Dette er en ny scene, som du ser pga at du trykket ", { style: "overskrift2", x: 0, y: 0, width: 500, height: 500 });
}

function bildeeks()

{

// Å gjøre: Gi bedre navn til alle tingene.

	const img2 = new Blocks.Image(bakgrunnsbilde, {x:0,y:0,width:ipadbredde,ipadhøyde});
    const img3 = new Blocks.Image(astronaut1, {x:0,y:0,width:100,height:200});
}