const chart1=document.querySelector('.chart1');
const chart2=document.querySelector('.chart2');
const chart3=document.querySelector('.chart3');

const makeChart =(percent,classname,color)=>{
    let i=1;
    let chartFn=setInterval(function(){
        if(i <=percent)
        {
            colorFn(i,classname,color);
            i++
        }else{
            clearInterval(chartFn);
        }
    },10);
}
const colorFn = (i, classname, color) => {
    classname.style.background = "conic-gradient(" + color + " 0% " + i + "%, #dedede " + i + "% 100%)";
  }
  
 

makeChart(80, chart1, '#f5b914');
makeChart(50, chart2, '#f5b914');
makeChart(30, chart3, '#f5b914');