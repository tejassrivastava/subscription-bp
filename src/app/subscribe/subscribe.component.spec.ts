import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeComponent } from './subscribe.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('SubscribeComponent', () => {
  let component: SubscribeComponent;
  let fixture: ComponentFixture<SubscribeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubscribeComponent],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(SubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should require Name field', () => {
    const name = component.subscribeForm.get('name');
    name?.setValue('');
    expect(name?.valid).toBeFalsy();
  });

  it('should validate Name field as valid', () => {
    const name = component.subscribeForm.get('name');
    name?.setValue('John Doe');
    expect(name?.valid).toBeTruthy();
  });

  it('should require Email field', () => {
    const email = component.subscribeForm.get('email');
    email?.setValue('');
    expect(email?.valid).toBeFalsy();
  });

  it('should validate Email field as valid', () => {
    const email = component.subscribeForm.get('email');
    email?.setValue('test@example.com');
    expect(email?.valid).toBeTruthy();
  });

  it('should invalidate Email field with an invalid email', () => {
    const email = component.subscribeForm.get('email');
    email?.setValue('invalid-email');
    expect(email?.valid).toBeFalsy();
  });

  it('should require Child Name field', () => {
    const childName = component.subscribeForm.get('childName');
    childName?.setValue('');
    expect(childName?.valid).toBeFalsy();
  });

  it('should validate Child Name field as valid', () => {
    const childName = component.subscribeForm.get('childName');
    childName?.setValue('Child Name');
    expect(childName?.valid).toBeTruthy();
  });

  it('should require Child Date of Birth fields', () => {
    const childDOBGroup = component.subscribeForm.get('childDOB');
    childDOBGroup?.setValue({ date: 0, month: 0, year: 0 });
    expect(childDOBGroup?.valid).toBeFalsy();
  });

  it('should validate Child Date of Birth fields as valid', () => {
    const childDOBGroup = component.subscribeForm.get('childDOB');
    childDOBGroup?.setValue({ date: 5, month: 12, year: 2010 });
    expect(childDOBGroup?.valid).toBeTruthy();
  });

  it('should require Grade field', () => {
    const grade = component.subscribeForm.get('grade');
    grade?.setValue('');
    expect(grade?.valid).toBeFalsy();
  });

  it('should validate Grade field as valid', () => {
    const grade = component.subscribeForm.get('grade');
    grade?.setValue('Grade 5');
    expect(grade?.valid).toBeTruthy();
  });

  it('should require Gender field', () => {
    const gender = component.subscribeForm.get('gender');
    gender?.setValue('');
    expect(gender?.valid).toBeFalsy();
  });

  it('should validate Gender field as valid', () => {
    const gender = component.subscribeForm.get('gender');
    gender?.setValue('boy');
    expect(gender?.valid).toBeTruthy();
  });

  it('should validate Gender field as valid', () => {
    const gender = component.subscribeForm.get('gender');
    gender?.setValue('girl');
    expect(gender?.valid).toBeTruthy();
  });

  it('should invalidate Gender field with an invalid option', () => {
    const gender = component.subscribeForm.get('gender');
    gender?.setValue('');
    expect(gender?.valid).toBeFalsy();
  });

  it('should initialize checkboxes with default values', () => {
    const topics = component.subscribeForm.get('topics');
    expect(topics?.value.length).toBeGreaterThan(0);
    topics?.value.forEach((topicValue: any, index: any) => {
      expect(topicValue).toBe(false);
    });
  });
});
