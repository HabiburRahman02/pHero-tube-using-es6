// all categories
const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res=>res.json())
    .then(data=>displayCategories(data.categories))
}

const displayCategories = (categories)=>{
categories.forEach(category=>{
    console.log(category.category)
})
}
loadCategories();