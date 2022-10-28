const { Posts } = require('../models');

const JunkFiles = [
  {
    id: '1',
    description: 'April 20, 2021 07:00:00',
    typeOfDrone: 'June 21, 2021 17:00:00',
    tags: 'Stuff'
  },
  {
    id: '2',
    description:'June 22, 2021 09:00:00',
    typeOfDrone: 'September 22, 2021 22:00:00',
    tags: 'Stuff'
  },
  {
    id: '3',
    description:'September 23, 2021 08:30:00',
    typeOfDrone:  'December 21, 2021 20:30:00',
    tags: 'Stuff'
  },
  {
    id: '4',
    description: 'December 22, 2020 11:00:00',
    typeOfDrone: 'March 19, 2021 19:00:00',
    tags: 'Stuff'
  },
];

const TestingPost= () => Posts.bulkCreate(JunkFiles);

module.exports = TestingPost;