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
const spmSider = [spørsmålsside, spørsmålsside2, spørsmålsside3, spørsmålsside4, spørsmålsside5, spørsmålsside6, spørsmålsside7, spørsmålsside8, spørsmålsside9, spørsmålsside10, spørsmålsside11, spørsmålsside12, spørsmålsside13, spørsmålsside14, spørsmålsside15, spørsmålsside16, spørsmålsside17, spørsmålsside18, spørsmålsside19, spørsmålsside20, spørsmålsside21, spørsmålsside22, spørsmålsside23]
const utfordringSider = [alienside, alienside2, alienside3, alienside4, alienside5, alienside6, alienside7, alienside8, alienside9, alienside10]
const kraterSider = [kraterside, kraterside2, kraterside3, kraterside4, kraterside5, kraterside6, kraterside7, kraterside8, kraterside9, kraterside10, kraterside11, kraterside12]
const spmbredde = 500;
const spmlengde = 600;

function randomSpmSide() {
    const randomNumber = Math.floor(Math.random() * spmSider.length);
    const side = spmSider[randomNumber];
    GaaTil(side);

    spmSider.splice(randomNumber, 1);

}

function randomUtfordringSide() {
    const randomNumber = Math.floor(Math.random() * utfordringSider.length);
    const side = utfordringSider[randomNumber];
    GaaTil(side);

    utfordringSider.splice(randomNumber, 1);

}

function randomKraterSide() {
    const randomNumber = Math.floor(Math.random() * kraterSider.length);
    const side = kraterSider[randomNumber];
    GaaTil(side);

    kraterSider.splice(randomNumber, 1);

}
Start(bildeeks);

function bildeeks() {

    const bakgrunnsbilde2 = new Blocks.Image(bakgrunnsbilde, { x: 0, y: 0, width: ipadbredde, ipadhøyde });
    const astronaut_1 = new Blocks.Image(astronaut1, { x: 50, y: 350, width: 300, height: 300 });
    const astronaut_2 = new Blocks.Image(astronaut2, { x: 0, y: 50, width: 300, height: 300 });
    const flagg1 = new Blocks.Image(flagg, { x: 750, y: 450, width: 300, height: 200 });
    const spirri = new Blocks.Image("bilder/spirri.png", { x: 700, y: 344, width: 200, height: 300 });

    new Blocks.Text("Ånei! Jeg krasjlandet på månen, og romskipet ble ødelagt. Nå trenger jeg deres hjelp til å samle delene til romskipet og fikse det. Men pass dere for romvesenet Spirri! Han vil nemlig også ha delene til romskipet. ", { style: "hvitTekst", x: 300, y: 100, width: 500, height: 200 });
    const stjerne = new Blocks.Image("bilder/stjerne.png", { x: 325, y: 200, width: 400, height: 500 });
    new Blocks.Sound("lyder/intro.m4a", { loop: false, auto: true })

    Actions.Click(stjerne, () => {
        GaaTil(spillside);
    })

}

function spillside() {
    const bakgrunnsbilde2 = new Blocks.Image(bakgrunnsbilde, { x: 0, y: 0, width: ipadbredde, ipadhøyde });
    const alienkort_1 = new Blocks.Image(alienkort, { x: 600, y: 50, width: 500, height: 600 });
    const kraterkort_1 = new Blocks.Image(kraterkort, { x: 250, y: 50, width: 500, height: 600 });
    const spmKort = new Blocks.Image(spørsmålskort, { x: -100, y: 50, width: 500, height: 600 });

    Actions.Click(spmKort, () => {
        randomSpmSide();
    })

    Actions.Click(alienkort_1, () => {
        randomUtfordringSide();
    })

    Actions.Click(kraterkort_1, () => {
        randomKraterSide();
    })

}

function feilsvar() {
    const feilsvar = new Blocks.Image("bilder/SpmSider/feilsvar.png", { x: 25, y: 50, width: 350, height: 450 });
   feilsvar.show();
    new Blocks.Sound("lyder/feilsvar.m4a", { loop: false, auto: true })
    setTimeout(()=>{
        feilsvar.hide();
    }, 2000);
}

function riktigsvar() {
    const riktigsvar = new Blocks.Image("bilder/SpmSider/riktigsvar.png", { x: 700, y: 50, width: 450, height: 400 });
    new Blocks.Sound("lyder/riktigsvar.m4a", { loop: false, auto: true })
    setTimeout(()=>{
        GaaTil(spillside);
    }, 2000);
}

function svarAlternativ(feil1, feil2, riktig) {
    Actions.Click(feil1, () => {
        feilsvar();
    })
    Actions.Click(feil2, () => {
        feilsvar();
    })
    Actions.Click(riktig, () => {
        riktigsvar();
    })
}

