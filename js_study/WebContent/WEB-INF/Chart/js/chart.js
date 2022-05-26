const chart1=document.querySelector('.chart1');
const chart2=document.querySelector('.chart2');
const chart3=document.querySelector('.chart3');

const makeChart =(percent1,percent2,percent3,classname)=>{
    let i=1;
    let chartFn=setInterval(function(){
        if(i <=100)
        {
          
            classname.style.background =colorFn(i,percent1,percent2,percent3,classname);
            i++
        }
        else{
            clearInterval(chartFn);
        }
    },10);
}
// 참고 conic-gradient는 ie에서 지원하지 않음....
const colorFn = (i,percent1,percent2,percent3,classname) => {
    let string="";
  
    if(0<i<percent1)
    {
        string= "conic-gradient(#c0504d "+i+"%,#17375e "+i+"% 100%)";
    }
    if(i>=percent1 && i<parseInt(percent1+percent2))
    {
       
        string= "conic-gradient(#c0504d "+percent1+"%,#177acb "+percent1+"% "+ i+"%,#17375e  "+i+"% "+percent3+"%)";
      
    }
    if(i>=parseInt(percent1+percent2) && i<=100)
    {
  
        string= "conic-gradient(#c0504d "+percent1+"%,#177acb "+percent1+"% "+parseInt(percent1+ percent2)+"%,#17375e "+parseInt(percent1+ percent2)+"% "+i+"%)";
        
    }
    return string

}
  
// 막대 그래프 애니메이션
function f_drawChart(percent1,percent2,percent3,id)
{
    const td1=document.querySelector(id+" #td1");
   const td2=document.querySelector(id+" #td2");
   const td3=document.querySelector(id+" #td3");
   let i=0;

let chartFn= window.setInterval(function(){
    if(i <=percent1)
    {
        td1.style="height:"+parseInt(100-i)+"%;width: 30px;background-color: #17375e;border:none;"
        td2.style="height:0%;width: 30px;background-color: #177acb;border:none;"
      td3.style="height:"+i+"%;width: 30px;background-color: #c0504d;border:none;"
        i++;
     
    }
    else if(i<=percent2)
    {
        td1.style="height:"+parseInt((100-percent1)-i)+"%;width: 30px;background-color: #17375e;border:none;"
             td2.style="height:"+i+"%;width: 30px;background-color: #177acb;border:none;"
        i++;
    
    }
    else{
        clearInterval(chartFn);
    }
},10);
}
makeChart(10,40,50,chart1);
makeChart(15,15,70,chart2);
makeChart(15,85,0,chart3);
f_drawChart(10,50,40,".s1");
f_drawChart(20,35,45,".s2");

