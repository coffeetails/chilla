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

    
    breathInElem.setAttribute("style", "opacity: 1;");
    setInterval(() => {
        
        breathInElem.setAttribute("style", "opacity: 1;");
        pauseInElem.setAttribute("style", "opacity: 0;");
        breathOutElem.setAttribute("style", "opacity: 0;");
        pauseOutElem.setAttribute("style", "opacity: 0;");
        
        setTimeout(() => {
            breathInElem.setAttribute("style", "opacity: 0;");
            pauseInElem.setAttribute("style", "opacity: 1;");
            breathOutElem.setAttribute("style", "opacity: 0;");
            pauseOutElem.setAttribute("style", "opacity: 0;");
        }, (storeBreathIn)*1000);
        
        setTimeout(() => {
            breathInElem.setAttribute("style", "opacity: 0;");
            pauseInElem.setAttribute("style", "opacity: 0;");
            breathOutElem.setAttribute("style", "opacity: 1;");
            pauseOutElem.setAttribute("style", "opacity: 0;");
        }, (storeBreathIn+storePauseIn)*1000);
        
        setTimeout(() => {
            breathInElem.setAttribute("style", "opacity: 0;");
            pauseInElem.setAttribute("style", "opacity: 0;");
            breathOutElem.setAttribute("style", "opacity: 0;");
            pauseOutElem.setAttribute("style", "opacity: 1;");
        }, (storeBreathIn+storePauseIn+storeBreathOut)*1000);
    }, (storeBreathIn+storePauseIn+storeBreathOut+storePauseOut)*1000);
}