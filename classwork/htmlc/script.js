const API_URL = 'https://jsonplaceholder.typicode.com/users'
const container = document.querySelector('.container')
const box = document.querySelector('.box')

async function getAllUsersData() {
    const response = await fetch (API_URL)
    const data = await response.json()
    container.innerHTML = ''
    data.forEach((item) => {
        const div = document.createElement('div')
        div.className= 'box'
        div.innerHTML=`
        <h3>${item.name}</h3>
         <h4>${item.email}</h4>
          <h5>${item.address.street}</h5>
           <h6>${item.name}</h6>
           <h7>${item.address.city}</h7>
        <p>Phone: ${item.phone}</p>
        `
        container.appendChild(div)
    });
}
getAllUsersData()