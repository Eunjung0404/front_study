
    window.onload = function () {
        createCalendar("","");
    }
    //캘린더 만들기
    function createCalendar(inputyear,inputmonth) {
      
        let year_div = document.getElementById("year");
        let month_div = document.getElementById("month");

        let calendar = document.getElementById("calendar");
        let crrentDate;
      
        if((inputyear==null || inputyear=="")||(inputmonth==null || inputmonth==""))
        {
            crrentDate = new Date();
        }else{

           //month달에 nextyear이란 값이 들어오면 0으로 값넣기 ==1월만들기
            if(inputmonth=='nextyear')
            {
                inputmonth=0;
            }
         //매개변수 입력이 된경우
           crrentDate = new Date(inputyear,inputmonth);
        }
        let year = crrentDate.getFullYear();
        let month = crrentDate.getMonth();

        let day_string_arr = ['일', '월', '화', '수', '목', '금', '토'];
        let date = new Date(year, month);
        let today=new Date();
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
                        if (today.getDate() == date.getDate() && today.getMonth()==date.getMonth() && today.getFullYear()==date.getFullYear()) {

                            td.className += " today";
                        }
                        if (j == 0) {
                            //일요일 지정
                            td.id = "sun";
                        }
                        if (j == 6) {
                            //토요일 지정
                            td.id = "sat";
                        }
                    } else {
                        //다음 달에 해당하는 일에 css적용을 위한 class명 부여
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
        //현재 년도와 달을 가져옴
        let year=document.getElementById("year").innerText;
        let month=document.getElementById("month").innerText;
     
        console.log(year+","+parseInt(month));
        let nextmonth='';
        //현재달이 12월일때
        if(month>=12)
        {
            //내년으로 넘어가게 값 세팅
            nextmonth='nextyear';
            year=parseInt(year)+1;
        }else
        {
            nextmonth=parseInt(month);
        }
        
        //console.log(nextmonth);
        //기존에 그렸던 달력 삭제
        clearCalendar();
        //다음달 그리기
        createCalendar(year,nextmonth);
    }

    //달력 삭제
    function clearCalendar()
    {
        //캘린더 tbody가져오기
        let calendar_tbody=document.getElementById('calendar');
        //자식요소 삭제를위해 기존 tbody의 length가져오기
        let length=calendar_tbody.childNodes.length;
        for(var i=0;i<length;i++)
        {
            //console.log(calendar_tbody.lastChild+i);
            //자식 tr들 삭제
            calendar_tbody.removeChild(calendar_tbody.lastChild);
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