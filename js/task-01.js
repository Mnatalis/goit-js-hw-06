const itemElement = document.querySelectorAll(".item");

// console.log(`Number of categoris: ${liItem.childElementCount}`);

console.log(`Number of categoris:`, itemElement.length);

itemElement.forEach((item) => {
    console.log(`Categoris:${item.firstElementChild.textContent}`);
    console.log(`Elements:${item.lastElementChild.children.length}`);
});
