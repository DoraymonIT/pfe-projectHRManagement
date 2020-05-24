import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';
import {Pipe, PipeTransform} from '@angular/core';
// import {FullCalendarModule} from 'primeng/fullcalendar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatTreeModule } from '@angular/material/tree';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { ChartModule } from 'primeng/chart';
import { MatGridListModule } from '@angular/material/grid-list';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { Ng2CompleterModule } from '@akveo/ng2-completer';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {ToastrModule} from 'ngx-toastr';

import { MatNativeDateModule } from '@angular/material/core';

import {  HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginSideComponent } from './login-side/login-side.component';
import { FooterDeLoginComponent } from './footer-de-login/footer-de-login.component';
import { HRResponsableSideComponent } from './hr-responsable-side/hr-responsable-side.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { OverreviewComponent } from './hr-responsable-side/overreview/overreview.component';
import { AbsenceEtCongeComponent } from './hr-responsable-side/absence-et-conge/absence-et-conge.component';
import { DocumentAdministrativeComponent } from './hr-responsable-side/document-administrative/document-administrative.component';
import { GestionPersonnelComponent } from './hr-responsable-side/gestion-personnel/gestion-personnel.component';
import { ListeEmployesComponent } from './hr-responsable-side/gestion-personnel/liste-employes/liste-employes.component';
import { AjouterEmployeComponent } from './hr-responsable-side/gestion-personnel/ajouter-employe/ajouter-employe.component';
import { EditerEmployeComponent } from './hr-responsable-side/gestion-personnel/editer-employe/editer-employe.component';
import { AutresComponent } from './hr-responsable-side/gestion-personnel/autres/autres.component';
import { PermanenceComponent } from './hr-responsable-side/permanence/permanence.component';
 import { FullCalendarModule } from '@fullcalendar/angular'; // for FullCalendar!
import { AvancementComponent } from './hr-responsable-side/avancement/avancement.component';
import { NotesEvaluationComponent } from './hr-responsable-side/notes-evaluation/notes-evaluation.component';
import { CertificatsMedicalesComponent } from './hr-responsable-side/certificats-medicales/certificats-medicales.component';
import { ListeComponent } from './hr-responsable-side/absence-et-conge/liste/liste.component';
import { EditerComponent } from './hr-responsable-side/absence-et-conge/editer/editer.component';
import { PersonnelEmployesService } from './controller/service/personnel-employes.service';
import {TableModule} from 'primeng/table';
import { ArchitectureDeFSTGComponent } from './hr-responsable-side/architecture-de-fstg/architecture-de-fstg.component';
import {EditorModule} from 'primeng/editor';

import { PermanenceCalendrierComponent } from './hr-responsable-side/permanence/permanence-calendrier/permanence-calendrier.component';
import { PermanenceAjouterComponent } from './hr-responsable-side/permanence/permanence-ajouter/permanence-ajouter.component';
import {PermanenceListeComponent} from './hr-responsable-side/permanence/permanence-liste/permanence-liste.component';
import { ListeDesJoursFriesComponent } from './hr-responsable-side/absence-et-conge/liste-des-jours-fries/liste-des-jours-fries.component';
import { DepartementComponent } from './hr-responsable-side/architecture-de-fstg/departement/departement.component';
import { GradeComponent } from './hr-responsable-side/architecture-de-fstg/grade/grade.component';
import { DepAjoutComponent } from './hr-responsable-side/architecture-de-fstg/departement/dep-ajout/dep-ajout.component';
import { GradeListeComponent } from './hr-responsable-side/architecture-de-fstg/grade/grade-liste/grade-liste.component';
import { GradeAjoutComponent } from './hr-responsable-side/architecture-de-fstg/grade/grade-ajout/grade-ajout.component';
import { NOteListeComponent } from './hr-responsable-side/notes-evaluation/note-liste/note-liste.component';
import { ChercherNoteParDateComponent } from './hr-responsable-side/notes-evaluation/chercher-note-par-date/chercher-note-par-date.component';
import { AjouterUneNoteComponent } from './hr-responsable-side/notes-evaluation/ajouter-une-note/ajouter-une-note.component';
import { NoteDetailComponent } from './hr-responsable-side/notes-evaluation/note-detail/note-detail.component';
import { ListeDesDocumentComponent } from './hr-responsable-side/document-administrative/documents/liste-des-document/liste-des-document.component';
import { DocumentsComponent } from './hr-responsable-side/document-administrative/documents/documents.component';
import { ListeDesDocumentsEmployeComponent } from './hr-responsable-side/document-administrative/documents-employe/liste-des-documents-employe/liste-des-documents-employe.component';
import { ListeDesDemandesDocumentsEmployeComponent } from './hr-responsable-side/document-administrative/documents-employe/liste-des-demandes-documents-employe/liste-des-demandes-documents-employe.component';
import { DocumentsEmployeComponent } from './hr-responsable-side/document-administrative/documents-employe/documents-employe.component';
import {AjouterUnDocumentComponent} from './hr-responsable-side/document-administrative/documents/ajouter-un-document/ajouter-un-document.component';
import { AjouterUnDocumentsEmployeComponent } from './hr-responsable-side/document-administrative/documents-employe/ajouter-un-documents-employe/ajouter-un-documents-employe.component';

