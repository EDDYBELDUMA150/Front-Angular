import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import Popper from 'popper.js';

@Component({
  selector: 'app-deshaboard',
  templateUrl: './deshaboard.component.html',
  styleUrls: ['./deshaboard.component.css']
})
export class DeshaboardComponent implements AfterViewInit {
  @ViewChild('navbarDropdown') navbarDropdown!: ElementRef;
  @ViewChild('dropdownMenu') dropdownMenu!: ElementRef;
  
  constructor(private router: Router) {}

  cargarContenido() {
    this.router.navigate(['/recursos#catalina']);
  }

  ngAfterViewInit() {
    const target = this.navbarDropdown.nativeElement;
    const popperContent = this.dropdownMenu.nativeElement;
    new Popper(target, popperContent, {
      placement: 'bottom',
    });
  }
  title:string = "ADMINISTRACION ";
  fecha:Date=new Date();

 


    
}


