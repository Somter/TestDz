import { Component } from '@angular/core';
import { Binding02PropertyComponent } from './building/binding02property.component';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [Binding02PropertyComponent],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {

}
