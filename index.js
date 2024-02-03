function pickName() {
  var randomName = Math.floor(Math.random() * 5) + 1;
  var randomNameImage = "name" + randomName + ".png";
  var randomImageSource = "images/" + randomNameImage;
  var image1 = document.querySelectorAll("img")[0];
  image1.setAttribute("src", randomImageSource);

  if (randomName) {
    document.querySelector("h1").innerHTML = "This week's Leader is";
  } else {
    document.querySelector("h1").innerHTML = "Pick again!";
  }
}

// Add click event listener to the button
document.getElementById("pickButton").addEventListener("click", pickName);
