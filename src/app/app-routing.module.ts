import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/pages/home/home.component';
import { AllToolsComponent } from './components/pages/all-tools/all-tools.component';
import { LeafNodeComponent } from './components/pages/leaf-node/leaf-node.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'all-tools', component: AllToolsComponent },
  { path: 'all-tools/:id', component: AllToolsComponent },
  { path: 'leaf-node', component: LeafNodeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
