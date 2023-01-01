$(document).ready(function() {
    $(".tire-size").keyup(function() {
        var w1 = parseInt($("#1-w").val())
        var h1 = parseInt($("#1-h").val())
        var r1 = parseInt($("#1-r").val())
    
        var w2 = parseInt($("#2-w").val())
        var h2 = parseInt($("#2-h").val())
        var r2 = parseInt($("#2-r").val())

        var d1 = 0
        var d2 = 0

        if (!w1 || !h1 || !r1) {
            d1 = 0
            $("#d1").html("")
            $("#d1inch").html("")
        } else {
            d1 = (w1 * (h1 / 100) * 2) + (r1 * 25.4)
            $("#d1").html(d1.toFixed(2) + " mm")
            $("#d1inch").html((d1 / 25.4).toFixed(2) + " inches")
        }

        if (!w2 || !h2 || !r2) {
            d2 = 0
            $("#d2").html("")
            $("#d2inch").html("")
        } else {
            d2 = (w2 * (h2 / 100) * 2) + (r2 * 25.4)
            $("#d2").html(d2.toFixed(2) + " mm")
            $("#d2inch").html((d2 / 25.4).toFixed(2) + " inches")
        }

        if (d1 == 0 || d2 == 0) {
            $("#diff").val("")
        } else {
            var p = (1 - (d1 / d2)) * 100
            p = p.toFixed(2)

            if (p > 3 || p < -3) {
                $("#diff").css({"color": "#cc6b6b"})
            } else {
                $("#diff").css({"color": "#8acb88"})
            }
            $("#diff").html(p + "%")
        }
    })
})

