const db = require('./connection');
const { User, Product, Category } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('Category', 'categories');
  await cleanDB('Product', 'products');
  await cleanDB('User', 'users');

  const categories = await Category.insertMany([
    { name: 'Bars' },
    { name: 'plates' },
    { name: 'rigs and racks' },
    { name: 'handheld weights' },
    { name: 'boxing equipment' },
    { name: 'More equipment' }
  ]);

  console.log('categories seeded');

  const products = await Product.insertMany([
    {
      name: 'Dumbbell set  2 lb. - 45-lb',
      description:
        'The classic dumbell set a must have in your gym. This full set of dumbells are made from chrome plated handles and steel heads wrapped in a NBR and PVC mixture',
      image: 'dumbells.jpg',
      category: categories[3]._id,
      price: 149.99,
      quantity: 120,
    },
    {
      name: ' Bumper plates 2.5 lb. - 45 lb.',
      description:
        ' AthelicMIAs plates are equiped with stainless steel hub inserts. They are built for durablility and minimal drop bounce, these quality bumpers are built with a new multi-clor finish to be able to be identified easier from a distance.  ',
      image: 'bumperPlates.jpg',
      category: categories[1]._id,
      price: 369.99,
      quantity: 75
    },
    {
      name: 'kettle bells 5 lb. - 45 lb.',
      category: categories[3]._id,
      description:
        'All kettle bells are formed from raw ore into a solid single piece casting with a wobble free base and given a final powder coat and colored bands. ',
      image: 'kettleBells.jpg',
      price: 209.99,
      quantity: 110
    },
    {
      name: 'Barbell clamps',
      category: categories[5]._id,
      description:
        'Classic spring clamps that have been used and trusted for a very long time these clamps are made of durable steel that will last for a long time.',
      image: 'barbell-Clamps.jpg',
      price: 19.99,
      quantity: 300
    },{
      name: 'The classic PowerBar',
      category: categories[0]._id,
      description:
        ' The classic power bar is great for squats, deadlifts and bench pressing. Made from a single piece of steel the power bar is made to withstand all that is thrown at it. ',
      image: 'barbell.jpg',
      price: 119.99,
      quantity: 141
    },
    {
      name: 'Bumper plates 2.5 lb. - 45 lb.',
      description:
        'AthelicMIAs plates are equiped with stainless steel hub inserts. They are built for durablility and minimal drop bounce, these quality bumper plates are a little more subtle than the multi-color plates by only adding color to the letterings.',
      image: 'bumperPlates3.jpg',
      category: categories[1]._id,
      price: 299.99,
      quantity: 25
    },
    {
      name: 'interlocking foam tiles ',
      category: categories[5]._id,
      description:'Interlocking foam tiles are cut to fit perfectly together. Also Made from durable 2 inch thick foam these tiles will be perfect for absorbing impacts.',
      image: 'locking-matts.jpg',
      price: 49.99,
      quantity: 392
    },
    {
      name: 'foam roller',
      category: categories[5]._id,
      description:
        'Foam roller made from a thick, durable foam this roller is perfect for a pre workout stretch and many other workouts.',
      image: 'foam-roller.jpg',
      price: 14.99,
      quantity: 124
    },
    {
      name: 'Adjustable rack for bench press/squat rack',
      category: categories[2]._id,
      description:
        'The adjustable rack is made for both benching and squatting, The rack was also made to be space efficient but sturdy like the rest of our products. This rack is made of steel with precicely drilled holes to be able to have multiple heights. ',
      image: 'benchSquatRack.jpg',
      price: 189.99,
      quantity: 30
    },
    {
      name: 'kettleBells 2.5 lb. - 45 lb.',
      description:
      'All kettle bells are formed from raw ore into a solid single piece casting with a wobble free base and given a final powder coat. ',
      image: 'kettleBells2.jpg',
      category: categories[3]._id,
      price: 249.99,
      quantity: 67
    },
    {
      name: 'curlbar',
      category: categories[0]._id,
      description:'The classic curl bar made from the same steel as the power bar.',
      image: 'curlbar.jpg',
      price: 119.99,
      quantity: 30
    },
    {
      name: 'Weight rack ',
      category: categories[2]._id,
      description:'AthleticsMIAs very own weight rack designed to hold all kinds of weights from our own bumper plates, dumbells and kettle bells to any to any brands. Made from steel with bars that can be detached incase they arent being used or want to be swaapped out with any other atachments.',
      image: 'weightrack.jpg',
      price: 89.99,
      quantity: 154
    },
    {
      name: ' Bumper plates 2.5 lb. - 45 lb.',
      description:'The classic olympic bumper plates. Made of cast iron, these simple and durable plates are always going to be a great option to add to your gym.',
      image: 'bumperPlates7.jpg',
      category: categories[1]._id,
      price: 279.99,
      quantity: 91
    },
    {
      name: 'Pull up bar',
      category: categories[2]._id,
      description: 'The classic pull up bar can be hung on a door or mounted to a wall. This bar is made of steel and has handles for wide pull ups wrapped with foam tips for comfort and a bar in the middle for closer griped pull ups. ',
      image: 'pullupbar.jpg',
      price: 69.99,
      quantity: 101
    },
    {
      name: 'Heavy bag bag',
      category: categories[4]._id,
      description:
        'The heavy bag perfect for training. Has dual straps for more of a quite approach than chains, the bag is filled with foam and sand to have the perfect weight.',
      image: 'punchingbag.jpg',
      price: 149.99,
      quantity: 35
    },
    {
      name: 'Training  gloves',
      category: categories[4]._id,
      description:
        'The perfect gloves for training made with superior foam that helps reduce impact on the hand when wearing also have improved wrist wrap to be more stabalization and comfort when training. ',
      image: 'boxinggloves.jpg',
      price: 49.99,
      quantity: 135
    },
    {
      name: 'smith machine multifunctional ',
      category: categories[2]._id,
      description:
        'The ultimate gym machine, this machine mixes various different machines all in one. Made from our fine steel this machine is built to last a lifetime, This machine can target every mucsle group you desire to train, it will also save you tons of space by only needing one machine !',
      image: 'aio.jpg',
      price: 1199.99,
      quantity: 10 
    }
  ]);

  console.log('products seeded');

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
