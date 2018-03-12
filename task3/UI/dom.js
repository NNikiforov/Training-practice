let user = null;

let dom = (function () {
    function makePost(currentPost) {
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

        post.setAttribute('id', currentPost.id);
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
        if (currentPost.author === user) {
            imgRedact.setAttribute('src', 'img/redact.png')
            imgDelete.setAttribute('src', 'img/delete.png');
        }
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
        let ids = [].map.call(posts, function (elem) {
            return elem.id;
        });
        ids.forEach(function (id) {
            document.getElementById(id).remove();
        });
    }

    function removePhotoPost(id) {
        if (document.getElementById(id))
            document.getElementById(id).remove();
    }

    function showDependentBlocks() {
        if (user) {
            if (document.getElementsByClassName("personal-inf")[0])
                document.getElementsByClassName("personal-inf")[0].remove();
            if (document.getElementsByClassName("user")[0])
                document.getElementsByClassName("user")[0].remove();
            if (document.getElementsByClassName("add-photo")[0])
                document.getElementsByClassName("add-photo")[0].remove();
            if (document.getElementsByClassName("log-out-button")[0])
                document.getElementsByClassName("log-out-button")[0].remove();

            let userDiv = document.createElement('div');
            let userImg = document.createElement('img');
            let userName = document.createElement('h3');
            let personalInf = document.createElement('div');
            let imgPersonInf = document.createElement('img');
            let paragraph = document.createElement('p');
            let addPhoto = document.createElement('div');
            let addPhotoImg = document.createElement('img');
            let logButton = document.createElement('div');
            let textLogButton = document.createElement('h3');

            addPhoto.className = 'add-photo';
            userDiv.className = 'user';
            personalInf.className = 'personal-inf';
            logButton.className = 'log-out-button';

            userDiv.setAttribute('align', 'right')
            userImg.setAttribute('src', 'img/avatar.png');
            imgPersonInf.setAttribute('src', 'img/avatar.png');
            imgPersonInf.setAttribute('height', '150px');
            addPhotoImg.setAttribute('src', 'img/add_photo.png');
            addPhotoImg.setAttribute('width', '100%');
            textLogButton.setAttribute('align', 'center');

            textLogButton.innerHTML = 'SIGN OUT';
            userName.innerHTML = user;
            paragraph.innerHTML = "<i>\n" +
                "                Publications: 21 <br>\n" +
                "                Subscribers: 12 <br>\n" +
                "                Subsribtions: 13\n" +
                "            </i>";


            userDiv.appendChild(userImg);
            userDiv.appendChild(userName.cloneNode(true));
            personalInf.appendChild(imgPersonInf);
            personalInf.appendChild(userName);
            personalInf.appendChild(paragraph);
            addPhoto.appendChild(addPhotoImg);
            logButton.appendChild(textLogButton);
            document.querySelector('main').insertBefore(personalInf, document.getElementById('container'));
            document.body.insertBefore(addPhoto, document.getElementById('footer'));
            document.querySelector('header').appendChild(logButton);
            document.querySelector('header').appendChild(userDiv);

        } else {
            if (document.getElementsByClassName("personal-inf")[0])
                document.getElementsByClassName("personal-inf")[0].remove();
            if (document.getElementsByClassName("user")[0])
                document.getElementsByClassName("user")[0].remove();
            if (document.getElementsByClassName("add-photo")[0])
                document.getElementsByClassName("add-photo")[0].remove();
            if (document.getElementsByClassName("log-out-button")[0])
                document.getElementsByClassName("log-out-button")[0].remove();

            let logButton = document.createElement('div');
            let textLogButton = document.createElement('h3');

            logButton.className = 'log-out-button';

            textLogButton.setAttribute('align', 'center');
            textLogButton.innerHTML = 'SIGN IN';

            logButton.appendChild(textLogButton);
            document.querySelector('header').appendChild(logButton);
        }
    }

    function setHashTagInit() {
        let hashTagsSet = new Set();
        for (i = 0; i < photoPosts.length; i++) {
            for (j = 0; j < photoPosts[i].hashTags.length; j++) {
                hashTagsSet.add(photoPosts[i].hashTags[j]);
            }
        }
        return hashTagsSet;
    }

    function setAuthorInit() {
        let authorSet = new Set();
        for (i = 0; i < photoPosts.length; i++) {
            authorSet.add(photoPosts[i].author);
        }
        return authorSet;
    }

    return {
        makePost,
        clearAllPosts,
        removePhotoPost,
        showDependentBlocks,
        setHashTagInit,
        setAuthorInit
    }
}());


function showPhotoPosts(skip, top, filterConfig) {
    dom.clearAllPosts();
    let array = module.getPhotoPosts(skip, top, filterConfig);
    for (let i = 0; i < array.length; i++) {
        let post = dom.makePost(array[i], skip + i);
        document.getElementById('container').appendChild(post);
    }
}

function addPhotoPost(photoPost, skip, top, filterConfig) {
    if (module.addPhotoPost(photoPost)) {
        showPhotoPosts(skip, top, filterConfig);
        return true;
    }
    return false;
}

function deletePhotoPost(id) {
    if (module.removePhotoPost(id.toString())) {
        dom.removePhotoPost(id.toString());
        return true;
    }
    return false;
}

function editPhotoPost(id, modifications, skip, top, filterConfig) {
    if (module.editPhotoPost(id.toString(), modifications)) {
        showPhotoPosts(skip, top, filterConfig);
        return true;
    }
    return false;
}

function showDependentOnAuthorBlocks() {
    dom.showDependentBlocks();
}

function addAuthorSuggestions() {
    let authorSet = dom.setAuthorInit();
    let options = '';
    for (let item of authorSet) {
        options += '<option value=' + item + '>\n';
    }
    document.getElementById('author-suggestions').innerHTML = options;
    return options;
}

function addTagsSuggestions() {
    let hashTagsSet = dom.setHashTagInit();
    let options = '';
    for (let item of hashTagsSet) {
        options += '<option value=' + item + '>\n';
    }
    document.getElementById('tag-suggestions').innerHTML = options;
    return options;
}