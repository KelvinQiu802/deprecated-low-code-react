import { Button, Paper } from '@mui/material';

const allComponents = {
  Button: (props) => <Button {...props}>{props.text}</Button>,
  Paper: (props) => {
    let Item;
    if (typeof props.children == 'object') {
      Item = allComponents[props.children.tag];
      return (
        <Paper {...props}>
          <Item {...props.children.props} />
        </Paper>
      );
    }
    return <Paper {...props}></Paper>;
  },
};

export default allComponents;
