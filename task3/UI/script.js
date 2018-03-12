/*
* Опечатка в условии: название поля description.
* */

let photoPosts = [
    {
        id: '1',
        description: 'chindareva_d знает, что я люблю 💓😍🍦🍭🍨',
        createdAt: new Date('2018-03-03T20:11:31'),
        author: 'sadgirlagr',
        photoLink: 'https://github.com/NNikiforov/Training-practice/blob/master/task3/UI/img/photo/post1.jpg?raw=true',
        hashTags: ['#LOVE', '#LIKE4LIKE', '#FOLLOW'],
        likes: ['sneakersby', 'velitchenkoyury', 'anton_oleshkevich_stpr', 'evgeniygavrilin', 'wylsacom', 'evaktotam', 'anton.xameleon.by', 'yurydud', 'obladaet', 'filonka113']
    },
    {
        id: '2',
        description: 'Black or white? Which side would you choose ?',
        createdAt: new Date('2018-03-03T19:01:56'),
        author: 'sneakersby',
        photoLink: 'https://github.com/NNikiforov/Training-practice/blob/master/task3/UI/img/photo/post2.jpg?raw=true',
        hashTags: ['#sneakers', '#Minsk', '#sport', 'adidas'],
        likes: ['anton_oleshkevich_stpr', 'evgeniygavrilin', 'wylsacom', 'evaktotam', 'anton.xameleon.by', 'yurydud', 'obladaet', 'filonka113']
    },
    {
        id: '3',
        description: 'Постапокалиптический пейзаж в одно морозное утро. Витебск.',
        createdAt: new Date('2018-03-03T20:00:31'),
        author: 'velitchenkoyury',
        photoLink: 'https://github.com/NNikiforov/Training-practice/blob/master/task3/UI/img/photo/post3.jpg?raw=true',
        hashTags: ['#beautiful', '#vitebsk', '#city'],
        likes: ['anton_oleshkevich_stpr', 'evgeniygavrilin', 'wylsacom', 'evaktotam', 'anton.xameleon.by', 'yurydud', 'obladaet', 'filonka113']
    },
    {
        id: '4',
        description: 'Болен этой пушкой😌',
        createdAt: new Date('2018-03-02T02:11:11'),
        author: 'anton_oleshkevich_stpr',
        photoLink: 'https://github.com/NNikiforov/Training-practice/blob/master/task3/UI/img/photo/post4.jpg?raw=true',
        hashTags: ['#cars', '#tayota'],
        likes: ['wylsacom', 'nadyaaa.sh_', 'evaktotam', 'anton.xameleon.by', 'yurydud', 'obladaet', 'filonka113']
    },
    {
        id: '5',
        description: 'Знакомьтесь, команда Storiqa!',
        createdAt: new Date('2018-03-03T14:39:01'),
        author: 'evgeniygavrilin',
        photoLink: 'https://github.com/NNikiforov/Training-practice/blob/master/task3/UI/img/photo/post6.jpg?raw=true',
        hashTags: ['#busines', '#storiqa', '#msk'],
        likes: ['sneakersby', 'velitchenkoyury', 'anton_oleshkevich_stpr', 'evaktotam', 'anton.xameleon.by', 'yurydud', 'obladaet', 'filonka113']
    },
    {
        id: '6',
        description: '',
        createdAt: new Date('2018-03-03T13:20:37'),
        author: 'sneakersby',
        photoLink: 'https://github.com/NNikiforov/Training-practice/blob/master/task3/UI/img/photo/post5.jpg?raw=true',
        hashTags: ['#sneakers', '#Minsk', '#sport', 'adidas'],
        likes: ['velitchenkoyury', 'anton_oleshkevich_stpr', 'evgeniygavrilin', 'wylsacom', 'evaktotam', 'anton.xameleon.by', 'yurydud', 'obladaet', 'filonka113']
    },
    {
        id: '7',
        description: 'Прошел Bayonetta 2 на Switch. Очень хорошо. Хочу подобного больше, идеально играется.',
        createdAt: new Date('2018-03-03T08:11:31'),
        author: 'wylsacom',
        photoLink: 'https://github.com/NNikiforov/Training-practice/blob/master/task3/UI/img/photo/post7.jpg?raw=true',
        hashTags: ['#apple', '#tech', '#2018'],
        likes: ['sneakersby', 'nadyaaa.sh_', 'velitchenkoyury', 'anton_oleshkevich_stpr', 'evgeniygavrilin', 'anton.xameleon.by', 'yurydud', 'obladaet', 'filonka113']
    },
    {
        id: '8',
        description: 'минутка слабости',
        createdAt: new Date('2018-03-02T00:11:34'),
        author: 'evaktotam',
        photoLink: 'https://github.com/NNikiforov/Training-practice/blob/master/task3/UI/img/photo/post8.jpg?raw=true',
        hashTags: ['#memory', '#summer', '#beautiful'],
        likes: ['anton_oleshkevich_stpr', 'evgeniygavrilin', 'anton.xameleon.by', 'yurydud', 'obladaet', 'filonka113']
    },
    {
        id: '9',
        description: 'Сегодня начал читать трансформатор',
        createdAt: new Date('2018-03-02T11:19:41'),
        author: 'anton.xameleon.by',
        photoLink: 'https://github.com/NNikiforov/Training-practice/blob/master/task3/UI/img/photo/post9.jpg?raw=true',
        hashTags: ['#busines', '#msk', '#transformator'],
        likes: ['sneakersby', 'velitchenkoyury', 'anton_oleshkevich_stpr', 'evgeniygavrilin', 'wylsacom', 'evaktotam', 'yurydud', 'obladaet', 'filonka113']
    },
    {
        id: '10',
        description: 'Цветной каньон.Египет.',
        createdAt: new Date('2018-03-01T23:11:36'),
        author: 'velitchenkoyury',
        photoLink: 'https://github.com/NNikiforov/Training-practice/blob/master/task3/UI/img/photo/post10.jpg?raw=true',
        hashTags: ['#nature', '#2018', '#travel'],
        likes: ['csqtt', 'sneakersby', 'anton_oleshkevich_stpr', 'evgeniygavrilin', 'wylsacom', 'evaktotam', 'anton.xameleon.by', 'yurydud', 'obladaet', 'filonka113']
    },
    {
        id: '11',
        description: '',
        createdAt: new Date('2018-02-22T20:11:32'),
        author: 'csqtt',
        photoLink: 'https://github.com/NNikiforov/Training-practice/blob/master/task3/UI/img/photo/post11.jpg?raw=true',
        hashTags: ['#fashion', '#2018'],
        likes: ['nadyaaa.sh_', 'velitchenkoyury', 'anton_oleshkevich_stpr', 'evgeniygavrilin', 'wylsacom', 'evaktotam', 'anton.xameleon.by', 'yurydud', 'obladaet', 'filonka113']
    },
    {
        id: '12',
        description: 'From the past... 🌔💫',
        createdAt: new Date('2018-03-03T23:08:03'),
        author: 'nadyaaa.sh_',
        photoLink: 'https://github.com/NNikiforov/Training-practice/blob/master/task3/UI/img/photo/post12.jpg?raw=true',
        hashTags: ['#LIKE4LIKE', '#FOLLOW', '#beautiful'],
        likes: ['sneakersby', 'velitchenkoyury', 'anton_oleshkevich_stpr', 'evgeniygavrilin', 'wylsacom', 'evaktotam', 'anton.xameleon.by', 'yurydud', 'obladaet', 'filonka113']
    },
    {
        id: '13',
        description: 'Віцебск, мы на месцы!',
        createdAt: new Date('2018-03-02T10:10:31'),
        author: 'naviband',
        photoLink: 'https://github.com/NNikiforov/Training-practice/blob/master/task3/UI/img/photo/post14.jpg?raw=true',
        hashTags: ['#music', '#vtb', '#Minsk'],
        likes: ['evgeniygavrilin', 'wylsacom', 'evaktotam', 'anton.xameleon.by', 'yurydud', 'obladaet', 'filonka113']
    },
    {
        id: '14',
        description: '',
        createdAt: new Date('2018-03-01T20:16:38'),
        author: 'filonka113',
        photoLink: 'https://github.com/NNikiforov/Training-practice/blob/master/task3/UI/img/photo/post13.jpg?raw=true',
        hashTags: ['#beautiful'],
        likes: ['sneakersby', 'velitchenkoyury', 'anton_oleshkevich_stpr', 'evgeniygavrilin', 'wylsacom', 'evaktotam', 'anton.xameleon.by', 'yurydud', 'obladaet']
    },
    {
        id: '15',
        description: 'В директ часто бросают портреты, но я их никогда не пощу. Но тут сходство - просто стопроцентное, поэтому не смог удержаться',
        createdAt: new Date('2018-02-24T21:41:32'),
        author: 'yurydud',
        photoLink: 'https://github.com/NNikiforov/Training-practice/blob/master/task3/UI/img/photo/post15.jpg?raw=true',
        hashTags: ['#art', '#2018'],
        likes: ['beardserk', 'wylsacom', 'evaktotam', 'anton.xameleon.by', 'obladaet', 'filonka113']
    },
    {
        id: '16',
        description: 'Пока вы крепко спали я работал до 3 утра в семейном баре «Винный Шкаф», где днём спокойно, а вечером зачетное сафари. К сожалению, охочусь только на еду и напитки. ',
        createdAt: new Date('2018-03-02T09:12:31'),
        author: 'koko_by',
        photoLink: 'https://github.com/NNikiforov/Training-practice/blob/master/task3/UI/img/photo/post16.jpg?raw=true',
        hashTags: ['#food', '#Minsk'],
        likes: ['beardserk', 'sneakersby', 'velitchenkoyury', 'anton_oleshkevich_stpr', 'evgeniygavrilin', 'wylsacom', 'evaktotam', 'anton.xameleon.by', 'yurydud', 'obladaet', 'filonka113']
    },
    {
        id: '17',
        description: 'Спасибо, что красиво вошла в мою грешную жизнь.',
        createdAt: new Date('2018-03-02T20:14:36'),
        author: 'beardserk',
        photoLink: 'https://github.com/NNikiforov/Training-practice/blob/master/task3/UI/img/photo/post17.jpg?raw=true',
        hashTags: ['#sport', '#2018'],
        likes: ['kryshaleyla', 'velitchenkoyury', 'anton_oleshkevich_stpr', 'evgeniygavrilin', 'wylsacom', 'evaktotam', 'anton.xameleon.by', 'yurydud', 'obladaet', 'filonka113']
    },
    {
        id: '18',
        description: 'клип на KENNY уже очень близко❗️как думаете, что в этом кейсе⁉️',
        createdAt: new Date('2018-03-01T04:14:35'),
        author: 'obladaet',
        photoLink: 'https://github.com/NNikiforov/Training-practice/blob/master/task3/UI/img/photo/post18.jpg?raw=true',
        hashTags: ['#music', '#msk'],
        likes: ['sneakersby', 'velitchenkoyury', 'anton_oleshkevich_stpr', 'evgeniygavrilin', 'beardserk', 'evaktotam', 'anton.xameleon.by', 'yurydud', 'obladaet', 'filonka113']
    },
    {
        id: '19',
        description: 'back2u',
        createdAt: new Date('2018-03-03T08:14:59'),
        author: 'kryshaleyla',
        photoLink: 'https://github.com/NNikiforov/Training-practice/blob/master/task3/UI/img/photo/post19.jpg?raw=true',
        hashTags: ['#beautiful', '#girl', '#LIKE4LIKE'],
        likes: ['koko_by', 'wylsacom', 'evaktotam', 'anton.xameleon.by', 'yurydud', 'obladaet', 'filonka113']
    },
    {
        id: '20',
        description: 'Настало время лежать под теплым одеялком, смотреть фильмы, пить травяной чай и вкусно есть.',
        createdAt: new Date('2018-03-01T23:21:47'),
        author: 'koko_by',
        photoLink: 'https://github.com/NNikiforov/Training-practice/blob/master/task3/UI/img/photo/post20.jpg?raw=true',
        hashTags: ['#Minsk', '#food', '#eating'],
        likes: ['kryshaleyla', 'velitchenkoyury', 'anton_oleshkevich_stpr', 'evgeniygavrilin', 'wylsacom', 'evaktotam', 'anton.xameleon.by', 'yurydud', 'obladaet', 'filonka113']
    }
];

