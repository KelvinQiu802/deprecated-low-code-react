import { nanoid } from 'nanoid';

const boxStyle = {
  height: '100%',
  flex: '1',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  alignItems: 'center',
};

export default [
  {
    tag: 'RootBox',
    id: nanoid(),
    props: {
      style: { width: '100%', height: '100%', padding: '10px' },
      children: [
        {
          tag: 'Stack',
          id: nanoid(),
          props: {
            children: [
              {
                tag: 'Box',
                id: nanoid(),
                props: {
                  style: {
                    backgroundColor: 'orange',
                    ...boxStyle,
                  },
                  children: [],
                },
              },
              {
                tag: 'Box',
                id: nanoid(),
                props: {
                  style: {
                    backgroundColor: 'skyblue',
                    ...boxStyle,
                  },
                  children: [],
                },
              },
              {
                tag: 'Box',
                id: nanoid(),
                props: {
                  style: {
                    backgroundColor: 'pink',
                    ...boxStyle,
                  },
                  children: [],
                },
              },
            ],
          },
        },
      ],
    },
  },
];
