
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
  .then(result => displaySearchResult(result.data));
}

}
// // search function  
//   const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
//   // console.log(url);
//   fetch(url)
//   .then(res => res.json())
//   .then(result => displaySearchResult(result.data));
// }

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
      <div onclick="loadDataDetail('${data.slug}')" class="card h-100">
         <img src="${data.image}" class="card-img-top img-fluid p-5 w-75 mx-auto my-5 rounded"  alt="...">
          <div class="card-body">
           <h5 class="card-title">${data.phone_name}</h5>
             <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
             <button onClick="" class="btn btn-outline-secondary" type="button" id="button-details">Details</button>
          </div>
      </div>`;
      searchResult.appendChild(div);
    })
  }}
  

// // for loop 
//   data.forEach(data => {
//   // console.log(data)
//   const div = document.createElement('div');
//   div.classList.add('col');

// // html card 

//     div.innerHTML = `
//     <div onclick="loadDataDetail('${data.slug}')" class="card h-100">
//        <img src="${data.image}" class="card-img-top img-fluid p-5 w-75 mx-auto my-5 rounded"  alt="...">
//         <div class="card-body">
//          <h5 class="card-title">${data.phone_name}</h5>
//            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//            <button onClick="" class="btn btn-outline-secondary" type="button" id="button-details">Details</button>
//         </div>
//     </div>`;
//     searchResult.appendChild(div);
//   })
// }

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
  const div = document.createElement('div');
  div.classList.add('card');
  div.innerHTML = `
  <img src="${data.image}" class="card-img-top img-fluid p-5 w-75 mx-auto rounded" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data.phone_name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Find Another One</a>
  </div> 
  `;
  phoneDetails.appendChild(div);
}

