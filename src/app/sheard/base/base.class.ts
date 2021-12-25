import { TranslateService } from '@ngx-translate/core';

export class Base {
  _translate!: TranslateService;
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'persian']);
    translate.setDefaultLang('persian');
    this._translate = translate;
  }
}
