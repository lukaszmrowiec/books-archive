import { Component, OnInit } from '@angular/core';
import { AppService } from './../app.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [AppService]
})
export class AddComponent implements OnInit {
  archiveListArray: any[];
  // title: string;
  // author: string;
  // category: string;

  constructor(private archiveService: AppService) { }

  ngOnInit() {
    this.archiveService
    .getArchiveList()
    .snapshotChanges()
    .subscribe(item => {
      this.archiveListArray = [];
      item.forEach(element => {
        var el = element.payload.toJSON();
        el["$key"] = element.key;
        this.archiveListArray.push(el);
      });
    });
  }

  addItem(title, author, category) {
    this.archiveService.addBook(title, author, category);
  }

}
