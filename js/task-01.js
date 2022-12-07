const list = document.querySelector("#categories");
const itemArray = list.querySelectorAll(".item");

console.log(`Number of categories: ${itemArray.length}`);

itemArray.forEach(elem => {
    const title = elem.querySelector("h2").textContent;
    console.log(`Category: ${title}`);
    const sublist = elem.querySelectorAll("li");
    console.log(`Elements: ${sublist.length}`);
});