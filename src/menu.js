import { createCard, heading } from "./card.js";


export const cards = (() => {
    const cardBody = document.createElement("div");
    cardBody.classList.add("cards-body");

    const h1 =  heading("🍽️ Appetizers")
    cardBody.appendChild(h1);

    const cards = document.createElement("div");
    cards.classList.add("cards");
    cardBody.appendChild(cards);    

    const card = createCard("/images/menu/1.png", "Garlic Butter Shrimp", "Juicy shrimp cooked in garlic butter sauce.", 840);
    const card1 = createCard("/images/menu/2.png", "Crispy Calamari", "Lightly fried squid served with marinara sauce.", 920);
    
    cards.appendChild(card);
    cards.appendChild(card1);

    const head =  heading("🍲 Main Courses")
    cardBody.appendChild(head);

    const cards2 = document.createElement("div");
    cards2.classList.add("cards");
    cardBody.appendChild(cards2);  

    const card2 = createCard("/images/menu/3.png", "Grilled Salmon", "Fresh salmon fillet served with seasonal vegetables.", 1500);
    const card3 = createCard("/images/menu/4.png", "Classic Beef Burger", "Juicy beef patty with cheese, lettuce, and special sauce.", 1099);

    cards2.appendChild(card2);
    cards2.appendChild(card3);

    const head1 =  heading("🍰 Desserts")
    cardBody.appendChild(head1);

    const cards3 = document.createElement("div");
    cards3.classList.add("cards");
    cardBody.appendChild(cards3);  

    const card4 = createCard("/images/menu/5.png", "Chocolate Lava Cake", "Warm chocolate cake with molten center.", 720);
    const card5 = createCard("/images/menu/6.png", "Cheesecake Delight", "Classic creamy cheesecake with berry topping.", 610);

    cards3.appendChild(card4);
    cards3.appendChild(card5);

    const head2 =  heading("🥤 Drinks")
    cardBody.appendChild(head2);

    const cards4 = document.createElement("div");
    cards4.classList.add("cards");
    cardBody.appendChild(cards4);  

    const card6 = createCard("/images/menu/7.png", "Fresh Lemonade", "Refreshing homemade lemonade.", 399);
    const card7 = createCard("/images/menu/8.png", "Iced Coffee", "Chilled coffee with milk and sweetener.", 470);

    cards4.appendChild(card6);
    cards4.appendChild(card7);

    return cardBody;
})();