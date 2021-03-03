
document.addEventListener("DOMContentLoaded", (event) => {
  //the event occurred
  var elements = document.getElementsByClassName("faq-content-item-question");
  for (var i = 0; i < elements.length; i++) {
    console.log('ddd');

    var element = elements[i];
    element.addEventListener("click", function () {
      [...this.parentNode.parentNode.children].forEach(function (
        element,
        index
      ) {
        [...element.children].forEach(function (element, index) {
          element.classList.remove("open");
        });
      });
      console.log(this);
      this.classList.toggle("open");
      this.nextElementSibling.classList.toggle("open");
    });
  }
});
