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
        imgLikes.className = "like";

        post.setAttribute('id', currentPost.id);
        avatar.setAttribute('src', 'img/avatar.png');
        photo.setAttribute('src', currentPost.photoLink);
        let isLiked = currentPost.likes.some(function (elememt) {
            return elememt === localStorage.getItem("user");
        });
        if (isLiked)
            imgLikes.setAttribute('src', 'img/like.png');
        else
            imgLikes.setAttribute('src', 'img/dislike.png');
        if (currentPost.author === localStorage.getItem('user')) {
            imgRedact.setAttribute('src', 'img/redact.png');
            imgRedact.name = "redact";
            imgDelete.setAttribute('src', 'img/delete.png');
            imgDelete.name = "delete";
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
    }

    function makeFilter(currentPost) {
        let filter = document.createElement('nav');
        let titleFilter = document.createElement('div');
        let textTitleFilter = document.createElement('h4');
        let authorFilter = document.createElement('div');
        let checkboxA = document.createElement('input');
        let labelA = document.createElement('h4');
        let textA = document.createElement('input');
        let dataListA = document.createElement('datalist');
        let dateFilter = document.createElement('div');
        let checkboxD = document.createElement('input');
        let labelD = document.createElement('h4');
        let textD = document.createElement('input');
        let tagFilter = document.createElement('div');
        let checkboxT = document.createElement('input');
        let labelT = document.createElement('h4');
        let textT = document.createElement('input');
        let dataListT = document.createElement('datalist');
        let filterButton = document.createElement('div');
        let buttonName = document.createElement('h3');

        titleFilter.className = "title-filter";
        authorFilter.className = "authors-filter";
        dateFilter.className = "datas-filter";
        tagFilter.className = "tags-filter";
        filterButton.className = "filter-button";

        buttonName.setAttribute('align', "center");
        checkboxA.setAttribute('type', "checkbox");
        textA.setAttribute('type', "text");
        textA.setAttribute('list', "author-suggestions");
        checkboxD.setAttribute('type', "checkbox");
        textD.setAttribute('placeholder', "12/02/2015");
        checkboxT.setAttribute('type', "checkbox");
        textT.setAttribute('list', "tag-suggestions");
        textD.setAttribute('type', "text");

        buttonName.innerHTML = "FILTER";
        labelA.innerHTML = "Author:";
        textTitleFilter.innerHTML = "Filter by:";
        labelD.innerHTML = "Data:";
        labelT.innerHTML = "Tags:";
        buttonName.name = "filter-button";
        textA.name = "authors-filter";
        textD.name = "datas-filter";
        textT.name = "tags-filter";
        dataListA.id = "author-suggestions";
        dataListT.id = "tag-suggestions";

        titleFilter.appendChild(textTitleFilter);
        filter.appendChild(titleFilter);
        authorFilter.appendChild(checkboxA);
        authorFilter.appendChild(labelA);
        authorFilter.appendChild(textA);
        authorFilter.appendChild(dataListA);
        filter.appendChild(authorFilter);
        dateFilter.appendChild(checkboxD);
        dateFilter.appendChild(labelD);
        dateFilter.appendChild(textD);
        filter.appendChild(dateFilter);
        tagFilter.appendChild(checkboxT);
        tagFilter.appendChild(labelT);
        tagFilter.appendChild(textT);
        tagFilter.appendChild(dataListT);
        filter.appendChild(tagFilter);
        filterButton.appendChild(buttonName);
        filter.appendChild(filterButton);

        return filter;
    }

    function makePersonalInf() {
        let personalInf = document.createElement('div');
        let avatar = document.createElement('img');
        let userName = document.createElement('h3');
        let paragraph = document.createElement('p');

        personalInf.className = "personal-inf";

        avatar.setAttribute('src', "img/avatar.png");
        avatar.setAttribute('height', "150px");

        userName.innerHTML = "User123";
        paragraph.innerHTML = "Publications: 21 <br>Subscribers: 12 <br>Subsribtions: 13";

        personalInf.appendChild(avatar);
        personalInf.appendChild(userName);
        personalInf.appendChild(paragraph);

        return personalInf;
    }

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
        if (localStorage.getItem('user').length > 0) {
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
            let italicParagraph = document.createElement('i');
            let addPhoto = document.createElement('div');
            let addPhotoImg = document.createElement('img');
            let logButton = document.createElement('div');
            let textLogButton = document.createElement('h3');

            addPhoto.className = 'add-photo';
            userDiv.className = 'user';
            personalInf.className = 'personal-inf';
            logButton.className = 'log-out-button';

            textLogButton.name = "sign-button";
            addPhotoImg.name = "add-photo-button";
            userDiv.setAttribute('align', 'right')
            userImg.setAttribute('src', 'img/avatar.png');
            imgPersonInf.setAttribute('src', 'img/avatar.png');
            imgPersonInf.setAttribute('height', '150px');
            addPhotoImg.setAttribute('src', 'img/add_photo.png');
            addPhotoImg.setAttribute('width', '100%');
            textLogButton.setAttribute('align', 'center');

            textLogButton.innerHTML = 'SIGN OUT';
            userName.innerHTML = localStorage.getItem('user');
            italicParagraph.innerHTML = "Publications: 21 <br>" +
                "Subscribers: 12 <br>Subsribtions: 13";


            userDiv.appendChild(userImg);
            userDiv.appendChild(userName.cloneNode(true));
            personalInf.appendChild(imgPersonInf);
            personalInf.appendChild(userName);
            paragraph.appendChild(italicParagraph);
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

            textLogButton.name = "sign-button";
            textLogButton.setAttribute('align', 'center');
            textLogButton.innerHTML = 'SIGN IN';

            logButton.appendChild(textLogButton);
            document.querySelector('header').appendChild(logButton);
        }
        events.listenAddPhoto();
    }

    function setHashTagInit() {
        let hashTagsSet = new Set();
        for (i = 0; i < getPhotoPostsFromLoacalStorage().length; i++) {
            for (j = 0; j < getPhotoPostsFromLoacalStorage()[i].hashTags.length; j++) {
                hashTagsSet.add(getPhotoPostsFromLoacalStorage()[i].hashTags[j]);
            }
        }
        return hashTagsSet;
    }

    function setAuthorInit() {
        let authorSet = new Set();
        for (i = 0; i < getPhotoPostsFromLoacalStorage().length; i++) {
            authorSet.add(getPhotoPostsFromLoacalStorage()[i].author);
        }
        return authorSet;
    }

    function makeShowMoreButton() {
        let showMore = document.createElement('div');
        let text = document.createElement('h3');


        showMore.className = "show-more";

        text.innerHTML = "Show more...";

        showMore.appendChild(text);

        return showMore;
    }

    function showAddPhotoPage (post = null) {
        if(document.querySelector('main'))
            document.querySelector('main').remove();
        if(document.getElementsByClassName('add-photo')[0])
            document.getElementsByClassName('add-photo')[0].remove();


        let editPhoto = document.createElement('div');
        editPhoto.className = 'edit-photo';
        editPhoto.innerHTML = (post?post.author:localStorage.getItem('user'))+ '<br>' + (post?
                '0' + post.createdAt.getDate() +
                '.' + ('0' + (post.createdAt.getMonth() + 1)) +
                '.' + post.createdAt.getFullYear():"");


        let dropArea = document.createElement('div');
        dropArea.className = 'icon-load';

        let dropAreaText = document.createElement("p");
        dropAreaText.innerHTML = "DRUG & DROP AREA";
        dropAreaText.setAttribute("align", "center");

        dropArea.appendChild(dropAreaText);

        let imgDropArea = document.createElement('img');
        if (post)
            imgDropArea.setAttribute('src', post.photoLink);
        dropArea.appendChild(imgDropArea);

        dropArea.addEventListener("dragover", function (event) {
            event.preventDefault();
        }, false);

        dropArea.addEventListener("drop", function (event) {
            event.preventDefault();
            let files = event.dataTransfer.files;
            let reader = new FileReader();
            reader.readAsDataURL(files[0]);
            reader.onloadend = function () {
                imgDropArea.setAttribute('src',reader.result);
            };
        }, false);

        let editInform = document.createElement('div');
        let editDescribtion = document.createElement('div');
        let labelDescribtion = document.createElement('p');
        let textareaDescribtion = document.createElement('textarea');
        let editTags = document.createElement('div');
        let labelTags = document.createElement('p');
        let textareaTags = document.createElement('textarea');
        let buttonDone = document.createElement('div');
        let main = document.createElement('main');

        editInform.className = 'edit-inform';
        editDescribtion.className = 'edit-descr';
        labelDescribtion.innerHTML = 'Description:';
        editDescribtion.appendChild(labelDescribtion);
        textareaDescribtion.className = "description";
        textareaDescribtion.id = "descr";
        textareaDescribtion.innerHTML = (post ? post.description:"");

        editDescribtion.appendChild(textareaDescribtion);
        editTags.className = 'edit-hash';
        labelTags.innerHTML = ' Hash-tags:';
        editTags.appendChild(labelTags);
        textareaTags.className = "description";
        textareaTags.id = "hash";
        textareaTags.innerHTML = (post ? post.hashTags.join(', '):"");

        editTags.appendChild(textareaTags);
        buttonDone.className = 'button-done';

        buttonDone.innerHTML = 'DONE';
        editInform.appendChild(editDescribtion);
        editInform.appendChild(editTags);
        editInform.appendChild(buttonDone);
        editPhoto.appendChild(dropArea);
        main.appendChild(editPhoto);
        main.appendChild(editInform);
        document.body.insertBefore(main, document.querySelector('footer'));


        function clickDone() {
            if (post !== null) {
                post.description =  document.getElementById('descr').value;
                let tmp = document.getElementById('hash').value.split(', ');
                post.hashTags = tmp;
                post.photoLink = imgDropArea.getAttribute('src');
                if(editPhotoPost(post.id.toString(), post)){
                    showPhotoPosts();
                }
            }
            else {
                let newPost = {
                    id: null,
                    description: null,
                    createdAt: null,
                    author: null,
                    photoLink: null,
                    hashTags: null,
                    likes: null
                };
                newPost.id = localStorage.getItem('id');
                localStorage.setItem('id', String(Number(localStorage.getItem('id'))+1));
                let tmp;
                if (document.getElementById('hash').value.length > 0) {
                    tmp = document.getElementById('hash').value.split(', ');
                }else{
                    tmp = [];
                }
                newPost.description = document.getElementById('descr').value;
                newPost.hashTags = tmp;
                newPost.createdAt = new Date();
                newPost.author = localStorage.getItem('user');
                newPost.photoLink = imgDropArea.getAttribute('src');
                newPost.likes = [];
                addPhotoPost(newPost);
            }
        }
        buttonDone.addEventListener('click', clickDone);
    }


    return {
        showAddPhotoPage,
        makeShowMoreButton,
        makePersonalInf,
        makeFilter,
        makePost,
        clearAllPosts,
        removePhotoPost,
        showDependentBlocks,
        setHashTagInit,
        setAuthorInit
    }
}());


