const fooditem=[
    {
        FoodName: "Cheese paratha",
        foodimg: 'images/b1.jpg',
        price: "RS 150",
        type: "breakFast",
        des: "This is a fascinating dish that you will love. It is prepared by the utmost care where we make sure to present you with a great taste and presentation of food."
    },
    {
        FoodName: "Aloo Paratha",
        foodimg: 'images/b2.jpg',
        price: "RS 100",
        type: "breakFast",
        des: "This is a fascinating dish that you will love. It is prepared by the utmost care where we make sure to present you with a great taste and presentation of food"
    },
    {
        FoodName: "Egg Paratha",
        foodimg: 'images/b3.jpg',
        price: "RS 150",
        type: "breakFast",
        des: "This is a fascinating dish that you will love. It is prepared by the utmost care where we make sure to present you with a great taste and presentation of food"
    },
    {
        FoodName: "Daal Chawal",
        foodimg: 'images/l1.jpg',
        price: "RS 300",
        type: "Lunch",
        des: "This is a fascinating dish that you will love. It is prepared by the utmost care where we make sure to present you with a great taste and presentation of food"
    },
    {
        FoodName: "Pakal Paneer",
        foodimg: 'images/l2.jpg',
        price: "RS 100",
        type: "Lunch",
        des: "This is a fascinating dish that you will love. It is prepared by the utmost care where we make sure to present you with a great taste and presentation of food"
    },
    {
        FoodName: "Aloo Ghobi",
        foodimg: 'images/l3.jpg',
        price: "RS 150",
        type: "Lunch",
        des: "This is a fascinating dish that you will love. It is prepared by the utmost care where we make sure to present you with a great taste and presentation of food"
    },
    {
        FoodName: "Aloo Gosht",
        foodimg: 'images/l4.jpg',
        price: "RS 250",
        type: "Lunch",
        des: "This is a fascinating dish that you will love. It is prepared by the utmost care where we make sure to present you with a great taste and presentation of food"
    },

    {
        FoodName: "Banana Shakes",
        foodimg: 'images/s1.jpg',
        price: "RS 150",
        type: "Shakes",
        des: "This is a fascinating dish that you will love. It is prepared by the utmost care where we make sure to present you with a great taste and presentation of food"
    },
    {
        FoodName: "Mango Shakes",
        foodimg: 'images/s2.jpg',
        price: "RS 150",
        type: "Shakes",
        des: "This is a fascinating dish that you will love. It is prepared by the utmost care where we make sure to present you with a great taste and presentation of food"
    },

    {
        FoodName: "Biryani",
        foodimg: 'images/d1.jpg',
        price: "RS 600",
        type: "Dinner",
        des: "This is a fascinating dish that you will love. It is prepared by the utmost care where we make sure to present you with a great taste and presentation of food"
    },
    {
        FoodName: "Korma",
        foodimg: 'images/d2.jpg',
        price: "RS 250",
        type: "Dinner",
        des: "This is a fascinating dish that you will love. It is prepared by the utmost care where we make sure to present you with a great taste and presentation of food"
    }
]

const menuItems = document.querySelector('.menu-items')
const heading   = document.querySelector('.heading')

const ClearScreen = ()=>{
        //removing previous entries on page 
        while (menuItems.firstChild) {
            menuItems.removeChild(menuItems.lastChild);
          }
}

const DisplayBreakFast = ()=>{
    ClearScreen();
    heading.innerHTML="BreakFast";
      fooditem.forEach(function(item){
          if (item.type === "breakFast"){
        menuItems.insertAdjacentHTML('afterbegin',`<div class="menu-item">
        <div class="menu-item-image">
          <img
            src="https://vanilla-js-basic-project-8-menu.netlify.app/images/item-1.jpeg"
            alt=""
          />
        </div>
        <div class="menu-item-info">
          <div class="menu-item-info-heading">
            <h4>${item.FoodName}</h4>
            <h4>${item.price}</h4>
          </div>
          <div class="menu-item-info-text">
            ${item.des}
          </div>
        </div>
        </div>`) 
          }   
    })
}


const DisplayLunch = ()=>{
    ClearScreen();
    heading.innerHTML="Lunch";

      fooditem.forEach(function(item){
          if (item.type === "Lunch"){
        menuItems.insertAdjacentHTML('afterbegin',`<div class="menu-item">
        <div class="menu-item-image">
          <img
            src="https://vanilla-js-basic-project-8-menu.netlify.app/images/item-8.jpeg"
            alt=""
          />
        </div>
        <div class="menu-item-info">
          <div class="menu-item-info-heading">
            <h4>${item.FoodName}</h4>
            <h4>${item.price}</h4>
          </div>
          <div class="menu-item-info-text">
            ${item.des}
          </div>
        </div>
        </div>`) 
          }   
    })
}


const DisplayShakes = ()=>{
    ClearScreen();
    heading.innerHTML="Shakes";

      fooditem.forEach(function(item){
          if (item.type === "Shakes"){
        menuItems.insertAdjacentHTML('afterbegin',`<div class="menu-item">
        <div class="menu-item-image">
          <img
            src="https://vanilla-js-basic-project-8-menu.netlify.app/images/item-9.jpeg"
            alt=""
          />
        </div>
        <div class="menu-item-info">
          <div class="menu-item-info-heading">
            <h4>${item.FoodName}</h4>
            <h4>${item.price}</h4>
          </div>
          <div class="menu-item-info-text">
            ${item.des}
          </div>
        </div>
        </div>`) 
          }   
    })
}


const DisplayDinner = ()=>{
    ClearScreen();
    heading.innerHTML="Dinner";

      fooditem.forEach(function(item){
          if (item.type === "Dinner"){
        menuItems.insertAdjacentHTML('afterbegin',`<div class="menu-item">
        <div class="menu-item-image">
          <img
            src="https://vanilla-js-basic-project-8-menu.netlify.app/images/item-10.jpeg"
            alt=""
          />
        </div>
        <div class="menu-item-info">
          <div class="menu-item-info-heading">
            <h4>${item.FoodName}</h4>
            <h4>${item.price}</h4>
          </div>
          <div class="menu-item-info-text">
            ${item.des}
          </div>
        </div>
        </div>`) 
          }   
    })
}



const DisplayAll = ()=>{
    ClearScreen();
    heading.innerHTML="Our Menu";
    fooditem.forEach(function(item){
        menuItems.insertAdjacentHTML('afterbegin',`<div class="menu-item">
        <div class="menu-item-image">
          <img
            src="https://vanilla-js-basic-project-8-menu.netlify.app/images/item-1.jpeg"
            alt=""
          />
        </div>
        <div class="menu-item-info">
          <div class="menu-item-info-heading">
            <h4>${item.FoodName}</h4>
            <h4>${item.price}</h4>
          </div>
          <div class="menu-item-info-text">
            ${item.des}
          </div>
        </div>
        </div>`)    
    })
    
}

fooditem.forEach(function(item){
    menuItems.insertAdjacentHTML('afterbegin',`<div class="menu-item">
    <div class="menu-item-image">
      <img
        src="https://vanilla-js-basic-project-8-menu.netlify.app/images/item-1.jpeg"
        alt=""
      />
    </div>
    <div class="menu-item-info">
      <div class="menu-item-info-heading">
        <h4>${item.FoodName}</h4>
        <h4>${item.price}</h4>
      </div>
      <div class="menu-item-info-text">
        ${item.des}
      </div>
    </div>
    </div>`)    
})
