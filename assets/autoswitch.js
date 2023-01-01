$(document).ready(function() {
    $(".tire-size").keyup(function (event) {
        $this=$(this);
		
		if (event.keyCode == 37 
		|| event.keyCode == 38 
		|| event.keyCode == 39 
		|| event.keyCode == 40
		|| event.keyCode == 16
		|| event.keyCode == 9) {
			return
		}
		
		if (event.keyCode == 8) {
			if ($this.val().length == 0) {
				var prev = $this.prev(".tire-size")
				prev.focus()
			}
			return
		}
		
		var next = $this.next(".tire-size")
		
		if ($this.val().length > $this.data("maxlength")) {
			var extra = $this.val().substring($this.data("maxlength"), $this.val().length)
			console.log(extra)
			$this.val($this.val().substring(0, $this.data("maxlength")))
			next.val(extra)
			next.focus()
			return
		}
		
        if ($this.val().length == $this.data("maxlength")) {
            next.val("")
            next.focus()
        }
    });

    $(".tread-depth").keyup(function () {
		$this=$(this);
		
		if (event.keyCode == 37 
		|| event.keyCode == 38 
		|| event.keyCode == 39 
		|| event.keyCode == 40
		|| event.keyCode == 16
		|| event.keyCode == 9) {
			return
		}
		
		if (event.keyCode == 8) {
			if ($this.val().length == 0) {
				var prev = $this.prev(".tread-depth")
				prev.focus()
			}
			return
		}
		
		var next = $this.next(".tread-depth")
		
		if ($this.val().length > $this.data("maxlength")) {
			var extra = $this.val().substring($this.data("maxlength"), $this.val().length)
			console.log(extra)
			$this.val($this.val().substring(0, $this.data("maxlength")))
			next.val(extra)
			next.focus()
			return
		}
		
        if ($this.val().length == $this.data("maxlength")) {
            next.val("")
            next.focus()
        }
    });
});