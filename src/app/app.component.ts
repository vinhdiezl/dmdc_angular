// app.component.ts

import {Component, ViewChild} from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ElementsService } from './elements.service';
import { PeriodicElement} from './PeriodicElement';

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<PeriodicElement>;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'year'];
  elements: PeriodicElement[];
  
  constructor(private elementsService: ElementsService){ 
    this.dataSource = new MatTableDataSource();
  }
  

  getElements(): void{
    this.elementsService.getElements()
    .subscribe(elements => this.elements = elements);
  }
  ngOnInit() {
    this.elementsService.getElements().subscribe(
      data => {
        this.dataSource.data = data;
      }
    );
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
