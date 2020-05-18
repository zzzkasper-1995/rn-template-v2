import {Navigation, Log} from '../library';
import {DRAGGABLE} from './screenName';
import {openDraggable} from './action';

export function transition(type) {
  Log('TRANSITION ', type);

  switch (type) {
    case openDraggable: {
      Navigation.showModal(DRAGGABLE, {
        modalPresentationStyle: 'overCurrentContext',
        modalTransitionStyle: 'crossDissolve',
      });
    }
  }
}
