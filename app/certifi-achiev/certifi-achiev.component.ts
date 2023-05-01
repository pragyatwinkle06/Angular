import { Component,OnInit} from '@angular/core';
import { Achievements } from '../models/models';

@Component({
  selector: 'app-certifi-achiev',
  templateUrl: './certifi-achiev.component.html',
  styleUrls: ['./certifi-achiev.component.css']
})
export class CertifiAchievComponent implements OnInit{
  achieve:Achievements[]=[
    {
      title:'AIR 1891 in GATE CS 2022',
      description:["Ranked at AIR 1891 in GATE exam, leveraging in-depth knowledge of computer science subjects to achieve outstanding results."]
    },
    {
      title:'Certificate of Zonal Excellence (01/2018)',
      description:['Achieved a remarkable Zonal Rank of 21 and an International Rank of 89 in the highly competitive National Cyber Olympiad (NCO)']
    },
    {
      title:'340+ Coding Problems solved on LeetCode Platform',
      description:["Successfully solved 340+ coding problems on the LeetCode platform using C++ and Python programming languages, showcasing strong technical skills and problem-solving ability."]
    },

  ]
constructor(){

}
ngOnInit(): void {
  
}
}
