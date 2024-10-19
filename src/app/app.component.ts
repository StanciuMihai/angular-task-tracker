import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink,RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { TasksComponent } from "./components/tasks/tasks.component";
import { FormsModule } from '@angular/forms';
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, HeaderComponent, TasksComponent, FormsModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
}
