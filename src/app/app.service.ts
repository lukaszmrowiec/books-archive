import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  archiveList: AngularFireList<any>;

  constructor(private firebasedb: AngularFireDatabase ) { }

  getArchiveList() {
    this.archiveList = this.firebasedb.list('titles');
    return this.archiveList;
  }

  addBook(title, author, category) {
    console.log(title, author, category);
    this.archiveList.push({
      title: title,
      author: author,
      category: category
    })
  }

  removeBook($key: string) {
    this.archiveList.remove($key);
  }
}