function spørsmålsside() {
    const img2 = new Blocks.Image(bakgrunnsbilde, { x: 0, y: 0, width: ipadbredde, ipadhøyde });
    const spm1 = new Blocks.Image("bilder/SpmSider/spm1.png", { x: 300, y: -100, width: spmbredde, height: spmlengde })
    const jorda = new Blocks.Image("bilder/SpmSider/jorda.png", { x: 100, y: 400, width: 200, ipadhøyde: 200 });
    const saturn = new Blocks.Image("bilder/SpmSider/saturn.png", { x: 425, y: 450, width: 200, ipadhøyde: 200 });
    const mars = new Blocks.Image("bilder/SpmSider/mars.png", { x: 750, y: 400, width: 200, ipadhøyde: 200 });
    new Blocks.Sound("lyder/planet.m4a", { loop: false, auto: true })

    svarAlternativ(jorda, mars, saturn);
}
function spørsmålsside2() {
    const img2 = new Blocks.Image(bakgrunnsbilde, { x: 0, y: 0, width: ipadbredde, ipadhøyde });
    const spm2 = new Blocks.Image("bilder/SpmSider/spm2.png", { x: 300, y: -100, width: spmbredde, height: spmlengde })
    const orangedot = new Blocks.Image("bilder/SpmSider/orangedot.png", { x: -50, y: 250, width: spmbredde, height: spmlengde })
    const lilladot = new Blocks.Image("bilder/SpmSider/lilladot.png", { x: 300, y: 250, width: spmbredde, height: spmlengde })
    const grønndot = new Blocks.Image("bilder/SpmSider/grønndot.png", { x: 650, y: 250, width: spmbredde, height: spmlengde })
    new Blocks.Sound("lyder/fargegulogblå.m4a", { loop: false, auto: true })

    svarAlternativ(orangedot, lilladot, grønndot);
}


function spørsmålsside3() {
    const img2 = new Blocks.Image(bakgrunnsbilde, { x: 0, y: 0, width: ipadbredde, ipadhøyde });
    const spm3 = new Blocks.Image("bilder/SpmSider/spm3.png", { x: 300, y: -100, width: spmbredde, height: spmlengde })
    const trekant = new Blocks.Image("bilder/SpmSider/trekant.png", { x: -50, y: 250, width: spmbredde, height: spmlengde })
    const firkant = new Blocks.Image("bilder/SpmSider/firkant.png", { x: 300, y: 250, width: spmbredde, height: spmlengde })
    const guldot = new Blocks.Image("bilder/SpmSider/guldot.png", { x: 650, y: 250, width: spmbredde, height: spmlengde })
    new Blocks.Sound("lyder/firkant.m4a", { loop: false, auto: true })

    svarAlternativ(trekant, guldot, firkant);
}

function spørsmålsside4() {
    const img2 = new Blocks.Image(bakgrunnsbilde, { x: 0, y: 0, width: ipadbredde, ipadhøyde });
    const spm4 = new Blocks.Image("bilder/SpmSider/spm4.png", { x: 300, y: -100, width: spmbredde, height: spmlengde })
    const trekant = new Blocks.Image("bilder/SpmSider/trekant.png", { x: -50, y: 250, width: spmbredde, height: spmlengde })
    const firkant = new Blocks.Image("bilder/SpmSider/firkant.png", { x: 300, y: 250, width: spmbredde, height: spmlengde })
    const guldot = new Blocks.Image("bilder/SpmSider/guldot.png", { x: 650, y: 250, width: spmbredde, height: spmlengde })
    new Blocks.Sound("lyder/trekant.m4a", { loop: false, auto: true })

    svarAlternativ(firkant, guldot, trekant);
}

function spørsmålsside5() {
    const img2 = new Blocks.Image(bakgrunnsbilde, { x: 0, y: 0, width: ipadbredde, ipadhøyde });
    const spm5 = new Blocks.Image("bilder/SpmSider/spm5.png", { x: 300, y: -100, width: spmbredde, height: spmlengde })
    const trekant = new Blocks.Image("bilder/SpmSider/trekant.png", { x: -50, y: 250, width: spmbredde, height: spmlengde })
    const firkant = new Blocks.Image("bilder/SpmSider/firkant.png", { x: 300, y: 250, width: spmbredde, height: spmlengde })
    const guldot = new Blocks.Image("bilder/SpmSider/guldot.png", { x: 650, y: 250, width: spmbredde, height: spmlengde })
    new Blocks.Sound("lyder/sirkel.m4a", { loop: false, auto: true })

    svarAlternativ(trekant, firkant, guldot);
}



function spørsmålsside6() {
    const img2 = new Blocks.Image(bakgrunnsbilde, { x: 0, y: 0, width: ipadbredde, ipadhøyde });
    const spm6 = new Blocks.Image("bilder/SpmSider/spm6.png", { x: 300, y: -100, width: spmbredde, height: spmlengde })
    const bil = new Blocks.Image("bilder/SpmSider/bil.png", { x: 100, y: 400, width: 200, height: 250 })
    const hatt = new Blocks.Image("bilder/SpmSider/hatt.png", { x: 400, y: 400, width: 250, height: 300 })
    const hus = new Blocks.Image("bilder/SpmSider/hus.png", { x: 650, y: 250, width: 500, height: 600 })
    new Blocks.Sound("lyder/katt.m4a", { loop: false, auto: true })

    svarAlternativ(bil, hus, hatt);
}

function spørsmålsside7() {
    const img2 = new Blocks.Image(bakgrunnsbilde, { x: 0, y: 0, width: ipadbredde, ipadhøyde });
    const spm7 = new Blocks.Image("bilder/SpmSider/spm7.png", { x: 300, y: -100, width: spmbredde, height: spmlengde })
    const hus = new Blocks.Image("bilder/SpmSider/hus.png", { x: 0, y: 250, width: 500, height: 600 })
    const bil = new Blocks.Image("bilder/SpmSider/bil.png", { x: 450, y: 400, width: 200, height: 250 })
    const katt = new Blocks.Image("bilder/SpmSider/katt.png", { x: 750, y: 400, width: 250, height: 250 })
    new Blocks.Sound("lyder/mus.m4a", { loop: false, auto: true })

    svarAlternativ(bil, katt, hus);
}

