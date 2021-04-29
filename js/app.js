let riceCups = parseFloat(prompt(`Enter number of cups of rice`));
let sproutedWaterCups = riceCups * 1.6;
let whiteWaterCups = riceCups * 2.0;

function sproutedRecipe() {
    document.getElementByID(`SP`).innerHTML =
	`For slightly al dente rice:` +
    `Combine` + riceCups + `cups of rice with` + sproutedWaterCups +
    `cups of water or broth and 1 Tbsp olive oil.` +
    `Bring to a boil and stir once to mix.` +
    `Reduce heat to low, cover with a tight-fitting lid and cook for 25 minutes.` +
    `Remove from heat and let stand for 5 minutes. Fluff with a fork and serve.<br>` +
    `For softer rice:` +
    `Increase liquid by 1/2 cup and cook time by 5 minutes.` +
    document.getElementByID(`W`).innerHTML = ``;
}

function whiteRecipe() {
    document.getElementByID(`W`).innerHTML =
    `Combine` + riceCups + `cups of rice with` + whiteWaterCups +
    `cups of water and 1 Tbsp olive oil.` +
    `Bring to a boil, then reduce heat to the lowest setting` +
    `Cook for about 18 minutes.` +
    document.getElementByID(`SP`).innerHTML = ``;
}
