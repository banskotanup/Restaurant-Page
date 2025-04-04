
export const clsSlogan = (() => {

    const slogan = document.createElement("section");
    slogan.classList.add("slogan");

    const introLeft = document.createElement("div");
    introLeft.classList.add("intro-left");
    const h1 = document.createElement("h1");
    h1.innerHTML = "Authentic flavors, <span>unforgettable memories</span>";
    const dialogue = document.createElement("p");
    dialogue.textContent = "A fresh approach to dining, designed for your convenience.";
    const ctBtn = document.createElement("div");
    ctBtn.classList.add("ct-btn");
    const viewBtn = document.createElement("button");
    viewBtn.classList.add("view-menu");
    viewBtn.type = "button";
    viewBtn.textContent = "View menu";

    const introRight = document.createElement("div");
    introRight.classList.add("intro-right");
    const introImg = document.createElement("img");
    introImg.src = "./images/right-logo.png";


    ctBtn.appendChild(viewBtn);
    introLeft.appendChild(h1);
    introLeft.appendChild(dialogue);
    introLeft.appendChild(ctBtn);

    introRight.appendChild(introImg);

    slogan.appendChild(introLeft);
    slogan.appendChild(introRight);

    return slogan;
})();

export const clsFeature = (() => {
    const features = document.createElement("section");
    features.classList.add("features");

    const leftBody = document.createElement("div");
    leftBody.classList.add("left-body");
    leftBody.setAttribute("data-aos", "zoom-in");
    leftBody.setAttribute("data-aos-duration", "1500");

    const bodyImg = document.createElement("img");
    bodyImg.src = "./images/feature.png";

    leftBody.appendChild(bodyImg);
    features.appendChild(leftBody);

    const rightBody = document.createElement("div");
    rightBody.classList.add("right-body");
    rightBody.setAttribute("data-aos", "fade-up");
    rightBody.setAttribute("data-aos-duration", "1500");
    rightBody.setAttribute("data-aos-easing", "ease-in");
    const head = document.createElement("h2");
    head.textContent = "Features"
    rightBody.appendChild(head);

    const feat1 = document.createElement("h3");
    feat1.textContent = "🍕 Deliciously Fresh";
    const p1 = document.createElement("p");
    p1.textContent = "We use hand-picked ingredients and prepare every dish with love and care.";
    rightBody.appendChild(feat1);
    rightBody.appendChild(p1);

    const feat2 = document.createElement("h3");
    feat2.textContent = "🎶 Cozy Atmosphere";
    const p2 = document.createElement("p");
    p2.textContent = "A warm, welcoming vibe perfect for date nights, family dinners, or solo getaways.";
    rightBody.appendChild(feat2);
    rightBody.appendChild(p2);

    const feat3 = document.createElement("h3");
    feat3.textContent = "🛵 Fast Delivery";
    const p3 = document.createElement("p");
    p3.textContent = "Get your favorites delivered to your door—hot, fresh, and right on time.";
    rightBody.appendChild(feat3);
    rightBody.appendChild(p3);

    features.appendChild(rightBody);

    return features;
})();

export const clsExplore = (() => {
    const explore = document.createElement("section");
    explore.classList.add("explore");
    explore.setAttribute("data-aos", "zoom-in");
    explore.setAttribute("data-aos-duration", "1500");
    explore.setAttribute("data-aos-easing", "ease-in");

    const h4 = document.createElement("h4");
    h4.textContent = "Ready to taste the difference?";

    const p = document.createElement("p");
    p.textContent = "Explore our menu or book your table now.";


    explore.appendChild(h4);
    explore.appendChild(p);

    return explore;
})();