let btn = document.getElementById("btn");
let url = 'https://randomuser.me/api/?inc=picture,name,login,email,location';
let fullNameDisp = document.querySelector("#fullName");
let avatarDisp = document.querySelector("#avatar");
let emailDisp = document.querySelector("#email");
let loginDisp = document.querySelector("#login");
let locationDisp = document.querySelector("#location");


btn.addEventListener("click", function(){
  fetch(url)
  .then(parseJSON)
  .then(updateProfile)
  .catch(function(err){
    console.log(err);
  })
});

//Then and Catch functions 
function parseJSON(res){
    return res.json().then(function(parsedData){
      return parsedData.results[0];
    })
  }

  function letterUpper(string){
      return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function updateProfile(data){
      let fullName = `${data.name.first} ${data.name.last}`;
      let emailUpdate = data.email;
      let loginUpdate = data.login.username;
      let locationUpdate = data.location.city;
      fullNameDisp.innerText= fullName;
      avatar.src = data.picture.large;
      emailDisp.innerText = emailUpdate; 
      loginDisp.innerText = loginUpdate; 
      locationDisp.innerText = locationUpdate; 
    }
