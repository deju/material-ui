import * as React from 'react';
import {
  Avatar as MuiAvatar,
  ListItemAvatar as MuiListItemAvatar,
} from '@mui/material';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ListSubheader from '@mui/material/ListSubheader';
import Select from '@mui/material/Select';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import SmartphoneRoundedIcon from '@mui/icons-material/SmartphoneRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';

const Avatar = styled(MuiAvatar)(({ theme }) => ({
  width: 32,
  height: 32,
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.secondary,
  border: `1px solid ${theme.palette.divider}`,
}));

const ListItemAvatar = styled(MuiListItemAvatar)({
  minWidth: 0,
  marginRight: 10,
});

export default function SelectContent() {
  const [company, setCompany] = React.useState('');

  const handleChange = (event) => {
    setCompany(event.target.value);
  };

  return (
    <Box sx={{ width: '215px' }}>
      <Select
        labelId="company-select"
        id="company-simple-select"
        value={company}
        onChange={handleChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Select company' }}
        fullWidth
        sx={{
          maxHeight: 56,
          '& .MuiSelect-select': { display: 'flex', alignItems: 'center', pl: 1 },
        }}
      >
        <ListSubheader>Production</ListSubheader>
        <MenuItem value="">
          <ListItemAvatar>
            <Avatar alt="Sitemark web">
              <DevicesRoundedIcon sx={{ fontSize: '1rem' }} />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Sitemark-web" secondary="Web app" />
        </MenuItem>
        <MenuItem value={10}>
          <ListItemAvatar>
            <Avatar alt="Sitemark App">
              <SmartphoneRoundedIcon sx={{ fontSize: '1rem' }} />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Sitemark-app" secondary="Mobile application" />
        </MenuItem>
        <MenuItem value={20}>
          <ListItemAvatar>
            <Avatar alt="Sitemark Store">
              <DevicesRoundedIcon sx={{ fontSize: '1rem' }} />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Sitemark-Store" secondary="Web app" />
        </MenuItem>

        <ListSubheader>Development</ListSubheader>
        <MenuItem value={30}>
          <ListItemAvatar>
            <Avatar alt="Sitemark Store">
              <ConstructionRoundedIcon sx={{ fontSize: '1rem' }} />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Sitemark-Admin" secondary="Web app" />
        </MenuItem>
        <Divider />
        <ListItem value={40} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AddRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Add product" />
          </ListItemButton>
        </ListItem>
      </Select>
    </Box>
  );
}
