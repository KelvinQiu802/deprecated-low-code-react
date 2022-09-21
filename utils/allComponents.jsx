import { Box, Button, Paper } from '@mui/material';

const allComponents = {
  Button: (props) => <Button {...props}>{props.text}</Button>,
  Paper: (props) => <Paper {...props}></Paper>,
  Box: (props) => <Box {...props}></Box>,
};

export default allComponents;
