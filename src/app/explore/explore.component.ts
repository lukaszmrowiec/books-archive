import { Component, OnInit } from '@angular/core';
import { AppService } from './../app.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css'],
  providers: [AppService]
})
export class ExploreComponent implements OnInit {
  archiveListArray: any[];

  constructor(private archiveService: AppService) { }

  ngOnInit() {
    this.archiveService.getArchiveList().snapshotChanges().subscribe(item => {
      this.archiveListArray = [];
      item.forEach(element => {
        var el = element.payload.toJSON();
        el['$key'] = element.key;
        this.archiveListArray.push(el);
      })
    })
  }

  deletingBook($key: string) {
    this.archiveService.removeBook($key);
  }

}
