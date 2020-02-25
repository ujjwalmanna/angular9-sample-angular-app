import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingrdient } from 'src/app/shared/ingrdient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
 @ViewChild('nameinput',{static:false}) nameInput:ElementRef;
 @ViewChild('amountinput',{static:false}) amountInput:ElementRef;
//  @Output()ingredientAdded=new EventEmitter<Ingrdient>();
 constructor(private shoppinglistService:ShoppingListService) { }

  ngOnInit(): void {
  }
  onAddSubmit(){
    const nameValue=this.nameInput.nativeElement.value;
    const amountValue=this.amountInput.nativeElement.value;
    const newIngedient=new Ingrdient(nameValue,amountValue);
    //this.ingredientAdded.emit(newIngedient);
    this.shoppinglistService.addIngridient(newIngedient);
  }

}
