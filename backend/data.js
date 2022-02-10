import bcrypt from 'bcryptjs';

const data ={
    users: [
        {
          name: 'POPAdmin',
          email: 'admin@gmail.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: true,
        },
        {
           //customer
          name: 'Lean Elizebette',
          email: 'leanmijares@gmail.com',
          password: bcrypt.hashSync('66790', 8),
          isAdmin: false,
        },
      ],
    products:[
        {
            name: 'Luffy in Kimono',
            category: 'Animation',
            image: '../images/p1.jpg',
            price: 934,
            countInStock: 10,
            brand: 'Funko Pop!',
            rating: 4.5,
            numReview: 10,
            description: 'Toys And Games'
        },
        {
            name: 'Brook',
            category: 'Animation',
            image: '../images/p2.jpg',
            price: 660,
            countInStock: 12,
            brand: 'Funko Pop!',
            rating: 4,
            numReview: 20,
            description: 'Toys And Games'
        },
        {
            name: 'Crocodile',
            category: 'Animation',
            image: '../images/p3.jpg',
            price: 760,
            countInStock: 0,
            brand: 'Funko Pop!',
            rating: 4.5,
            numReview: 15,
            description: 'Toys And Games'
        },
        {
            name: 'All Might',
            category: 'Animation',
            image: '../images/p4.jpg',
            price: 608,
            countInStock: 19,
            brand: 'Funko Pop!',
            rating: 4.5,
            numReview: 9,
            description: 'Toys And Games'
        },
        {
            name: 'Himiko Toga',
            category: 'Animation',
            image: '../images/p5.jpg',
            price: 917,
            countInStock: 3,
            brand: 'Funko Pop!',
            rating: 4.5,
            numReview: 15,
            description: 'Toys And Games'
        },
        {
            name: 'Boruto Uzumaki',
            category: 'Animation',
            image: '../images/p6.jpg',
            price: 550,
            countInStock: 17,
            brand: 'Funko Pop!',
            rating: 5.0,
            numReview: 5,
            description: 'Toys And Games'
        },
        {
            name: 'Izuku Midoriya',
            category: 'Animation',
            image: '../images/p7.jpg',
            price: 1630,
            countInStock: 17,
            brand: 'Funko Pop!',
            rating: 5.0,
            numReview: 5,
            description: 'Toys And Games'
        },
        {
            name: 'Roronoa Zoro',
            category: 'Animation',
            image: '../images/p8.jpg',
            price: 950,
            countInStock: 17,
            brand: 'Funko Pop!',
            rating: 5.0,
            numReview: 5,
            description: 'Toys And Games'
        },
    ]
}

export default data;