import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { SkillsComponent } from '../skills/skills.component';
import { InternshipsComponent } from '../internships/internships.component';
import { ProjectsComponent } from '../projects/projects.component';
import { AcheivementsComponent } from "../acheivements/acheivements.component";
import { ContactMeComponent } from "../contact-me/contact-me.component";
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { ButtonModule } from 'primeng/button'; 
import { DialogModule } from 'primeng/dialog'; 
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule, 
    SkillsComponent, 
    InternshipsComponent, 
    ProjectsComponent, 
    AcheivementsComponent, 
    ContactMeComponent, 
    HomeComponent,
    ButtonModule,
    DialogModule,
    TooltipModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('home') home!: ElementRef;
  @ViewChild('internship') internship!: ElementRef;
  @ViewChild('project') project!: ElementRef;
  @ViewChild('achievement') achievement!: ElementRef;
  @ViewChild('skill') skill!: ElementRef;

  activeIndex = "home";

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // Initial scroll to home section if needed
    setTimeout(() => {
      this.scrollToSection(this.activeIndex);
    });
  }

  selected(section: string) {
    this.activeIndex = section;
    this.scrollToSection(section);
  }

  scrollToSection(section: string) {
    const sectionMap: { [key: string]: ElementRef } = {
      home: this.home,
      internship: this.internship,
      project: this.project,
      achievement: this.achievement,
      skill: this.skill
    };

    const element = sectionMap[section];
    if (element && element.nativeElement) {
      element.nativeElement.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  }
}

