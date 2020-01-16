var friends = [
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'
]

container = document.querySelector('.cards')

friends.forEach(item => {
  axios.get('https://api.github.com/users/' + item)
    .then( response => {
      console.log(response)
        container.appendChild(createCard(response))
    })
    .catch( error => {
        console.log("Error:", error);
    }) 
})

 

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
  
  
  
 
  
  
  

    
  