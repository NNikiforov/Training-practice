let events = (function () {
    function listenAddPhoto() {
        let btn = document.getElementsByName('add-photo-button')[0];
        if (btn)
            btn.addEventListener('click', moveToAddPage);
    }

    function moveToAddPage(event) {
        dom.showAddPhotoPage();
        return;
    }
    function listenFooter() {
        let btn = document.getElementsByName('toMain')[0];
        btn.addEventListener('click', moveToMain);
    }

    function moveToMain(event) {
        showPhotoPosts();
        return;
    }


    function listenEnter() {
        let btn = document.getElementsByClassName('sign_in')[0];
        if(btn)
            btn.addEventListener('click', enterButtonHandleClick);
    }

    function enterButtonHandleClick(event) {
        if (event.target.name === "enter") {
            let login = event.target.parentNode.previousSibling.previousSibling;
            if(login.value.length > 0)
                localStorage.setItem('user', login.value);
            else
                localStorage.setItem('user', "");

            showPhotoPosts();
            showDependentOnAuthorBlocks();
            listenSignButton();
            listenNav();
        }

        return;
    }

    function listenSignButton() {
        let btn = document.getElementsByClassName('log-out-button')[0];
        btn.addEventListener('click', signButtonHandleClick);
    }

    function signButtonHandleClick(event) {
        if (event.target.name === "sign-button") {
            if(localStorage.getItem('user').length > 0){
                localStorage.setItem('user', "");
                showPhotoPosts();
            }
            else{
                if(document.querySelector('nav'))
                    document.querySelector('nav').remove();
                if(document.querySelector('main')){
                    document.querySelector('main').remove();
                }

                let main = document.createElement('main');
                let signIn = document.createElement('div');
                signIn.className = "sign_in";
                let login = document.createElement('input');
                login.className = "text-box-signin";
                login.setAttribute('type', 'text');
                login.setAttribute('placeholder', "Login");
                let password = document.createElement('input');
                password.className = "text-box-signin";
                password.setAttribute('type', 'password');
                password.setAttribute('placeholder', "Password");
                let signButton = document.createElement('div');
                signButton.className = "log-out-button";
                let textButton = document.createElement('h3');
                textButton.setAttribute('align', "center");
                textButton.name = "enter";

                textButton.innerHTML = "Enter";

                signButton.appendChild(textButton);
                signIn.appendChild(login);
                signIn.appendChild(password);
                signIn.appendChild(signButton);
                main.appendChild(signIn);
                document.body.insertBefore(main, document.querySelector('footer'));
                listenEnter();
            }
        }
        showDependentOnAuthorBlocks();
        events.listenSignButton();
        return;
    }

    function listenNav() {
        let filter = document.querySelector('nav');
        filter.addEventListener('click', navHandleClick);
    }

    function navHandleClick(event) {
        if (event.target.name === "filter-button") {
            let filterConfig = {};
            //let tmp = document.getElementsByClassName("authors-filter")[0].firstChild;
            if(document.getElementsByClassName("authors-filter")[0].firstChild.checked){
                filterConfig.author = document.getElementsByName("authors-filter")[0].value;
            }
            if(document.getElementsByClassName("datas-filter")[0].firstChild.checked){
                strDate = document.getElementsByName("datas-filter")[0].value;
                strDate = strDate.split("/");
                filterConfig.date = new Date(strDate[2], Number(strDate[1]) - 1, strDate[0]);
            }
            if(document.getElementsByClassName("tags-filter")[0].firstChild.checked){
                hashTags = document.getElementsByName("tags-filter")[0].value.split(", ");
                hashTags.filter(function (tag) {
                    return tag.length > 0;
                });
                filterConfig.hashTags = hashTags;
            }
            showPhotoPosts(0,10, filterConfig);
            return;
        }
        return;
    }

    function listenMain() {
        let bars = document.getElementsByClassName("bar");
        [].forEach.call(bars, function (element) {
            element.addEventListener('click', mainHandleClick);
        });
        //с делегированием ведёт себя неадекватно
        /*let container = document.getElementById('container');
        container.addEventListener('click', mainHandleClick);*/
    }

    function mainHandleClick(event) {
        if (event.target.className === "like") {
            if (!localStorage.getItem('user'))
                return;
            let currentUser = localStorage.getItem("user");
            let index = getPhotoPostsFromLoacalStorage().findIndex(post => post.id === event.target.parentNode.parentNode.parentNode.id);
            let currentLikes = getPhotoPostsFromLoacalStorage()[index].likes;
            let isLiked = currentLikes.some(function (elememt) {
                return elememt === currentUser;
            });
            if (isLiked) {
                currentLikes.splice(currentLikes.indexOf(currentUser), 1);
            }
            else {
                currentLikes.push(currentUser);
            }

            let changes = {
                likes: currentLikes
            }

            let newPhotopost = editPhotoPost(event.target.parentNode.parentNode.parentNode.id, changes);
        }
        if (event.target.name === "redact") {
            let index = getPhotoPostsFromLoacalStorage().findIndex(post => post.id === event.target.parentNode.parentNode.parentNode.id);
            let post = getPhotoPostsFromLoacalStorage()[index];
            post.createdAt = new Date(post.createdAt);
            dom.showAddPhotoPage(post);
        }

        if (event.target.name === "delete") {
            deletePhotoPost(event.target.parentNode.parentNode.parentNode.id);
        }
        listenMain();
        return;
    }

    function readFromData() {
        localStorage.setItem('id', '21');
        localStorage.setItem("user", user);
        localStorage.setItem("photoPosts", JSON.stringify(photoPosts));
        localStorage.setItem("latestFilter", JSON.stringify({
            skip: 0,
            top: 10,
            filterConfig: {}
        }));
        return;
    }


    return {
        listenAddPhoto,
        listenFooter,
        readFromData,
        listenMain,
        listenNav,
        listenSignButton,
        listenEnter
    }
}());

//events.readFromData();
showPhotoPosts();
events.listenFooter();
