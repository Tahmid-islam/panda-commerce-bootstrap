const h1 = document.getElementsByTagName("h1");
for (const element of h1) {
  element.style.color = "red";
}

document
  .getElementById("email-field")
  .addEventListener("keyup", function (event) {
    // console.log(event.target.value);
    const emailButton = document.getElementById("email-submit");
    if (event.target.value == "email") {
      emailButton.removeAttribute("disabled");
    } else {
      emailButton.setAttribute("disabled", true);
    }
  });

const button = document.getElementsByClassName("btn-hidden");
for (const element of button) {
  addEventListener("click", function (event) {
    event.target.parentNode.removeChild(element);
  });
}

const cardBorderRadius = document.getElementsByClassName("card");

for (const element of cardBorderRadius) {
  element.style.borderRadius = "10px";
}

// document.getElementById("bags").style.backgroundColor = "tomato";

document
  .getElementById("color-change")
  .addEventListener("dblclick", function () {
    document.getElementById("color-change").style.backgroundColor = "#c7ecee";
  });
