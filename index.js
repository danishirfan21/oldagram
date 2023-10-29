const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
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
       <img src="images/icon-heart.png">
       <img src="images/icon-comment.png">
       <img src="images/icon-dm.png">
           
       <p class="likes">${e?.likes} likes</p>
           
       <p class="username-caption"><span class="name">${e?.username}</span> ${e?.comment}</p>
   </div>
`;

postsContainerDiv.appendChild(postDiv);

    
})