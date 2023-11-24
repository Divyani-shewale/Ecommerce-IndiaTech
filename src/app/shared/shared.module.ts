import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ReactiveFormsModule} from '@angular/forms';
import { MatTableModule } from "@angular/material/table";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatIconModule } from "@angular/material/icon";
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';

import { TitleHeaderComponent } from './title-header/title-header.component';
import { CardListComponent } from './card-list/card-list.component';
import { MultiInputHeaderComponent } from './multi-input-header/multi-input-header.component';
import { AdvanceTableComponent } from './advance-table/advance-table.component';
import { AdvanceTablePaginatorComponent } from './advance-table-paginator/advance-table-paginator.component';
import { AdvanceFormTableComponent } from './advance-form-table/advance-form-table.component';
import { AdvanceFormTableNewComponent } from './advance-form-table-new/advance-form-table-new.component';
import { AdvanceTableNewComponent } from './advance-table-new/advance-table-new.component';
import { AdvanceTablePaginatorNewComponent } from './advance-table-paginator-new/advance-table-paginator-new.component';
import { ButtonGridNewComponent } from './button-grid-new/button-grid-new.component';
import { CardListNewComponent } from './card-list-new/card-list-new.component';
import { MultiInputHeaderNewComponent } from './multi-input-header-new/multi-input-header-new.component';
import { TitleHeaderNewComponent } from './title-header-new/title-header-new.component';
import { EditDropdownComponent } from './edit-dropdown/edit-dropdown.component';
import { CurrencySymbolPipe } from './currency-symbol.pipe';
import { EditInputComponent } from './edit-input/edit-input.component';
import { AdvanceTitleHeadNewComponent } from './advance-title-head-new/advance-title-head-new.component';
import { AdvanceInputsNewComponent } from './advance-inputs-new/advance-inputs-new.component';
import { ChangeDropdownComponent } from './change-dropdown/change-dropdown.component'

@NgModule({
  declarations: [
    TitleHeaderComponent,
    CardListComponent,
    MultiInputHeaderComponent,
    AdvanceTableComponent,
    AdvanceTablePaginatorComponent,
    AdvanceFormTableComponent,
    AdvanceFormTableNewComponent,
    AdvanceTableNewComponent,
    AdvanceTablePaginatorNewComponent,
    ButtonGridNewComponent,
    CardListNewComponent,
    MultiInputHeaderNewComponent,
    TitleHeaderNewComponent,
    EditDropdownComponent,
    CurrencySymbolPipe,
    EditInputComponent,
    AdvanceTitleHeadNewComponent,
    AdvanceInputsNewComponent,
    ChangeDropdownComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatTabsModule,
    MatDialogModule,
    MatRadioModule,
    MatSelectModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    FeatherModule.pick(allIcons),
    MatCheckboxModule
  ],
  exports: [
    TitleHeaderComponent,
    CardListComponent,
    MultiInputHeaderComponent,
    AdvanceTableComponent,
    AdvanceTablePaginatorComponent,
    AdvanceFormTableComponent,
    AdvanceFormTableNewComponent,
    AdvanceTableNewComponent,
    AdvanceTablePaginatorNewComponent,
    ButtonGridNewComponent,
    CardListNewComponent,
    MultiInputHeaderNewComponent,
    TitleHeaderNewComponent,
    EditDropdownComponent,
    CurrencySymbolPipe,
    AdvanceTitleHeadNewComponent
  ]
})

export class SharedModule { }