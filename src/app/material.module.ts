import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatDividerModule} from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// import {
//   MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
//   MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule
// } from '@angular/material';

@NgModule({
  imports: [
  CommonModule,
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatDialogModule,
  MatTableModule,
  MatMenuModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatDividerModule,
  MatTabsModule,
  BrowserAnimationsModule
  ],
  exports: [
  CommonModule,
   MatToolbarModule,
   MatButtonModule,
   MatCardModule,
   MatInputModule,
   MatDialogModule,
   MatTableModule,
   MatMenuModule,
   MatIconModule,
   MatProgressSpinnerModule,
   MatSidenavModule,
   MatDividerModule,
   ],
   schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CustomMaterialModule { }
