import { IUser } from '../interfaces/user';

export class MyDatabaseClassic {
  private static _instance: MyDatabaseClassic | null = null;

  private users: IUser[] = [];
  private constructor() {}

  public static get instance(): MyDatabaseClassic {
    if (MyDatabaseClassic._instance === null) {
      MyDatabaseClassic._instance = new MyDatabaseClassic();
    }
    return MyDatabaseClassic._instance;
  }

  add(user: IUser): void {
    this.users.push(user);
  }
  remove(index: number): void {
    this.users.slice(index, 1);
  }
  show() {
    for (const user of this.users) {
      console.log(user);
    }
  }
}
