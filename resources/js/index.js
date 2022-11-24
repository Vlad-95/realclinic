import 'jquery-match-height';

import mainCards from './modules/main-cards';
import { menu } from './modules/menu';
import form from './modules/form';
import modal from './modules/modal';

$(document).ready(function () {
  mainCards();
  menu();
  form();
  modal();
});
