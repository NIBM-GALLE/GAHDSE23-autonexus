import { Component, ElementRef, OnInit, ViewChild, HostListener, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-landing-navbar',
  templateUrl: './landing-navbar.component.html',
  styleUrl: './landing-navbar.component.css'
})
export class NavbarLandingComponent implements OnInit, OnDestroy {
  @ViewChild('nav') nav!: ElementRef;
  @ViewChild('navLinks') navLinks!: ElementRef;
  @ViewChild('menuBtn') menuBtn!: ElementRef;

  constructor() {}

  ngOnInit(): void {
    window.addEventListener('scroll', this.fixNav);
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.fixNav);
  }

  fixNav = (): void => {
    if (this.nav && this.nav.nativeElement) {
      const navElement = this.nav.nativeElement;
      if (window.scrollY > navElement.offsetHeight + 150) {
        navElement.classList.add('active');
      } else {
        navElement.classList.remove('active');
      }
    }
  };

  toggleMenu(): void {
    const navLinksEl = this.navLinks.nativeElement;
    const menuBtnEl = this.menuBtn.nativeElement;

    navLinksEl.classList.toggle('open');
    const isOpen = navLinksEl.classList.contains('open');

    menuBtnEl.innerHTML = isOpen ? '<i class="ri-close-line"></i>' : '<i class="ri-menu-line"></i>';
  }

  closeMenu(): void {
    const navLinksEl = this.navLinks.nativeElement;
    const menuBtnEl = this.menuBtn.nativeElement;

    navLinksEl.classList.remove('open');
    menuBtnEl.innerHTML = '<i class="ri-menu-line"></i>';
  }
}
