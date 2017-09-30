# Draggable comes with additional modules: Sortable, Droppable, Swappable


import {Droppable} from '@shopify/draggable';

const droppable = new Droppable(document.querySelectorAll('ul'), {
  draggable: 'li',
  droppable: '#dropzone',
});

droppable.on('droppable:over', () => console.log('sortable:start'))
droppable.on('droppable:out', () => console.log('sortable:sorted'));
