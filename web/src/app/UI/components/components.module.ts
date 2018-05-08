import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../../Material Design/material.module';
import { FullHeightDirective } from './full-height.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TipSelectorComponent } from './tip-selector/tip-selector.component';


@NgModule({
  declarations: [LoginComponent, HomeComponent, FullHeightDirective, TipSelectorComponent],
  imports: [NgbModule, ReactiveFormsModule, MaterialModule, CommonModule,FormsModule],
  exports:[FullHeightDirective]
})
export class ComponentsModule { }
