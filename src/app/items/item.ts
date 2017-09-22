export class Item {
  constructor(
    public id: number,
    public name: string,
    public user_id: number,
    public expires_at: string,
    public completed: boolean,
    public user: object
  ) { }

}
