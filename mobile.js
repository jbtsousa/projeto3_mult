var popup = document.querySelector(".mobile-popup");
var detector = new MobileDetect(window.navigator.userAgent);
//console.log( "Mobile: " + detector.mobile());
//console.log( "Phone: " + detector.phone());
/*
console.log( "Tablet: " + detector.tablet());
console.log( "OS: " + detector.os());
console.log( "userAgent: " + detector.userAgent());
*/

if(detector.mobile() != null || detector.phone() != null){
    if(window.screen.orientation.angle == 0){
        popup.style.display = "block";
    }
    window.onorientationchange = function(event) {
        console.log("the orientation of the device is now " + event.target.screen.orientation.angle);
        if(event.target.screen.orientation.angle == 90){
            popup.style.display = "none";
        }
        else{
            popup.style.display = "block";
        }
      };
}
else{
    popup.style.display = "none";
}