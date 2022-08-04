function loaded(){
    document.getElementById("mainthing").innerHTML = "<label onload='loaded()'>" + localStorage.getItem(user_name) + "</label>"
}