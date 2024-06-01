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
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'dumbells.jpg',
      category: categories[3]._id,
      price: 149.99,
      quantity: 120,
    },
    {
      name: 'Multi-color Bumper plates 2.5 lb. - 45 lb.',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'bumperPlates.jpg',
      category: categories[1]._id,
      price: 369.99,
      quantity: 75
    },
    {
      name: 'kettle bells 5 lb. - 45 lb.',
      category: categories[3]._id,
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: 'kettleBells.jpg',
      price: 209.99,
      quantity: 110
    },
    {
      name: 'Barbell clamps',
      category: categories[5]._id,
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: 'barbell-Clamps.jpg',
      price: 19.99,
      quantity: 300
    },{
      name: 'Barbell',
      category: categories[0]._id,
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: 'barbell.jpg',
      price: 119.99,
      quantity: 141
    },
    {
      name: 'Bumper plates 2.5 lb. - 45 lb.',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'bumperPlates3.jpg',
      category: categories[1]._id,
      price: 299.99,
      quantity: 25
    },
    {
      name: 'interlocking foam mats ',
      category: categories[5]._id,
      description:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      image: 'locking-matts.jpg',
      price: 49.99,
      quantity: 392
    },
    {
      name: 'foam roller',
      category: categories[5]._id,
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      image: 'foam-roller.jpg',
      price: 14.99,
      quantity: 124
    },
    {
      name: 'Adjustable rack for bench press/squat rack',
      category: categories[2]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: 'benchSquatRack.jpg',
      price: 189.99,
      quantity: 30
    },
    {
      name: 'Multi-color kettleBells 2.5 lb. - 45 lb.',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'kettleBells2.jpg',
      category: categories[3]._id,
      price: 249.99,
      quantity: 67
    },
    {
      name: 'curlbar',
      category: categories[0]._id,
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: 'curlbar.jpg',
      price: 119.99,
      quantity: 30
    },
    {
      name: 'Weight rack ',
      category: categories[2]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'weightrack.jpg',
      price: 89.99,
      quantity: 154
    },
    {
      name: 'Multi-color Bumper plates 2.5 lb. - 45 lb.',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'bumperPlates7.jpg',
      category: categories[1]._id,
      price: 279.99,
      quantity: 91
    },
    {
      name: 'Pull up bar',
      category: categories[2]._id,
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: 'pullupbar.jpg',
      price: 69.99,
      quantity: 101
    },
    {
      name: 'Punching bag',
      category: categories[4]._id,
      description:
        'Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.',
      image: 'punchingbag.jpg',
      price: 149.99,
      quantity: 35
    },
    {
      name: 'Boxing gloves',
      category: categories[4]._id,
      description:
        'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
      image: 'boxinggloves.jpg',
      price: 49.99,
      quantity: 135
    },
    {
      name: 'smith machine multifunctional ',
      category: categories[2]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
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
