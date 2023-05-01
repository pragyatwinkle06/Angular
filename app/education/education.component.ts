import { Component,OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit{
educationList: Education[] = [

  {
    institute:'Institute Of Engineering and Rural Technology',
    course:'Bachelors of Technology in Computer Science',
    duration: '2018-2022',
    score: '87.2%',
  },

  {
    institute:'KVS Gomti Nagar',
    course:'HSC',
    duration: '2016-2018',
    score: '92%',
  },

  {
    institute:'KVS Gomti Nagar',
    course:'SSC',
    duration: '2014-2016',
    score: '95%',
  }

 

];

constructor() {

}

ngOnInit(): void {
  
}
}