import { ListeAvancementNonTraiteComponent } from './hr-responsable-side/avancement/liste-avancement-non-traite/liste-avancement-non-traite.component';
import { PrixComponent } from './hr-responsable-side/certificats-medicales/prix/prix.component';
import { FormationComponent } from './hr-responsable-side/certificats-medicales/formation/formation.component';
import { PunitionComponent } from './hr-responsable-side/certificats-medicales/punition/punition.component';
import { AjouterPrixComponent } from './hr-responsable-side/certificats-medicales/prix/ajouter-prix/ajouter-prix.component';
import { AjouterPunitionComponent } from './hr-responsable-side/certificats-medicales/punition/ajouter-punition/ajouter-punition.component';
import { AjouterFormationComponent } from './hr-responsable-side/certificats-medicales/formation/ajouter-formation/ajouter-formation.component';
import { ContacterUnEmployeComponent } from './hr-responsable-side/gestion-personnel/contacter-un-employe/contacter-un-employe.component';
import { DialogDepComponent } from './hr-responsable-side/architecture-de-fstg/departement/dialog-dep/dialog-dep.component';
import { RapportInfoComponent } from './hr-responsable-side/avancement/rapport-info/rapport-info.component';
import { AjouteAvancementComponent } from './hr-responsable-side/avancement/ajoute-avancement/ajoute-avancement.component';

import {ListeFonctionComponent} from './hr-responsable-side/architecture-de-fstg/departement/ListeFonction/liste.component';
import {AjouteUneFonctionUndeartementComponent} from './hr-responsable-side/architecture-de-fstg/departement/ajoute-une-fonction-undeartement/ajoute-une-fonction-undeartement.component';
import {CountdownModule} from 'ngx-countdown';
import {AjouteRapportComponent} from './hr-responsable-side/avancement/ajoute-rapport/ajoute-rapport.component';
import { ArchitectureOrgComponent } from './hr-responsable-side/architecture-de-fstg/architecture-org/architecture-org.component'

import {OrganizationChartModule} from 'primeng/organizationchart';

@NgModule({
  declarations: [
    AppComponent,
    LoginSideComponent,
    FooterDeLoginComponent,
    HRResponsableSideComponent,
    TopBarComponent,
    ForgotPasswordComponent,
    OverreviewComponent,
    AbsenceEtCongeComponent,
    DocumentAdministrativeComponent,
    GestionPersonnelComponent,
    ListeEmployesComponent,
    ListeComponent,
    AjouterEmployeComponent,
    EditerEmployeComponent,
    AutresComponent,
    PermanenceComponent,
    AvancementComponent,
    EditerEmployeComponent,
    AutresComponent,
    AjouterEmployeComponent,
    ListeFonctionComponent,
    ListeEmployesComponent,
    NotesEvaluationComponent,
    CertificatsMedicalesComponent,
    ListeComponent,
    EditerComponent,
    ArchitectureDeFSTGComponent,
    PermanenceCalendrierComponent,
    PermanenceAjouterComponent,
    PermanenceListeComponent,
    ListeDesJoursFriesComponent,
    DepartementComponent,
    GradeComponent,
    DepAjoutComponent,
    GradeListeComponent,
    GradeAjoutComponent,
    NOteListeComponent,
    ChercherNoteParDateComponent,
    AjouterUneNoteComponent,
    NoteDetailComponent,
    ListeDesDocumentComponent,

    DocumentsComponent,
    AjouterUnDocumentComponent,

    ListeDesDocumentsEmployeComponent,
    ListeDesDemandesDocumentsEmployeComponent,
    DocumentsEmployeComponent,
    AjouterUnDocumentsEmployeComponent,

    ListeAvancementNonTraiteComponent,

    PrixComponent,

    FormationComponent,

    PunitionComponent,

    AjouterPrixComponent,

    AjouterFormationComponent,

    AjouterPunitionComponent,

    ContacterUnEmployeComponent,

    DialogDepComponent,

    RapportInfoComponent,

    AjouteAvancementComponent,



    AjouteUneFonctionUndeartementComponent,
    AjouteRapportComponent,
    ArchitectureOrgComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatSidenavModule,
        MatSelectModule,
        MatFormFieldModule,
        MatMenuModule,
        MatToolbarModule,
        MatSidenavModule,
        MatInputModule,
        MatCheckboxModule,
        MatIconModule,
        ToastrModule.forRoot(),
        MatBadgeModule,
        MatButtonModule,
        MatTreeModule,
        MatProgressBarModule,
        MatListModule,
        MatTabsModule
        , MatDividerModule
        , MatTooltipModule,
        MatExpansionModule,
        MatTableModule,
        MatPaginatorModule,
        FullCalendarModule,
        MatCardModule,
        MatChipsModule,
        ChartModule,
        ProgressSpinnerModule,
        ReactiveFormsModule,
        MatGridListModule,
        MatRadioModule,
        MatDialogModule,
        MatDatepickerModule,
        MatNativeDateModule,
        Ng2SmartTableModule,
        Ng2CompleterModule,
        TableModule,
        InputTextModule,
        ToastrModule,
        EditorModule, CountdownModule,

        OrganizationChartModule
    ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}


    },
    {
      provide: MAT_DIALOG_DATA,
      useValue: {}
    },

    PersonnelEmployesService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    // Dialog de conge
    ListeDesJoursFriesComponent,
     // Dialog de gradeEmployes
    GradeListeComponent,
     // Dialog de departementEmployes
    DialogDepComponent,
     // Dialog de documentsEmployes
    ListeDesDocumentsEmployeComponent]
})
export class AppModule { }
