import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from '../button/button.component';
import { Router } from '@angular/router';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterOutlet,ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title: string  = 'Task Tracker';
  showAddTask!: boolean;
  subscription!: Subscription;

  constructor(private uiService:UiService, private router:Router){
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value);
  }

  toggleAddTask(){
    this.uiService.toggleAddTask();
  }

  hasRoute(route: string){

    return this.router.url ===route;
  }
}
