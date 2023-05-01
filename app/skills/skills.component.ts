import { Component , OnInit} from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
skill_list:Skill[]=[
  {
    name:'Python,Pandas Library , FASTApi',
    rating:90,
  },

  {
    name:'Angular, Angular Material',
    rating:80,
  },
  {
    name:'HTML, CSS,JS',
    rating:80,
  },
  {
    name:'C/C++',
    rating:80,
  },
  {
    name:'Data Structure,Algorithms,DBMS,Computer Networks,OS',
    rating:80,
  },
  {
    name:'Agile/Jira Fundamentals',
    rating:70,
  },
]

constructor(){}

ngOnInit(): void {
  
}
}
