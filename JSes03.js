var x = 3;
var sing;

$("#btn1").click(function () {
  calcola("+");
});
$("#btn2").click(function () {
  calcola("-");
});
$("#btn3").click(function () {
  calcola("*");
});
$("#btn4").click(function () {
  calcola("/");
});

function calcola(sing) {
  if ($("#N1").val() && $("#N2").val()) {
    var n1 = $("#N1").val();
    var n2 = $("#N2").val();

    switch (sing) {
      case "+":
        var res = n1 - -n2;

        break;
      case "-":
        var res = n1 - n2;

        break;
      case "*":
        var res = n1 * n2;

        break;
      case "/":
        var res = n1 / n2;
        break;
    }
    localStorage.setItem($("#tb", res));
    console.log(res);
    localStorage.getItem($("#tb")).append(
      "<tr><td>" +
        x +
        "</td><td>" +
        n1 +
        "</td><td>" +
        sing +
        "</td><td>" +
        n2 +
        "</td><td>" +
        res +
        "</td></tr>"
    );
    console.log($("#tb"));
    x++;
    console.log("x=" + x);
    localStorage.setItem($("#tb"));
  } else {
    alert("complete all input");
  }
}
