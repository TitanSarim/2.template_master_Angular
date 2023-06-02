import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
//import { ModelService } from '../services/model.service';


@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ModalComponent
  ],
  // providers: [
  //   ModelService
  // ]
})
export class SharedModule { }
