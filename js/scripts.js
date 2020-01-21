// $(document).ready(function() {
//     $("h1").click(function() {
//       alert("This is a header.");
//     });
  
//     $("p").click(function() {
//       alert("This is a paragraph.");
//     });
  
//     $("img").click(function() {
//       alert("This is an image.");
//     });
//   });

$(document).ready(function() { 
    $("h1").click(function() {
        var elements = ["this is a header", "p", "img"];
       alert(elements[0]);
        alert("This is a paragraph.");
        alert("This is an image.");
    });
});