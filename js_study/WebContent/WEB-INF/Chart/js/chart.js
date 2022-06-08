const chart1 = document.querySelector('.chart1');
const chart2 = document.querySelector('.chart2');
const chart3 = document.querySelector('.chart3');

const makeChart = (percent1, percent2, percent3, classname) => {
    let i = 1;
    let chartFn = setInterval(function () {
        if (i <= 100) {

            classname.style.background = colorFn(i, percent1, percent2, percent3, classname);
            i++
        }
        else {
            clearInterval(chartFn);
        }
    }, 10);
    return chartFn;
}
// 참고 conic-gradient는 ie에서 지원하지 않음....
const colorFn = (i, percent1, percent2, percent3, classname) => {
    let string = "";

    if (0 < i < percent1) {
        string = "conic-gradient(#FF5E00 " + i + "%,#FFBB00 " + i + "% 100%)";
    }
    if (i >= percent1 && i < parseInt(percent1 + percent2)) {

        string = "conic-gradient(#FF5E00 " + percent1 + "%,#6B9900 " + percent1 + "% " + i + "%,#FFBB00  " + i + "% " + percent3 + "%)";

    }
    if (i >= parseInt(percent1 + percent2) && i <= 100) {

        string = "conic-gradient(#FF5E00 " + percent1 + "%,#6B9900 " + percent1 + "% " + parseInt(percent1 + percent2) + "%,#FFBB00 " + parseInt(percent1 + percent2) + "% " + i + "%)";

    }
    return string

}

// 막대 그래프 애니메이션
function f_drawChart(percent1, percent2, percent3, id) {
    const td1 = document.querySelector(id + " #td1");
    const td2 = document.querySelector(id + " #td2");
    const td3 = document.querySelector(id + " #td3");
    let i = 0;

    let chartFn = window.setInterval(function () {
        if (i <= percent1) {
            td1.style = "height:" + parseInt(100 - i) + "%;width: 30px;background-color: #FFBB00;border:none;"
            td2.style = "height:0%;width: 30px;background-color: #6B9900;border:none;"
            td3.style = "height:" + i + "%;width: 30px;background-color: #FF5E00;border:none;"
            i++;

        }
        else if (i <= percent2) {
            td1.style = "height:" + parseInt((100 - percent1) - i) + "%;width: 30px;background-color: #FFBB00;border:none;"
            td2.style = "height:" + i + "%;width: 30px;background-color: #6B9900;border:none;"
            i++;

        }
        else {
            clearInterval(chartFn);
        }
    }, 10);
}
makeChart(10, 40, 50, chart1);
makeChart(15, 15, 70, chart2);
makeChart(15, 85, 0, chart3);
f_drawChart(3.8, 96.2, 0, ".s1");
f_drawChart(0, 100, 0, ".s2");
f_drawChart(10, 80, 10, ".s3");
f_drawChart(4.7, 92.8,2.5, ".s4");
f_drawChart(30, 20, 50, ".s5");


