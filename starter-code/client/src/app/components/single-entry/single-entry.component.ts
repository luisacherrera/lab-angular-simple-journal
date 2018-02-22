import { Component, OnInit } from '@angular/core';
import { JournalService } from '../../services/journal.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {

  journal: Object;

  journalId: any;

  constructor(private journalService: JournalService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => {
        this.journalId = String(params.id);
      })
    this.journalService.getSingleJournal(this.journalId).then(journal => {
      this.journal = journal;
    })
  }

}
