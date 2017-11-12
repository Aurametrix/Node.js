<div id=a>s</div>
<script>
var e = document.querySelector('#a')
  
  var waitForHello = timeoutms => new Promise((r, j)=>{
    var check = () => {
      console.warn('checking')
      if(e.innerHTML == 'Hello world') 
        r()
      else if((timeoutms -= 100) < 0)
        j('timed out!')
      else
        setTimeout(check, 100)
    }
    setTimeout(check, 100)
  })
//setTimeout(()=>{e.innerHTML='Hello world'}, 1000)
  (async ()=>{
    a.innerHTML = 'waiting..'
    waitForHello(2000)
  })()
  
</script>
