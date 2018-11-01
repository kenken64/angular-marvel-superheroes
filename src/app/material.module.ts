import { NgModule } from "@angular/core";

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material';
import { MatListModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatCardModule } from '@angular/material';

const MODULES = [
    FlexLayoutModule,
    MatToolbarModule, MatListModule,
    MatButtonModule, MatIconModule,
    MatCardModule
]

@NgModule({
    imports: MODULES,
    exports: MODULES
})
export class MaterialModule { }