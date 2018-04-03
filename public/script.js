/*
* Опечатка в условии: название поля description.
* */
/*let filterConfig = {
    date: new Date('2018-02-23T23:00:00');
    author: '';
    hashTags: '';
}*/

let module = (function () {

    function getPhotoPosts(skip, top, filterConfig) {
        skip = skip || JSON.parse(localStorage.getItem("latestFilter")).skip;
        top = top || JSON.parse(localStorage.getItem("latestFilter")).top;
        filterConfig = filterConfig || JSON.parse(localStorage.getItem("latestFilter")).filterConfig;

        let tmpFilter = JSON.parse(localStorage.getItem("latestFilter"));
        tmpFilter.skip = skip;
        tmpFilter.top = top;
        tmpFilter.filterConfig = filterConfig;

        localStorage.setItem("latestFilter", JSON.stringify(tmpFilter));

        let array = getPhotoPostsFromLoacalStorage();

        if ('date' in filterConfig && filterConfig.date instanceof Date) {
            array = array.filter(function (obj) {
                if (obj.createdAt instanceof Date){
                    return filterConfig.date <= obj.createdAt;
                }
                else
                    return false;
            });
        }

        if ('author' in filterConfig) {
            array = array.filter(function (obj) {
                return obj.author === filterConfig.author;
            });
        }

        if ('hashTags' in filterConfig) {
            array = array.filter(function (obj) {
                return obj.hashTags.some(function (postTag) {
                    return filterConfig.hashTags.some(function (filteringTag) {
                        return filteringTag === postTag;
                    })
                });
            });
        }

        array = array.filter(function (obj) {
            return !obj.isDeleted;
        });

        array = array.sort(function (a, b) {
            return b.createdAt - a.createdAt;
        });

        array = array.slice(skip, (skip + top));

        return array;
    }

    let getPhotoPost = function (postID) {
        return getPhotoPostsFromLoacalStorage()[getPhotoPostsFromLoacalStorage().findIndex(post => post.id === postID)];
    };

    function validatePhotoPost(photoPost) {

        //проверак на существование id и его тип
        if (!('id' in photoPost) || typeof(photoPost.id) !== 'string')
            return false;

        /*//проверка на уникальность id
        if (photoPosts.some(function (obj) {
                return obj.id === photoPost.id;
            })) {
            return false;
        }*/

        //проверка на существование description и его тип
        if (!('description' in photoPost) || typeof(photoPost.description) !== 'string')
            return false;

        //проверка размера description
        if (photoPost.description.length >= 200)
            return false;

        //проверка на существование createdAt и его тип
        if (!('createdAt' in photoPost) || !(photoPost.createdAt instanceof Date))
            return false;

        //проверка на существование author и его тип
        if (!('author' in photoPost) || typeof(photoPost.author) !== 'string')
            return false;

        //проверка размера author
        if (photoPost.author.length <= 0)
            return false;

        //проверка на существование photoLink и его тип
        if (!('photoLink' in photoPost) || typeof(photoPost.photoLink) !== 'string')
            return false;

        //проверка размера photoLink
        if (photoPost.photoLink.length <= 0)
            return false;

        //проверка правильности hashTags, если они есть
        if ('hashTags' in photoPost && !photoPost.hashTags.every(function (tag) {
                return (tag.length > 0 && tag[0] === '#')
            })) {
            return false;
        }

        //проверка правильности likes, если они есть
        if ('likes' in photoPost && !photoPost.likes.every(function (like) {
                return (like.length > 0)
            })) {
            return false;
        }

        return true;
    }

    function addPhotoPost(photoPost) {
        if (!validatePhotoPost(photoPost))
            return false;
        photoPost.isDeleted = false;
        photoPosts.push(photoPost);
        let arr = getPhotoPostsFromLoacalStorage();
        arr.push(photoPost);
        localStorage.setItem("photoPosts", JSON.stringify(arr));
        return true;
    }

    function editPhotoPost(postID, photoPost) {
        let index = getPhotoPostsFromLoacalStorage().findIndex(post => post.id === postID);
        if (index != -1) {
            photoPost.id = postID.toString();
            photoPost.createdAt = getPhotoPostsFromLoacalStorage()[index].createdAt;
            photoPost.author = getPhotoPostsFromLoacalStorage()[index].author;
            //photoPost.likes = getPhotoPostsFromLoacalStorage()[index].likes;

            if (!('description' in photoPost)) {
                photoPost.description = getPhotoPostsFromLoacalStorage()[index].description;
            }

            if (!('photoLink' in photoPost)) {
                photoPost.photoLink = getPhotoPostsFromLoacalStorage()[index].photoLink;
            }

            if (!('hashTags' in photoPost)) {
                photoPost.hashTags = getPhotoPostsFromLoacalStorage()[index].hashTags;
            }

            if (!('likes' in photoPost)) {
                photoPost.hashTags = getPhotoPostsFromLoacalStorage()[index].likes;
            }

            let chengeablePost = getPhotoPostsFromLoacalStorage()[index];

            if (validatePhotoPost(photoPost)) {
                photoPosts[index] = photoPost;
                tmpPosts = getPhotoPostsFromLoacalStorage();
                tmpPosts[index] = photoPost;
                localStorage.setItem("photoPosts", JSON.stringify(tmpPosts));
                //addPhotoPost(chengeablePost);
                return true;
            }

            //addPhotoPost(photoPost);

            return false;
        }
    }

    function removePhotoPost(postID) {
        let index = getPhotoPostsFromLoacalStorage().findIndex(post => post.id === postID);
        if (index != -1) {
            let tmpPosts = getPhotoPostsFromLoacalStorage();
            tmpPosts.splice(index, 1);
            localStorage.setItem("photoPosts", JSON.stringify(tmpPosts));
            //photoPosts.splice(index, 1);
            photoPosts[index].isDeleted = true;
            return true;
        }
        return false;
    }

    return {
        getPhotoPost,
        getPhotoPosts,
        addPhotoPost,
        editPhotoPost,
        removePhotoPost
    }
}());

function getPhotoPostsFromLoacalStorage() {
    let result = Array.from(JSON.parse(localStorage.getItem("photoPosts")));
    for (var i = 0; i < result.length; i++) {
        result[i].createdAt = new Date(result[i].createdAt);
    }
    return result;
}