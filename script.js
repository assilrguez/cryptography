function encode() {
  var input = document.getElementById("input").value;
  var encoded = btoa(input);
  document.getElementById("output").textContent = encoded;
}
function decode() {
  var input = document.getElementById("input").value;
  var decoded = atob(input);
  document.getElementById("output").textContent = decoded;
}
function copyToClipboard() {
  var output = document.getElementById("output");
  output.select();
  document.execCommand("copy");
}
function reset(){
  document.getElementById("input").value = "";
  document.getElementById("output").textContent = "";
}
document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.key === ',') { // Ctrl + C
    // do something here, for example:
    document.getElementById('encode').click();
  }
  else if (event.ctrlKey && event.key === ';') { // Ctrl + C
    // do something here, for example:
    document.getElementById('decode').click();
  }
  else if (event.ctrlKey && event.key === 'c') {
    document.getElementById('copy').click();
  }
});