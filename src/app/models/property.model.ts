export class Property {

  public price: number;
  public name: string;
  public location: string;
  public imgURL: string;
  public id: number;
  public numStars: number;
  public stars: String[];

  constructor(price?: number, place?: string, loc?: string, img?: string, id?: number, numStars?: number) {
    this.price = price || 0;
    this.name = place || '';
    this.location = loc || '';
    this.imgURL = img || '';
    this.id = id || 0;
    this.numStars = numStars || 0;
    
    this.stars = ["star-outline", "star-outline", "star-outline", "star-outline", "star-outline"];
    let i: number;
    for (i = 0; i < this.numStars; i++) {
      this.stars[i] = "star";
    }
    if (this.numStars % 1 != 0) {
      this.stars[i - 1] = "star-half";
    }


  }

}