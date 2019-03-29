//create a synth and connect it to the master output (your speakers)
var synth = new Tone.Synth().toMaster();

//play a middle 'C' for the duration of an 8th note
synth.triggerAttackRelease("C4", "8n");


// NOISE
//initialize the noise and start
var noise = new Tone.Noise("pink").start();

//make an autofilter to shape the noise
var autoFilter = new Tone.AutoFilter({
	"frequency" : "8m",
	"min" : 800,
	"max" : 15000
}).connect(Tone.Master);

//connect the noise
noise.connect(autoFilter);
//start the autofilter LFO
autoFilter.start()
