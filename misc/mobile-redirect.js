<script type="text/javascript">
if (screen.width < 1081) {
 var ref = document.referrer;
 var urls = new Array("http://www.mymainsite.com","http://m.mymobilesite.com");
 var n = ref.match(urls[0]);
 var m = ref.match(urls[1]);
 if ((m!==null) || (n!==null)) {
 stop;
 }
 else if (ref=='') {
 var r = confirm("Small Display is Detected.\nClick \"OK\" for MOBILE SITE.");
 if (r==true) {
  window.location = "http://m.mymobilesite.com";
  }
  else {
  stop ;
 }
 }
 else
 {
 window.location = "http://m.mymobilesite.com";
 } 
}
</script>
