const item = document.querySelector(".item");
const itemW = item.offsetWidth;
const itemH = item.offsetHeight;
const itemStyle = window.getComputedStyle(item);
let toBottom = 0.5;
let toRight = 0.6;
let miliSec = 3;
const frame = 50;
const frameForTopLeft = frame - 2;
const frameForBottomRight = frame + 8;

const mainFunc = (props) => {
      const containerBottom = document.querySelector(".container").offsetHeight - itemH;
      const containerRight = document.querySelector(".container").offsetWidth - itemW;
      let itemTop = Number(itemStyle.getPropertyValue("top").replace("px", ""));
      let itemLeft = Number(itemStyle.getPropertyValue("left").replace("px", ""));
      
      if (props.firstIf1(itemTop + toBottom, containerBottom) || props.firstIf2(itemLeft + toRight, containerRight)) 
      {
            clearInterval(interval);
            if(props.isfirstIf1 ? props.firstIf1(itemTop + toBottom, containerBottom) : props.firstIf2(itemLeft + toRight, containerRight)){
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
            firstIf1:(a, b) => a >= (b + frameForBottomRight - 5) ? true : false,
            firstIf2: (c, d) => c >= (d + frameForBottomRight - 5) ? true : false,
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
            firstIf1:(a, b) => a >= (b + frameForBottomRight - 5) ? true : false,
            firstIf2: (c) => c <= frameForTopLeft ? true : false,
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
            firstIf1:(a, b) => a >= (b + frameForBottomRight - 5) ? true : false,
            firstIf2: (c) => c <= frameForTopLeft ? true : false,
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
            firstIf1:(a) => a <= frameForTopLeft ? true : false,
            firstIf2: (b) => b <= frameForTopLeft ? true : false,
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
            firstIf1:(a) => a <= frameForTopLeft ? true : false,
            firstIf2: (b) => b <= frameForTopLeft ? true : false,
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
            firstIf1:(a) => a <= frameForTopLeft ? true : false,
            firstIf2: (b, c) => b >= (c + frameForBottomRight -5) ? true : false,
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
            firstIf1:(a) => a <= frameForTopLeft ? true : false,
            firstIf2: (b, c) => b >= (c + frameForBottomRight - 5) ? true : false,
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
            firstIf1:(a, b) => a >= (b + frameForBottomRight - 5) ? true : false,
            firstIf2: (b, c) => b >= (c + frameForBottomRight - 5) ? true : false,
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
            firstIf1:(a, b) => a >= (b + frameForBottomRight - 5) ? true : false,
            firstIf2: (c, d) => c >= (d + frameForBottomRight - 5) ? true : false,
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
