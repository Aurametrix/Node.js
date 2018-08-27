var JSCPP = require("JSCPP");
var code =    "#include <iostream>"
            + "using namespace std;"
            + "int main() {"
            + "    int a;"
            + "    cin >> a;"
            + "    cout << a << endl;"
            + "    return 0;"
            + "}"
;
var input = "4321";
var exitcode = JSCPP.run(code, input);
console.info("program exited with code " + exitcode);
