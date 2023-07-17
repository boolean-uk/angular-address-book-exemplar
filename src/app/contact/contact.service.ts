import { Injectable } from '@angular/core';
import { Contact } from './models/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private currentId = 1;
  public contacts: Contact[] = [];

  public addContact(toAdd: Omit<Contact, 'id'>) {
    this.contacts.push({
      id: String(this.currentId++),
      ...toAdd,
    });
  }

  public getContactById(id: string | null): Contact | null {
    const contact = this.contacts.find((contact) => contact.id === id);
    if (!contact) {
      return null;
    }
    return contact;
  }
}
