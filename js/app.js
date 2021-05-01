
let riceCups = parseInt(prompt(`Enter number of cups of rice`));
let sproutedRice = document.getElementById(`Sprouted`);
let whiteRice = document.getElementById(`White`);

sproutedRecipe();
function sproutedRecipe() {
    let sproutedWaterCups = riceCups * 1.6;
    sproutedRice.innerHTML =
	`For slightly al dente rice: `+
	`Combine ` + riceCups.toFixed(0) + ` cups of rice with ` + String(sproutedWaterCups) +
    ` cups of water or broth and 1 Tbsp olive oil.` +
    `Bring to a boil and stir once to mix. ` +
    `Reduce heat to low, cover with a tight-fitting lid and cook for 25 minutes. ` +
    `Remove from heat and let stand for 5 minutes. Fluff with a fork and serve.<br>` +
    `For softer rice: ` +
    `Increase liquid by 1/2 cup and cook time by 5 minutes.`;
    whiteRice.innerHTML = ``;
}

whiteRecipe();
function whiteRecipe() {
    let whiteWaterCups = riceCups * 2.0;
    whiteRice.innerHTML =
    `Combine ` +  riceCups.toFixed(0) + ` cups of rice with ` + String(whiteWaterCups) +
    ` cups of water and 1 Tbsp olive oil.` +
    ` Bring to a boil, then reduce heat to the lowest setting.` +
    ` Cook for about 18 minutes.`;
    sproutedRice.innerHTML = ``;
}
