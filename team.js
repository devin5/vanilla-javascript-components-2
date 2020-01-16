
var friends = [
    'alborja07',
    'dakotacahill',
    'gideonogbuagu',
    'Kat2bk',
    'SethC16',
    "Kylecole01",
    "MaxiCB"
  
  ]
    
  
  
  container = document.querySelector('.cards')
  
  for (var i = 0; i < friends.length ; i++){
  axios.get('https://api.github.com/users/' + friends[i])
      .then( response => {
          // Remember response is an object, response.data is an array.
          container.appendChild(createCard(response))
      })
  
      .catch( error => {
          console.log("Error:", error);
      }) 
    }
  
  function createCard(object){
  
    a = document.createElement('div');
    b = document.createElement('img');
    c = document.createElement('div');
    d = document.createElement('h3');
    e  = document.createElement('p');
    f  = document.createElement('p');
    g = document.createElement('p');
    h = document.createElement('a');
    i = document.createElement('p');
    j = document.createElement('p');
    k = document.createElement('p');
  
  
    a.appendChild(b);
    a.appendChild(c);
    c.appendChild(d);
    c.appendChild(e);
    c.appendChild(f);
    c.appendChild(g);
    
  
    c.appendChild(i)
    c.appendChild(j)
    c.appendChild(k)
    
  
    a.classList.add('card')
    c.classList.add('card-info')
    d.classList.add('name')
    e.classList.add('username')
  
    b.setAttribute('src', object.data.avatar_url);
    d.textContent = object.data.name;
    e.textContent = object.data.login;
    f.textContent = object.data.location;
    g.textContent = "Profile: ";
    h.href = object.data.html_url;
    var text = document.createTextNode(object.data.url)
    h.appendChild(text)
    g.appendChild(h);
    i.textContent = 'Followers: ' + object.data.followers;
    j.textContent = 'Following: ' + object.data.following;
    k.textContent = 'Bio: ' + object.data.bio;
  
  
    console.log(a)
    return a
  
  }
  
  
  
  /* Step 3: Create a function that accepts a single object as its only argument,
            Using DOM methods and properties, create a component that will return the following DOM element:
  <div class="card">
    <img src={image url of user} />
    <div class="card-info">
      <h3 class="name">{users name}</h3>
      <p class="username">{users user name}</p>
      <p>Location: {users location}</p>
      <p>Profile:  
        <a href={address to users github page}>{address to users github page}</a>
      </p>
      <p>Followers: {users followers count}</p>
      <p>Following: {users following count}</p>
      <p>Bio: {users bio}</p>
    </div>
  </div>
  */
  
  
  
