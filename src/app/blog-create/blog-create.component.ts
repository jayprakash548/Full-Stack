
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { BlogHttpService } from './../blog-http.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

// tslint:disable-next-line: max-line-length
  constructor(private blogHttpService: BlogHttpService, private route: ActivatedRoute, private router: Router, private toastr: ToastrService) {
   }

  public blogTitle: string;
  public blogBodyHtml: string;
  public blogDescription: string;
  public blogCategory: string;
  public possibleCategories = ['Ang', 'node', 'express', 'c#'];

  public createBlog(): any {
    const blogData: any = {
      title: this.blogTitle,
      description: this.blogDescription,
      blogBody: this.blogBodyHtml,
      category: this.blogCategory
    };
    console.log(blogData);
    this.blogHttpService.createBlog(blogData).subscribe(
      (data: any) => {
        this.toastr.success('Blog Created Successfully!', 'Success!');
        setTimeout(() => {
          this.router.navigate(['/blog', data.data.blogId]);
        }, 2000);
      },
      (error: any) => {
        this.toastr.error('Some Error Occureed!', 'Oops!');
      }
    );
  }
  ngOnInit() {
    console.log('Create ngOninit has been called');
  }

}
