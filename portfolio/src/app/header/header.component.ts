import { Component, OnInit } from '@angular/core';
import { SkillsComponent } from '../skills/skills.component';
import { InternshipsComponent } from '../internships/internships.component';
import { ProjectsComponent } from '../projects/projects.component';
import { AcheivementsComponent } from "../acheivements/acheivements.component";
import { ContactMeComponent } from "../contact-me/contact-me.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone:true,
  imports: [CommonModule, SkillsComponent, InternshipsComponent, ProjectsComponent, AcheivementsComponent, ContactMeComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

ngOnInit(): void {

}

activeIndex = ""

selected(event:string){
  console.log(event)
  this.activeIndex = event
}

}
