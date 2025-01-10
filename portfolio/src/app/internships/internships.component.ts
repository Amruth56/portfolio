import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-internships',
  templateUrl: './internships.component.html',
  styleUrls: ['./internships.component.css'],
  imports: [CommonModule] // Ensure CommonModule is imported here
})
export class InternshipsComponent {
  internships = [
    {
      title: 'Full-Stack Developer Intern | ProQsmart | Bengaluru',
      period: 'August 2024 – Ongoing',
      details: [
        'Engaged in a startup environment, contributing to various development, discussions, and decision-making processes.',
        'Part of a team that formulated a website using Angular12, Bootstrap, StoryBook, PrimeNg, NgRx, RxJS improving user engagement.',
        'Integrated multiple APIs, performed testing, and debugging, utilized Git and GitHub for version control, UI/UX, facilitated continuous deployment, keeping constant communication with seniors, resulting in a 20% reduction in deployment time.'
      ]
    },
    {
      title: 'Front-End Developer Intern | Dhruvathara Foundation | Bengaluru',
      period: 'March 2024 – June 2024',
      details: [
        'Created and managed Angular Storybook for improved component reusability and understanding.',
        'Executed comprehensive unit testing on 12 Angular components, achieving a 95% success rate in meeting predefined customer requirements, the enhancements contributed to a significant reduction in user-reported issues.',
        'Built and maintained Angular components, adding features based on customer requirements.',
        'Collaborated to determine user requirements and specifications, improving the application’s alignment with user needs by 25%. Wrote technical documentation, improving team efficiency by 10%.'
      ]
    },
    {
      title: 'Research Intern | IIIT Sri City | Remote',
      period: 'July 2023 – November 2023',
      details: [
        'Optimized 3D modelling workflows by implementing cutting-edge scanning techniques and edge reconstructive, while enhancing model quality and realism.',
        'Conducted research on various other 3D model construction, technologies and methods used. Worked with the team of professionals to gain insights and share knowledge, which increased team productivity by 30%.'
      ]
    },
    {
      title: 'Research Intern | Indian Knowledge Systems | Dharwad',
      period: 'July 2022 – September 2022',
      details: [
        'Contributed to a pioneering research team under Central Government exploring the interplay of Tridosha with human traits, contributing to a 70% increase in understanding of the subject.',
        'Employed a multi-dimensional approach for comprehensive data collection, improving data accuracy by 30%.',
        'Developed strong teamwork skills while gaining hands-on experience in cutting-edge research methods and holistic wellness analysis, leading to a 15% improvement in team productivity and a 35% increase in personal skill development.'
      ]
    }
  ];
}
