import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
})
export class DashboardComponent {
  month_name = 'FEBRERO';
  year = 2023;
  month_days = [
    ['', '', '', 1, 2, 3, 4],
    [5, 6, 7, 8, 9, 10, 11],
    [12, 13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24, 25],
    [26, 27, 28, '', '', '', ''],
  ];
  month_progress = [
    [0, 0, 0, 1, 3, 1, 1],
    [0, 3, 1, 0, 1, 2, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ];

  show_menu:boolean = false;
  
  show_change: boolean = false;
  show_change_confirmation: boolean = false;
  change_password: string = '';
  change_password_confirmation: string = '';


  constructor(private router: Router) {}

  logout() {
    this.router.navigate(['login']);
  }

  changeMonth() {
    alert("No hay información para el mes solicitado")
  }
}
