import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Applictionuser } from 'src/app/+models/applictionUser';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})

export class InformationComponent {
  @Input() user:Applictionuser|undefined;
  @Output() onRemove=new EventEmitter<Applictionuser>
}
