var rythm = new Rythm();

/* The starting scale is the minimum scale your elements will take (Scale ratio is startingScale + (pulseRatio * currentPulse));
 * Value in percentage between 0-1
 * Default 0.75
 */
rythm.startingScale = value;

/* The pulse ratio is be the maximum additionnal scale your element will take (Scale ratio is startingScale + (pulseRatio * currentPulse))
 * Value in percentage between 0-1
 * Default 0.30
 */
rythm.pulseRatio = value;

/* The max value history represent the number of passed value that will be stored to evaluate the current pulse.
 * Int value, minimum 1
 * Default 100
 */
rythm.maxValueHistory = value;

/* Set the music the page will dance to.
 * @audioUrl : '../example/mysong.mp3'
 */
rythm.setMusic(audioUrl);

/* Used to collaborate with other players library
 * You can connect Rythm to an audioElement, and then control the audio with your other player
 */
rythm.connectExternalAudioElement(audioElement)

/* Adjust music's gain.
 * @value : Number
 */
rythm.setGain(value);

/* Add your own rythm-class
 * @elementClass: Class that you want to link your rythm to.
 * @danceType : Use any of the build in effect or give your own function;
 * @startValue: The starting frequence of your rythm.
 * @nbValue: The number of frequences of your rythm.
 * 1024 Frequences, your rythm will react to the average of your selected frequences.
 * Exemples : bass 0-10 ; medium 150-40 ; high 500-100
 */
rythm.addRythm(elementClass, danceType, startValue, nbValue);

/* Plug your computer microphone to rythm.js
 * This function return a promise resolved when the microphone is up.
 * Require your website to be run in HTTPS
 */
rythm.plugMicrophone().then(function(){...})

//Let's dance
rythm.start();

//Stop the party
rythm.stop();
