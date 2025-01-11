import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-acheivements',
  templateUrl: './acheivements.component.html',
  styleUrls: ['./acheivements.component.css'],
  imports: [CommonModule]
})
export class AcheivementsComponent {
  achievements = [
    {
      title: 'Authored Papers',
      details: [
        'Authored a paper on 3D-Modelling which was published in Institute of Electrical and Electronics Engineers (IEEE 2023)',
        'Authored a Micro-blog recommendation system paper which was published in 15th World Congress on Nature and Biologically Inspired Computing (NaBIC 2023)'
      ]
    },
    {
      title: 'NCC Service',
      details: [
        'Served as a NCC Junior Under Officer for 1 year',
        'Cleared NCC A and B certificate'
      ]
    }, 
    {
      title: 'Sports',
      details:[
        'State Level Hockey, Athletics player and Kabaddi Captain',
        'Participated in Khelo India, Inter State Hockey, CBSE Athletics meet and IIIT sports meet'
      ]
    }
  ];
}
