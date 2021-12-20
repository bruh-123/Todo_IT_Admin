import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  activeLink=''
  constructor(private router: Router) {}
  logout() {
    localStorage.clear();
    this.router.navigateByUrl('auth/login');
  }
  ngOnInit(): void {}
}
