// function clickHere() {
//   fetch ('https://openapi.programming-hero.com/api/phones?search=iphone')
//   .then(response => response.json())
//   .then(data => findHere(data));
// }

// function findHere(data){
// const ul = document.getElementById('users');
// console.log(data);
// for (const user of data){
//   console.log(user);
//   const li = document.createElement('li');
//   li.innerText = `name: ${user.name} brand:${data.phone_name}`;
//   ul.appendChild(li);

// }
// }

const searchPhone = () =>{
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  // console.log(searchText);

  searchField.value = '';
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  // console.log(url);
  fetch(url)
  .then(res => res.json())
  .then(data => console.log(data));
}

