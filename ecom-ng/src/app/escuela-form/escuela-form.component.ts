import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EscuelaService } from '../services/escuela.service';

@Component({
  selector: 'app-escuela-form',
  templateUrl: './escuela-form.component.html',
  styleUrls: ['./escuela-form.component.css']
})
export class EscuelaFormComponent implements OnInit {

  escuelaForm: FormGroup;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuild: FormBuilder,
    private escuelaService: EscuelaService,
  ) {
  }
  ngOnInit() {
    this.escuelaForm = this.formBuild.group({
      esta_acre: ['',[Validators.required]],
      nombre: ['',[Validators.required]],
      id: [''],
      facultad_Id: ['',[Validators.required]],
    });
    //get data
    let id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.escuelaService.getById(id).subscribe(response => {
        this.escuelaForm.setValue(response);
        console.log(response);
      });
    }

  }
  save() {
    console.log(this.escuelaForm.value);
    let id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.escuelaService.update(id, this.escuelaForm.value).subscribe(response => {
        console.log("UPDATE ",response);
      });
    }else{
      this.escuelaService.add(this.escuelaForm.value).subscribe(response => {
        console.log("ADD ",response);
      });
    }
    this.router.navigate(['/escuela']);
  }

}
