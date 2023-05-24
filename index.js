let menuList = document.querySelector('.menu-list');
let menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', openMenuList);

function openMenuList() {
  menuList.classList.toggle('menu-show')
};

//Слушаю событие клика на копках - подключаю стили кнопкам и карточкам, использую хранение состояния в activeBlock
let activeBlock = null; 

let containerButtonsService = document.querySelector('.service-buttons');
let cardsService = document.querySelectorAll('.service-card');
let buttonService = document.querySelectorAll('.service-buttons > button');

containerButtonsService.addEventListener('click', ServiceButtonsClick);  

function ServiceButtonsClick(event) {
  let dataButton = event.target.dataset.button;  // gardens|lawn|planting

  if (dataButton != activeBlock) {  
    activeBlock = dataButton;
    for (let buttonsResetStyle of buttonService) {
      buttonsResetStyle.classList.remove('active');                                                                         
    }
    event.target.classList.add('active');
  } else {
    activeBlock = null;        
    event.target.classList.remove('active');            
  }
  updateCards();
}

function updateCards() {
  for (let card of cardsService) {  
    if (card.dataset.name == activeBlock || activeBlock == null) { 
      card.classList.remove('active-card');                                                                     
    } else {                                                                                                        
      card.classList.add('active-card');                                                                          
    }
  }
}

