// var friends = [
//   'tetondan',
//   'dustinmyers',
//   'justsml',
//   'luishrd',
//   'bigknell'
// ]

var friends = [
 
]

container = document.querySelector('.cards')

axios.get("https://api.github.com/users/devin5/followers")
.then( res =>  {
  console.log(res)
  res.data.forEach( item => {
    container.appendChild(createCard(item))
  })
})
.catch( error => console.log("error:", error))

console.log(friends)

// friends.forEach(item => {
//   axios.get('https://api.github.com/users/' + item)
//     .then( response => {
//       console.log(response)
//         container.appendChild(createCard(response))
//     })
//     .catch( error => {
//         console.log("Error:", error);
//     }) 
// })

 

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
  
    b.setAttribute('src', object.avatar_url);
    d.textContent = object.name;
    e.textContent = object.login;
    f.textContent = object.location;
    g.textContent = "Profile: ";
    h.href = object.html_url;
    var text = document.createTextNode(object.url)
    h.appendChild(text)
    g.appendChild(h);
    // i.textContent = 'Followers: ' + object.followers;
    // j.textContent = 'Following: ' + object.following;
    // k.textContent = 'Bio: ' + object.bio;
  
  
    console.log(a)
    return a
  
  }
  
  
  

  
  
  

    
  