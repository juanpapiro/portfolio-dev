import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects';

//modal angular material
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

//Enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass';
import { DialogProjectsComponent } from '../dialogs/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/logo_front_coverage.svg',
      alt: 'Projeto Front Coverage',
      title: 'Front Coverage',
      width:'100px',
      height: '100px',
      description: 'Porjeto de estudo de configuração de karma para cobertura de testes em angular',
      links: [
        {name: 'Veja o projeto', href: 'https://frontcoverage.surge.sh/#/pipe'},
        {name: 'Veja no gitlab', href: 'https://gitlab.com/Juanpapiro/frontcoverage/-/blob/main/.gitlab-ci.yml?ref_type=heads'},
      ]
    },
    {
      src: 'assets/img/projects/logo-mapadareciclagem.svg',
      alt: 'Projeto Mapa da Reciclagem',
      title: 'Mapa da Reciclagem',
      width:'100px',
      height: '100px',
      description: 'Porjeto em React para mapeamento de pontos de coleta e valores por tipo de material',
      links: [
        {name: 'Veja no gitlab', href: 'https://gitlab.com/Juanpapiro/mapa-reciclagem-web'},
      ]
    }
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }

}
