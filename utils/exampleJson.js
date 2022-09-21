import { nanoid } from 'nanoid';

const boxStyle = {
  height: '100%',
  flex: '1',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  alignItems: 'center',
};

const stackStyle = {
  display: 'flex',
  width: '100%',
  height: '100%',
  flexDirection: 'row',
  padding: '5px',
  justifyContent: 'space-evenly',
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
            style: {
              ...stackStyle,
              height: '100px',
            },
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
                  children: [
                    {
                      tag: 'Stack',
                      id: nanoid(),
                      props: {
                        style: { ...stackStyle },
                        children: [
                          {
                            tag: 'Box',
                            id: nanoid(),
                            props: {
                              style: {
                                ...boxStyle,
                                backgroundColor: 'green',
                              },
                              children: [],
                            },
                          },
                          {
                            tag: 'Box',
                            id: nanoid(),
                            props: {
                              style: {
                                ...boxStyle,
                                backgroundColor: 'orange',
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
