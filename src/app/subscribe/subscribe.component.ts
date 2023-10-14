import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css'],
})
export class SubscribeComponent {
  subscribeForm: FormGroup;
  grades = ['A', 'B', 'C', 'D', 'E', 'F'];

  constructor(private fb: FormBuilder) {
    this.subscribeForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      childName: ['', Validators.required],
      childDOB: this.fb.group({
        date: [
          '',
          [Validators.required, Validators.min(1), Validators.max(31)],
        ],
        month: [
          '',
          [Validators.required, Validators.min(1), Validators.max(12)],
        ],
        year: [
          '',
          [Validators.required, Validators.min(2000), Validators.max(2023)],
        ],
      }),
      grade: ['', Validators.required],
      gender: ['', Validators.required],
      topics: this.fb.array(this.topics.map((t) => this.fb.control(false))),
    });
  }
  topics = [
    { label: 'Topic1', value: 'Topic1', isChecked: false },
    { label: 'Topic2', value: 'Topic2', isChecked: false },
    { label: 'Topic3', value: 'Topic3', isChecked: false },
    { label: 'Topic4', value: 'Topic4', isChecked: false },
    { label: 'Topic5', value: 'Topic5', isChecked: false },
  ];

  onChange(event: any) {
    console.log('event : ', event);

    let index = this.topics.length;
    while (index--) {
      this.topics[index]['value'] === event.value
        ? (this.topics[index]['isChecked'] = !event.isChecked)
        : null;
    }
  }
  submit() {
    console.log(this.subscribeForm.value);
  }
}
