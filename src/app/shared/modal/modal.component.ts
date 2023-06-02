import { Component, OnInit } from '@angular/core';
import { ModelService } from 'src/app/services/model.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  //providers: [ModelService]
})
export class ModalComponent implements OnInit{

  constructor(public model: ModelService) {}

  ngOnInit(): void {

  }

}
