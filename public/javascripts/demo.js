$(document).ready(function() {
    var refresh = function() {
        $.get("/api/opcounter", function(data) {
            $.plot("#opcounter_chart", [data])
        })
    };

    $("#get_opcounter").click(refresh);
    window.setInterval(refresh, 60000);
});