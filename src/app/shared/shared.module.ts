import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCommonModule, MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { AfterValueChangedDirective } from './directive/after-value-changed.directive';

const materialModules = [
  MatCommonModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatSelectModule,
  MatSnackBarModule,
  MatRippleModule,
  MatTableModule,
  MatListModule,
  MatDividerModule,
  MatProgressSpinnerModule,
  MatMenuModule,
  MatSortModule,
  MatPaginatorModule,
  MatBottomSheetModule,
  ScrollingModule,
];
const commonModules = [ReactiveFormsModule];

const directives = [AfterValueChangedDirective];
@NgModule({
  declarations: [...directives],
  imports: [...commonModules, ...materialModules],
  exports: [...commonModules, ...materialModules, ...directives],
})
export class SharedModule {}
