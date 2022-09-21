import { nanoid } from 'nanoid';

export default [
  {
    tag: 'Box',
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
                    width: '100px',
                    height: '100%',
                    flex: '1',
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
                    width: '100px',
                    height: '100%',
                    flex: '1',
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
                    width: '100px',
                    height: '100%',
                    flex: '1',
                  },
                  children: [
                    {
                      tag: 'Stack',
                      id: nanoid(),
                      props: {
                        children: [
                          {
                            tag: 'Button',
                            id: nanoid(),
                            props: {
                              text: 'Hi',
                              color: 'primary',
                              variant: 'contained',
                              children: [],
                            },
                          },
                          {
                            tag: 'Button',
                            id: nanoid(),
                            props: {
                              text: 'Hello',
                              color: 'warning',
                              variant: 'outlined',
                              children: [],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  },
];
