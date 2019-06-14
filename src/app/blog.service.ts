import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  public curretBlog: any;
  public allBlogs = [
    {
      blogId: 'sRbTXsQnL',
      lastModified: '2019-05-27T10:55:24.840Z',
      created: '2019-05-27T10:55:24.840Z',
      tags: ['#Ang', '#Node', '#REACT'],
      author: 'Vikram HB',
      category: 'Comedy',
      isPublished: true,
      views: 0,
      bodyHtml: '<p>With our online editor, you can edit the code, and click on a button to view the result.</p>',
      description: 'Description Description Description Description ',
      title: 'its ashok'
    },
    {
      blogId: 'VtyZe9z1m',
      lastModified: '2019-05-27T11:54:16.236Z',
      created: '2019-05-27T11:54:16.236Z',
      tags: ['#Ang', '#Node', '#REACT'],
      author: 'Miraz Alam',
      category: 'Comedy',
      isPublished: true,
      views: 0,
      bodyHtml: 'This is Descriptionof HTML',
      description: ' something something',
      title: ' something something'
    },
    {
      blogId: 'CByDPrLVx',
      lastModified: '2019-05-27T19:05:41.298Z',
      created: '2019-05-27T19:05:41.298Z',
      tags: ['#Ang', '#Node', '#REACT'],
      author: 'Pulavarthy Surya Sneha',
      category: 'Comedy',
      isPublished: true,
      views: 0,
      bodyHtml: 'hello',
      description: 'First Time',
      title: 'Hello World'
    },
    {
      blogId: 'KrIrjXXFC',
      lastModified: '2019-05-27T20:34:11.695Z',
      created: '2019-05-27T20:34:11.695Z',
      tags: ['#Ang', '#Node', '#REACT'],
      author: 'Miraz Alam',
      category: 'Comedy',
      isPublished: true,
      views: 0,
      bodyHtml: 'This is Descriptionof HTML',
      description: 'this is a description 1',
      title: 'this is blog'
    },
    {
      blogId: 'MQuyRpiWg',
      lastModified: '2019-05-28T18:51:09.398Z',
      created: '2019-05-28T18:51:09.398Z',
      tags: ['#Ang', '#Node', '#REACT'],
      author: 'Mufaddal Husain',
      category: 'Category1',
      isPublished: true,
      views: 0,
      bodyHtml: '<h1>POSTMAN</h1>',
      description: 'My first blog description',
      title: 'Mtitle'
    }
  ];

  // To Get All Blogs
  public getAllBlogs(): any {
    return this.allBlogs;
  }

  // To Get Single Blogs
  public getSingleBlogInfo(currentBlogId: any): any {
    for (const blog of this.allBlogs) {
      if (blog.blogId === currentBlogId) {
        this.curretBlog = blog;
      }
    }
    return this.curretBlog;
  }
  constructor() {
      console.log('Service Constructor is Called');
   }
}
