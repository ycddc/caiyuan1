const menu=document.querySelector('#menu');
const lists = [
   {
     name:' ',
     img:'acc1.jpg',
     price:10000,
     rank:1,
   },
   {
    name:'muffler',
    img:'acc2.jpg',
    price:2500,
    rank:2,
  },
  {
    name:'lake',
    img:'acc3.jpg',
    price:4000,
    rank:3,
  },
  {
    name:'arcteryx',
    img:'acc4.jpg',
    price:14000,
    rank:4,
  },
  {
    name:'pants',
    img:'acc5.jpg',
    price:20000,
    rank:5,
  },
  {
    name:'sansan',
    img:'acc7.jpg',
    price:3000,
    rank:6,
  },
  {
    name:'gear',
    img:'acc8.jpg',
    price:3000,
    rank:6,
  },
  {
    name:'bape',
    img:'acc9.jpg',
    price:3000,
    rank:6,
  },
    
];



for(let i=0;i<lists.length;i++){
   const name=lists[i].name;
   const img=lists[i].img;
   const price=lists[i].price;
   const rank=lists[i].rank;

   const content=`<div><img src="img/${img}" alt=""><p>${name}</p>`;
  menu.insertAdjacentHTML('beforeend',content);
}

