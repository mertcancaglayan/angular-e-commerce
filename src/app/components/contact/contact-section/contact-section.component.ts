import { Component } from '@angular/core';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactInfoComponent } from "./contact-info/contact-info.component";

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [ContactFormComponent, ContactInfoComponent],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss',
})
export class ContactSectionComponent {}
