// import { myDatabaseClassic } from './module_a';

import { MyDatabaseFunction } from './db/my-database-functions';

import { myDatabaseClassic as MydatabaseFromModuleA } from './module_a';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({
  name: 'Fernando',
  age: 19,
});
myDatabaseClassic.add({
  name: 'Junior',
  age: 20,
});
myDatabaseClassic.add({
  name: 'Maria',
  age: 20,
});
myDatabaseClassic.show();

console.log(MydatabaseFromModuleA === myDatabaseClassic);
