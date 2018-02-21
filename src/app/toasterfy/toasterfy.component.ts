import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ToastAlert} from '../todo-list/state/todo-state';
import * as iziToast from 'izitoast';

// Silly people have written the types wrong, we'll make do with any :(
const toast = iziToast as any;

@Component({
  selector: 'app-toasterfy',
  templateUrl: './toasterfy.component.html',
  styleUrls: ['./toasterfy.component.scss']
})
export class ToasterfyComponent implements OnChanges {

  @Input() toast: ToastAlert;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['toast'] && this.toast) {
      toast[this.toast.type]({
        title: this.toast.title || '',
        message: this.toast.body
      });
    }
  }
}
