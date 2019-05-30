export class Property {

  public price: number;
  public place: string;
  public imgName: string;
  public id: number;

  constructor(price?: number, place?: string, img?: string, id?: number) {
    this.price = price || 0;
    this.place = place || '';
    this.imgName = img || '';
    this.id = id || 0;
  }

}