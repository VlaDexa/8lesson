document.getElementById("form").onsubmit = function(evt){
    evt.preventDefault();
    alert("Мы отправили данные");
    console.log(evt);
}