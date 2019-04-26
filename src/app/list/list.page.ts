import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  public items: Array<{ id: string, title: string }> = [];

  constructor(private router: Router) {
      this.items = [
        {
          id: 'propositions',
          title: 'Proposições'
        },
        {
          id: 'true-table',
          title: 'Tabela verdade'
        },
        {
          id: 'de-morgan',
          title: 'Lei de De Morgan'
        },
        {
          id: 'tautologie',
          title: 'Tautologia'
        }
      ];
  }

  selectedItem(item) {
    console.log(item)
    this.navigate();
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  navigate() {
    this.router.navigate(['/true-table']);
  }
}
