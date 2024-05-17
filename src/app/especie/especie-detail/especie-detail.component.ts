import { Component, OnInit, Input } from '@angular/core';
import { EspecieDetail } from '../especieDetail';

@Component({
  selector: 'app-especie-detail',
  templateUrl: './especie-detail.component.html',
  styleUrls: ['./especie-detail.component.css']
})
export class EspecieDetailComponent implements OnInit {

  @Input() especieDetail!: EspecieDetail;

  constructor() { }

  ngOnInit() {
  }

}
