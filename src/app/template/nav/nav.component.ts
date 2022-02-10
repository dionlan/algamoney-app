import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  items: MenuItem[] = [];
  activeItem: MenuItem = {};

  constructor() { }

  ngOnInit(): void {
    this.items = [
                {
                    label:'Lançamentos',
                    icon:'pi pi-fw pi-file',
                },
                {
                    label:'Pessoas',
                    icon:'pi pi-fw pi-user',
                },
        ];
        this.activeItem = this.items[0];
    }
}
