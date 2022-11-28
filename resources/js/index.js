import 'jquery-match-height';

import mainCards from './modules/main-cards';
import { menu } from './modules/menu';
import form from './modules/form';
import modal from './modules/modal';
import tabs from './modules/tabs';

$(document).ready(function () {
  mainCards();
  menu();
  form();
  modal();
  tabs();
});
