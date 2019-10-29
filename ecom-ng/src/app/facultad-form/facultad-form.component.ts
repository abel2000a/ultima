import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FacultadService } from '../services/facultad.service';

@Component({
  selector: 'app-facultad-form',
  templateUrl: './facultad-form.component.html',
  styleUrls: ['./facultad-form.component.css']
})
export class FacultadFormComponent implements OnInit {

  facultadForm: FormGroup;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuild: FormBuilder,
    private facultadService: FacultadService,
  ) {
  }
  ngOnInit() {
    this.facultadForm = this.formBuild.group({
      
      nombre: ['', [Validators.required]],
      id: [''],
    });
    //get data
    let id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.facultadService.getById(id).subscribe(response => {
        this.facultadForm.setValue(response);
        console.log(response);
      });
    }

  }
  save() {
    console.log(this.facultadForm.value);
    let id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.facultadService.update(id, this.facultadForm.value).subscribe(response => {
        console.log("UPDATE ",response);
      });
    }else{
      this.facultadService.add(this.facultadForm.value).subscribe(response => {
        console.log("ADD ",response);
      });
    }
    this.router.navigate(['/facultad']);
  }

}
