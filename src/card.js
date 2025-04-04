export const createCard = (imgPath, h2Text, pText, amount) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = imgPath;
    img.setAttribute("data-aos", "zoom-in");
    img.setAttribute("data-aos-duration", "1500");

    card.appendChild(img);

    const desc = document.createElement("div")
    desc.classList.add("card-desc");

    const h2 = document.createElement("h2");
    h2.textContent = h2Text;
    h2.setAttribute("data-aos", "fade-up");
    h2.setAttribute("data-aos-duration", "1500");
    desc.appendChild(h2);

    const p = document.createElement("p");
    p.textContent = pText;
    p.setAttribute("data-aos", "fade-up");
    p.setAttribute("data-aos-duration", "1500");
    desc.appendChild(p);

    const price = document.createElement("p");
    price.classList.add("price");
    price.textContent = `NPR. ${amount}`;
    price.setAttribute("data-aos", "slide-in");
    price.setAttribute("data-aos-duration", "1500");
    desc.appendChild(price);

    card.appendChild(desc);
    return card;
};

export const heading = (title) => {
    const cardHeading = document.createElement("h1");
    cardHeading.textContent = title;
    cardHeading.setAttribute("data-aos", "fade-down");
    cardHeading.setAttribute("data-aos-duration", "1500");

    return cardHeading;
};