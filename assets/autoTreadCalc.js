$(document).ready(function() {
    $(".treadcalc").keyup(function() {
        var w1 = parseInt($("#1-w").val())
        var h1 = parseInt($("#1-h").val())
        var r1 = parseInt($("#1-r").val())
    
        var t1 = parseInt($("#1-t").val())
        var t2 = parseInt($("#2-t").val())

        var c1 = 0
        var c2 = 0

        if (!w1 || !h1 || !r1) {
            
        } else {
            if (!t1) {
                c1 = 0
                $("#c1").html("")
            } else {
                c1 = ((((w1 / 25.4) * (h1 / 100)) * 2) + ((t1 / 32) * 2) + r1) * Math.PI
                $("#c1").html(c1 .toFixed(2) + " inches")
            }

            if (!t2) {
                c2 = 0
                $("#c2").html("")
            } else {
                c2 = ((((w1 / 25.4) * (h1 / 100)) * 2) + ((t2 / 32) * 2) + r1) * Math.PI
                $("#c2").html(c2.toFixed(2) + " inches")
            }

            if (c1 == 0 || c2 == 0) {
                $("diff").html("")
            } else {
                var p = c2 - c1
                p = p.toFixed(2)
    
                if (p > 1 || p < -1) {
                    $("#diff").css({"color": "#cc6b6b"})
                } else {
                    $("#diff").css({"color": "#8acb88"})
                }
                $("#diff").html(p + " inches")
            }
        }
    })
})

