import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogHttpService } from './../blog-http.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers: [Location]
})
export class BlogViewComponent implements OnInit, OnDestroy {

  public currentBlog: any;

// tslint:disable-next-line: max-line-length
  constructor(private route: ActivatedRoute, public blogHttpService: BlogHttpService, private router: Router, private toastr: ToastrService, private loc: Location) {
    console.log('Blog View Component Constructor is Called');
  }

  ngOnInit() {
    console.log('Blog View Component ngOninit is Called');
    const myBlogId = this.route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe (
      (data: any) => {
        console.log(data);
// tslint:disable-next-line: no-string-literal
        this.currentBlog = data['data'];
      },
      (error: any) => {
        console.log('Some error Occoured');
        console.log('Error is', error);
      }
    );
  }
public deleteThisBlog(): any {
  this.blogHttpService.deleteBlog(this.currentBlog.blogId).subscribe(
    (data: any) => {
      console.log(data);
// tslint:disable-next-line: no-string-literal
      this.toastr.success(data.message);
      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 2000);
    },
    (error: any) => {
      this.toastr.error('error');
    }
  );
}

public goBack(): any {
  this.loc.back();
}

  ngOnDestroy() {
    console.log('Blog View Component Destroyed');
  }
}
