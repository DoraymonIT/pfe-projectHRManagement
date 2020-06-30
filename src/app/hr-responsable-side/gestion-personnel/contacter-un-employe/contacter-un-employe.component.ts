import { Component, OnInit } from '@angular/core';
import {PersonnelEmployesService} from '../../../controller/service/personnel-employes.service';
import {FormationServiceService} from '../../../controller/service/formation-service.service';
import {Employe} from '../../../controller/model/employe.model';
import {Email} from '../../../controller/model/email.model';
import {DocumentServiceService} from '../../../controller/service/document-service.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {DemaneDeDocument} from '../../../controller/model/demane-de-document.model';


@Component({
  selector: 'app-contacter-un-employe',
  templateUrl: './contacter-un-employe.component.html',
  styleUrls: ['./contacter-un-employe.component.css']
})
export class ContacterUnEmployeComponent implements OnInit {
  constructor(private employeService: PersonnelEmployesService,
              private fs: FormationServiceService,
              private documentService: DocumentServiceService,
              private formBuilder: FormBuilder) { }
  panelOpenState = false;
  ngOnInit(): void {
    this.employeService.findAll();
    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });
  }
  public trouverEmployerParSonDoti(value: string) {
    this.employeService.trouverEmployerParSonDoti(value);
  }
  get employes(): Array<Employe> {
    return this.employeService.employes;
  }
  public getEmailubject(value: String){
    if(value == 'msg'){
      document.getElementById('emailSujet').style.display = 'inline';
      document.getElementById('emailText').style.display = 'inline';
      document.getElementById('emailFile').style.display = 'none';

    } else if(value == 'msgAndDocument'){
      document.getElementById('emailSujet').style.display = 'inline';
    document.getElementById('emailText').style.display = 'inline';
    document.getElementById('emailFile').style.display = 'inline';
  }
  }
  get email(): Email {
    return this.employeService.email;
  }
  handleFileInput(files: FileList) {
    this.email.file = files.item(0);
  }
  get employeInfo(): Employe {
    return this.employeService.EditEmploye;
  }
public envoyer() {
    while (this.email.text.search('<p>') !== -1) {
      this.email.text = this.email.text.replace('<p>', '                                         ');
    }
    while (this.email.text.search('</p>') !== -1) {
    this.email.text = this.email.text.replace('</p>', '                                                    ');
  }
  if(this.email.typeemail === 'msg'){
    this.employeService.contacterUnEmploye();
  } else if(this.email.typeemail === 'msgAndDocument'){
    this.onUpload(this.email);
  }
  }
public getEmployeContacterdoti(doti: string){
    this.employeService.trouverEmployerContacteerParSonDoti(doti);
  }
  get fullnameContacter(): string {
    return this.employeService.fullnameContacter;
  }
  selectedFile: File;
  uploadForm: FormGroup;
  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
    this.uploadForm.get('profile').setValue(this.selectedFile);

  }
  onUpload(email: Email) {
    console.log(this.selectedFile);
    const formData = new FormData();
    formData.append('file', this.uploadForm.get('profile').value);
    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.

  //  this.documentService.sendDocument(email.emaill, email.subject ,email.text, formData);
  }
}
