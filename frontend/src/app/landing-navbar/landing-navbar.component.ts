import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-landing-navbar',
  imports: [],
  templateUrl: './landing-navbar.component.html',
  styleUrl: './landing-navbar.component.css'
})
export class NavbarLandingComponent implements OnInit {
  @ViewChild('navLinks') navLinks!: ElementRef;
  @ViewChild('menuBtn') menuBtn!: ElementRef;
  
  constructor() {}

  ngOnInit(): void {}

  toggleMenu(): void {
    const navLinksEl = this.navLinks.nativeElement;
    const menuBtnEl = this.menuBtn.nativeElement;
    
    navLinksEl.classList.toggle('open');
    const isOpen = navLinksEl.classList.contains('open');
    
    // Change the icon dynamically (assuming you are using icons via classes)
    menuBtnEl.innerHTML = isOpen ? '<i class="ri-close-line"></i>' : '<i class="ri-menu-line"></i>';
  }

  closeMenu(): void {
    const navLinksEl = this.navLinks.nativeElement;
    const menuBtnEl = this.menuBtn.nativeElement;

    navLinksEl.classList.remove('open');
    menuBtnEl.innerHTML = '<i class="ri-menu-line"></i>';
  }
}
