  function init(){
    document.getElementById('search-wrapper').addEventListener('submit', e => e.preventDefault())
}

function search(){
  city=document.getElementById('search-content').value;
  city=city.replace(' ','-') 
  //uses a heroku proxy to bypass cors//
  fetch(`https://stark-oasis-84035.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=barbecue&location=${city}`, {headers: {'x-requested-with': 'XmlHTTPRequest', Authorization: 'Bearer c8rJjHt2GmxIYD_hqD93CCqN6n-dInyeB2kSFflIkKcnVdePJSg8nifwR9NW4rlQxye452Uf3CoOcef_YO8g5jPvQSv-ziYilT-TPsO9_75uDaGG5rU-1DDSs4LoYnYx'}})
    .then(response => response.json())
    .then(data => {
      data.businesses.map(business => {
        const div = document.createElement('div');
        const imgDiv = document.createElement('div');
  
        imgDiv.style = 'background-image: url("' + business.image_url + '"); height: 200px; width: 200px; border-radius: 50%; background-size: cover; background-position: center; background-repeat: no-repeat;';
        imgDiv.style.display = 'inline-block';
        imgDiv.style.marginLeft = '50px';
  
        const name = document.createElement('h1');
        name.innerHTML = business.name;
        name.style.display = 'inline-block';
  
        const website = document.createElement('a');
        website.href = business.url;
        website.innerHTML = business.url;
  
        const phone = document.createElement('p');
        phone.innerHTML = 'Phone: ' + business.phone;
  
        const rating = document.createElement('p');
        rating.innerHTML = 'Rating: ' + business.rating;
        div.style.backgroundColor = 'rgba(255,255,255,0.05)';
        div.style.padding = '10px';
        div.style.borderRadius = '10px';
        div.style.marginBottom = '10px';
        div.style.border = '1px solid #ccc';
  
        div.appendChild(imgDiv);
        div.appendChild(name);
        div.appendChild(document.createElement('br'));
        div.appendChild(document.createElement('br'));
        div.appendChild(document.createElement('br'));
        div.appendChild(website);
        div.appendChild(phone);
        div.appendChild(rating);
        document.getElementById('businesses-wrapper').appendChild(div);
    })
    });
}