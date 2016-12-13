$(document).ready(function() {
    var refresh = function() {
        var counter = $("#counter");
        $.get("/api/opcounter/" + counter.val(), function(data) {
            $.plot("#opcounter_chart", [data])
        })
    };

    $("#get_opcounter").click(refresh);
    window.setInterval(refresh, 60000);
});