export const aboutPage = (() => {
    const heading = document.createElement("div");
    heading.classList.add("heading");

    const bodyHead = document.createElement("div");
    bodyHead.classList.add("body-head");

    const body = document.createElement("p");
    body.classList.add("about-body");
    body.setAttribute("data-aos", "fade-up");
    body.setAttribute("data-aos-duration", "1500");
    body.textContent = `Welcome to "The Odin Restaurant", where passion meets flavor! Our journey began with a simple mission – to serve delicious, high-quality meals made with love and the freshest ingredients. Founded in 2001, The Odin Restaurant was born from a love for authentic flavors and warm hospitality. From a small family kitchen to a beloved dining spot, we have been serving guests with dedication and heart.`;
    bodyHead.appendChild(body);

    const imgBody = document.createElement("img");
    imgBody.src = "./images/about/1.jpg";
    imgBody.setAttribute("data-aos", "zoom-in");
    imgBody.setAttribute("data-aos-duration", "1500");
    bodyHead.appendChild(imgBody);

    heading.appendChild(bodyHead);

    const chef = document.createElement("div");
    chef.classList.add("chef");

    const chefDivImg = document.createElement("div");
    chefDivImg.classList.add("chef-div-image");

    const chefImg = document.createElement("img");
    chefImg.src = "./images/about/chef.png";
    chefImg.setAttribute("data-aos", "zoom-in");
    chefImg.setAttribute("data-aos-duration", "1500");
    chefDivImg.appendChild(chefImg);
    chef.appendChild(chefDivImg);

    const chefDiv = document.createElement("div");
    chefDiv.classList.add("chef-div");
    chefDiv.setAttribute("data-aos", "fade-up");
    chefDiv.setAttribute("data-aos-duration", "1500");

    const chefDesc = document.createElement("p");
    chefDesc.textContent = `Our executive chef, Mr. Odin, brings years of experience in crafting mouthwatering dishes that delight every palate. With a background in odin type food, our kitchen is a place of culinary excellence.`;
    const footer = document.createElement("p");
    footer.textContent = `"At "The Odin Restaurant", every meal is a celebration of flavors, and every guest is family. We can’t wait to serve you!"`;
    chefDiv.appendChild(chefDesc);
    chefDiv.appendChild(footer);

    chef.appendChild(chefDiv);

    heading.appendChild(chef);
    return heading;
})();