function spørsmålsside8() {
    const img2 = new Blocks.Image(bakgrunnsbilde, { x: 0, y: 0, width: ipadbredde, ipadhøyde });
    const spm8 = new Blocks.Image("bilder/SpmSider/spm8.png", { x: 300, y: -100, width: spmbredde, height: spmlengde })
    const tallet2 = new Blocks.Image("bilder/SpmSider/tallet2.png", { x: -50, y: 250, width: spmbredde, height: spmlengde })
    const tallet9 = new Blocks.Image("bilder/SpmSider/tallet9.png", { x: 275, y: 275, width: spmbredde, height: spmlengde })
    const tallet7 = new Blocks.Image("bilder/SpmSider/tallet7.png", { x: 600, y: 275, width: spmbredde, height: spmlengde })
    new Blocks.Sound("lyder/regnbue.m4a", { loop: false, auto: true })

    svarAlternativ(tallet2, tallet9, tallet7);
}

function spørsmålsside9() {
    const img2 = new Blocks.Image(bakgrunnsbilde, { x: 0, y: 0, width: ipadbredde, ipadhøyde });
    const spm9 = new Blocks.Image("bilder/SpmSider/spm9.png", { x: 300, y: -100, width: spmbredde, height: spmlengde })
    const cherry = new Blocks.Image("bilder/SpmSider/cherry.png", { x: 100, y: 400, width: 200, height: 200 })
    const eple = new Blocks.Image("bilder/SpmSider/eple.png", { x: 450, y: 425, width: 200, height: 200 })
    const drue = new Blocks.Image("bilder/SpmSider/drue.png", { x: 800, y: 425, width: 200, height: 200 })
    new Blocks.Sound("lyder/rosin.m4a", { loop: false, auto: true })

    svarAlternativ(cherry, eple, drue);
}

function spørsmålsside10() {
    const img2 = new Blocks.Image(bakgrunnsbilde, { x: 0, y: 0, width: ipadbredde, ipadhøyde });
    const spm10 = new Blocks.Image("bilder/SpmSider/spm10.png", { x: 300, y: -100, width: spmbredde, height: spmlengde })
    const guldot = new Blocks.Image("bilder/SpmSider/guldot.png", { x: -50, y: 250, width: spmbredde, height: spmlengde })
    const lilladot = new Blocks.Image("bilder/SpmSider/lilladot.png", { x: 300, y: 250, width: spmbredde, height: spmlengde })
    const grønndot = new Blocks.Image("bilder/SpmSider/grønndot.png", { x: 650, y: 250, width: spmbredde, height: spmlengde })
    new Blocks.Sound("lyder/løvetann.m4a", { loop: false, auto: true })

    svarAlternativ(lilladot, grønndot, guldot);
}


function spørsmålsside11() {
    const img2 = new Blocks.Image(bakgrunnsbilde, { x: 0, y: 0, width: ipadbredde, ipadhøyde });
    const spm11 = new Blocks.Image("bilder/SpmSider/spm11.png", { x: 300, y: -100, width: spmbredde, height: spmlengde })
    const sommer = new Blocks.Image("bilder/SpmSider/sommer.png", { x: 100, y: 400, width: 200, height: 200 })
    const vinter = new Blocks.Image("bilder/SpmSider/vinter.png", { x: 450, y: 400, width: 200, height: 200 })
    const høst = new Blocks.Image("bilder/SpmSider/høst.png", { x: 800, y: 400, width: 200, height: 200 })
    new Blocks.Sound("lyder/årstid.m4a", { loop: false, auto: true })

    svarAlternativ(sommer, høst, vinter);
}


function spørsmålsside12() {
    const img2 = new Blocks.Image(bakgrunnsbilde, { x: 0, y: 0, width: ipadbredde, ipadhøyde });
    const spm12 = new Blocks.Image("bilder/SpmSider/spm12.png", { x: 300, y: -100, width: spmbredde, height: spmlengde })
    const tallet4 = new Blocks.Image("bilder/SpmSider/tallet4.png", { x: -50, y: 250, width: spmbredde, height: spmlengde })
    const tallet2 = new Blocks.Image("bilder/SpmSider/tallet2.png", { x: 300, y: 250, width: spmbredde, height: spmlengde })
    const tallet7 = new Blocks.Image("bilder/SpmSider/tallet7.png", { x: 600, y: 275, width: spmbredde, height: spmlengde })
    new Blocks.Sound("lyder/tallet4.m4a", { loop: false, auto: true })

    svarAlternativ(tallet2, tallet7, tallet4);
}


function spørsmålsside13() {
    const img2 = new Blocks.Image(bakgrunnsbilde, { x: 0, y: 0, width: ipadbredde, ipadhøyde });
    const spm13 = new Blocks.Image("bilder/SpmSider/spm13.png", { x: 300, y: -100, width: spmbredde, height: spmlengde })
    const tallet9 = new Blocks.Image("bilder/SpmSider/tallet9.png", { x: -50, y: 250, width: spmbredde, height: spmlengde })
    const tallet7 = new Blocks.Image("bilder/SpmSider/tallet7.png", { x: 300, y: 250, width: spmbredde, height: spmlengde })
    const tallet2 = new Blocks.Image("bilder/SpmSider/tallet2.png", { x: 650, y: 250, width: spmbredde, height: spmlengde })
    new Blocks.Sound("lyder/tallet9.m4a", { loop: false, auto: true })

    svarAlternativ(tallet7, tallet2, tallet9);
}


