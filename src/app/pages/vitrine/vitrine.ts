import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-vitrine',
  imports: [RouterLink, CommonModule],
  templateUrl: './vitrine.html',
  styleUrl: './vitrine.css',
})
export class Vitrine {
  produtos=[
    {id:1, nome: 'teste1', preco: 1},
    {id:2, nome: 'teste2', preco: 2},
    {id:3, nome: 'teste3', preco: 3},
  ]
}
