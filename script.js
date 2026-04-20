$(function () {
    $(".box").resizable({
        minWidth: 100,
        minHeight: 100,
        containment:"parent",
        handles: "e, s, w, ne, se, sw, nw",
        resize: function (event, ui) {
            var w = Math.round(ui.size.width);
            var h = Math.round(ui.size.height);
            $(this).find(".size-info").text(w + " x " + h);
        }
    });
});