function spørsmålsside14() {
    const img2 = new Blocks.Image(bakgrunnsbilde, { x: 0, y: 0, width: ipadbredde, ipadhøyde });
    const spm14 = new Blocks.Image("bilder/SpmSider/spm14.png", { x: 300, y: -100, width: spmbredde, height: spmlengde })
    const tallet2 = new Blocks.Image("bilder/SpmSider/tallet2.png", { x: -50, y: 250, width: spmbredde, height: spmlengde })
    const tallet7 = new Blocks.Image("bilder/SpmSider/tallet7.png", { x: 300, y: 250, width: spmbredde, height: spmlengde })
    const tallet4 = new Blocks.Image("bilder/SpmSider/tallet4.png", { x: 650, y: 250, width: spmbredde, height: spmlengde })
    new Blocks.Sound("lyder/tallet2.m4a", { loop: false, auto: true })

    svarAlternativ(tallet7, tallet4, tallet2);
}


function spørsmålsside15() {
    const img2 = new Blocks.Image(bakgrunnsbilde, { x: 0, y: 0, width: ipadbredde, ipadhøyde });
    const spm15 = new Blocks.Image("bilder/SpmSider/spm15.png", { x: 300, y: -100, width: spmbredde, height: spmlengde })
    const stjerne4 = new Blocks.Image("bilder/SpmSider/stjerne4.png", { x: -50, y: 250, width: spmbredde, height: spmlengde })
    const stjerne9 = new Blocks.Image("bilder/SpmSider/stjerne9.png", { x: 350, y: 250, width: spmbredde, height: spmlengde })
    const stjerne6 = new Blocks.Image("bilder/SpmSider/stjerne6.png", { x: 650, y: 250, width: spmbredde, height: spmlengde })
    new Blocks.Sound("lyder/4stjerner.m4a", { loop: false, auto: true })

    svarAlternativ(stjerne9, stjerne6, stjerne4);
}


function spørsmålsside16() {
    const img2 = new Blocks.Image(bakgrunnsbilde, { x: 0, y: 0, width: ipadbredde, ipadhøyde });
    const spm16 = new Blocks.Image("bilder/SpmSider/spm16.png", { x: 300, y: -100, width: spmbredde, height: spmlengde })
    const stjerne6 = new Blocks.Image("bilder/SpmSider/stjerne6.png", { x: -50, y: 250, width: spmbredde, height: spmlengde })
    const stjerne9 = new Blocks.Image("bilder/SpmSider/stjerne9.png", { x: 350, y: 250, width: spmbredde, height: spmlengde })
    const stjerne4 = new Blocks.Image("bilder/SpmSider/stjerne4.png", { x: 600, y: 250, width: spmbredde, height: spmlengde })
    new Blocks.Sound("lyder/6stjerner.m4a", { loop: false, auto: true })

    svarAlternativ(stjerne9, stjerne4, stjerne6);
}


function spørsmålsside17() {
    const img2 = new Blocks.Image(bakgrunnsbilde, { x: 0, y: 0, width: ipadbredde, ipadhøyde });
    const spm17 = new Blocks.Image("bilder/SpmSider/spm17.png", { x: 300, y: -100, width: spmbredde, height: spmlengde })
    const lilladot = new Blocks.Image("bilder/SpmSider/lilladot.png", { x: -50, y: 200, width: spmbredde, height: spmlengde })
    const orangedot = new Blocks.Image("bilder/SpmSider/orangedot.png", { x: 300, y: 250, width: spmbredde, height: spmlengde })
    const guldot = new Blocks.Image("bilder/SpmSider/guldot.png", { x: 600, y: 250, width: spmbredde, height: spmlengde })
    new Blocks.Sound("lyder/fargeblåogrød.m4a", { loop: false, auto: true })

    svarAlternativ(orangedot, guldot, lilladot);
}


function spørsmålsside18() {
    const img2 = new Blocks.Image(bakgrunnsbilde, { x: 0, y: 0, width: ipadbredde, ipadhøyde });
    const spm18 = new Blocks.Image("bilder/SpmSider/spm18.png", { x: 300, y: -100, width: spmbredde, height: spmlengde })
    const orangedot = new Blocks.Image("bilder/SpmSider/orangedot.png", { x: -50, y: 250, width: spmbredde, height: spmlengde })
    const lilladot = new Blocks.Image("bilder/SpmSider/lilladot.png", { x: 300, y: 250, width: spmbredde, height: spmlengde })
    const grønndot = new Blocks.Image("bilder/SpmSider/grønndot.png", { x: 600, y: 250, width: spmbredde, height: spmlengde })
    new Blocks.Sound("lyder/fargerødoggul.m4a", { loop: false, auto: true })

    svarAlternativ(lilladot, grønndot, orangedot);
}


function spørsmålsside19() {
    const img2 = new Blocks.Image(bakgrunnsbilde, { x: 0, y: 0, width: ipadbredde, ipadhøyde });
    const spm19 = new Blocks.Image("bilder/SpmSider/spm19.png", { x: 300, y: -100, width: spmbredde, height: spmlengde })
    const usaflagg = new Blocks.Image("bilder/SpmSider/usaflagg.png", { x: 100, y: 400, width: 200, height: 150 })
    const norgeflagg = new Blocks.Image("bilder/SpmSider/norgeflagg.png", { x: 450, y: 400, width: 200, height: 150 })
    const prideflagg = new Blocks.Image("bilder/SpmSider/prideflagg.png", { x: 800, y: 400, width: 200, height: 150 })
    new Blocks.Sound("lyder/flaggpåmånen.m4a", { loop: false, auto: true })

    svarAlternativ(norgeflagg, prideflagg, usaflagg);
}


