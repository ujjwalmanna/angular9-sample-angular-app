import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingrdient } from '../shared/ingrdient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  private igChangedSub: Subscription;
  ingredients: Ingrdient[];
  ngOnDestroy(): void {
    this.igChangedSub.unsubscribe();
  }

  constructor(private shoppingListService: ShoppingListService , private loggingService :LoggingService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngridents();
    // tslint:disable-next-line: max-line-length
    this.igChangedSub = this.shoppingListService.inngridientsChanged.subscribe((ingridients: Ingrdient[]) => this.ingredients = ingridients);
    this.loggingService.printLog('Hello from shopping component');
  }

  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index);

  }

  // onIngredientAdded(ingrdient:Ingrdient){
  //   this.ingredients.
  //   push(ingrdient);
  // }

}
