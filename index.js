












let containers = document.querySelectorAll('#section2cards')





containers.forEach(section2cards =>{
    const cards = section2cards.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseover',() => {
        const heading = card.querySelector('h1');
        const btn = card.querySelector('a')

            heading.style.color = 'rgb(18, 146, 252)'
            btn.style.backgroundColor = 'rgb(18, 146, 252)'
        
    });
    card.addEventListener('mouseout', () => {
        const heading = card.querySelector('h1');
        const btn = card.querySelector('a')
        
            heading.style.color = ''
            btn.style.backgroundColor = ''
        
    })
})
})


let cardCategories = document.querySelectorAll('#Categories-card')

cardCategories.forEach(categories => {
    let cards1 = categories.querySelectorAll('.card')
    cards1.forEach(card1 => {
        card1.addEventListener('mouseover' , () => {
            let header = card1.querySelector('.card-header')
            header.style.paddingBottom = '30px'
            header.style.backgroundColor = 'rgb(31, 154, 255)'

        });
        card1.addEventListener('mouseout' , () => {
            let header = card1.querySelector('.card-header')
            header.style.paddingBottom = ''
            header.style.backgroundColor = ''
        });
    })
    
})


function productDetail(){



    let title = localStorage.getItem('selectedTitle');
    let img = localStorage.getItem('selectedImg');
    let pastprice = localStorage.getItem('selectedPprice');
    let soldprice = localStorage.getItem('selectedSprice');
    let pageProducttitle = localStorage.getItem('selectedTitle');

    



    document.addEventListener('DOMContentLoaded', () => {
        // let pageProductTitle = document.querySelector('.title-shop-section h1' ).textContent
        // pageProductTitle.textContent = 'hello'
        // console.log(pageProducttitle)
        
        let productElement = document.querySelector('.product-details')
        let rowproduct = document.querySelector('.product-details #product-row')
        rowproduct.innerHTML = ''
            rowproduct.innerHTML = ` 
            <div id="product-img" class="col-4">
            <img  src="${img}">
        </div>
        <div class="col-6">
              <h2 >
              ${title} </h2>
              <div class="product-price">
                <p class="original-price">${pastprice}</p>
                <h3 class="discounted-price">${soldprice}</h3>
            </div>
            <p>
              An open-world action-adventure game, Assassin's Creed II takes place during the Italian Renaissance...
            </p>
            <form class="form-inline">
              <div class="cart-btn">
                <input type="number" placeholder="1" class="qty"  >
              </div>
              <button type="submit" class="btn-cart"><i class="fa-solid fa-bag-shopping"></i> ADD TO CART</button>
            </form>
            <div class="game-detail">
              <p>GAME ID: <a href="#">${title}</a></p>
              <p>GENRE: <a href="#">Action,Team,Single</a></p>
              <p>MULTI-TAGS: <a href="#">War,Battle,Royal</a></p>
            </div>
        </div>`;
        
    });

}
productDetail()


let cardData = [
    { category: 'Adventure', title: 'Assasin Creed', imgSrc: 'img/assassin creed.jpg', pastprice: '$28', soldeprice:'$20' },
    { category: 'Action', title: 'Hitman', imgSrc: 'img/hitman game.jpg', pastprice: '$40', soldeprice:'$25'},
    { category: 'Action', title: 'Call Of Duty', imgSrc: 'img/c of duty.jpg', pastprice: '$65', soldeprice:'$30'},
    { category: 'Sports', title: 'FC 24 Football', imgSrc: 'img/Get fc 24 for free.jpg',pastprice: '$30', soldeprice:'$20' },
]   

// local variable
let c ;

function generateCards(){
let cardContainer = document.querySelector('#gameshop-card')

cardContainer.innerHTML = ''


cardData.forEach(function click(card) {


    let c = cardElement = document.createElement('div')

    cardElement.classList.add('card');
    cardElement.classList.add(card.category); // Add category class for filtering
    cardElement.innerHTML = `
    <div class="game-price">
    <p  class="solde-price">${card.soldeprice}</p>
    <p  class="past-price">${card.pastprice}</p>
  </div>
  <img class = 'productImgSrc' src="${card.imgSrc}" >
  <div id="card-content" class="row">
    <div class="col-8">
      <p>${card.category}</p>
      <h5 class="card-title">${card.title}</h5>
    </div>
    <div class="col-2">
      <div class="btn"><i class="fa-solid fa-bag-shopping"></i></div>
    </div>
  </div>
    `;

    let title = card.title
    let img = card.imgSrc
    let pastPrice = card.pastprice
    let soldePrice = card.soldeprice
    let category = card.category
    

            

    cardContainer.appendChild(cardElement); 

            // localStorage.removeItem('selectedTitle', title);
            // localStorage.removeItem('selectedCategory', category);
            // localStorage.removeItem('selectedImg',  img);
            // localStorage.removeItem('selectedPprice',  pastPrice);
            // localStorage.removeItem('selectedSprice',  soldePrice);
});


}


function filterCards(category) {
    console.log(category)
    const cards = document.querySelectorAll('.card');
 console.log(cards)


    cards.forEach(card => {
        if (category === 'all') {
            card.classList.remove('hidden');
        } else {
            if (card.classList.contains(category)) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        }
    });
}

generateCards()


let ourshop = document.querySelector('.ourshop')
let cardContainer = document.querySelector('#gameshop-card')
let allCards = cardContainer.querySelectorAll('.card')
let titleshopsection = document.querySelector('.title-shop-section')
console.log(titleshopsection)


    allCards.forEach(function clicked(product){

             product.addEventListener('click', function(){
                console.log(product)
            let pageProductTitle = document.querySelector('.title-shop-section .ourshop-product' )
            console.log(pageProductTitle)
            let titleContent = product.querySelector('.card-title').textContent
            let soldPriceContent = product.querySelector('.solde-price').textContent
            console.log(soldPriceContent)

            let pastPriceContent = product.querySelector('.past-price').textContent
            console.log(pastPriceContent)

            let imgContent  = product.querySelector('.productImgSrc').src
                
            localStorage.setItem('selectedTitle', titleContent);
            localStorage.setItem('selectedImg',  imgContent);
            localStorage.setItem('selectedPprice',  pastPriceContent);
            localStorage.setItem('selectedSprice',  soldPriceContent);
            localStorage.setItem('selectedPageTitle',  titleContent);
            // go to the payment page 
                window.location.href = 'index3.html'
                

        
             })

        })





















const paginationItems = document.querySelectorAll('.pagination button');
const paginationLinks = document.querySelectorAll('.pagination ul ');

paginationItems.forEach(item => {
  
    // Onclick event
    item.addEventListener('click', () => {
        // Clear the active state from all items
        paginationItems.forEach(i => i.style = '#ff3939'); // Reset others

        // Set the clicked item as active
        item.style.backgroundColor = 'rgb(0, 101, 184)'; // Active background color
        item.style.color = 'white'
    });
});
paginationLinks.forEach(link => {
  
    // Onclick event
    link.addEventListener('click', () => {
        // Clear the active state from all items
        paginationLinks.forEach(i => i.style.color = 'white'); // Reset others

        // Set the clicked item as active
        link.style.color = 'rgb(0, 101, 184)'
    });
});

















