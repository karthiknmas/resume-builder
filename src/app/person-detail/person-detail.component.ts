import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ResumeserviceService } from 'src/app/resumeservice.service';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css'],
})
export class PersonDetailComponent implements OnInit {
  personForm: FormGroup;
  submitted = false;
  value: string;

  constructor(
    private fb: FormBuilder,
    private service: ResumeserviceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.personForm = this.fb.group({
      first_name: ['', Validators.compose([Validators.required])],
      last_name: ['', Validators.compose([Validators.required])],
      email: ['', Validators.required, Validators.pattern('[^@s]+@[^@s]+')],
      mobile: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
    });
  }

  get f() {
    return this.personForm.controls;
  }

  onSubmit(data: any) {
    this.submitted = true;
    this.service.postPerson(data).subscribe((res) => {
      if (res.status === 201) {
        this.router.navigate(['personal']);
      }
      if (res.status === 404) {
        alert('Check Your Email');
      }
    });
  }
}
