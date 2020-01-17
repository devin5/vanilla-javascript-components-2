const user = "devin5";
container = document.querySelector(".cards");

// http request too github api to find my followers
axios
  .get(`https://api.github.com/users/${user}/followers`)
  .then(res => {
    console.log("im the res", res);
    res.data.forEach(item => {
      // loops over my followers to make a second http call to get thier info
      axios
        .get("https://api.github.com/users/" + item.login)
        .then(res => {
          container.appendChild(createCard(res));
        })
        .catch(error =>
          console.log("error from call to get followers data:", error)
        );
    });
  })
  .catch(error => console.log("error from call to get followers:", error));

function createCard(object) {
  mainDiv = document.createElement("div");
  avatar = document.createElement("img");
  innerDiv = document.createElement("div");
  fullName = document.createElement("h3");
  loginName = document.createElement("p");
  locationStart = document.createElement("p");
  profileTag = document.createElement("p");
  profileLink = document.createElement("a");
  followers = document.createElement("p");
  following = document.createElement("p");
  bio = document.createElement("p");

  mainDiv.appendChild(avatar);
  mainDiv.appendChild(innerDiv);
  innerDiv.appendChild(fullName);
  innerDiv.appendChild(loginName);
  innerDiv.appendChild(locationStart);
  innerDiv.appendChild(profileTag);

  innerDiv.appendChild(followers);
  innerDiv.appendChild(following);
  innerDiv.appendChild(bio);

  mainDiv.classList.add("card");
  innerDiv.classList.add("card-info");
  fullName.classList.add("name");
  loginName.classList.add("username");

  avatar.setAttribute("src", object.data.avatar_url);

  fullName.textContent = object.data.name;
  loginName.textContent = object.data.login;
  locationStart.textContent = object.data.location;
  profileTag.textContent = "Profile: ";

  profileLink.href = object.data.html_url;

  var text = document.createTextNode(object.data.url);

  profileLink.appendChild(text);
  profileTag.appendChild(profileLink);

  followers.textContent = "Followers: " + object.data.followers;
  following.textContent = "Following: " + object.data.following;
  bio.textContent = "Bio: " + object.data.bio;

  return mainDiv;
}
