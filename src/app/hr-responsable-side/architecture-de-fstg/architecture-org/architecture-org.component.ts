import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {TreeNode} from 'primeng/api';

@Component({
  selector: 'app-architecture-org',
  templateUrl: './architecture-org.component.html',
  styleUrls: ['./architecture-org.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArchitectureOrgComponent implements OnInit {
  data2: TreeNode[];
  selectedNode: TreeNode;
  constructor() { }

  ngOnInit(): void {
    this.data2 = [{
      label: 'Doyen : Taourirt',
      expanded: true,
      children: [
          {
              label: 'Vice-Doyen : Bachnou',
              expanded: true,
              children: [
                  {
                      label: 'Chef de filiere : MIPC : Ellabib'
                  },
                  {
                      label: 'Chef de filiere : BCG : Bendrimou'
                  },
                  {

                      label: 'Chef de filiere : SIR : Amir'
                  }
              ]
          },
          {
            label: 'Superviseur de scolarite : Ziaoui',
            expanded: true,
            children: [
                {
                    label: 'Fonctionnaire 1 : Ahmed'
                },
                {
                  label: 'Fonctionnaire 2 : Hafssa'
              },
              {
                label: 'Fonctionnaire 3 : Khadija'
            }
            ]
        },
          {
              label: 'Superviseur de departements : Bouigrouane',
              expanded: true,
              children: [
                  {
                      label: 'Dep de Physique : Mimani'
                  },
                  {
                      label: 'Dep de Informatique : Bourquia'
                  }
              ]
          },
        {
          label: 'Superviseur de departements : Bouigrouane',
          expanded: true,
          children: [
            {
              label: 'Dep de Physique : Mimani'
            },
            {
              label: 'Dep de Informatique : Bourquia'
            }
          ]
        }
      ]
  }];
  }

}
