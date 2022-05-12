
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!DOCTYPE html>
<style>
    .day {
        box-shadow: 0px 2px 0px black;
        width: 100px;
        height: 20px;
        text-align: center;
    }

    .date {
        /*border: 1px solid black;*/
        width: 100px;
        padding-bottom: 100px;
        box-shadow: 2px 2px 2px black;

    }

    .today {
        background-color: gray;
        color: white;
    }

    .currentDate:hover {
        box-shadow: 1px 1px 1px black;
        background-color: #EAEAEA;
    }

    .title {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .calendar_div {
        display: flex;
        align-items: center;
        justify-content: center;
        
        
    }

    #sun {
        color: red;
    }

    #sat {
        color: blue;
    }

    .nextMonth {
        color: gray;
    }
    .add-list-modal
    {
        position:absolute;
        top:20%;
        left:50%;
        width: 300px;
        height: 500px;
        background-color: gray;
    }
</style>

<body>

    <div class="title">
        <h5 id="year"></h5>
        <h1 id="month"></h1>
    </div>

    <div class="calendar_div">
        <table>
            <tr>
                <td class="day" id="sun">일</td>
                <td class="day">월</td>
                <td class="day">화</td>
                <td class="day">수</td>
                <td class="day">목</td>
                <td class="day">금</td>
                <td class="day" id="sat">토</td>
            </tr>
            <tbody id="calendar">

            </tbody>
        </table>
    </div>
    <div class="add-list-modal" style="display: block;">

        <h1></h1>
    </div>
</body>
<script>
    window.onload = function () {
        createCalendar();
    }

    function createCalendar() {
        let year_div = document.getElementById("year");
        let month_div = document.getElementById("month");


        let calendar = document.getElementById("calendar");
        let crrentDate = new Date();
        let year = crrentDate.getFullYear();
        let month = crrentDate.getMonth();



        let day_string_arr = ['일', '월', '화', '수', '목', '금', '토'];
        let date = new Date(year, month);
        let startday = date.getDay();
        let day_string = date.getDay();
        month_div.innerText = month + 1;
        year_div.innerText = year;
        let lastday = getLastday(year, month);
        for (var i = 0; i < 6; i++) {
            let tr = document.createElement("tr");
            for (var j = 0; j < 7; j++) {
                let td = document.createElement("td");

                td.className = "date";

                if (startday == j) {
                    console.log(lastday);

                    td.innerHTML = date.getDate();

                    if (date.getMonth() == month) {
                        td.className += " currentDate";
                        if (crrentDate.getDate() == date.getDate()) {

                            td.className += " today";
                        }
                        if (j == 0) {
                            td.id = "sun";
                        }
                        if (j == 6) {
                            td.id = "sat";
                        }
                    } else {
                        td.className += " nextMonth";
                    }


                    if (date.getDate() > lastday) {
                        td.innerHTML = "";
                        console.log(lastday);
                    }
                    date.setDate(date.getDate() + 1);

                    startday = date.getDay();

                }
                tr.appendChild(td);


            }
            calendar.appendChild(tr);

        }



    }


    //마지막 일수 가져오기 
    function getLastday(year, month) {
        let lastdays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        let lastdays2 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
            console.log("윤년!");
            return lastdays2[month];
        } else {
            return lastdays[month];
        }
    }

    function ModalToDolist()
    {
         
    }

</script>