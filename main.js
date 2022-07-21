

let run = null;


function startTime() {
    if (run == null) {
        let count = 0;
        run = setInterval(() => {
            count+=1;
            document.getElementById('time').innerHTML =count;
        }, 1000);
    }
}
function stopTime() {
    clearInterval(run);
    run=null;
    document.getElementById('time').innerHTML = '0';
}

function restartTime() {
    if (run) {
    clearInterval(run);
    run=null;
    document.getElementById('time').innerHTML = '0' ;
    let count = 0;
        run = setInterval(() => {
            count+=1;
            document.getElementById('time').innerHTML =count;
        }, 1000);
    }
}