import { Component, OnInit, OnDestroy } from '@angular/core';
// import { BlogService } from './../blog.service';
import { BlogHttpService } from './../blog-http.service';

// Decorator in Angular
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

// This is simple a class
export class HomeComponent implements OnInit, OnDestroy {
  public allBlogs: any;

  constructor(public blogHttpService: BlogHttpService) {
    console.log('Home Component Constructor Called');
  }

  ngOnInit() {
    console.log('Home Component ngOninit Called');
    this.allBlogs = this.blogHttpService.getAllBlogs().subscribe(
      (data: any) => {
        console.log(data);
// tslint:disable-next-line: no-string-literal
        this.allBlogs = data['data'];
      },
      (error: any) => {
        console.log('Some error Occoured');
        console.log('Error is', error);
      }
    );
  }
  ngOnDestroy() {
    console.log('Home Component Destroyed');
  }

}
