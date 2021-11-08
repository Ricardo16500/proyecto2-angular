import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {
  dir: string = "Calle uyustus #123";
  cel: number = 7658524;
  constructor() { }

  ngOnInit(): void {
  }

}
