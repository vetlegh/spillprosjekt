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
const alienkort = "bilder/alienkort.png";
const kraterkort = "bilder/kraterkort.png";
const spørsmålskort = "bilder/spørsmålskort.png";
const ipadbredde = 1080;
const ipadhøyde = 818;

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

	const img2 = new Blocks.Image(bakgrunnsbilde, {x:0,y:0,width:ipadbredde,ipadhøyde});
    const img3 = new Blocks.Image(astronaut1, {x:50,y:0,width:150,height:200});
    const img4 = new Blocks.Image(astronaut2, {x:50,y:50,width:150,height:200});
    const img5 = new Blocks.Image(flagg, {x:100,y:0,width:150,height:200});

    
    new Blocks.Text("Ånei! Astronauten krasjlandet på månen, og romskipet ble ødelagt. Nå trenger han deres hjelp til å samle delene til romskipet og fikse det. Men pass dere for romvesenet Spirri! Han vil nemlig også ha delene til romskipet. ", { style: "hvitTekst", x: 0, y: 0, width: 500, height: 200 });
    const stjerne = new Blocks.Image("bilder/stjerne.png", {x:300,y:350,width:150,height:200});

    Actions.Click(stjerne, () => {
        GaaTil(spillside);
    })

}

function spillside(){
    const img2 = new Blocks.Image(bakgrunnsbilde, {x:0,y:0,width:ipadbredde,ipadhøyde});
    const img6 = new Blocks.Image(alienkort, {x:600,y:50,width:500,height:600});
    const img7 = new Blocks.Image(kraterkort, {x:250,y:50,width:500,height:600});
    const img8 = new Blocks.Image(spørsmålskort, {x:-100,y:50,width:500,height:600});
}    