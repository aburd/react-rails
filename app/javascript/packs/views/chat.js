import { normalize, schema } from 'normalizr';

export const ACTIONS = {
  TOGGLE_FETCHING_DATA: 'TOGGLE_FETCHING_DATA',
};

const message = new schema.Entity('messages');

const block = new schema.Entity('blocks', {
  messages: [message],
});

const layer = new schema.Entity('layers', {
  blocks: [block],
});

const chat = new schema.Entity('chat', {
  activeScenario: {
    layers: [layer],
  },
});

const initialState = {
  id: 'sup',
  chatName: 'Chat Name',
  scenarios: [],
  activeScenario: {
    name: 'My scenario',
    id: 1,
    layers: [
      {
        id: 1,
        name: 'My Layer',
        blocks: [
          {
            id: 1,
            name: 'My Block',
            messages: [
              {
                id: 1,
                text: 'Hello',
              },
              {
                id: 2,
                text: 'World',
              },
            ],
          },
          {
            id: 2,
            name: 'My second block',
            messages: [
              {
                id: 3,
                text: 'Second hello',
              },
              {
                id: 4,
                text: 'Second world',
              },
            ],
          },
        ],
      },
      {
        id: 2,
        name: 'My Layer',
        blocks: [
          {
            id: 3,
            name: 'My Block',
            messages: [
              {
                id: 5,
                text: 'Hello',
              },
              {
                id: 6,
                text: 'World',
              },
            ],
          },
          {
            id: 4,
            name: 'My second block',
            messages: [
              {
                id: 7,
                text: 'Second hello',
              },
              {
                id: 8,
                text: 'Second world',
              },
            ],
          },
        ],
      },
    ],
  },
};

const normalizedData = normalize(initialState, chat);

export default (state = normalizedData, action) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_FETCHING_DATA:
      return state;
    default:
      return state;
  }
};
