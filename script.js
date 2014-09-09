function CustomAlert(){
    //dialog passes in from Alert.render(here)
    this.render = function(dialog){
        //gets window width
        var winW = window.innerWidth;
        //gets window height
        var winH = window.innerHeight;
        //gets dialog overlay div element from html
        var dialogoverlay = document.getElementById('dialogoverlay');
        //gets dialog box div element from html
        var dialogbox = document.getElementById('dialogbox');
        //makes dialog overlay visible
        dialogoverlay.style.display = "block";
        //makes it cover entire screen
        dialogoverlay.style.height = winH + "px";
        //sets size of dialog box, and positions from left
        //basically= your window/2 and your box/2 in pixels is how far to the left your box will be (sets in middle)
        dialogbox.style.left = (winW/2) - (550 * .5) + "px";
        //sets dialog box from top of page
        //you can use same formula as width to set top
        dialogbox.style.top = "250px";
        //makes dialog box visible
        dialogbox.style.display = "block";
        //target the header and add dynamically
        document.getElementById('dialogboxhead').innerHTML = "Title";
        //target the body... grabs actual text via html button click trigger event
        document.getElementById('dialogboxbody').innerHTML = dialog;
        //target the footer and add button dynamically
        document.getElementById('dialogboxfoot').innerHTML = '<button id="okbtn" onclick="Alert.ok()">OK</button>';
    }
    
    this.ok = function(){
        //remove dialog box from visibility on OK
        document.getElementById('dialogbox').style.display = "none";
        //remove overlay from web page on OK
        document.getElementById('dialogoverlay').style.display = "none";
    }
}

//initiates dialog
var Alert = new CustomAlert();
