import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) {}

  contactForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    street: ['', Validators.required],
    city: ['', Validators.required],
  });

  onSubmit() {
    const { firstName, lastName, street, city } = this.contactForm.value;
    if (!firstName || !lastName || !street || !city) {
      throw new Error('not all form fields are valid');
    }
    this.contactService.addContact({
      firstName,
      lastName,
      street,
      city,
    });
  }
}