/*let filterConfig = {
    date: new Date('2018-02-23T23:00:00');
    author: '';
    hashTags: '';
}*/

let module = (function () {
    function getPhotoPosts(skip, top, filterConfig) {
        skip = skip || 0;
        top = top || 10;
        filterConfig = filterConfig || {};

        let array = photoPosts;

        if ('date' in filterConfig && filterConfig.date !== 'Invalid Date') {
            array = array.filter(function (obj) {
                if (obj.createdAt === 'Invalid Date')
                    return false;
                else
                    return obj.createdAt >= filterConfig.date;
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

        array = array.sort(function (a, b) {
            return b.createdAt - a.createdAt;
        });

        array = array.slice(skip, (skip + top));

        return array;
    }

    let getPhotoPost = function (postID) {
        return photoPosts[photoPosts.findIndex(post => post.id === postID)];
    };

    function validatePhotoPost(photoPost) {

        //проверак на существование id и его тип
        if (!('id' in photoPost) || typeof(photoPost.id) !== 'string')
            return false;

        //проверка на уникальность id
        if (photoPosts.some(function (obj) {
                return obj.id === photoPost.id;
            })) {
            return false;
        }

        //проверка на существование description и его тип
        if (!('description' in photoPost) && typeof(photoPost.description) !== 'string')
            return false;

        //проверка размера description
        if (photoPost.description.length >= 200)
            return false;

        //проверка на существование createdAt и его тип
        if (!('createdAt' in photoPost) && typeof(photoPost.createdAt) !== 'Date')
            return false;

        //проверка на существование author и его тип
        if (!('author' in photoPost) && typeof(photoPost.author) !== 'string')
            return false;

        //проверка размера author
        if (photoPost.author.length <= 0)
            return false;

        //проверка на существование photoLink и его тип
        if (!('photoLink' in photoPost) && typeof(photoPost.photoLink) !== 'string')
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
        return photoPosts.length + 1 === photoPosts.push(photoPost);
    }

    function editPhotoPost(postID, photoPost) {
        let index = photoPosts.findIndex(post => post.id === postID);
        if (index != -1) {
            photoPost.id = postID.toString();
            photoPost.createdAt = photoPosts[index].createdAt;
            photoPost.author = photoPosts[index].author;
            photoPost.likes = photoPosts[index].likes;

            if (!('description' in photoPost)) {
                photoPost.description = photoPosts[index].description;
            }

            if (!('photoLink' in photoPost)) {
                photoPost.photoLink = photoPosts[index].photoLink;
            }

            if (!('hashTags' in photoPost)) {
                photoPost.hashTags = photoPosts[index].hashTags;
            }

            let chengeablePost = photoPosts[index];

            removePhotoPost(photoPosts[index].id);
            if (!validatePhotoPost(photoPost)) {
                addPhotoPost(chengeablePost);
                return false;
            }

            addPhotoPost(photoPost);

            return true;
        }
    }

    function removePhotoPost(postID) {
        let index = photoPosts.findIndex(post => post.id === postID);
        if (index != -1) {
            photoPosts.splice(index, 1);
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

console.log('Default photoposts:');
console.log(photoPosts);

console.log('getPhotoPosts:');
console.log('Filtered posts:');
console.log(module.getPhotoPosts(0, 20));
console.log('First 10, filtered posts:');
console.log(module.getPhotoPosts(0, 10));
console.log('5 filtered posts since 3:');
console.log(module.getPhotoPosts(3, 5));
console.log('First 15, filtered by date:"2018-03-02 00:00:00" posts:');
console.log(module.getPhotoPosts(0, 15, {date: new Date('2018-03-02T00:00:00')}));
console.log('First 15, filtered by wrong date:"xxx" posts:');
console.log(module.getPhotoPosts(0, 15, {date: new Date('xxx')}));
console.log('First 10, filtered by author:"koko_by" posts:');
console.log(module.getPhotoPosts(0, 10, {author: 'koko_by'}));
console.log('First 10, filtered by tags:" #2018", "#beautiful" posts:');
console.log(module.getPhotoPosts(0, 10, {hashTags: ['#2018', '#beautiful', '']}));
console.log('First 10, filtered by tags:" #2018", "#beautiful" and by date:"2018-03-02 00:00:00" posts:');
console.log(module.getPhotoPosts(0, 10, {
    date: new Date('2018-03-02T00:00:00'),
    hashTags: ['#2018', '#beautiful', '']
}));

console.log('getPhotoPost:');
console.log('Get post with id:3:');
console.log(module.getPhotoPost('3'));
console.log('Get post with wrong id:33:');
console.log(module.getPhotoPost('33'));

console.log('addPhotoPost:');
console.log('Add correct post:');
console.log(module.addPhotoPost({
    id: '27',
    description: 'Спасибо, что красиво вошла в мою грешную жизнь.',
    createdAt: new Date('2018-03-02T20:14:36'),
    author: 'beardserk',
    photoLink: 'https://github.com/NNikiforov/Training-practice/blob/master/task3/UI/img/photo/post17.jpg?raw=true',
    hashTags: ['#sport', '#2018'],
    likes: ['kryshaleyla', 'velitchenkoyury', 'anton_oleshkevich_stpr', 'evgeniygavrilin', 'wylsacom', 'evaktotam', 'anton.xameleon.by', 'yurydud', 'obladaet', 'filonka113']
}) ? 'Post added' : 'Post didnot add');
console.log('Add wrong post:');
console.log(module.addPhotoPost({
    id: '27',
    description: 'Спасибо, что красиво вошла в мою грешную жизнь.',
    createdAt: new Date('2018-03-02T20:14:36'),
    author: 'beardserk',
    photoLink: 'https://github.com/NNikiforov/Training-practice/blob/master/task3/UI/img/photo/post17.jpg?raw=true',
    hashTags: ['#sport', '#2018'],
    likes: ['kryshaleyla', 'velitchenkoyury', 'anton_oleshkevich_stpr', 'evgeniygavrilin', 'wylsacom', 'evaktotam', 'anton.xameleon.by', 'yurydud', 'obladaet', 'filonka113']
}) ? 'Post added' : 'Post didnot add');

console.log('editPhotoPost:');
console.log('Change post description with id 27:');
console.log(module.editPhotoPost('27', {description: 'Спасибо.!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'}) ? 'Post changed' : 'Post didnot change');
console.log('Try to change post with id 27 by wrong description:');
console.log(module.editPhotoPost('27', {description: '???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????'}) ? 'Post changed' : 'Post didnot change');
console.log('Try to change post with wrong id 37:');
console.log(module.editPhotoPost('37', {description: '???????????????'}) ? 'Post changed' : 'Post didnot change');

console.log('editPhotoPost:');
console.log('Remove post with id 27:');
console.log(module.removePhotoPost('27') ? 'Post removed' : 'Post didnot remove');
console.log('Try ti remove post with id 27:');
console.log(module.removePhotoPost('27') ? 'Post removed' : 'Post didnot remove');