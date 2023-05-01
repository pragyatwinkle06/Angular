import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'app-workexperience',
  templateUrl: './workexperience.component.html',
  styleUrls: ['./workexperience.component.css']
})
export class WorkexperienceComponent implements OnInit {
  workexperiencelist: WorkExperience[] = [

    {
      role:'Graduate Engineer Trainee (D&IT)',
      company:'Tata Power',
      duration: '20-06-2022',
      description: ["As a Full Stack Developer, I've created impressive websites on my own, managing both back-end(using python) and front-end(using angular) development",  'As an experienced Python developer with expertise in the pandas library, I have successfully conducted Data Analysis work and automated data processing for large datasets',
    'I have experience working with various technologies, including Python, Angular, FAST API, Agile methodology, Postgres, and SQL']
    },
  
  
   
  
  ];
  
  constructor() {
  
  }
  
  ngOnInit(): void {
    
  }
}
