import { Box, Button, Paper, Stack } from '@mui/material';

const allComponents = {
  Button: (props) => <Button {...props}>{props.text}</Button>,
  Paper: (props) => <Paper {...props}></Paper>,
  RootBox: (props) => <Box {...props}></Box>,
  Box: (props) => <Box {...props}></Box>,
  Stack: (props) => <Stack {...props} style={stackStyle}></Stack>,
};

const stackStyle = {
  display: 'flex',
  height: '50px',
  width: '100%',
  flexDirection: 'row',
  padding: '5px',
  justifyContent: 'space-evenly',
};

export default allComponents;
