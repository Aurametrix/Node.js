document.addEventListener("DOMContentLoaded", main)

function log(offset, length) {
  const bytes = new Uint8Array(memory.buffer, offset, length)
  const string = new TextDecoder('utf8').decode(bytes)
  console.log(string)
}

var memory = new WebAssembly.Memory({ initial : 20 });

const exposed = {
  stdlib: { print: log },
  js: { mem: memory }
}

function main(event) {
  fetch('hello.wasm').then(response =>
    response.arrayBuffer()
  ).then(bytes =>
    WebAssembly.instantiate(bytes, exposed)
  ).then(result =>
    result.instance.exports.main()
  )
}
