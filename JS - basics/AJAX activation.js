function loadDoc() {
  var req = new XMLHttpRequest(); // ins new obj
  req.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  req.open("GET", "ajax_info.txt", true);
  req.send();
}