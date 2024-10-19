import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from '../button/button.component';
import { Router } from 'express';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterOutlet,ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title: string  = 'Task Tracker';

  toggleAddTask(){
    console.log('Toggle');
  }
}
