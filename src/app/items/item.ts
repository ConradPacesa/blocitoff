export class Item {
  constructor(
    public name: string,
    public user_id: number,
    public expires_at: string,
    public user: object
  ) { }

}
