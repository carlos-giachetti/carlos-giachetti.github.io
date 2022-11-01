import { ContentService } from './../app-services/content.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  constructor(public contentService: ContentService) {

  }

  ngOnInit() {
    this.contentService.content = 'this is some content';
  }

  public setSomeContent(someContentToApply: HTMLInputElement): void {
    console.log(`someContentToApply.value = '${someContentToApply.value}'`);

    this.contentService.content = someContentToApply.value;

    console.log(`this.contentService.content = '${this.contentService.content}'`);
  }
}
