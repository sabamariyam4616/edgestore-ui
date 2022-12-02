import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  public tasks_model = [
    {
      category_name: 'Tasks',
      tasks: [
        {
          name: 'Image Classification',
          imgUrl: 'assets/icons/Zero Shot.svg',
        },
        {
          name: 'Translation',
          imgUrl: 'assets/icons/Zero Shot.svg',
        },
        {
          name: 'Fill-Mask',
          imgUrl: 'assets/icons/Zero Shot.svg',
        },
        {
          name: 'Image Segmentationel',
          imgUrl: 'assets/icons/Zero Shot.svg',
        },
        {
          name: 'Token Classification',
          imgUrl: 'assets/icons/Zero Shot.svg',
        },
        {
          name: 'Summarization',
          imgUrl: 'assets/icons/Zero Shot.svg',
        },
        {
          name: 'Audio Classification',
          imgUrl: 'assets/icons/Zero Shot.svg',
        },
        {
          name: 'Sentence Similarity',
          imgUrl: 'assets/icons/Zero Shot.svg',
        },
        {
          name: 'Question Answering',
          imgUrl: 'assets/icons/Zero Shot.svg',
        },
        {
          name: 'Auto-Speech Recongnition',
          imgUrl: 'assets/icons/Zero Shot.svg',
        },
        {
          name: 'Zero- Shot Classification',
          imgUrl: 'assets/icons/Zero Shot.svg',
        },
      ],
      other_tasks: 22,
    },
  ];
  public platforms_model = [
    {
      category_name: 'Platforms',
      platforms: [
        {
          name: 'Coral',
          imgUrl: 'assets/icons/Zero Shot.svg',
        },
        {
          name: 'Android Phone',
          imgUrl: 'assets/icons/Zero Shot.svg',
        },
        {
          name: 'iPhone',
          imgUrl: 'assets/icons/Zero Shot.svg',
        },
        {
          name: 'Jetson Nano',
          imgUrl: 'assets/icons/Zero Shot.svg',
        },
      ],
      other_tasks: 31,
    },
  ];
  public datasets_model = [
    {
      category_name: 'Platforms',
      datasets: [
        {
          name: 'mozilla-foundation/common_voice',
        },
        {
          name: 'squad',
        },
        {
          name: 'wikipedia',
        },
        {
          name: 'xtreme',
        },
        {
          name: 'bookcorpus',
        },
        {
          name: 'common_voice',
        },
        {
          name: 'emoticon',
        },
        {
          name: 'glue',
        },
      ],
      other_tasks: 308,
    },
  ];
  public licenses_model = [
    {
      category_name: 'Licenses',
      licenses: [
        {
          name: 'apache-2.0',
          imgUrl: 'assets/icons/Zero Shot.svg',
        },
        {
          name: 'mit',
          imgUrl: 'assets/icons/Zero Shot.svg',
        },
        {
          name: 'afl-3.0',
          imgUrl: 'assets/icons/Zero Shot.svg',
        },
      ],
      other_licenses: 31,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
