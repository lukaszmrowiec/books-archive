import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

@Injectable({
  providedIn: "root"
})
export class AppService {
  archiveList: AngularFireList<any>;

  constructor(private firebasedb: AngularFireDatabase) {}

  getArchiveList() {
    this.archiveList = this.firebasedb.list("titles");
    return this.archiveList;
  }

  addBook(title, author, section) {
    // console.log(title, author, section);
    this.archiveList.push({
      title: title,
      author: author,
      category: section
    });
  }

  // addCategory(categoryName) {
  //   this.archiveList.push({
  //     category: categoryName
  //   });
  // }

  removeBook($key: string) {
    this.archiveList.remove($key);
  }
}
