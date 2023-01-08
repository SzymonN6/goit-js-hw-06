const categoriesCount = document.querySelectorAll(".item");

console.log(`categoriesCount: ${categoriesCount.length}`);

categoriesCount.forEach((item) => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
});