function spørsmålsside20() {
    const img2 = new Blocks.Image(bakgrunnsbilde, { x: 0, y: 0, width: ipadbredde, ipadhøyde });
    const spm20 = new Blocks.Image("bilder/SpmSider/spm20.png", { x: 300, y: -100, width: spmbredde, height: spmlengde })
    const stjerne9 = new Blocks.Image("bilder/SpmSider/stjerne9.png", { x: 0, y: 250, width: spmbredde, height: spmlengde })
    const stjerne6 = new Blocks.Image("bilder/SpmSider/stjerne6.png", { x: 275, y: 250, width: spmbredde, height: spmlengde })
    const stjerne4 = new Blocks.Image("bilder/SpmSider/stjerne4.png", { x: 600, y: 250, width: spmbredde, height: spmlengde })
    new Blocks.Sound("lyder/9stjerner.m4a", { loop: false, auto: true })

    svarAlternativ(stjerne6, stjerne4, stjerne9);
}

function spørsmålsside21() {
    const img2 = new Blocks.Image(bakgrunnsbilde, { x: 0, y: 0, width: ipadbredde, ipadhøyde });
    const spm21 = new Blocks.Image("bilder/SpmSider/spm21.png", { x: 300, y: -100, width: spmbredde, height: spmlengde })
    const mus = new Blocks.Image("bilder/SpmSider/mus.png", { x: 50, y: 400, width: 250, height: 200 })
    const hval = new Blocks.Image("bilder/SpmSider/hval.png", { x: 400, y: 400, width: 250, height: 200 })
    const elefant = new Blocks.Image("bilder/SpmSider/elefant.png", { x: 800, y: 400, width: 250, height: 200    })
    new Blocks.Sound("lyder/størstdyr.m4a", { loop: false, auto: true })

    svarAlternativ(mus, elefant, hval);
}

function spørsmålsside22() {
    const img2 = new Blocks.Image(bakgrunnsbilde, { x: 0, y: 0, width: ipadbredde, ipadhøyde });
    const spm22 = new Blocks.Image("bilder/SpmSider/spm22.png", { x: 300, y: -100, width: spmbredde, height: spmlengde })
    const barn1 = new Blocks.Image("bilder/SpmSider/barn1.png", { x: 200, y: 550, width: 50, height: 100 })
    const barn2 = new Blocks.Image("bilder/SpmSider/barn2.png", { x: 500, y: 450, width: 100, height: 200 })
    const barn3 = new Blocks.Image("bilder/SpmSider/barn3.png", { x: 750, y: 350, width: 200, height: 300 })
    new Blocks.Sound("lyder/lavest.m4a", { loop: false, auto: true })

    svarAlternativ(barn2, barn3, barn1);
}

function spørsmålsside23() {
    const img2 = new Blocks.Image(bakgrunnsbilde, { x: 0, y: 0, width: ipadbredde, ipadhøyde });
    const spm23 = new Blocks.Image("bilder/SpmSider/spm23.png", { x: 300, y: -100, width: spmbredde, height: spmlengde })
    const fjær = new Blocks.Image("bilder/SpmSider/fjær.png", { x: 100, y: 400, width: 100, height: 200 })
    const bil = new Blocks.Image("bilder/SpmSider/bil.png", { x: 425, y: 400, width: 200, height: 200 })
    const sykkel = new Blocks.Image("bilder/SpmSider/sykkel.png", { x: 800, y: 400, width: 200, height: 200 })
    new Blocks.Sound("lyder/veiermest.m4a", { loop: false, auto: true })

    svarAlternativ(fjær, sykkel, bil);
}

function alienside() {
    const img2 = new Blocks.Image(bakgrunnsbilde, { x: 0, y: 0, width: ipadbredde, ipadhøyde });
    const utf1 = new Blocks.Image("bilder/UtfordringSider/utf1.png", { x: 300, y: -100, width: spmbredde, height: spmlengde })
    const fullførtpil = new Blocks.Image("bilder/UtfordringSider/fullførtpil.png", { x: 550, y: 100, width: spmbredde, height: spmlengde })
    new Blocks.Sound("lyder/byttplass.m4a", { loop: false, auto: true })
    
    Actions.Click(fullførtpil, () => {
        GaaTil(spillside);
    })
}

function alienside2() {
    const img2 = new Blocks.Image(bakgrunnsbilde, { x: 0, y: 0, width: ipadbredde, ipadhøyde });
    const utf2 = new Blocks.Image("bilder/UtfordringSider/utf2.png", { x: 300, y: -100, width: spmbredde, height: spmlengde })
    const fullførtpil = new Blocks.Image("bilder/UtfordringSider/fullførtpil.png", { x: 550, y: 100, width: spmbredde, height: spmlengde })
    new Blocks.Sound("lyder/klapp10ganger.m4a", { loop: false, auto: true })

    Actions.Click(fullførtpil, () => {
        GaaTil(spillside);
    })
}

function alienside3() {
    const img2 = new Blocks.Image(bakgrunnsbilde, { x: 0, y: 0, width: ipadbredde, ipadhøyde });
    const utf3 = new Blocks.Image("bilder/UtfordringSider/utf3.png", { x: 300, y: -100, width: spmbredde, height: spmlengde })
    const fullførtpil = new Blocks.Image("bilder/UtfordringSider/fullførtpil.png", { x: 550, y: 100, width: spmbredde, height: spmlengde })
    new Blocks.Sound("lyder/gjemdere.m4a", { loop: false, auto: true })

    Actions.Click(fullførtpil, () => {
        GaaTil(spillside);
    })
}

