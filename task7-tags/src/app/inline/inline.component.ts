import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-inline',
  standalone: true,
  imports: [],
  templateUrl: './inline.component.html',
  styleUrl: './inline.component.css'
})
export class InlineComponent implements OnInit {
  ogTitle = '';
  ogType = '';
  ogUrl = '';

  constructor(
    private meta: Meta,
    private title: Title
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Open Graph Page');

    this.meta.updateTag({
      property: 'og:title',
      content: 'The Rock'
    });

    this.meta.updateTag({
      property: 'og:type',
      content: 'video.movie'
    });

    this.meta.updateTag({
      property: 'og:url',
      content: '//www.imdb.com/title/tt0117500/'
    });

    this.ogTitle = this.meta.getTag("property='og:title'")?.content || '';
    this.ogType = this.meta.getTag("property='og:type'")?.content || '';
    this.ogUrl = this.meta.getTag("property='og:url'")?.content || '';
  }
}