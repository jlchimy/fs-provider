import { Injectable } from '@angular/core';
import { Property } from '../models';
@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  public properties: Array<Property>;

  constructor() {}

  findPropertyById(id: number): Property {
    let foundProperty: Property = null;

    this.properties.forEach(
      (property: Property) => {
        if (property.id == id) {
          foundProperty = property;
        }
      } 
    )

    return foundProperty;
  }


}
