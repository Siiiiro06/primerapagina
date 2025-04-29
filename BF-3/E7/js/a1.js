function changeTextStyle(idelem, className) {
    var element=document.getElementById(idelem);
    element.style.color="#4ae04a";
    var elems = document.getElementsByClassName(className);
    for(var pos = 0; pos < elems.length; pos++) {
        elems[pos].style.display = "none";
    } 
}
function changeTextStyle2(idelem, className) {
    var element=document.getElementById(idelem);
    element.style.color="#e03030";
    var elems = document.getElementsByClassName(className);
    for(var pos = 0; pos < elems.length; pos++) {
        elems[pos].style.display = "none";
    }
}

/*function changeTextStyle('#a2') {
    a1.style.color="#e03030"
}  
function changeTextStyle('#a3') {
    a2.style.color="#e03030"
} 
function changeTextStyle('#a1') {
    a2.style.color="#4ae04a"
} 
function changeTextStyle('#a2') {
    a3.style.color="#4ae04a"
} 
function changeTextStyle('#a3') {
    a3.style.color="#4ae04a"
} */