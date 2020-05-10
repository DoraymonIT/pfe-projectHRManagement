import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-certificats-medicales',
  templateUrl: './certificats-medicales.component.html',
  styleUrls: ['./certificats-medicales.component.css']
})
export class CertificatsMedicalesComponent implements OnInit {

  constructor() { }

  text1: string = '<h3 style="text-align: center;">Attestation de travail</h3><span><div style="text-align: left;"> <p>Monsieu / Madame </p>.............................</div><div style="text-align: right;"><p>Date : </p>03/12/2020</div></span> </div> </div></div>';

  text2: string;
  ngOnInit(): void {


  }




}
