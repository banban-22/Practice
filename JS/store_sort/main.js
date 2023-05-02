(function(){
    const buttons = document.querySelectorAll('.btn')
    const storeItems = document.querySelectorAll('.store-img')

    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            //prevent the default link to jump to top of the page
            e.preventDefault()
            //grab the filter button that was clicked
            const filter = e.target.dataset.filter

            if(filter === "all"){
                storeItems.forEach(function(item){
                    item.style.display = 'block'
                })
            } else if(filter === "cakes"){
                storeItems.forEach(function(item){
                    if(item.classList.contains('cakes')){
                        item.style.display = 'block'
                    } else {
                        item.style.display = 'none'
                    }
                })
            } else if(filter === "cupcakes"){
                storeItems.forEach(function(item){
                    if(item.classList.contains('cupcakes')){
                        item.style.display = 'block'
                } else {
                    item.style.display = 'none'
                }
                })
            } else if(filter === "sweets"){
                storeItems.forEach(function(item){
                    if(item.classList.contains('sweets')){
                        item.style.display = 'block'
                    } else {
                        item.style.display = 'none'
                    }
                })
            } else if(filter === "doughnuts"){
                storeItems.forEach(function(item){
                    if(item.classList.contains('doughnuts')){
                        item.style.display = 'block'
                    } else {
                        item.style.display = 'none'
                    }
                })
            }

        })
    })

});

/*(function(){
    const buttons = document.querySelectorAll('.btn')
    const storeItems = document.querySelectorAll('.image')

    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault()
            const filter = e.target.dataset.filter

            storeItems.forEach((item) => {
                if(filter === "all"){
                    item.style.display = 'block'
                } else {
                    if(item.classList.contains(filter)){
                        item.style.display = 'block'
                    } else {
                        item.style.display = 'none'
                    }
                }
            })
        })
    })
})();

(function(){

    const searchBox = document.querySelector('#search')
    const storeItems = document.querySelectorAll('.store-items')

    searchBox.addEventListener('keyup', (e) => {
        const searchFilter = e.target.value.toLowerCase().trim()
        storeItems.forEach((item) => {
            if(item.textContent.includes(searchFilter)){
                item.style.display = 'block'
            } else {
                item.style.display = 'none'
            }
        })

    })
})();*/