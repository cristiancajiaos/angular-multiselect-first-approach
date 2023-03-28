import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown/multiselect.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  public dropdownList = [];
  public selectedItems = [];
  public dropdownSettings: IDropdownSettings = {};

  constructor(
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.dropdownList = [
      { itemId: 1, itemText: 'Mumbai' },
      { itemId: 2, itemText: 'Bangaluru' },
      { itemId: 3, itemText: 'Pune' },
      { itemId: 4, itemText: 'Navsari' },
      { itemId: 5, itemText: 'New Delhi'}
    ];

    this.selectedItems = [
      { itemId: 3, itemText: 'Pune' },
      { itemId: 4, itemText: 'Navsari'}
    ];

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'itemId',
      textField: 'itemText',
      selectAllText: 'Select All',
      unSelectAllText: 'Unselect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  public onItemSelect(item: any): void {
    this.toastrService.success(`Item Value of ${item.itemId}: ${item.itemText}`);
  }

  public onSelectAll(item: any): void {
    this.toastrService.success(`Selected All Items`);
  }

}
