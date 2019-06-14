
import { Injectable } from '@angular/core';
// Importing http client to make the request
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {

// tslint:disable-next-line: max-line-length
  private authToken: any = 'NTc2YWI4NzcyOTkyOWM4MzIxYWIyYTY0Njg5ZmQ4MWNjYTJiMGRlZDk2ZmJjNDY0OTdjZjgyNWEyYWEzZGRmYjI1NjY4YmY4MjRkOTZhMGIyY2ZmNzRhNTlkMjZhNWQ0MmRmM2ZmODEyNWY5NDIxN2RhMzVjOGM4YTQzNGQxMTU1ZA==';
  public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';

  constructor(private http: HttpClient ) {
    console.log('http-services has been called');
  }

  private handleError(err: HttpErrorResponse) {
    console.log('Handle Error of Http Call');
    console.log(err.message);
    return Observable.throw(err.message);
  }

  // Get All Blogs
  public getAllBlogs(): any {
// tslint:disable-next-line: max-line-length
    const myResponse = this.http.get(this.baseUrl + '/all' + '?authToken=' + this.authToken);
    console.log(myResponse);
    return myResponse;
  }
  // Get Single Blogs
  public getSingleBlogInformation(currentBlogId: any): any {
    const resp = this.http.get(this.baseUrl + '/view' + '/' + currentBlogId + '?authToken=' + this.authToken);
    console.log(resp);
    return resp;
  }

  // Create Blog
  public createBlog(blogData: any): any {
    const resp = this.http.post(this.baseUrl + '/create' + '?authToken=' + this.authToken, blogData );
    return resp;
  }

  // Delete Blog
  public deleteBlog(blogId: any): any {
    const data = {};
    const resp = this.http.post(this.baseUrl + '/' + blogId + '/delete' + '?authToken=' + this.authToken, data);
    return resp;
  }

  // Edit Blog
  public editBlog(blogId: any, blogData: any): any {
    const resp = this.http.put(this.baseUrl + '/' + blogId + '/edit' + '?authToken=' + this.authToken, blogData);
    return resp;
  }
}
