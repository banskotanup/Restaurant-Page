import { createCard, heading } from "./card.js";
import one from "./images/menu/1.png";
import two from "./images/menu/2.png";
import three from "./images/menu/3.png";
import four from "./images/menu/4.png";
import five from "./images/menu/5.png";
import six from "./images/menu/6.png";
import seven from "./images/menu/7.png";
import eight from "./images/menu/8.png";



export const cards = (() => {
    const cardBody = document.createElement("div");
    cardBody.classList.add("cards-body");

    const h1 =  heading("🍽️ Appetizers")
    cardBody.appendChild(h1);

    const cards = document.createElement("div");
    cards.classList.add("cards");
    cardBody.appendChild(cards);    

    const card = createCard(one, "Garlic Butter Shrimp", "Juicy shrimp cooked in garlic butter sauce.", 840);
    const card1 = createCard(two, "Crispy Calamari", "Lightly fried squid served with marinara sauce.", 920);
    
    cards.appendChild(card);
    cards.appendChild(card1);

    const head =  heading("🍲 Main Courses")
    cardBody.appendChild(head);

    const cards2 = document.createElement("div");
    cards2.classList.add("cards");
    cardBody.appendChild(cards2);  

    const card2 = createCard(three, "Grilled Salmon", "Fresh salmon fillet served with seasonal vegetables.", 1500);
    const card3 = createCard(four, "Classic Beef Burger", "Juicy beef patty with cheese, lettuce, and special sauce.", 1099);

    cards2.appendChild(card2);
    cards2.appendChild(card3);

    const head1 =  heading("🍰 Desserts")
    cardBody.appendChild(head1);

    const cards3 = document.createElement("div");
    cards3.classList.add("cards");
    cardBody.appendChild(cards3);  

    const card4 = createCard(five, "Chocolate Lava Cake", "Warm chocolate cake with molten center.", 720);
    const card5 = createCard(six, "Cheesecake Delight", "Classic creamy cheesecake with berry topping.", 610);

    cards3.appendChild(card4);
    cards3.appendChild(card5);

    const head2 =  heading("🥤 Drinks")
    cardBody.appendChild(head2);

    const cards4 = document.createElement("div");
    cards4.classList.add("cards");
    cardBody.appendChild(cards4);  

    const card6 = createCard(seven, "Fresh Lemonade", "Refreshing homemade lemonade.", 399);
    const card7 = createCard(eight, "Iced Coffee", "Chilled coffee with milk and sweetener.", 470);

    cards4.appendChild(card6);
    cards4.appendChild(card7);

    return cardBody;
})();