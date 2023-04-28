import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calcularMedia';

  codigoRMA: number = 222226;
  nome: string = "Cristiano Ronaldo";
  nota: number[] = [7, 6, 5, 10];
  media: number;
  imagem1: string = '../assets/cr7.jpg'

  codigoRMA2: number = 222226;
  nome2: string = "Lionel Messi";
  nota2: number[] = [10, 10, 10, 10];
  media2: number;
  imagem2: string = '../assets/Messi.jpg'

  codigoRMA3: number = 222226;
  nome3: string = "Neymar Jr.";
  nota3: number[] = [10, 8, 8, 6];
  media3: number;
  imagem3: string = '../assets/Neymar Jr.jpg'

  codigoRMA4: number = 222226;
  nome4: string = "Kylian Mbappé";
  nota4: number[] = [9, 8, 6, 7];
  media4: number;
  imagem4: string = '../assets/mbappe.jpg'

  codigoRMA5: number = 222226;
  nome5: string = "LeBron James";
  nota5: number[] = [8.5, 9.5, 10, 10];
  media5: number;
  imagem5: string = '../assets/LeBron James.jpg'




  constructor() {
    let soma = 0;
    for(let c = 0; c < this.nota.length; c++) {
      soma += this.nota[c];
    }
    this.media = soma / this.nota.length;

    let soma2 = 0;
    for(let c = 0; c < this.nota2.length; c++) {
      soma2 += this.nota2[c];
    }
    this.media2 = soma2 / this.nota2.length;

    let soma3 = 0;
    for(let c = 0; c < this.nota3.length; c++) {
      soma3 += this.nota3[c];
    }
    this.media3 = soma3 / this.nota3.length;

    let soma4 = 0;
    for(let c = 0; c < this.nota4.length; c++) {
      soma4 += this.nota4[c];
    }
    this.media4 = soma4 / this.nota4.length;

    let soma5 = 0;
    for(let c = 0; c < this.nota5.length; c++) {
      soma5 += this.nota5[c];
    }
    this.media5 = soma5 / this.nota5.length;
  }
}

