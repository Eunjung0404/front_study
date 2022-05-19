
    window.onload = function () {
        createCalendar("","");
    }
    //캘린더 만들기
    function createCalendar(inputyear,inputmonth) {
      
        let year_div = document.getElementById("year");
        let month_div = document.getElementById("month");

        let calendar = document.getElementById("calendar");
      
      
        if((inputyear==null || inputyear=="")||(inputmonth==null || inputmonth==""))
        {
              //매개변수 입력이 안될경우
            let crrentDate = new Date();
        }else{

            //매개변수 입력이 된경우
            let crrentDate = new Date(inputyear,inputmonth);
        }
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
                    let dd = date.getDate();
                    td.innerHTML = date.getDate();


                    if (date.getMonth() == month) {
                        td.className += " currentDate";
                        //날짜 클릭시 일정 입력하는 모달창 오픈
                        td.onclick = function (event) {
                            openModal("list-modal");
                            let monthSpan = document.getElementById("month-span");
                            let daySpan = document.getElementById("day-span");
                            let month_div = document.getElementById("month");

                            monthSpan.innerHTML = month_div.innerHTML;
                            daySpan.innerHTML = event.target.innerHTML;


                        }
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
    //다음달로 넘기기
    function nextMonth()
    {
        createCalendar()
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
    //모달창 오픈
    function openModal(id) {
        let modal = document.getElementById(id);
        modal.style.display = "block";
    }
    //일정등록 모달창 비활성화
    function closeModal(id) {
        let modal = document.getElementById(id);
        modal.style.display = "none";
    }