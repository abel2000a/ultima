import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FacultadService } from '../services/facultad.service';

@Component({
  selector: 'app-facultad-index',
  templateUrl: './facultad-index.component.html',
  styleUrls: ['./facultad-index.component.css']
})
export class FacultadIndexComponent implements OnInit {
  list;
  constructor(
    private route: ActivatedRoute,
    private facultadService: FacultadService,
  ) {
    this.getList();
  }
  ngOnInit() {
    this.getList();
  }
  private getList() {
    this.facultadService.getList().subscribe(response => {
      this.list=response;
    });
  }
  delete(id) {
    console.log("delete:"+id);
    this.facultadService.delete(id).subscribe(response => {
      console.log("de = " + JSON.stringify(response));
      this.getList();
    });
  }

}
