import { MyDatabaseFunction } from './db/my-database-functions';

const myDatabaseClassic = MyDatabaseFunction;

myDatabaseClassic.add({
  name: 'Rafael',
  age: 19,
});
myDatabaseClassic.add({
  name: 'Pedro',
  age: 20,
});
myDatabaseClassic.add({
  name: 'João',
  age: 20,
});
// myDatabaseClassic.show();

export { myDatabaseClassic };
