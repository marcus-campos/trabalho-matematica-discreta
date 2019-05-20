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
          title: 'Lei De Morgan'
        },
        {
          id: 'tautologie',
          title: 'Tautologia'
        },
        {
          id: 'argument',
          title: 'Argumento'
        }
      ];
  }

  selectedItem(item) {
    console.log(item)
    this.navigate(item);
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  navigate(item) {
    this.router.navigate([item.id]);
  }
}
