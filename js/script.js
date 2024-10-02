// all categories
const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
}

const displayCategories = (categories) => {
    const categoryContainer = document.getElementById('category-container');
    categories.forEach(category => {
        const button = document.createElement('button');
        button.classList = 'btn'
        button.innerText = category.category
        categoryContainer.appendChild(button)
    })
}

const loadVideos = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then(res => res.json())
        .then(data => displayVideos(data.videos))
}

const displayVideos = (videos) => {
    const videoContainer = document.getElementById('video-container');
    videos.forEach(video => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card card-compact bg-base-100shadow-xl">
         <figure>
            <img
            src="${video.thumbnail}"
            alt="Shoes" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
        </div>
    `
        console.log(video)
        videoContainer.appendChild(div)
    })
}


loadCategories();
loadVideos()