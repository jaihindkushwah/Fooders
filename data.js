const featuredMenu=[
    {
        "name":"Ravioli",
        "img":"https://m.recipes.timesofindia.com/thumb/60891949.cms?width=390&height=380",
        "price":'8'
    },
    {
        "name":"Black Pasta",
        "img":"img/menuImg2.jpg",
        "price":"15"
    },
    {
        "name":"Gelato",
        "img":"img/menuImg3.jpg",
        "price":"12"
    },
    {
        "name":"Noodles",
        "img":"https://cdn3.mydukaan.io/app/image/500x500/?url=https://mydukaan-prod-new.s3.amazonaws.com/99865/8f28a60c-e01b-45f2-9b9c-094ab19230f6.png",
        "price":"5"
    },
    {
        "name":"Chole Bhature",
        "img":"https://img.freepik.com/premium-photo/chole-bhature-spicy-chick-peas-curry-also-known-as-chole-channa-masala-is-traditional-north-indian-main-course-recipe-usually-served-with-fried-puri-bhature-selective-focus_726363-295.jpg?w=400",
        "price":"8"
    },
    {
        "name":"Egg Curry",
        "img":"https://static.toiimg.com/thumb/msid-88283972/88283972.jpg?width=500&resizemode=4",
        "price":"10"
    }
    
];


const delivery=[
    {
        "img":"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
        "p":"Pizza"
    },
    {
      "img":"https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
      "p":"Biryani"
    },
    {
        "img":"https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
        "p":"Burger"
    },
    {
        "img":"https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png",
        "p":"Thali",
    },
    {
        "img":"https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
        "p":"Rolls"
    },
    {
        "img":"https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
        "p":"Chicken"
    },
    {
        "img":"https://b.zmtcdn.com/data/dish_images/e44c42ff4b60b025225c8691ef9735b11635781903.png",
        "p":"Paneer"
    },
    {
        "img":"https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png",
        "p":"Cake"
    },
    {
        "img":"https://b.zmtcdn.com/data/dish_images/91c554bcbbab049353a8808fc970e3b31615960315.png",
        "p":"Fried Rice"
    },
    {
        "img":"https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png",
        "p":"Dosa"
    },
    {
        "img":"https://b.zmtcdn.com/data/o2_assets/4c7697178c268c50e1b1641fca205c231634401116.png",
        "p":"Ice Cream"
    }
];

const dining=[
    {
        "img":"https://lh5.googleusercontent.com/p/AF1QipORv3NtT1QR3MjeHqTb0sobjRvsAG9u2AWag0Q6=w426-h240-k-no",
        "p":"12 Best Rooftop Places"
    },
    {
        "img":"http://decoholic.org/wp-content/uploads/2018/01/Most-Instagram-Worthy-Places-In-Paris.jpg",
        "p":"8 Best Insta Worthy Places"
    },
    {
        "img":"https://imgmedia.lbb.in/media/2019/06/5d0790adc3fb911717a73f8d_1560776877544.jpg",
        "p":"Sea Viewing Dining Places"
    },
    {
        "img":"https://static.boredpanda.com/blog/wp-content/uploads/2016/09/worlds-most-amazing-restaurants-unique-dining-experiences-4-57e51f07a7707__880.jpg",
        "p":"20 Unique Dining Places"
    },
    {
        "img":"data:image/jpeg;base64,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",
        "p":"10 Forest Dining Places"
    },
    {
        "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMubrlQ5wUtXfK8lP3eyGm-E_wGPROUvOcQA&usqp=CAU",
        "p":"The Hill Top Dining Place"
    }     
];

const nightlife=[
    {
        "img":"https://img.traveltriangle.com/blog/wp-content/uploads/2018/06/Cover5.jpg",
        "p":"12 Lit Party Places"
    }
];




