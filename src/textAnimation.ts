import { breathIn, pauseIn, breathOut, pauseOut} from "./stores";

let storeBreathIn: any = breathIn;
let storePauseIn: any = pauseIn;
let storeBreathOut: any = breathOut;
let storePauseOut: any = pauseOut;

breathIn.subscribe(value => { storeBreathIn = value; });
pauseIn.subscribe(value => { storePauseIn = value; });
breathOut.subscribe(value => { storeBreathOut = value; });
pauseOut.subscribe(value => { storePauseOut = value; });


export function animateText(breathInElem: HTMLHeadingElement, pauseInElem: HTMLHeadingElement, breathOutElem: HTMLHeadingElement, pauseOutElem: HTMLHeadingElement) {
    console.log("start text animation");
    animateOne();

    function animateOne() {
        setTimeout(() => {
            breathInElem.setAttribute("style", "opacity: 1;");
            pauseInElem.setAttribute("style", "opacity: 0;");
            breathOutElem.setAttribute("style", "opacity: 0;");
            pauseOutElem.setAttribute("style", "opacity: 0;");
            animateTwo();
        }, (storeBreathIn)*1000);
    }

    function animateTwo() {
        setTimeout(() => {
            breathInElem.setAttribute("style", "opacity: 0;");
            pauseInElem.setAttribute("style", "opacity: 1;");
            breathOutElem.setAttribute("style", "opacity: 0;");
            pauseOutElem.setAttribute("style", "opacity: 0;");
            animateThree();
        }, (storePauseIn)*1000);
    }

    function animateThree() {
        setTimeout(() => {
            breathInElem.setAttribute("style", "opacity: 0;");
            pauseInElem.setAttribute("style", "opacity: 0;");
            breathOutElem.setAttribute("style", "opacity: 1;");
            pauseOutElem.setAttribute("style", "opacity: 0;");
            animateFour();
        }, (storeBreathOut)*1000);
    }

    function animateFour() {
        setTimeout(() => {
            breathInElem.setAttribute("style", "opacity: 0;");
            pauseInElem.setAttribute("style", "opacity: 0;");
            breathOutElem.setAttribute("style", "opacity: 0;");
            pauseOutElem.setAttribute("style", "opacity: 1;");
            animateOne();
        }, (storePauseOut)*1000);
    }
}