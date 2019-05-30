export class Property {

  public price: number;
  public place: string;
  public imgName: string;

  constructor(price?: number, place?: string, img?: string) {
    this.price = price || 0;
    this.place = place || '';
    this.imgName = img || '';
  }

}