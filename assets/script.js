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
        const img = document.createElement('img');
        img.src = business.image_url;
        div.appendChild(img);
        const name = document.createElement('h1');
        name.innerHTML = business.name;
        div.appendChild(name);
        const website = document.createElement('a');
        website.href = business.url;
        website.innerHTML = business.url;
        div.appendChild(website);
        const phone = document.createElement('p');
        phone.innerHTML = 'Phone: ' + business.phone;
        div.appendChild(phone);
        const rating = document.createElement('p');
        rating.innerHTML = 'Rating: ' + business.rating;
        div.appendChild(rating);
        div.style.backgroundColor = 'rgba(255,255,255,0.05)';
        div.style.padding = '10px';
        div.style.borderRadius = '10px';
        div.style.marginBottom = '10px';
        div.style.border = '1px solid #ccc';
        document.getElementById('businesses-wrapper').appendChild(div);
    })
    });
}