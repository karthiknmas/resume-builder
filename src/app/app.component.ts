import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThemePalette } from '@angular/material/core';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title: 'Angular';
  public disabled = true;

  public toggleDisabled(): void {
    this.disabled = !this.disabled;
  }
  // reverse: boolean = false;
  // key: string = 'id';
  // order: string = '';
  // users: any = [];
  // private _jsonURL = 'assets/db.json';
  constructor(private http: HttpClient) {
    //   this.getJSON().subscribe((res: any) => {
    //     this.users = res.users;
    //     console.log(this.users);
    //   });
  }
  // public getJSON(): Observable<any> {
  //   return this.http.get(this._jsonURL);
  // }

  ngOnInit(): void {}
  // sort(key: any) {
  //   this.key = key;
  //   this.reverse = !this.reverse;
  //   console.log(key, 'sort');
  //   // (click)="sort('id')"
  // }
}
