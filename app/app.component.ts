import {Component} from '@angular/core';

export class Contact {
    mobile:number;
    name:string;

}
const CONTACTS:Contact[] = [
    {mobile: 454567, name: "jomon"},
    {mobile: 768874, name: "Sijo"},
    {mobile: 8764587, name: "Sumesh"},
    {mobile: 988567576, name: "Sreeja"},
    {mobile: 9768745665, name: "Rekha"},
    {mobile: 87873554, name: "Sreeraju"},
    {mobile: 43546789, name: "Biju"}
];

@Component({
    selector: 'my-app',
    template: `
<h2>{{title}}</h2>
<table class="table table-hover">
    <thead>
    <tr>
        <th>#</th>
        <th>Mobile</th>
        <th>Name</th>
        <th>Edit</th>
    </tr>
    </thead>
    <tbody>
    <tr *ngFor="let contact of contacts">
        <td>1</td>
        <td>{{contact.mobile}}</td>
        <td>{{contact.name}}</td>
        <td   [class.selected]="contact === selectedContact"
        (click)="onSelect(contact)" >
         <button type="button" class="btn btn-default btn-xs"><i class="badge">EDIT</i> </button>
         </td>
    </tr>
    </tbody>
</table>


<div *ngIf="selectedContact">
      <h2>{{selectedContact.name}} details!</h2>
      <div>
        <label>Mobile: </label>
        <input [(ngModel)]="selectedContact.mobile" placeholder="mobile"/>
          <label>name: </label>
        <input [(ngModel)]="selectedContact.name" placeholder="name"/>
      </div>
    </div>
    
    `

})
export class AppComponent {
    title = "My Contact";
    contacts = CONTACTS;
    selectedContact:Contact;

    onSelect(contact:Contact) {
        this.selectedContact = contact;
        console.log(contact);
    }
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */