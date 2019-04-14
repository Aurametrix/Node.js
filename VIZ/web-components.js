class MyElement extends HTMLElement {
  static get observedAttributes() {
    return ['foo', 'bar'];
  }

  attributeChangedCallback(attr, oldVal, newVal) {
    switch(attr) {
      case 'foo':
        // do something with 'foo' attribute

      case 'bar':
        // do something with 'bar' attribute

    }
  }
}

<img is="lazy-img
     src="path/to/img.jpg"
     width="480"
     height="320"
     delay="500"
     margin="0px"></lazy-img>
     
