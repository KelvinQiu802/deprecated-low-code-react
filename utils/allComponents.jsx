import { Box, Button, Paper, Stack } from '@mui/material';

const allComponents = {
  Button: (props) => <Button {...props}>{props.text}</Button>,
  Paper: (props) => <Paper {...props}></Paper>,
  Box: (props) => <Box {...props}></Box>,
  Stack: (props) => <Stack {...props} style={stackStyle}></Stack>,
};

const stackStyle = {
  display: 'flex',
  height: '50px',
  width: '100%',
  flexDirection: 'row',
  padding: '5px',
};

export default allComponents;
