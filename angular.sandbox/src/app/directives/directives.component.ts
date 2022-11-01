import { Component, OnInit } from '@angular/core';
import { Colors } from '../enums';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  message: string = 'Angular built-in directives';

  constructor() { }

  ngOnInit() {
  }

  fontSizePt: number = 12;

  color: Colors = Colors.WaterBlue;
  public get colorName() : string {
    return Colors[this.color].toLowerCase();
  }

  colorClass: string = this.colorName;

  public applyFontSettings(sizeToApply: HTMLInputElement, colorToApply: HTMLInputElement): void {
    switch(colorToApply.value.toLowerCase()) {
      case 'red':
        this.color = Colors.Red;
        break;

      case 'green':
        this.color = Colors.Green;
        break;

      case 'blue':
        this.color = Colors.Blue;
        break;

      default:
        this.color = Colors.Unknown;
    }

    this.colorClass = colorToApply.value.toLowerCase();

    this.fontSizePt = Number.parseInt(sizeToApply.value);
  }
}
