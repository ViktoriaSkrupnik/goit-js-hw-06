const navEl = document.querySelectorAll('.item')
console.log('Number of categories:', navEl.length);

navEl.forEach(function (itemName) {
    const categoriesEl= itemName.firstElementChild;
    const elementsLength = itemName.lastElementChild;
    console.log('Category :', categoriesEl.textContent)
    console.log('Elelments :', elementsLength.children.length)
})