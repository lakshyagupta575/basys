import * as React from 'react';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PatientSummaryIcon from '@mui/icons-material/ContentPaste'
import UtilizationIcon from '@mui/icons-material/AcUnit';
import ReportIcon from '@mui/icons-material/Analytics';
import ClaimsIcon from '@mui/icons-material/Dehaze'
import ProfileIcon from '@mui/icons-material/AccountCircle'
import AuthorizationIcon from '@mui/icons-material/Autorenew'
import styles from './Navbar.module.css'

function Navbar() {
  return (
      <List
        sx={{maxWidth: 250, bgcolor: 'background.paper', minHeight: 660, marginTop: 2, marginLeft: 4}}
        component="nav"
      >

        <ListItemButton>
          <ListItemIcon className = {styles.header}>
              <FormatBoldIcon className = {styles.icon} style={{fontSize: 80, marginLeft: -15}}/>
          </ListItemIcon>
          <ListItemText primary="basys.ai" className = {styles.title} style={{paddingLeft: 15}}/>
        </ListItemButton>

        <ListItemButton style = {{marginTop: 15}}>
          <ListItemIcon>
              <PatientSummaryIcon className = {styles.itemIcon} />
          </ListItemIcon>
          <ListItemText primary="Patient Summary" className = {styles.itemText} />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <ReportIcon className = {styles.itemIcon} />
          </ListItemIcon>
          <ListItemText primary="Reports" className = {styles.itemText} />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <AuthorizationIcon className = {styles.itemIcon} />
          </ListItemIcon>
          <ListItemText primary="Prior Authorization" className = {styles.itemText} />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <UtilizationIcon className = {styles.itemIcon} />
          </ListItemIcon>
          <ListItemText primary="Utilization Management" className = {styles.itemText} />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <ClaimsIcon className = {styles.itemIcon} />
          </ListItemIcon>
          <ListItemText primary="Claims" className = {styles.itemText} />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <ProfileIcon className = {styles.itemIcon} />
          </ListItemIcon>
          <ListItemText primary="My Profile" className = {styles.itemText} />
        </ListItemButton>
      </List>
  );
}

export default Navbar;