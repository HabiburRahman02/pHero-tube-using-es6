// all categories
const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
}

function removeActiveClass(){
    const buttons = document.getElementsByClassName('btn');
    for(const button of buttons){
        console.log(button)
        button.classList.remove('bg-red-500', 'text-white')
    }
}

// loadCategoryVideo
function loadCategoryVideo(id) {
    fetch(` https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
        .then(res => res.json())
        .then(data => {
            removeActiveClass()
            displayVideos(data.category)
            const button = document.getElementById(`btn-${id}`);
            button.classList.add('bg-red-500', 'text-white')
        })
}
// function buttonActive(id){
//     const button = document.getElementById(`btn-${id}`);
//     console.logb(but)
// }
const displayCategories = (categories) => {
    const categoryContainer = document.getElementById('category-container');
    categories.forEach(category => {
        const buttonContainer = document.createElement('button');
        buttonContainer.innerHTML = `
       <button id="btn-${category.category_id}" onclick="loadCategoryVideo(${category.category_id})" class="btn">${category.category}</button>
       `
        categoryContainer.appendChild(buttonContainer);
    })
}

const loadVideos = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then(res => res.json())
        .then(data => displayVideos(data.videos))
}

const displayVideos = (videos) => {
    const videoContainer = document.getElementById('video-container');
    videoContainer.textContent = ''
    if (!videos.length) {
        videoContainer.innerHTML ='No content here right now'
    }
    videos.forEach(video => {
        // console.log('video', video.others.posted_date.length)
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card card-compact shadow-xl">
         <figure class="relative">
            <img
            src="${video.thumbnail}"
            class="h-[230px] w-full object-cover"
            alt="Shoes" />
          <span class="absolute bg-black text-white px-4 rounded-lg bottom-3 right-3">${getTime(video.others.posted_date)}</span>
        </figure>
        <div class="card-body">
                <div class="flex gap-4">
                <img
                class="h-12 w-12 rounded-full"
                 src="${video.authors[0].profile_picture}" alt="">
                <div class="space-y-3">
                        <h4 class="font-bold text-xl">${video.title}</h4>
                        <div class="flex gap-3">
                            <p class="text-gray-500">${video.authors[0].profile_name}</p>
                           ${video.authors[0].verified == true ? `<img
                            class="h-5 w-5"
                            src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png" alt=""></img>` : ''}
                            
                        </div>
                        <p>${video.others.views}</p>
                        </div>
                </div>
            </div>
        </div>
    `
        videoContainer.appendChild(div)
    })
}


loadCategories();
loadVideos()