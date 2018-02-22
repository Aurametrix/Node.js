<script>
	var fv = new machinebox.FaceVerify({
		facebox: "http://localhost:8080",
		videoSelector: '#facePreview',
		snapshotInterval: 1000,
		error: function(error) {
			if (!error) {
				$('.ui.error.message').hide()
				return
			}
			$('.ui.error.message').text(error).show()
		},
		onSecure: function(name){
			$('.status').text("Hello "+name)
			$('.secure').css({backgroundColor:'white'})
		},
		onInsecure: function(message){
			$('.status').text(message)
			$('.secure').css({backgroundColor:'black'})
		},
	})
	fv.start()
</script>
