import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BlogHttpService } from './../blog-http.service';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

  public currentBlog: any;
  public possibleCategories = ['Ang', 'node', 'express', 'c#'];

// tslint:disable-next-line: max-line-length
  constructor(private route: ActivatedRoute, private router: Router, private blogHttpService: BlogHttpService, private toastr: ToastrService) {

  }

  ngOnInit() {
    const myBlogId = this.route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    this.currentBlog =  this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(
      (data: any) => {
// tslint:disable-next-line: no-string-literal
        this.currentBlog = data['data'];
        console.log('Current Blog', this.currentBlog.category);
      },
      (error: any) => {
        console.log('Some error Occoured');
        console.log('Error is', error);
      }
    );
  }

  public editThisBlog(): any {
    this.blogHttpService.editBlog(this.currentBlog.blogId, this.currentBlog).subscribe(
      (data: any) => {
        console.log(data);
  // tslint:disable-next-line: no-string-literal
        this.toastr.success(data.message);
        setTimeout(() => {
          this.router.navigate(['/blog', this.currentBlog.blogId]);
        }, 2000);
      },
      (error: any) => {
        this.toastr.error('error');
      }
    );
  }

}
