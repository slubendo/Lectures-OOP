const cards = [{imgURL:`https://picsum.photos/300/300?sig=1`}, {imgURL:`https://picsum.photos/300/300?sig=2`}, {imgURL:`https://picsum.photos/300/300?sig=3`}];

cards.map(card => `<li> 
    <img src="${card["imgURL"]}">

</li>`)

const createElement = (obj) => {
  let type = obj.type;
  let el = document.createElement(type);
  if (obj.className) {
   el.className = obj.className;
  }
  if (obj.childText) {
   let text = document.createTextNode(obj.childText);
   el.appendChild(text);
  }
  if (obj.src) {
    el.setAttribute("src", obj.src);
   }
   return el;
 }

const createCard = (card) => {
  const li = createElement({ type: "li", className: "cards_item"});
  const cardContainerDiv = createElement({ type: "div", className: "card"});
  const cardImageDiv = createElement({ type: "div", className: "card_image"});
  const cardImage = createElement({ type: "img", src: card.imgUrl });
  const editContainer = createElement({ type: "div", className: "card_content"});

  // Create Edit Mode Buttons
  const btns = ["left", "right", "increase", "decrease"];
  const btnElements = btns.map(btn => createElement({type: "button", className: btn, childText: btn}));

  // Attach Edit Mode buttons to Edit Container
  editContainer.append(...btnElements);

  // Attach card image to cardImageDiv
  cardImageDiv.appendChild(cardImage);

  // Attach card image and Edit container to card
  cardContainerDiv.append(cardImageDiv, editContainer);

  // Attach Card to li
  li.appendChild(cardContainerDiv);
  return li;
}

const drawCards = () => {
  // Select the ul (card container)
  const ul = document.querySelector(".cards");
  const htmlCards = cards.map(card => createCard(card))
  ul.append(...htmlCards);
} 

const generateCard = (i) => {
  return {
    id: i,
    imgUrl: `https://picsum.photos/300/300?sig=${i}`
  }
}

const createCardContainer = () => {
  // Select the main element 
  const main = document.querySelector(".main");
  // Create a ul with a class called cards
  const ul = createElement({type: "ul", className: "cards"});
  // append the ul to the main element
  main.appendChild(ul);
}

const seedCards = (numOfCards) => {
  let i = 0;
  while (i < numOfCards) {
    const card = generateCard(i);
    cards.push(card);
    i++;
  }
}

const startApp = () => {
  seedCards(10);
  createCardContainer();
  drawCards();
}

startApp();