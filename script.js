


let wrapper = document.querySelector('.userWrapper')
let logout = document.querySelector('.logout')
let delAcc = document.querySelector('.delAcc')


axios.get('http://localhost:3000/users').then(res => (render(res.data))).catch(err => { console.log(err) })


function render(arr) {
    console.log(arr);
    wrapper.innerHTML = null
    for (let i = 0; i <= arr.length; i++) {
        let card = document.createElement('div')
        card.setAttribute('class', 'card')
        card.innerHTML = `
        <h2>Name : ${arr[i].name} </h2>
        <h2>Surname : ${arr[i].surname}  </h2>
        <h3>Email :${arr[i].email}  </h3>
        `
        wrapper.append(card)
    }
}

logout.addEventListener('click', () => {
    location.replace('./login/index.html')
})

// async function deleteData(){
//     fetch('http://localhost:3000/users', {
//         headers:"application/json"
//     })
// }

delAcc.addEventListener('click', () => {

    let email = prompt('Emailni kiriting')

    axios.get('http://localhost:3000/users').then(res => {
        for (i = 0; i <= res.data.length; i++) {
            if (res.data[i].email == email) {
                axios.delete(`http://localhost:3000/users/${res.data[i].id}`).then(res=>console.log(res)).catch(err=>console.log(err))
            }
        }
    }).catch(err => { console.log(err) })

})