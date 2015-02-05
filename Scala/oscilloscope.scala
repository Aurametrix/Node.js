import Math._
 
object ScalaJSExample extends js.JSApp{
  def main(): Unit = {
    val (h, w) = (Page.canvas.height, Page.canvas.width)
    var x = 0.0
    val graphs = Seq[(String, Double => Double)](
      ("red", sin),
      ("green", x => 2 - abs(x % 8 - 4)),
      ("blue", x => 3 * pow(sin(x / 12), 2) * sin(x))
    ).zipWithIndex
    dom.setInterval(() => {
      x = (x + 1) % w
      if (x == 0) Page.renderer.clearRect(0, 0, w, h)
      else for (((color, func), i) <- graphs) {
        val y = func(x/w * 75) * h/40 + h/3 * (i+0.5)
        Page.renderer.fillStyle = color
        Page.renderer.fillRect(x, y, 3, 3)
      }
    }, 10)
  }
}
