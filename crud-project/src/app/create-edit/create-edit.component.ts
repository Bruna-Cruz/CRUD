import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service'
import { Item } from '../models/item'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-edit',
  templateUrl: './create-edit.component.html',
  styleUrls: ['./create-edit.component.scss']
})
export class CreateEditComponent implements OnInit {

  item = {} as Item;
  list!: Item[];

  constructor(private listService: ListService) { }

  ngOnInit(): void {
    this.getList();
  }

  //get all data frin service
  getList(){
    this.listService.getList().subscribe((list: Item[]) => {
      this.list = list
    })
  }

  //checks to update or save new item
  saveItem(form: NgForm) {
    if (this.item.id !== undefined) {
      this.listService.updateItem(this.item).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.listService.saveItem(this.item).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }

  editItem(item: Item) {
    this.item = { ...item}
    this.formAddData();
  }

  deleteItem(item: Item) {
    this.listService.deleteItem(item).subscribe(() => {
      this.getList();
    });
  }

  //shows the card with from to edit or upload new item
  formAddData(){
    var addCard = document.getElementById("add-card");
    document.getElementById("add-card")!.style.display = 'block';
  }

  //receive the date in a YYYY-MM-DD format and returns DD/MM/YYYY fromat
  dateFormat(date: string){
    var day, month, year;
    var dateSplitted, result;
    result = date.match("[0-9]{4}([\-/ \.])[0-9]{2}[\-/ \.][0-9]{2}");
    if(null != result) {
        dateSplitted = result[0].split(result[1]);
        day = dateSplitted[2];
        month = dateSplitted[1];
        year = dateSplitted[0];
    }

    return day+"/"+month+"/"+year;
  }

  // clean form
  cleanForm(form: NgForm) {
    this.getList();
    form.resetForm();
    this.item = {} as Item;
  }
}
