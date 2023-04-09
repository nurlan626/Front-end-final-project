const users = JSON.parse(localStorage.getItem('users'))
console.log(users);

let catalog = []
users.forEach(function(user){
    catalog = catalog.concat(user.computers)
})

let catalogToHTML = catalog.map((computer) => {
    return `
    <div class="item">
        <img src="${computer.img}" alt="">
        <div><span>name:</span> <span> ${computer.name}</span></div>
        <div><span>description:</span> <span> ${computer.description}</span></div>
        <div><span>price:</span> <span> ${computer.price} </span></div>
        <div><span>new:</span> <span> ${computer.new} </span></div>
        <div><span>tel:</span> <span> +994 55 55 55  </span></div>
        <button>more info</button>
    </div>
    `
})
catalogToHTML = catalogToHTML.join('');
document.getElementById('catalog').innerHTML = catalogToHTML;