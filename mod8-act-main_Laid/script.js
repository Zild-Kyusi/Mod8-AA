let fname = prompt("Enter your name");
if (confirm("Enter your gender (OK for Male and Cancel for Female)")) {
  document.getElementById("gender").innerHTML = "M";
  } else {
    document.getElementById("gender").innerHTML = "F";
  }
let username = prompt("Enter your username");
let desc = prompt("Shortly describe yourself");
let year = prompt("Enter the year you were born");
if (confirm("Would you like to create a profile picture?")) {
    const profileImage = document.getElementById('ppic');
    const imageLink = prompt('Enter the URL of the new image:');
    if (imageLink) 
    profileImage.src = imageLink;
    }

document.getElementById("fname").innerHTML = fname;
document.getElementById("username").innerHTML = username;
document.getElementById("desc").innerHTML = desc;
document.getElementById("year").innerHTML = year;
document.getElementById("age").innerHTML = 2023 - year;
document.getElementById('ppic').src = pfp;