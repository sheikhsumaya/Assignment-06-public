
// search phone 
  const searchPhone = () =>{
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;

  // console.log(searchText);
 
// clear data 
  searchField.value = '';
  if(searchText ==''){
  alert('Please write somethings to show!!')
  }
  else{
  // search function  
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  // console.log(url);
  fetch(url)
  .then(res => res.json())
  .then(result => displaySearchResult(result.data.slice(0,20)));
  }}

//data display result 

  const displaySearchResult = data => {
  const searchResult = document.getElementById('search-result');
  
// clear card 
  searchResult.textContent='';

  if(data.length == 0){
    alert("Sorry! There is no matched phone.")
   

  }
  else{
// for loop 
  data.forEach(data => {
    // console.log(data)
    const div = document.createElement('div');
    div.classList.add('col');
  
  // html card 
  
      div.innerHTML = `
      <div class=" mx-auto p-3 w-75 rounded border border-3 mb-5">
      <div onclick="loadDataDetail('${data.slug}')" class="card h-100">
         <img src="${data.image}" class="card-img-top img-fluid p-5 rounded"  alt="...">
          <div class="card-body">
          <h3 class="class-head">Brand:${data.brand}</h3>
           <h5 class="card-title">Name:${data.phone_name}</h5>
             <button onClick="" class="btn btn-outline-secondary" type="button" id="button-details">Details</button>
          </div>
      </div> 
      </div>`;
      searchResult.appendChild(div);
    })
  }}



//  loading details 
 
  const loadDataDetail = loadId => {
  // console.log(loadId);
  const url = `https://openapi.programming-hero.com/api/phone/${loadId}`;
  fetch(url)
  .then(res => res.json())
  .then(result => displayPhoneDetails(result.data));
}

//card display details 
  const displayPhoneDetails = data => {
  // console.log(data);
  const phoneDetails = document.getElementById('phone-details');

// clear upper card 
  phoneDetails.textContent='';

// details card 
  const div = document.createElement('div');
  div.classList.add('card');
  div.innerHTML = `
  <div class=" mx-auto p-3 w-75 rounded border border-3 my-5">
  <img src="${data.image}" class="card-img-top img-fluid p-5 w-75 mx-auto rounded" alt="...">
  <div class="card-body border border-success p-4">
    <h3 class="card-title">Brand:${data.brand}</h3>
    <h4 class="card-title">Name:${data.name}</h4>
    <h5 class="card-title">Release Date:${data.releaseDate}</h5>
    <p class="card-text">Storage:${data.mainFeatures.storage}</p>
    <p class="card-text">Display Size:${data.mainFeatures.displaySize}</p>
    <p class="card-text">Chipset:${data.mainFeatures.chipSet}</p>
    <p class="card-text">Memory:${data.mainFeatures.memory}</p>
    <p class="card-text ">Sensors:${data.mainFeatures.sensors[0]}</p>
    <p class="card-text">WLAN:${data.others.WLAN}</p>
    <p class="card-text">Bluetooth:${data.others.Bluetooth}</p>
    <p class="card-text ">GPS:${data.others.GPS}</p>
    <p class="card-text ">NFC:${data.others.NFC}</p>
    <p class="card-text">Radio:${data.others.Radio}</p>
    <p class="card-text ">USB:${data.others.USB}</p>

    <a href="#" class="btn btn-outline-secondary">Find Another One</a>
  </div> 
  </div>
  `;
  phoneDetails.appendChild(div);


}

