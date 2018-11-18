$(document).ready(function() {
    
    var logohidden = true;
    
    $("#slideshowNext").click(function () {
        
        if (logohidden) {
            $("#slideshowimg").removeClass("hidden");
            $("#timelapse2018").addClass("hidden");
            $("#button-v").removeClass("hidden");
            $("#button-l").addClass("hidden");
            logohidden = false;
        }
        else {
            $("#slideshowimg").addClass("hidden");
            $("#timelapse2018").removeClass("hidden");
            $("#button-v").addClass("hidden");
            $("#button-l").removeClass("hidden");
            logohidden = true;
        }
    });
});