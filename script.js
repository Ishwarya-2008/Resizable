$(function(){
    $(".box-1").resizable({
        handles: "e, w",
        minWidth: 100,
        minHeight: 100,
        containment: "parent",
        resize: function(event, ui){
            var w = Math.round(ui.size.width);
            $(this).find(".resize-handle").text("Width: " + w + "px");
        }
    });

    $(".box-2").resizable({
        handles: "s",
        minWidth: 100,
        minHeight: 100,
        containment: "parent",
        resize: function(event, ui){
            var h = Math.round(ui.size.height);
            $(this).find(".resize-handle").text("Height: " + h + "px");
        }
    });

    $(".box-3").resizable({
        handles: "all",
        minWidth: 100,
        minHeight: 100,
        containment: "parent",
        resize: function(event, ui){
            var w = Math.round(ui.size.width);
            var h = Math.round(ui.size.height);
            $(this).find(".resize-handle").text(w + " x " + h);
        }
    });

    $(".box-4").resizable({
        handles: "sw",
        minWidth: 100,
        minHeight: 100,
        containment: "parent",
        resize: function(event, ui){
            var w = Math.round(ui.size.width);
            var h = Math.round(ui.size.height);
            $(this).find(".resize-handle").text(w + " x " + h);
        }
    });

    $(".box-5").resizable({
        handles: "se",
        minWidth: 100,
        minHeight: 100,
        containment: "parent",
        resize: function(event, ui){
            var w = Math.round(ui.size.width);
            var h = Math.round(ui.size.height);
            $(this).find(".resize-handle").text(w + " x " + h);
        }
    });
})