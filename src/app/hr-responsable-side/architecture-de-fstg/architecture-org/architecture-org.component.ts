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
      label: 'Doyen ',
      expanded: true,
      children: [
          {
              label: 'Vice-Doyen ',
              expanded: true,
              children: [
                  {
                      label: 'Chef de filiere : MIPC '
                  },
                  {
                      label: 'Chef de filiere : BCG '
                  },
                  {

                      label: 'Chef de filiere : SIR '
                  }
              ]
          },
          {
            label: 'Superviseur de scolarite',
            expanded: true,
            children: [
                {
                    label: 'Fonctionnaire 1 '
                },
                {
                  label: 'Fonctionnaire 2 '
              },
              {
                label: 'Fonctionnaire 3 '
            }
            ]
        },
          {
              label: 'Superviseur de départements ',
              expanded: true,
              children: [
                  {
                      label: 'Dép de Physique'
                  },
                  {
                      label: 'Dép de Informatique '
                  }
              ]
          },
        {
          label: 'Superviseur de départements ',
          expanded: true,
          children: [
            {
              label: 'Dép de Physique '
            },
            {
              label: 'Dép de Informatique '
            }
          ]
        }
      ]
  }];
  }

}
