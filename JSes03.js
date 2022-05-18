var x=3;
$("#btn1").click(function () {
  var n1 = $("#N1").val();
  var n2 = $("#N2").val();
  console.log(n1 -(-n2));
  $("#tb").append("<tr><td>"+x+"</td><td>"+n1+"</td><td>+</td><td>"+ n2+"</td><td>"+(n1 -(-n2))+"</td></tr>");
  console.log($("#tb"));
  x++;
  console.log("x="+x);
});
$("#btn2").click(function () {
  var n1 = $("#N1").val();
  var n2 = $("#N2").val();
  console.log(n1 -n2);
  $("#tb").append("<tr><td>"+x+"</td><td>"+n1+"</td><td>-</td><td>"+ n2+"</td><td>"+(n1-n2)+"</td></tr>");
  console.log($("#tb"));
  x++;
  console.log("x="+x);
});
$("#btn3").click(function () {
  var n1 = $("#N1").val();
  var n2 = $("#N2").val();
  console.log(n1 *n2);
  $("#tb").append("<tr><td>"+x+"</td><td>"+n1+"</td><td>*</td><td>"+ n2+"</td><td>"+(n1*n2)+"</td></tr>");
  console.log($("#tb"));
  x++;
  console.log("x="+x);
});
$("#btn4").click(function () {
  var n1 = $("#N1").val();
  var n2 = $("#N2").val();
  console.log(n1 /n2);
  console.log($("#tb"));
  $("#tb").append("<tr><td>"+x+"</td><td>"+n1+"</td><td>/</td><td>"+ n2+"</td><td>"+(n1/n2)+"</td></tr>");
  x++;
  console.log("x="+x);
});
