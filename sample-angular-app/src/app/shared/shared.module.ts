import { NgModule } from '@angular/core';
import { DropdownDirective } from './dropdown.directive';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { AlertComponent } from './alert/alert.component';
import { PlaceHolderDirective } from './placeholder/placeholder.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations:[ DropdownDirective,
        LoadingSpinnerComponent,
        AlertComponent,
        PlaceHolderDirective],
    imports:[FormsModule,ReactiveFormsModule,CommonModule],
    exports:[DropdownDirective,
        LoadingSpinnerComponent,
        AlertComponent,
        PlaceHolderDirective,
        CommonModule],
    entryComponents: [AlertComponent]
})
export class SharedModule{

}