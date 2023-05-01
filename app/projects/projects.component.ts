import { Component ,OnInit} from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects:Project[]=[
    {
      title: 'Breast Cancer Tumor Detection using XGBoost',
      technologies:'VM, KNN,LDA,LR, XGboost Classifiers algorithms',
      description:[" I have implemented various machine learning algorithms including VM, KNN, LDA, LR, and XGboost Classifiers to develop an accurate breast cancer detection model. ",'The project involves the classification of two distinct classes, namely Benign and Malignant, and my model has shown promising results in accurately identifying and distinguishing between them.']
    },
    {
      title: 'My Portfolio',
      technologies:'Angular,Angular Material , CSS,TS,HTML',
      description:[' A responsive portfolio has been developed using the Angular framework along with the Angular Material design system, providing a seamless user experience across all devices.']
    },
    {
      title: 'Random joke generator| Chrome Extension',
      technologies:'Javascript , CSS,html,API ,JSON',
      description:["This Google Chrome extension that provides a random joke every time has been built using a combination of Javascript, CSS, HTML, API, and JSON, resulting in a seamless and user-friendly experience."]
    },
  ]
 constructor(){}
 ngOnInit(): void {
   
 }
}
