import { Component } from '@angular/core';

@Component({
  selector: 'app-marquee',
  templateUrl: './marquee.component.html',
  styleUrl: './marquee.component.scss'
})
export class MarqueeComponent{
  logos: string[] = [
    '../../../../assets/logos/Sony.svg',
    '../../../../assets/logos/Ford.svg',
    '../../../../assets/logos/Nasa.svg',
    '../../../../assets/logos/Adobe.svg',
    '../../../../assets/logos/Paypal.svg',
    '../../../../assets/logos/Splunk.svg',
    '../../../../assets/logos/Autodesk.svg',
  ];


}