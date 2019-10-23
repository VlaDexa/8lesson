document.getElementById("form").onsubmit = function(evt){
    evt.preventDefault();
    alert("Мы отправили данные");
    console.log(evt);
}
document.getElementById("name").onkeydown = function(evt){
    let reqEX=/[A-Z]\w+/;
    if(!reqEX.test(evt.target.value)){
        document.getElementById("error")
        .innerHTML="<p>Your name should be like Vlad</p>"
    } else {
        document.getElementById("error")
        .innerHTML=""
    }
}