function alienside4() {
    const img2 = new Blocks.Image(bakgrunnsbilde, { x: 0, y: 0, width: ipadbredde, ipadhøyde });
    const utf4 = new Blocks.Image("bilder/UtfordringSider/utf4.png", { x: 300, y: -100, width: spmbredde, height: spmlengde })
    const fullførtpil = new Blocks.Image("bilder/UtfordringSider/fullførtpil.png", { x: 550, y: 100, width: spmbredde, height: spmlengde })
    new Blocks.Sound("lyder/tramp.m4a", { loop: false, auto: true })

    Actions.Click(fullførtpil, () => {
        GaaTil(spillside);
    })
}

function alienside5() {
    const img2 = new Blocks.Image(bakgrunnsbilde, { x: 0, y: 0, width: ipadbredde, ipadhøyde });
    const utf5 = new Blocks.Image("bilder/UtfordringSider/utf5.png", { x: 300, y: -100, width: spmbredde, height: spmlengde })
    const fullførtpil = new Blocks.Image("bilder/UtfordringSider/fullførtpil.png", { x: 550, y: 100, width: spmbredde, height: spmlengde })
    new Blocks.Sound("lyder/holdhender.m4a", { loop: false, auto: true })

    Actions.Click(fullførtpil, () => {
        GaaTil(spillside);
    })
}

function alienside6() {
    const img2 = new Blocks.Image(bakgrunnsbilde, { x: 0, y: 0, width: ipadbredde, ipadhøyde });
    const utf6 = new Blocks.Image("bilder/UtfordringSider/utf6.png", { x: 300, y: -100, width: spmbredde, height: spmlengde })
    const fullførtpil = new Blocks.Image("bilder/UtfordringSider/fullførtpil.png", { x: 550, y: 100, width: spmbredde, height: spmlengde })
    new Blocks.Sound("lyder/gåtilbake.m4a", { loop: false, auto: true })

    Actions.Click(fullførtpil, () => {
        GaaTil(spillside);
    })
}

function alienside7() {
    const img2 = new Blocks.Image(bakgrunnsbilde, { x: 0, y: 0, width: ipadbredde, ipadhøyde });
    const utf7 = new Blocks.Image("bilder/UtfordringSider/utf7.png", { x: 300, y: -100, width: spmbredde, height: spmlengde })
    const fullførtpil = new Blocks.Image("bilder/UtfordringSider/fullførtpil.png", { x: 550, y: 100, width: spmbredde, height: spmlengde })
    new Blocks.Sound("lyder/hendeneiværet.m4a", { loop: false, auto: true })

    Actions.Click(fullførtpil, () => {
        GaaTil(spillside);
    })
}

function alienside8() {
    const img2 = new Blocks.Image(bakgrunnsbilde, { x: 0, y: 0, width: ipadbredde, ipadhøyde });
    const utf8 = new Blocks.Image("bilder/UtfordringSider/utf8.png", { x: 300, y: -100, width: spmbredde, height: spmlengde })
    const fullførtpil = new Blocks.Image("bilder/UtfordringSider/fullførtpil.png", { x: 550, y: 100, width: spmbredde, height: spmlengde })
    new Blocks.Sound("lyder/ledigkrater.m4a", { loop: false, auto: true })

    Actions.Click(fullførtpil, () => {
        GaaTil(spillside);
    })
}

function alienside9() {
    const img2 = new Blocks.Image(bakgrunnsbilde, { x: 0, y: 0, width: ipadbredde, ipadhøyde });
    const utf9 = new Blocks.Image("bilder/UtfordringSider/utf9.png", { x: 300, y: -100, width: spmbredde, height: spmlengde })
    const fullførtpil = new Blocks.Image("bilder/UtfordringSider/fullførtpil.png", { x: 550, y: 100, width: spmbredde, height: spmlengde })
    new Blocks.Sound("lyder/highfive.m4a", { loop: false, auto: true })

    Actions.Click(fullførtpil, () => {
        GaaTil(spillside);
    })
}

function alienside10() {
    const img2 = new Blocks.Image(bakgrunnsbilde, { x: 0, y: 0, width: ipadbredde, ipadhøyde });
    const utf10 = new Blocks.Image("bilder/UtfordringSider/utf10.png", { x: 300, y: -100, width: spmbredde, height: spmlengde })
    const fullførtpil = new Blocks.Image("bilder/UtfordringSider/fullførtpil.png", { x: 550, y: 100, width: spmbredde, height: spmlengde })
    new Blocks.Sound("lyder/lekeromvesen.m4a", { loop: false, auto: true }) 

    Actions.Click(fullførtpil, () => {
        GaaTil(spillside);
    })
}
function kraterside() {
    const img2 = new Blocks.Image(bakgrunnsbilde, { x: 0, y: 0, width: ipadbredde, ipadhøyde });
    const rakettbakgrunn = new Blocks.Image("bilder/KraterSider/rakettbakgrunn.png", { x: 225, y: -100, width: 600, height: 700 })
    const kraterastronaut = new Blocks.Image("bilder/KraterSider/kraterastronaut.png", { x: 600, y: 50, width: 650, height: 450 });
    const fullførtpil = new Blocks.Image("bilder/UtfordringSider/fullførtpil.png", { x: 550, y: 100, width: spmbredde, height: spmlengde })
    const rakettdel1 = new Blocks.Image("bilder/KraterSider/rakettdel1.png", { x: 350, y: 0, width: spmbredde, height: spmlengde })
    new Blocks.Sound("lyder/dennetrengervi.m4a", { loop: false, auto: true })
    Actions.Click(fullførtpil, () => {
        GaaTil(spillside);
    })
}

