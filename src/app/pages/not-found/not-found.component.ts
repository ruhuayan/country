import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-not-found',
  // templateUrl: './not-found.component.html',
  // styleUrls: ['./not-found.component.scss'],
  template: `
    404 - Page not found 
    
    You might want to go to the "{{ path }}" page
  `,
})
export class NotFoundComponent implements OnInit {
  path: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.pipe(take(1)).subscribe((data: { path: string }) => {
      console.log(data)
      this.path = data.path;
    });
  }
}
