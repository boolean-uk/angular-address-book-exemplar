import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ListComponent, CreateComponent, ViewComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [ListComponent, CreateComponent, ViewComponent],
})
export class ContactModule {}
