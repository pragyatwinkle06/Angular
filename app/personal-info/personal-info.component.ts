import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {
myData: string[][] = [
  ['Name', 'Pragya Shukla'],
  ['DOB','06/09/2000'],
  ['Work Exp', '1 year'],
  ['Position', 'Graduate Engineer Trainee'],
];

aboutMe: string[] = [
  'Hi, I am a Full Stack Developer with 1 year of experience in Tata Power.',
  "I  developed a tool that significantly reduced the business team's workload and improved their efficiency I used a combination of Python and Angular to develop a comprehensive system for managing EV chargers",
  'I have primarily worked with Python Pandas to develop automated data analysis tools'
]


constructor() {}

ngOnInit(): void{}
}
