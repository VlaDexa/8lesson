document.getElementById("form").onsubmit = function(evt){
    evt.preventDefault();
    alert("Мы отправили данные");
    let object={};
    for (let i=0; i<6;i++){
        object[evt.target[i].name]=evt.target[i].value;
    }
    localStorage.setItem("data", JSON.stringify(object))
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