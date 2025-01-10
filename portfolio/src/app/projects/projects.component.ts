import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  imports: [CommonModule] // Ensure CommonModule is imported here
})
export class ProjectsComponent {
  projects = [
    {
      title: 'WeMeet-Lets Connect',
      link: 'LINK',
      techUsed: 'HTML5, Node.js, Express.js, CSS3, WebRTC, Socket.io',
      details: [
        'It’s a web app combining Omegle and Google Meet features, using HTML5, CSS3, JavaScript, WebRTC, and Socket.io, aiming to improve user experience and communication.',
        'The platform offers users the flexibility to host individual meetings and connect with random individuals. Users can choose between text and video calls, improving communication efficiency by 20%.',
        'Added flexible meeting option, peer-to-peer video call and chat functionality with the capability to connect with strangers. Added a recording feature for better user experience, leading to a 15% increase in user satisfaction.',
      ],
    },
    {
      title: 'Budget Tracker',
      link: 'LINK',
      techUsed: 'Angular, Bootstrap, PrimeNG',
      details: [
        'Developed a financial management app that helps users track expenses and stay on budget, resulting in significant monthly savings.',
        'Utilized session storage to maintain user login if the application/tab is open, and designed an intuitive user interface for easy expense entry and budget tracking.',
        'Implemented robust data visualization and real-time updates to help users understand spending habits and enhance overall functionality.',
      ],
    },
    {
      title: "Personal Portfolio",
      link: 'LINK',
      techUsed:'Angular, Bootstrap, PrimeNg, ApexCharts',
      details: [ 'Developed a responsive and interactive personal portfolio website using Angular and Bootstrap, showcasing projects and skills.', 'Utilized PrimeNg components for enhanced user experience and streamlined UI development, ensuring consistent and modern design.', 'Integrated ApexCharts to create dynamic and interactive data visualizations, demonstrating technical expertise and project achievements.'],
    }
  ];
}
