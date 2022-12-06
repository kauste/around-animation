const item = document.querySelector(".item");
const itemW = item.offsetWidth;
const itemH = item.offsetHeight;
const itemStyle = window.getComputedStyle(item);
let toBottom = 1;
let toRight = 1.5;
let miliSec = 2;
const containerBottom = document.querySelector(".container").offsetHeight - itemH;
const containerRight = document.querySelector(".container").offsetWidth - itemW;

const mainFunc = (props) => {

      let itemTop = Number(itemStyle.getPropertyValue("top").replace("px", ""));
      let itemLeft = Number(itemStyle.getPropertyValue("left").replace("px", ""));
      
      if (props.firstIf1(itemTop + toBottom) || props.firstIf2(itemLeft + toRight)) 
      {
            clearInterval(interval);
            if(props.isfirstIf1 ? props.firstIf1(itemTop + toBottom) : props.firstIf2(itemLeft + toRight)){
              props.secondIfFunc();
              interval = setInterval(props.secondIfFunc, miliSec);
            }
            else{
              props.secondElseFunc();
                interval = setInterval(props.secondElseFunc, miliSec);
            }
      } else {
            item.style.top = Number(itemTop) + (props.plusOrMinus1 *  toBottom) + 'px';
            item.style.left = Number(itemLeft) + (props.plusOrMinus2 * toRight) +'px';
      }
}
const bottom = () => {
      props = {
            firstIf1:(a) => a >= (containerBottom - 5) ? true : false,
            firstIf2: (b) => b >= (containerRight - 5) ? true : false,
            isfirstIf1: false,
            secondIfFunc: backBottom,
            secondElseFunc: right,
            plusOrMinus1: 1,
            plusOrMinus2: 1,
      }
      mainFunc(props);
}
const backBottom = () => {
      props = {
            firstIf1:(a) => a >= (containerBottom - 5) ? true : false,
            firstIf2: (b) => b <= - 5 ? true : false,
            isfirstIf1: false,
            secondIfFunc: bottom,
            secondElseFunc: leftBack,
            plusOrMinus1: 1,
            plusOrMinus2: -1,
      }
      mainFunc(props);
}
const left = () => {
      props = {
            firstIf1:(a) => a >= (containerBottom - 5) ? true : false,
            firstIf2: (b) => b <= - 5 ? true : false,
            isfirstIf1: true,
            secondIfFunc: leftBack,
            secondElseFunc: bottom,
            plusOrMinus1: 1,
            plusOrMinus2: -1,
      }
      mainFunc(props);
}
const leftBack = () => {
      props = {
            firstIf1:(a) => a <= - 5 ? true : false,
            firstIf2: (b) => b <= - 5 ? true : false,
            isfirstIf1: true,
            secondIfFunc: left,
            secondElseFunc: topBack,
            plusOrMinus1: -1,
            plusOrMinus2: -1,
      }
      mainFunc(props);
}
const top = () => {
      props = {
            firstIf1:(a) => a <= - 5 ? true : false,
            firstIf2: (b) => b <= - 5 ? true : false,
            isfirstIf1: false,
            secondIfFunc: topBack,
            secondElseFunc: left,
            plusOrMinus1: -1,
            plusOrMinus2: -1,
      }
      mainFunc(props);
}
const topBack = () => {
      props = {
            firstIf1:(a) => a <= - 5 ? true : false,
            firstIf2: (b) => b >= (containerRight - 5) ? true : false,
            isfirstIf1: false,
            secondIfFunc: top,
            secondElseFunc: rightBack,
            plusOrMinus1: -1,
            plusOrMinus2: 1,
      }
      mainFunc(props);
}
const right = () => {
      props = {
            firstIf1:(a) => a <= - 5 ? true : false,
            firstIf2: (b) => b >= (containerRight - 5) ? true : false,
            isfirstIf1: true,
            secondIfFunc: rightBack,
            secondElseFunc: top,
            plusOrMinus1: -1,
            plusOrMinus2: 1,
      }
      mainFunc(props);
}
const rightBack = () => {
      props = {
            firstIf1:(a) => a >= (containerBottom - 5) ? true : false,
            firstIf2: (b) => b >= (containerRight - 5) ? true : false,
            isfirstIf1: true,
            secondIfFunc: right,
            secondElseFunc: backBottom,
            plusOrMinus1: 1,
            plusOrMinus2: 1,
      }
      mainFunc(props);
}
const bottomFirst = () => {
      props = {
            firstIf1:(a) => a >= (containerBottom - 5) ? true : false,
            firstIf2: (b) => b >= (containerRight - 5) ? true : false,
            isfirstIf1: false,
            secondIfFunc: backBottom,
            secondElseFunc: right,
            plusOrMinus1: 1,
            plusOrMinus2: 1,
      }
      mainFunc(props);
}
let interval = setInterval(bottomFirst, miliSec);

bottomFirst();
