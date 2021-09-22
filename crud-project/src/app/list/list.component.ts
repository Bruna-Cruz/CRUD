import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service'
import { Item } from '../models/item'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  item = {} as Item;
  list!: Item[];

  constructor(private listService: ListService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.listService.getList().subscribe((list: Item[]) => {
      this.list = list
    })
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

}
