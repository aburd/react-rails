import { combineReducers } from 'redux';
import undoable from 'redux-undo';
import chat from './chat';

export default combineReducers({
  chat: undoable(chat, { undoType: 'UNDO_CHAT' }),
});
