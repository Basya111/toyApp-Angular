import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'toast-global',
  templateUrl: './toast-global.component.html',
  styleUrls: ['./toast-global.component.scss']
})
export class ToastGlobalComponent implements OnInit {

  constructor(public toastService: ToastService) {}

  ngOnInit(): void {
  }

  showStandard() {
    this.toastService.show('I am a standard toast');
  }

  showSuccess() {
    this.toastService.show('I am a success toast', { classname: 'bg-success text-light', delay: 10000 });
  }

  showDanger(dangerTpl) {
    this.toastService.show(dangerTpl, { classname: 'bg-danger text-light', delay: 15000 });
  }

}


