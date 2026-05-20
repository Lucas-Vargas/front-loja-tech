import { Routes } from '@angular/router';
import { Vitrine  } from './pages/vitrine/vitrine';
import { Carrinho } from './pages/carrinho/carrinho';
import { ProdutoDetalhe } from './pages/produto-detalhe/produto-detalhe';
import { NaoEncontrada } from './pages/nao-encontrada/nao-encontrada';

export const routes: Routes = [
    {path: '', redirectTo:'vitrine',pathMatch:'full'},
    {path: 'vitrine', component: Vitrine},
    {path: 'carrinho', component: Carrinho},
    {path: 'produto-detalhe', component: ProdutoDetalhe},
    {path: '**', component: NaoEncontrada}   
];