function kraterside2() {
    const img2 = new Blocks.Image(bakgrunnsbilde, { x: 0, y: 0, width: ipadbredde, ipadhøyde });
    const rakettbakgrunn = new Blocks.Image("bilder/KraterSider/rakettbakgrunn.png", { x: 225, y: -100, width: 600, height: 700 })
    const kraterastronaut = new Blocks.Image("bilder/KraterSider/kraterastronaut.png", { x: 600, y: 50, width: 650, height: 450 });
    const fullførtpil = new Blocks.Image("bilder/UtfordringSider/fullførtpil.png", { x: 550, y: 100, width: spmbredde, height: spmlengde })
    const rakettdel1 = new Blocks.Image("bilder/KraterSider/rakettdel1.png", { x: 350, y: 0, width: spmbredde, height: spmlengde })
    new Blocks.Sound("lyder/fantendel.m4a", { loop: false, auto: true })
    Actions.Click(fullførtpil, () => {
        GaaTil(spillside);
    })
}

function kraterside3() {
    const img2 = new Blocks.Image(bakgrunnsbilde, { x: 0, y: 0, width: ipadbredde, ipadhøyde });
    const rakettbakgrunn = new Blocks.Image("bilder/KraterSider/rakettbakgrunn.png", { x: 225, y: -100, width: 600, height: 700 })
    const kraterastronaut = new Blocks.Image("bilder/KraterSider/kraterastronaut.png", { x: 600, y: 50, width: 650, height: 450 });
    const fullførtpil = new Blocks.Image("bilder/UtfordringSider/fullførtpil.png", { x: 550, y: 100, width: spmbredde, height: spmlengde })
    const rakettdel2 = new Blocks.Image("bilder/KraterSider/rakettdel2.png", { x: 325, y: 0, width: 400, height: 500 })
    new Blocks.Sound("lyder/dennetrengervi.m4a", { loop: false, auto: true })
    Actions.Click(fullførtpil, () => {
        GaaTil(spillside);
    })
}

function kraterside4() {
    const img2 = new Blocks.Image(bakgrunnsbilde, { x: 0, y: 0, width: ipadbredde, ipadhøyde });
    const rakettbakgrunn = new Blocks.Image("bilder/KraterSider/rakettbakgrunn.png", { x: 225, y: -100, width: 600, height: 700 })
    const kraterastronaut = new Blocks.Image("bilder/KraterSider/kraterastronaut.png", { x: 600, y: 50, width: 650, height: 450 });
    const fullførtpil = new Blocks.Image("bilder/UtfordringSider/fullførtpil.png", { x: 550, y: 100, width: spmbredde, height: spmlengde })
    const rakettdel2 = new Blocks.Image("bilder/KraterSider/rakettdel2.png", { x: 325, y: 0, width: 400, height: 500 })
    new Blocks.Sound("lyder/fantendel.m4a", { loop: false, auto: true })
    Actions.Click(fullførtpil, () => {
        GaaTil(spillside);
    })
}

function kraterside5() {
    const img2 = new Blocks.Image(bakgrunnsbilde, { x: 0, y: 0, width: ipadbredde, ipadhøyde });
    const rakettbakgrunn = new Blocks.Image("bilder/KraterSider/rakettbakgrunn.png", { x: 225, y: -100, width: 600, height: 700 })
    const kraterastronaut = new Blocks.Image("bilder/KraterSider/kraterastronaut.png", { x: 600, y: 50, width: 650, height: 450 });
    const fullførtpil = new Blocks.Image("bilder/UtfordringSider/fullførtpil.png", { x: 550, y: 100, width: spmbredde, height: spmlengde })
    const rakettdel3 = new Blocks.Image("bilder/KraterSider/rakettdel3.png", { x: 275, y: -100, width: spmbredde, height: spmlengde })
    new Blocks.Sound("lyder/dennetrengervi.m4a", { loop: false, auto: true })
    Actions.Click(fullførtpil, () => {
        GaaTil(spillside);
    })
}

function kraterside6() {
    const img2 = new Blocks.Image(bakgrunnsbilde, { x: 0, y: 0, width: ipadbredde, ipadhøyde });
    const rakettbakgrunn = new Blocks.Image("bilder/KraterSider/rakettbakgrunn.png", { x: 225, y: -100, width: 600, height: 700 })
    const kraterastronaut = new Blocks.Image("bilder/KraterSider/kraterastronaut.png", { x: 600, y: 50, width: 650, height: 450 });
    const fullførtpil = new Blocks.Image("bilder/UtfordringSider/fullførtpil.png", { x: 550, y: 100, width: spmbredde, height: spmlengde })
    const rakettdel4 = new Blocks.Image("bilder/KraterSider/rakettdel4.png", { x: 260, y: -100, width: spmbredde, height: spmlengde })
    new Blocks.Sound("lyder/fantendel.m4a", { loop: false, auto: true })
    Actions.Click(fullførtpil, () => {
        GaaTil(spillside);
    })
}

