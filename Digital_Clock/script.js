const banner = document.getElementById('block');



setInterval(()=> {
    const timeNow = new Date;
    const timestamp = timeNow.toLocaleTimeString();
    banner.innerText = ` ${timestamp}`
}, 1000)
