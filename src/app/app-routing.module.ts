import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
//import { DramaComponent } from './drama/drama.component';
import { FictionComponent } from './fiction/fiction.component';


const routes: Routes = [
  { path: 'app-fiction', component: FictionComponent },
  { path: '', component: BooksComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
