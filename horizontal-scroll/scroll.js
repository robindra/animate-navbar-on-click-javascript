var width = 0, scrollWidth;
var container = document.getElementsByClassName("container");
var wrapper = document.getElementsByClassName("inner-container");
var offsetWidthArray = [];
wrapper[0].childNodes.forEach(function(item, index){
    if(item.nodeType == 1){
        width = width + item.offsetWidth;
        offsetWidthArray.push(width)
    }
});

wrapper[0].style.width = offsetWidthArray[offsetWidthArray.length -1]+offsetWidthArray[0]+"px";
var scrollWidth = wrapper[0].offsetWidth - container[0].offsetWidth;
container[0].addEventListener("click", handleClickEvent);



function handleClickEvent(event){
    var target = event.target;
    $('.container').animate({scrollLeft: (target.offsetLeft - 20)+ (target.offsetWidth/2) - scrollWidth/2}, 500);
}
