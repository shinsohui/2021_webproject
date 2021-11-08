var today = null;
var year = null;
var month = null;
var firstDay = null;
var lastDay = null;
var $tdDay = null;
var $tdSche = null;

//전체 set 
$(document).ready(function () {
    drawCalendar();
    initDate();
    drawDays();
    drawToday();
    $("#movePrevMonth").on("click", function () { movePrevMonth(); });
    $("#moveNextMonth").on("click", function () { moveNextMonth(); });
});

//calendar 그리기
function drawCalendar() {
    var setTableHTML = "";
    setTableHTML += '<table id = "table" class="calendar">';
    setTableHTML += '<tr><th>SUN</th><th>MON</th><th>TUE</th><th>WED</th><th>THU</th><th>FRI</th><th>SAT</th></tr>';
    for (var i = 0; i < 6; i++) {
        //행 6개 만드는 부분
        setTableHTML += '<tr height="90px">';
        for (var j = 0; j < 7; j++) {
            //열 7개(월 ~ 일)만들면서 날짜 채워나가는 부분 
            setTableHTML += '<td style="text-overflow:ellipsis;overflow:hidden;white-space:nowrap;">';
            setTableHTML += '    <div class="cal-day" onclick="viewCalendar_edit($tdDay.contents())"></div>';
            setTableHTML += '    <div class="cal-schedule"></div>';
            setTableHTML += '</td>';
        }
        setTableHTML += '</tr>';
    }
    setTableHTML += '</table>';
    $("#cal_tab").html(setTableHTML);
}

//날짜 초기화
function initDate() {
    $tdDay = $("td div.cal-day")
    $tdSche = $("td div.cal-schedule")
    dayCount = 0;
    today = new Date();
    year = today.getFullYear();
    month = today.getMonth() + 1;
    firstDay = new Date(year, month - 1, 1);
    lastDay = new Date(year, month, 0);
}

//캘린더 켰을 때 그날의 월, 일을 표시해줌
//각 td에 저장되어 있는 월, 일 데이터를 가지고 와서 캘린더 에디터를 누르면 상단에 띄우도록 해야함
function drawToday() {
    // $("#what_day").text(year);
    // $("#what_day").append("년 ");
    // $("#what_day").append(month);
    // $("#what_day").append("월 ");
    // $("#what_day").append(today.getDate());
    // $("#what_day").append("일");
    //$("#loadDate").text($tdDay);

}

//calendar 날짜표시
function drawDays() {
    $("#cal_top_year").text(year);
    $("#cal_top_month").text(month);
    for (var i = firstDay.getDay(); i < firstDay.getDay() + lastDay.getDate(); i++) {
        $tdDay.eq(i).text(++dayCount);
    }
    for (var i = 0; i < 42; i += 7) {
        $tdDay.eq(i).css("color", "red");
    }
    for (var i = 6; i < 42; i += 7) {
        $tdDay.eq(i).css("color", "blue");
    }

}

// #table > tbody > tr:nth-child(2) > td:nth-child(2) > div.cal-day

//calendar 월 이동
//이전 월로 이동
function movePrevMonth() {
    month--;
    if (month <= 0) {
        month = 12;
        year--;
    }
    if (month < 10) {
        month = String("0" + month);
    }
    getNewInfo();
}

//다음 월로 이동
function moveNextMonth() {
    month++;
    if (month > 12) {
        month = 1;
        year++;
    }
    if (month < 10) {
        month = String("0" + month);
    }
    getNewInfo();
}

//새로운 월일 때
function getNewInfo() {
    for (var i = 0; i < 42; i++) {
        $tdDay.eq(i).text("");
    }
    dayCount = 0;
    firstDay = new Date(year, month - 1, 1);
    lastDay = new Date(year, month, 0);
    drawDays();
}

function viewCalendar_edit(str) {

    $("#divToggle").toggle();
    $("#show_date").text(str);
};



