function makePost(currentPost, id) {
    let post = document.createElement('div');
    let topInf = document.createElement('div');
    let userLog = document.createElement('div');
    let avatar = document.createElement('img');
    let userName = document.createElement('h3');
    let postDate = document.createElement('div');
    let dateText = document.createElement('h3');
    let postPhoto = document.createElement('div');
    let photo = document.createElement('img');
    let bar = document.createElement('div');
    let likes = document.createElement('div');
    let imgLikes = document.createElement('img');
    let countLikes = document.createElement('h4');
    let tools = document.createElement('div');
    let imgRedact = document.createElement('img');
    let imgDelete = document.createElement('img');
    let describtion = document.createElement('div');
    let smallUserName = document.createElement('h4');
    let textDescribtion = document.createElement('p');
    let hashtags = document.createElement('div');
    let textHashtag = document.createElement('h4');
    let textHashtags = document.createElement('p');

    post.setAttribute('id', id)
    post.className = "post";
    topInf.className = "top-inf";
    userLog.className = "user-log";
    postDate.className = "post-date";
    postPhoto.className = "post-photo";
    bar.className = "bar";
    likes.className = "likes";
    tools.className = "tools";
    describtion.className = "describtion";
    hashtags.className = "describtion";

    avatar.setAttribute('src', 'img/avatar.png');
    photo.setAttribute('src', currentPost.photoLink);
    imgLikes.setAttribute('src', 'img/like.png');
    imgRedact.setAttribute('src', 'img/redact.png')
    imgDelete.setAttribute('src', 'img/delete.png');
    userName.innerHTML = currentPost.author;
    dateText.innerHTML = ('0' + currentPost.createdAt.getDate()).slice(-2) +
        '.' + ('0' + (currentPost.createdAt.getMonth() + 1)).slice(-2) +
        '.' + currentPost.createdAt.getFullYear();
    countLikes.innerHTML = currentPost.likes.length +
        (currentPost.likes.length > 1 ? ' pieces' : ' piece');
    smallUserName.innerHTML = currentPost.author + ':';
    textDescribtion.innerHTML = currentPost.description;
    textHashtag.innerHTML = 'hashtags:';
    textHashtags.innerHTML = currentPost.hashTags.join(' ');


    post.appendChild(topInf);
    topInf.appendChild(userLog);
    userLog.appendChild(avatar);
    userLog.appendChild(userName);
    topInf.appendChild(postDate);
    postDate.appendChild(dateText);
    post.appendChild(postPhoto);
    postPhoto.appendChild(photo);
    post.appendChild(bar);
    bar.appendChild(likes);
    likes.appendChild(imgLikes);
    likes.appendChild(countLikes);
    bar.appendChild(tools);
    tools.appendChild(imgRedact);
    tools.appendChild(imgDelete);
    post.appendChild(describtion);
    describtion.appendChild(smallUserName);
    describtion.appendChild(textDescribtion);
    post.appendChild(hashtags);
    hashtags.appendChild(textHashtag);
    hashtags.appendChild(textHashtags);

    return post;
};

function clearAllPosts() {
    let posts = document.getElementsByClassName('post');
    let ids = [].map.call(posts, function(elem) {
        return elem.id;
    });
    ids.forEach(function (id) {
        document.getElementById(id).remove();
    })
}

function addPhotoPost() {
    
}

function showPhotoPosts(skip, top, filterConfig) {
    clearAllPosts();
    let array = module.getPhotoPosts(skip, top, filterConfig);
    for (let i = 0; i < array.length; i++) {
        let post = makePost(array[i], skip + i);
        document.getElementById('container').appendChild(post);
    }
}

