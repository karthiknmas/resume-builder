import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormControl,
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ResumeserviceService } from '../resumeservice.service';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css'],
})
export class PersonDetailComponent implements OnInit {
  personForm: FormGroup;
  submitted = false;
  constructor(private fb:FormBuilder,private service:ResumeserviceService,private  router:Router) {}

  ngOnInit(): void {
    this.personForm = this.fb.group({
      first_name: ['', Validators.compose([Validators.required])],
      last_name: ['', Validators.compose([Validators.required])],
      email: ['', ([Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])],
      mobile: ['', ([Validators.required])],
    });
  }
  get f() {
    return this.personForm.controls;
  }
  onSubmit(data:any){
    this.submitted = true;
    console.log(data);  
    this.service.postPerson(data).subscribe((res) => {
      console.log(res);
      if(res.status === 201){
        this.router.navigate(['personal']);
      }
    });
  }
}
