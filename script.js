
const hourEl = document.getElementById("hour");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function clockUpdate(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM"
    if (h > 12) {
        ampm = "PM";
        h = h - 12;
    }

    h = h < 10 ? "0" + h : h; //this appears to be an if else statement
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hourEl.innerHTML = h;
    minutesEl.innerHTML = m;
    secondsEl.innerHTML = s;
    ampmEl.innerHTML = ampm;
    setTimeout(()=>{
        clockUpdate()
    }, 1000)
}

clockUpdate();