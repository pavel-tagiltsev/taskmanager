import SiteMenuView from './view/site-menu.js';
import FilterView from './view/filter.js';
import {generateTask} from './mock/task.js';
import BoardPresenter from './presenter/board.js';
import TasksModel from './model/tasks.js';
import FilterModel from './model/filter.js';
import {render, RenderPosition} from './utils/render.js';

const TASK_COUNT = 22;

const tasks = new Array(TASK_COUNT).fill().map(generateTask);
const filters = [
  {
    type: 'all',
    name: 'ALL',
    count: 0,
  },
];

const tasksModel = new TasksModel();
tasksModel.setTasks(tasks);

const filterModel = new FilterModel();

const siteMainElement = document.querySelector('.main');
const siteHeaderElement = siteMainElement.querySelector('.main__control');

const boardPresenter = new BoardPresenter(siteMainElement, tasksModel);

render(siteHeaderElement, new SiteMenuView(), RenderPosition.BEFOREEND);
render(siteMainElement, new FilterView(filters, 'all'), RenderPosition.BEFOREEND);

boardPresenter.init();
