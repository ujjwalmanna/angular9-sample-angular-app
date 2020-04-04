import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Ingrdient } from 'src/app/shared/ingrdient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  editMode = false;
  editIndexNumber: number;
  editedItem: Ingrdient;

  @ViewChild('f', { static: false }) slForm: NgForm;
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  //  @ViewChild('nameinput',{static:false}) nameInput:ElementRef;
  //  @ViewChild('amountinput',{static:false}) amountInput:ElementRef;
  //  @Output()ingredientAdded=new EventEmitter<Ingrdient>();

  constructor(private shoppinglistService: ShoppingListService) { }


  ngOnInit(): void {
    this.subscription = this.shoppinglistService.startedEditing.subscribe((index: number) => {
      this.editMode = true;
      this.editIndexNumber = index;
      this.editedItem = this.shoppinglistService.getIngrident(index);
      this.slForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      });
    });
  }
  onAddSubmit(form: NgForm) {
    // const nameValue=this.nameInput.nativeElement.value;
    // const amountValue=this.amountInput.nativeElement.value;
    const value = form.value;
    const newIngedient = new Ingrdient(value.name, value.amount);
    if (this.editMode) {
      this.shoppinglistService.updateIngridient(this.editIndexNumber, newIngedient);
    } else {
      this.shoppinglistService.addIngridient(newIngedient);
    }
    this.editMode = false;
    form.reset();
  }

  onClear(){
    this.editMode = false;
    this.slForm.reset();
  }

  onDelete() {
    this.shoppinglistService.deleteIngridient(this.editIndexNumber);
    this.onClear();
  }

}
