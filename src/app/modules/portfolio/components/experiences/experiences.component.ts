import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal([
    {sumary:{
        strong:'Especialista em engenharia de software', 
        p:'Cielo | abr 2024 - momento'
      }, 
      article: '<p>Desde abril de 2024 atuo na engenharia de software com ênfase em java no back-end e angular no front-end</p>'
    },
    {sumary:{
      strong:'Analista de desenvolvimento de sistemas Sr', 
      p:'Cielo | nov 2020 - abr 2024'
    }, 
    article: '<p>Atuação em desenvolvimento de software com ênfase em java no back-end e angular no front-end</p>'
  },
    {sumary:{
        strong:'Analista de sistemas pleno', 
        p:'Ticket | ago 2020 - nov 2020'
      }, 
      article: '<p>Atuação em desenvolvimento de software em java no back-end</p>'
    },
    {sumary:{
        strong:'Analista de sistemas', 
        p:'Accenture | ago 2019 - ago 2020'
      }, 
      article: '<p>Atuação em desenvolvimento de software em java no back-end e angular no front-end</p>'
    },
    {sumary:{
        strong:'Designer gráfico', 
        p:'Porto Seguro Seguros | ago 2011 - ago 2019'
      }, 
      article: '<p>Design para materiais publicitários off-line e on-line, design de marca e identidade visual para campanhas promocionais.</p>'
    }
  ]);
}
