import { Component } from '@angular/core';
import { Recursos } from './Recursos';

@Component({
  selector: 'app-recursos',
  templateUrl: './recursos.component.html',
  styleUrls: ['./recursos.component.css']
})
export class RecursosComponent {



  recursos: Recursos[] = []

}
