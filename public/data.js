let user = "sadgirlagr";

let photoPosts = [
    {
        id: '1',
        description: 'chindareva_d знает, что я люблю 💓😍🍦🍭🍨',
        createdAt: new Date('2018-03-03T20:11:31'),
        author: 'sadgirlagr',
        photoLink: 'https://github.com/NNikiforov/Training-practice/blob/master/task3/UI/img/photo/post1.jpg?raw=true',
        hashTags: ['#LOVE', '#LIKE4LIKE', '#FOLLOW'],
        likes: ['sneakersby', 'velitchenkoyury', 'anton_oleshkevich_stpr', 'evgeniygavrilin', 'wylsacom', 'evaktotam', 'anton.xameleon.by', 'yurydud', 'obladaet', 'filonka113'],
        isDeleted: false
    },
    {
        id: '2',
        description: 'Black or white? Which side would you choose ?',
        createdAt: new Date('2018-03-03T19:01:56'),
        author: 'sneakersby',
        photoLink: 'https://github.com/NNikiforov/Training-practice/blob/master/task3/UI/img/photo/post2.jpg?raw=true',
        hashTags: ['#sneakers', '#Minsk', '#sport', '#adidas'],
        likes: ['anton_oleshkevich_stpr', 'evgeniygavrilin', 'wylsacom', 'evaktotam', 'anton.xameleon.by', 'yurydud', 'obladaet', 'filonka113'],
        isDeleted: false
    },
    {
        id: '3',
        description: 'Постапокалиптический пейзаж в одно морозное утро. Витебск.',
        createdAt: new Date('2018-03-03T20:00:31'),
        author: 'velitchenkoyury',
        photoLink: 'https://github.com/NNikiforov/Training-practice/blob/master/task3/UI/img/photo/post3.jpg?raw=true',
        hashTags: ['#beautiful', '#vitebsk', '#city'],
        likes: ['anton_oleshkevich_stpr', 'evgeniygavrilin', 'wylsacom', 'evaktotam', 'anton.xameleon.by', 'yurydud', 'obladaet', 'filonka113'],
        isDeleted: false
    },
    {
        id: '4',
        description: 'Болен этой пушкой😌',
        createdAt: new Date('2018-03-02T02:11:11'),
        author: 'anton_oleshkevich_stpr',
        photoLink: 'https://github.com/NNikiforov/Training-practice/blob/master/task3/UI/img/photo/post4.jpg?raw=true',
        hashTags: ['#cars', '#tayota'],
        likes: ['wylsacom', 'nadyaaa.sh_', 'evaktotam', 'anton.xameleon.by', 'yurydud', 'obladaet', 'filonka113'],
        isDeleted: false
    },
    {
        id: '5',
        description: 'Знакомьтесь, команда Storiqa!',
        createdAt: new Date('2018-03-03T14:39:01'),
        author: 'evgeniygavrilin',
        photoLink: 'https://github.com/NNikiforov/Training-practice/blob/master/task3/UI/img/photo/post6.jpg?raw=true',
        hashTags: ['#busines', '#storiqa', '#msk'],
        likes: ['sneakersby', 'velitchenkoyury', 'anton_oleshkevich_stpr', 'evaktotam', 'anton.xameleon.by', 'yurydud', 'obladaet', 'filonka113'],
        isDeleted: false
    },
    {
        id: '6',
        description: '',
        createdAt: new Date('2018-03-03T13:20:37'),
        author: 'sneakersby',
        photoLink: 'https://github.com/NNikiforov/Training-practice/blob/master/task3/UI/img/photo/post5.jpg?raw=true',
        hashTags: ['#sneakers', '#Minsk', '#sport', '#adidas'],
        likes: ['velitchenkoyury', 'anton_oleshkevich_stpr', 'evgeniygavrilin', 'wylsacom', 'evaktotam', 'anton.xameleon.by', 'yurydud', 'obladaet', 'filonka113'],
        isDeleted: false
    },
    {
        id: '7',
        description: 'Прошел Bayonetta 2 на Switch. Очень хорошо. Хочу подобного больше, идеально играется.',
        createdAt: new Date('2018-03-03T08:11:31'),
        author: 'wylsacom',
        photoLink: 'https://github.com/NNikiforov/Training-practice/blob/master/task3/UI/img/photo/post7.jpg?raw=true',
        hashTags: ['#apple', '#tech', '#2018'],
        likes: ['sneakersby', 'nadyaaa.sh_', 'velitchenkoyury', 'anton_oleshkevich_stpr', 'evgeniygavrilin', 'anton.xameleon.by', 'yurydud', 'obladaet', 'filonka113'],
        isDeleted: false
    },
    {
        id: '8',
        description: 'минутка слабости',
        createdAt: new Date('2018-03-02T00:11:34'),
        author: 'evaktotam',
        photoLink: 'https://github.com/NNikiforov/Training-practice/blob/master/task3/UI/img/photo/post8.jpg?raw=true',
        hashTags: ['#memory', '#summer', '#beautiful'],
        likes: ['anton_oleshkevich_stpr', 'evgeniygavrilin', 'anton.xameleon.by', 'yurydud', 'obladaet', 'filonka113'],
        isDeleted: false
    },
    {
        id: '9',
        description: 'Сегодня начал читать трансформатор',
        createdAt: new Date('2018-03-02T11:19:41'),
        author: 'anton.xameleon.by',
        photoLink: 'https://github.com/NNikiforov/Training-practice/blob/master/task3/UI/img/photo/post9.jpg?raw=true',
        hashTags: ['#busines', '#msk', '#transformator'],
        likes: ['sneakersby', 'velitchenkoyury', 'anton_oleshkevich_stpr', 'evgeniygavrilin', 'wylsacom', 'evaktotam', 'yurydud', 'obladaet', 'filonka113'],
        isDeleted: false
    },
    {
        id: '10',
        description: 'Цветной каньон.Египет.',
        createdAt: new Date('2018-03-01T23:11:36'),
        author: 'velitchenkoyury',
        photoLink: 'https://github.com/NNikiforov/Training-practice/blob/master/task3/UI/img/photo/post10.jpg?raw=true',
        hashTags: ['#nature', '#2018', '#travel'],
        likes: ['csqtt', 'sneakersby', 'anton_oleshkevich_stpr', 'evgeniygavrilin', 'wylsacom', 'evaktotam', 'anton.xameleon.by', 'yurydud', 'obladaet', 'filonka113'],
        isDeleted: false
    },
    {
        id: '11',
        description: '',
        createdAt: new Date('2018-02-22T20:11:32'),
        author: 'csqtt',
        photoLink: 'https://github.com/NNikiforov/Training-practice/blob/master/task3/UI/img/photo/post11.jpg?raw=true',
        hashTags: ['#fashion', '#2018'],
        likes: ['nadyaaa.sh_', 'velitchenkoyury', 'anton_oleshkevich_stpr', 'evgeniygavrilin', 'wylsacom', 'evaktotam', 'anton.xameleon.by', 'yurydud', 'obladaet', 'filonka113'],
        isDeleted: false
    },
    {
        id: '12',
        description: 'From the past... 🌔💫',
        createdAt: new Date('2018-03-03T23:08:03'),
        author: 'nadyaaa.sh_',
        photoLink: 'https://github.com/NNikiforov/Training-practice/blob/master/task3/UI/img/photo/post12.jpg?raw=true',
        hashTags: ['#LIKE4LIKE', '#FOLLOW', '#beautiful'],
        likes: ['sneakersby', 'velitchenkoyury', 'anton_oleshkevich_stpr', 'evgeniygavrilin', 'wylsacom', 'evaktotam', 'anton.xameleon.by', 'yurydud', 'obladaet', 'filonka113'],
        isDeleted: false
    },
    {
        id: '13',
        description: 'Віцебск, мы на месцы!',
        createdAt: new Date('2018-03-02T10:10:31'),
        author: 'naviband',
        photoLink: 'https://github.com/NNikiforov/Training-practice/blob/master/task3/UI/img/photo/post14.jpg?raw=true',
        hashTags: ['#music', '#vtb', '#Minsk'],
        likes: ['evgeniygavrilin', 'wylsacom', 'evaktotam', 'anton.xameleon.by', 'yurydud', 'obladaet', 'filonka113'],
        isDeleted: false
    },
    {
        id: '14',
        description: '',
        createdAt: new Date('2018-03-01T20:16:38'),
        author: 'filonka113',
        photoLink: 'https://github.com/NNikiforov/Training-practice/blob/master/task3/UI/img/photo/post13.jpg?raw=true',
        hashTags: ['#beautiful'],
        likes: ['sneakersby', 'velitchenkoyury', 'anton_oleshkevich_stpr', 'evgeniygavrilin', 'wylsacom', 'evaktotam', 'anton.xameleon.by', 'yurydud', 'obladaet'],
        isDeleted: false
    },
    {
        id: '15',
        description: 'В директ часто бросают портреты, но я их никогда не пощу. Но тут сходство - просто стопроцентное, поэтому не смог удержаться',
        createdAt: new Date('2018-02-24T21:41:32'),
        author: 'yurydud',
        photoLink: 'https://github.com/NNikiforov/Training-practice/blob/master/task3/UI/img/photo/post15.jpg?raw=true',
        hashTags: ['#art', '#2018'],
        likes: ['beardserk', 'wylsacom', 'evaktotam', 'anton.xameleon.by', 'obladaet', 'filonka113'],
        isDeleted: false
    },
    {
        id: '16',
        description: 'Пока вы крепко спали я работал до 3 утра в семейном баре «Винный Шкаф», где днём спокойно, а вечером зачетное сафари. К сожалению, охочусь только на еду и напитки. ',
        createdAt: new Date('2018-03-02T09:12:31'),
        author: 'koko_by',
        photoLink: 'https://github.com/NNikiforov/Training-practice/blob/master/task3/UI/img/photo/post16.jpg?raw=true',
        hashTags: ['#food', '#Minsk'],
        likes: ['beardserk', 'sneakersby', 'velitchenkoyury', 'anton_oleshkevich_stpr', 'evgeniygavrilin', 'wylsacom', 'evaktotam', 'anton.xameleon.by', 'yurydud', 'obladaet', 'filonka113'],
        isDeleted: false
    },
    {
        id: '17',
        description: 'Спасибо, что красиво вошла в мою грешную жизнь.',
        createdAt: new Date('2018-03-02T20:14:36'),
        author: 'beardserk',
        photoLink: 'https://github.com/NNikiforov/Training-practice/blob/master/task3/UI/img/photo/post17.jpg?raw=true',
        hashTags: ['#sport', '#2018'],
        likes: ['kryshaleyla', 'velitchenkoyury', 'anton_oleshkevich_stpr', 'evgeniygavrilin', 'wylsacom', 'evaktotam', 'anton.xameleon.by', 'yurydud', 'obladaet', 'filonka113'],
        isDeleted: false
    },
    {
        id: '18',
        description: 'клип на KENNY уже очень близко❗️как думаете, что в этом кейсе⁉️',
        createdAt: new Date('2018-03-01T04:14:35'),
        author: 'obladaet',
        photoLink: 'https://github.com/NNikiforov/Training-practice/blob/master/task3/UI/img/photo/post18.jpg?raw=true',
        hashTags: ['#music', '#msk'],
        likes: ['sneakersby', 'velitchenkoyury', 'anton_oleshkevich_stpr', 'evgeniygavrilin', 'beardserk', 'evaktotam', 'anton.xameleon.by', 'yurydud', 'obladaet', 'filonka113'],
        isDeleted: false
    },
    {
        id: '19',
        description: 'back2u',
        createdAt: new Date('2018-03-03T08:14:59'),
        author: 'kryshaleyla',
        photoLink: 'https://github.com/NNikiforov/Training-practice/blob/master/task3/UI/img/photo/post19.jpg?raw=true',
        hashTags: ['#beautiful', '#girl', '#LIKE4LIKE'],
        likes: ['koko_by', 'wylsacom', 'evaktotam', 'anton.xameleon.by', 'yurydud', 'obladaet', 'filonka113'],
        isDeleted: false
    },
    {
        id: '20',
        description: 'Настало время лежать под теплым одеялком, смотреть фильмы, пить травяной чай и вкусно есть.',
        createdAt: new Date('2018-03-01T23:21:47'),
        author: 'koko_by',
        photoLink: 'https://github.com/NNikiforov/Training-practice/blob/master/task3/UI/img/photo/post20.jpg?raw=true',
        hashTags: ['#Minsk', '#food', '#eating'],
        likes: ['kryshaleyla', 'velitchenkoyury', 'anton_oleshkevich_stpr', 'evgeniygavrilin', 'wylsacom', 'evaktotam', 'anton.xameleon.by', 'yurydud', 'obladaet', 'filonka113'],
        isDeleted: false
    }
];