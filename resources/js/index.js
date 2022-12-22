import 'jquery-match-height';
import 'jquery-mask-plugin';

import mainCards from './modules/main-cards';
import { menu } from './modules/menu';
import form from './modules/form';
import modal from './modules/modal';
import tabs from './modules/tabs';
import accordion from './modules/accordion';
import preview from './modules/preview';

$(document).ready(function () {
  mainCards();
  menu();
  form();
  modal();
  tabs();
  accordion();
  preview();
});
