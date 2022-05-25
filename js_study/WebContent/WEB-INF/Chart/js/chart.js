const chart1=document.querySelector('.chart1');
const chart2=document.querySelector('.chart2');
const chart3=document.querySelector('.chart3');
//참고 conic-gradient는 ie에서 지원하지 않음....
const makeChart =(percent,classname,color,color2)=>{
    let i=1;
    let chartFn=setInterval(function(){
        if(i <=percent)
        {
            colorFn(i,classname,color,color2);
            i++
        }else{
            clearInterval(chartFn);
        }
    },10);
}
const colorFn = (i, classname, color,color2) => {
    classname.style.background = "conic-gradient("+color +" " + i + "%,"+color2+" "+ i + "% 100%)";
  }
  
 

makeChart(80, chart1, '#f5b914','red');
makeChart(50, chart2, '#f5b914');
makeChart(30, chart3, '#f5b914');