function showPhotoPosts(skip, top = JSON.parse(localStorage.getItem("latestFilter")).top, filterConfig) {

    if (document.querySelector('main')) {
        document.querySelector('main').remove();
    }
    let main = document.createElement('main');
    let container = document.createElement('div');

    container.setAttribute('id', "container");

    main.appendChild(dom.makePersonalInf());
    main.appendChild(container);

    document.body.insertBefore(main, document.querySelector('footer'));

    if (!document.querySelector('nav')){
        document.body.insertBefore(dom.makeFilter(), document.querySelector('main'));
        events.listenNav();
    }

    addAuthorSuggestions();
    addTagsSuggestions();
    showDependentOnAuthorBlocks();

    let countOfAllFilteredPosts = module.getPhotoPosts(skip, getPhotoPostsFromLoacalStorage().length, filterConfig).length;
    let array = module.getPhotoPosts(skip, top, filterConfig);
    for (let i = 0; i < array.length; i++) {
        let post = dom.makePost(array[i], skip + i);
        document.getElementById('container').appendChild(post);
    }
    if (array.length != countOfAllFilteredPosts) {
        document.querySelector('main').appendChild(dom.makeShowMoreButton());
        document.querySelector('main').lastChild.addEventListener('click', showMoreClick);
    }

    events.listenSignButton();
    events.listenMain();

    function showMoreClick() {
        let tmpFilter = JSON.parse(localStorage.getItem("latestFilter"));
        tmpFilter.top += 10;
        localStorage.setItem("latestFilter", JSON.stringify(tmpFilter));
        showPhotoPosts();

    }
}

function addPhotoPost(photoPost, skip, top, filterConfig) {
    if (module.addPhotoPost(photoPost)) {
        showPhotoPosts(skip, top, filterConfig);
        return true;
    }
    return false;
}

function deletePhotoPost(id, skip, top, filterConfig) {
    if (module.removePhotoPost(id.toString())) {
        showPhotoPosts(skip, top, filterConfig);
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