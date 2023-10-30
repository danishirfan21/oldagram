const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "avatar-vangogh.jpg",
        post: "post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "avatar-courbet.jpg",
        post: "post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "avatar-ducreux.jpg",
        post: "post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


const postsContainerDiv = document.getElementById("posts-container");

posts.forEach(e => {
    const postDiv = document.createElement("div");
    postDiv.innerHTML += `
        <div class="bio">
            <img class="user-icon" src="${e?.avatar}">
            <div class="name-location">
                <p class="name">${e?.name}</p>
                <p class="location">${e?.location}</p>    
            </div>        
        </div>
            
        <img style="width: 100%;" src="${e?.post}">
            
        <div class="all-icons">
            <i class="fa-regular fa-heart" data-like="false"></i>
            <img src="icon-comment.png">
            <img src="icon-dm.png">
                
            <p class="likes">${e?.likes} likes</p>
                
            <p class="username-caption"><span class="name">${e?.username}</span> ${e?.comment}</p>
        </div>
    `
    postsContainerDiv.appendChild(postDiv);

    const likeButton = postDiv.querySelector(".fa-heart");

    likeButton.addEventListener("click", function() {
        if (likeButton.getAttribute("data-like") === "false") {
            likeButton.classList.remove("fa-regular");
            likeButton.classList.add("fa-solid");
            likeButton.setAttribute("data-like", "true");
            likeButton.style.color = "#dd1d30";
        } else {
            likeButton.classList.remove("fa-solid");
            likeButton.classList.add("fa-regular");
            likeButton.setAttribute("data-like", "false");
            likeButton.style.color = "";
        }
    });
    
})

