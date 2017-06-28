declare function print(text: string): void;

class Link {
  value: int;
  next: Link;
}

class List {
  first: Link;
  last: Link;

  append(value: int): void {
    var link = new Link();
    link.value = value;

    // Append the new link to the end of the chain
    if (this.first == null) this.first = link;
    else this.last.next = link;
    this.last = link;
  }
}

extern function main(): int {
  var list = new List();
  list.append(1);
  list.append(2);
  list.append(3);

  var total = 0;
  var link = list.first;
  while (link != null) {
    total = total + link.value;
    link = link.next;
  }

  #if JS
    print("Hello from JavaScript");
  #elif WASM
    print("Hello from WebAssembly");
  #elif C
    print("Hello from C");
  #else
    print("Unknown target");
  #endif

  return total;
}
