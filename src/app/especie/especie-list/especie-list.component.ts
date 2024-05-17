import { Component, OnInit } from '@angular/core';
import { EspecieDetail } from '../especieDetail';
import { EspecieService } from '../especie.service';

@Component({
  selector: 'app-especie-list',
  templateUrl: './especie-list.component.html',
  styleUrls: ['./especie-list.component.css']
})
export class EspecieListComponent implements OnInit {

  especies: Array<EspecieDetail> = [];

  constructor(private especieService: EspecieService) { }

  

  selectedEspecie!: EspecieDetail;

  selected: Boolean = false;

  onSelected(especie: EspecieDetail): void {
    this.selected = true;
    this.selectedEspecie= especie;
  }

  getEspecieList(): void {
    this.especieService.getEspecies()
      .subscribe(especies => this.especies = especies);
  }

  
  especieMayorDistribucion(especies: EspecieDetail[]): EspecieDetail | null {
    let mayorDistribucion: number = 0;
    let especieConMayorDistribucion: EspecieDetail | null = null;
  
    especies.forEach((especie) => {
      let distribucion = especie.global_distibution.split(',');
      if (distribucion.length > mayorDistribucion) {
        mayorDistribucion = distribucion.length;
        especieConMayorDistribucion = especie;
      }
    });
  
    return especieConMayorDistribucion;
  }
  

  ngOnInit() {
    this.getEspecieList();
  }

}
