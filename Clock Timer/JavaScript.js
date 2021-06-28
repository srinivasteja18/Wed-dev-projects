
setInterval(setDate, 1000);
setInterval(rotateClock, 1000);

function setDate(){
    const date = new Date();
    const secs = date.getSeconds();
    document.getElementById("s2").innerHTML = secs % 10;
    document.getElementById("s1").innerHTML = Math.floor(secs / 10);
    const mins = date.getMinutes();
    document.getElementById("m2").innerHTML = mins % 10;
    document.getElementById("m1").innerHTML = Math.floor(mins / 10);
    const hrs = date.getHours();
    document.getElementById("h2").innerHTML = hrs % 10;
    document.getElementById("h1").innerHTML = Math.floor(hrs / 10);
}

function rotateClock() {
    const date = new Date();
    var secs = date.getSeconds();
    var num = 6 * secs + 90;
    const sHand = document.querySelector('.secHand');
    sHand.style.transform = `rotate(${num}deg)`;

    const mins = date.getMinutes();
     num = 6 * mins + 90;
    const mHand = document.querySelector('.minHand');
    mHand.style.transform = `rotate(${num}deg)`;

    const hrs = date.getHours();
     num = 30 * (hrs%12) + 90;
    const hHand = document.querySelector('.hrHand');
    hHand.style.transform = `rotate(${num}deg)`;

}