import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { from } from 'rxjs';
declare function init(apiKey: string): Promise<any>;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {

    from(init(environment.payload.apiKey)).subscribe(x => {
      debugger;
    });
  }
}
