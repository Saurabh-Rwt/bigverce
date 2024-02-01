function setDisplayTimer(timer_id){
    var timer = document.getElementById(timer_id)

    if(parseInt(timer.innerText.split(":")[0]) != 00){
        if(parseInt(timer.innerText.split(":")[1]) != 00){
            if(parseInt(timer.innerText.split(":")[1]) < 10){
                timer.innerText = timer.innerText.split(":")[0] + ":0" + (parseInt(timer.innerText.split(":")[1])-1)
            }else{
                timer.innerText = timer.innerText.split(":")[0] + ":" + (parseInt(timer.innerText.split(":")[1])-1)
            }
        }else{
            if(parseInt(timer.innerText.split(":")[0]) < 10){
                timer.innerText = "0"+parseInt(timer.innerText.split(":")[0]-1) + ":59"
            } else {
                timer.innerText = parseInt(timer.innerText.split(":")[0]-1) + ":59"
            }
        }
    }else{
        if(parseInt(timer.innerText.split(":")[1]) < 10){
            timer.innerText = "0"+parseInt(timer.innerText.split(":")[0]) + ":0" + (parseInt(timer.innerText.split(":")[1])-1)
        }else{
            timer.innerText = "0"+parseInt(timer.innerText.split(":")[0]) + ":" + (parseInt(timer.innerText.split(":")[1])-1)
        }
    }

    if(timer.innerText == "00:00"){
        return "EXPIRED"
    }
}