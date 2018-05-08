//create a synth and connect it to the master output (your speakers)
var synth = new Tone.Synth().toMaster()

//play a middle 'C' for the duration of an 8th note
synth.triggerAttackRelease('C4', '8n')


var synth = new Tone.AMSynth().toMaster()

//attach a listener to all of the buttons
document.querySelectorAll('button').forEach(function(button){
	button.addEventListener('mousedown', function(e){
		//play the note on mouse down
		synth.triggerAttack(e.target.textContent)
	})
	button.addEventListener('mouseup', function(e){
		//release on mouseup
		synth.triggerRelease()
	})
})
