import { Component, OnInit } from '@angular/core';
import { Site } from 'src/app/common/interfaces/site';
import { ConstantsService } from '../../common/services/constants.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {
  site: Site[];
  year: number;

  constructor(private _constant: ConstantsService) {
    this.year = this._constant.year;
    this.site = this._constant.site;
   }

  ngOnInit(): void {
  }

  scrollToTop(evt) {
    evt.preventDefault();

    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 20);
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 1);
  }

}
