// 간소하게 제일 처음에 작동됐던 코드

function getDate(date) {
    return date.toLocaleDateString().replace(/\./g, "").split(" ");
}

//calendar 월 이동
function movePrevMonth() {
    nowMonth--;
    if (nowMonth <= 0) {
        nowMonth = 12;
        y--;
    }
    if (nowMonth < 10) {
        nowMonth = String("0" + nowMonth);
    }
    getNewInfo();
}

function moveNextMonth() {
    nowMonth++;
    if (nowMonth > 12) {
        nowMonth = 1;
        y++;
    }
    if (nowMonth < 10) {
        nowMonth = String("0" + nowMonth);
    }
    getNewInfo();
}


function getNewInfo() {
    for (var i = 0; i < 42; i++) {
        $day.eq(i).text("");
    }
    dayCount = 0;
    firstDay = new Date(year, month - 1, 1);
    lastDay = new Date(year, month, 0);
    // drawDays();
    for (let i = 1; i <= maxDay; i++) {
        const d = i > day && lastDay >= i - day ? i - day : '';
        const cls = !d ? 'background' : '';

        html += `<div class="dateSel ${cls}">${d}</div>`;
    }

    document.querySelector('.dateSel').innerHTML = html;
    document.querySelector('.date_text').innerText = `${y}년 ${m}월`;
}

window.onload = function () {
    const Tday = new Date();

    const nowMonth = Tday.getMonth();

    const [y, m] = getDate(new Date(Tday.setMonth(nowMonth)));

    const lastDay = getDate(new Date(y, m, 0)).pop() * 1;

    const day = new Date([y, m, 1].join("-")).getDay();

    const maxDay = Math.ceil((+day + lastDay) / 7) * 7;

    let html = '';

    for (let i = 1; i <= maxDay; i++) {
        const d = i > day && lastDay >= i - day ? i - day : '';
        const cls = !d ? 'background' : '';

        html += `<div class="dateSel ${cls}">${d}</div>`;
    }

    document.querySelector('.dateSel').innerHTML = html;
    document.querySelector('.date_text').innerText = `${y}년 ${m}월`;
}