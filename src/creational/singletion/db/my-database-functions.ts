import { IUser } from '../interfaces/user';

const users: IUser[] = [];

export const MyDatabaseFunction = (() => {
  return {
    add(user: IUser): void {
      users.push(user);
    },
    remove(index: number): void {
      users.slice(index, 1);
    },
    show() {
      for (const user of users) {
        console.log(user);
      }
    },
  };
})();