function kraterside7() {
    const img2 = new Blocks.Image(bakgrunnsbilde, { x: 0, y: 0, width: ipadbredde, ipadhøyde });
    const rakettbakgrunn = new Blocks.Image("bilder/KraterSider/rakettbakgrunn.png", { x: 225, y: -100, width: 600, height: 700 })
    const kraterastronaut = new Blocks.Image("bilder/KraterSider/kraterastronaut.png", { x: 600, y: 50, width: 650, height: 450 });
    const fullførtpil = new Blocks.Image("bilder/UtfordringSider/fullførtpil.png", { x: 550, y: 100, width: spmbredde, height: spmlengde })
    const rakettdel5 = new Blocks.Image("bilder/KraterSider/rakettdel5.png", { x: 315, y: -50, width: 400, height: 500 })
    new Blocks.Sound("lyder/dennetrengervi.m4a", { loop: false, auto: true })
    Actions.Click(fullførtpil, () => {
        GaaTil(spillside);
    })
}

function kraterside8() {
    const img2 = new Blocks.Image(bakgrunnsbilde, { x: 0, y: 0, width: ipadbredde, ipadhøyde });
    const rakettbakgrunn = new Blocks.Image("bilder/KraterSider/rakettbakgrunn.png", { x: 225, y: -100, width: 600, height: 700 })
    const kraterastronaut = new Blocks.Image("bilder/KraterSider/kraterastronaut.png", { x: 600, y: 50, width: 650, height: 450 });
    const fullførtpil = new Blocks.Image("bilder/UtfordringSider/fullførtpil.png", { x: 550, y: 100, width: spmbredde, height: spmlengde })
    const rakettdel6 = new Blocks.Image("bilder/KraterSider/rakettdel6.png", { x: 270, y: -75, width: spmbredde, height: spmlengde })
    new Blocks.Sound("lyder/fantendel.m4a", { loop: false, auto: true })
    Actions.Click(fullførtpil, () => {
        GaaTil(spillside);
    })
}

function kraterside9() {
    const img2 = new Blocks.Image(bakgrunnsbilde, { x: 0, y: 0, width: ipadbredde, ipadhøyde });
    const rakettbakgrunn = new Blocks.Image("bilder/KraterSider/rakettbakgrunn.png", { x: 225, y: -100, width: 600, height: 700 })
    const kraterastronaut = new Blocks.Image("bilder/KraterSider/kraterastronaut.png", { x: 600, y: 50, width: 650, height: 450 });
    const fullførtpil = new Blocks.Image("bilder/UtfordringSider/fullførtpil.png", { x: 550, y: 100, width: spmbredde, height: spmlengde })
    const rakettdel7 = new Blocks.Image("bilder/KraterSider/rakettdel7.png", { x: 375, y: 75, width: 300, height: 400 })
    new Blocks.Sound("lyder/dennetrengervi.m4a", { loop: false, auto: true })
    Actions.Click(fullførtpil, () => {
        GaaTil(spillside);
    })
}

function kraterside10() {
    const img2 = new Blocks.Image(bakgrunnsbilde, { x: 0, y: 0, width: ipadbredde, ipadhøyde });
    const rakettbakgrunn = new Blocks.Image("bilder/KraterSider/rakettbakgrunn.png", { x: 225, y: -100, width: 600, height: 700 })
    const kraterastronaut = new Blocks.Image("bilder/KraterSider/kraterastronaut.png", { x: 600, y: 50, width: 650, height: 450 });
    const fullførtpil = new Blocks.Image("bilder/UtfordringSider/fullførtpil.png", { x: 550, y: 100, width: spmbredde, height: spmlengde })
    const rakettdel8 = new Blocks.Image("bilder/KraterSider/rakettdel8.png", { x: 280, y: -100, width: spmbredde, height: spmlengde })
    new Blocks.Sound("lyder/fantendel.m4a", { loop: false, auto: true })
    Actions.Click(fullførtpil, () => {
        GaaTil(spillside);
    })
}

function kraterside11() {
    const img2 = new Blocks.Image(bakgrunnsbilde, { x: 0, y: 0, width: ipadbredde, ipadhøyde });
    const rakettbakgrunn = new Blocks.Image("bilder/KraterSider/rakettbakgrunn.png", { x: 225, y: -100, width: 600, height: 700 })
    const kraterastronaut = new Blocks.Image("bilder/KraterSider/kraterastronaut.png", { x: 600, y: 50, width: 650, height: 450 });
    const fullførtpil = new Blocks.Image("bilder/UtfordringSider/fullførtpil.png", { x: 550, y: 100, width: spmbredde, height: spmlengde })
    const rakettdel8 = new Blocks.Image("bilder/KraterSider/rakettdel8.png", { x: 280, y: -100, width: spmbredde, height: spmlengde })
    new Blocks.Sound("lyder/dennetrengervi.m4a", { loop: false, auto: true })
    Actions.Click(fullførtpil, () => {
        GaaTil(spillside);
    })
}

function kraterside12() {
    const img2 = new Blocks.Image(bakgrunnsbilde, { x: 0, y: 0, width: ipadbredde, ipadhøyde });
    const rakettbakgrunn = new Blocks.Image("bilder/KraterSider/rakettbakgrunn.png", { x: 225, y: -100, width: 600, height: 700 })
    const kraterastronaut = new Blocks.Image("bilder/KraterSider/kraterastronaut.png", { x: 600, y: 50, width: 650, height: 450 });
    const fullførtpil = new Blocks.Image("bilder/UtfordringSider/fullførtpil.png", { x: 550, y: 100, width: spmbredde, height: spmlengde })
    const rakettdel9 = new Blocks.Image("bilder/KraterSider/rakettdel9.png", { x: 280, y: -50, width: spmbredde, height: spmlengde })
    new Blocks.Sound("lyder/dennetrengervi.m4a", { loop: false, auto: true })
    Actions.Click(fullførtpil, () => {
        GaaTil(spillside);
    })
}
