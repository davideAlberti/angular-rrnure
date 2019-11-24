import { Component } from "@angular/core";
import { ImageMapCoordinate } from '../helper/image-map/image-map.component';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent {

  constructor() {}
  image: string = "https://firebasestorage.googleapis.com/v0/b/domotica-3ef63.appspot.com/o/piano1.svg?alt=media&token=693f2216-2e3d-444c-be9d-63d5e385fcfe";
  coordinates: ImageMapCoordinate[] = [
    {
      name: "cucina",
      x: 105,
      y: 162,
      width: 580,
      height: 385
    },
    {
      name: "sala",
      x: 105,
      y: 560,
      width: 580,
      height: 385
    }
  ];

  showImage: boolean;

  getClick(coordinate: ImageMapCoordinate) {
    console.log(`Clicked on ${coordinate.name}`);
  }
}
