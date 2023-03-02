import styles from "./Card5.module.css"
import Card from 'react-bootstrap/Card';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';  

function Card5() {
    return (
        <div className={styles.card5}>
            <Card>
                <Card.Header className={styles.heading}>
                    <ListItemButton>
                        <ListItemIcon className = {styles.header}>
                            <FormatBoldIcon className = {styles.icon} style={{fontSize: 60, marginLeft: -15}}/>
                        </ListItemIcon>
                        <ListItemText primary="basys.ai Recommendations" className = {styles.title} style={{marginLeft: -15, fontSize: 60}}/>
                    </ListItemButton>
                </Card.Header>
                <Card.Body>
                    <div className={styles.bodyDiv1} style = {{display: 'flex', flexWrap: 'wrap'}}>
                        <span style={{textAlign:'center', height: 15, width: 290, paddingTop: 10}}>Potentially missed CPT codes</span>
                        <span style={{textAlign:'center', height: 25, width: 290, display: 'flex', flexWrap: 'wrap', justifyContent:'space-evenly'}}>
                            <button className={styles.btn}>CPT-92227</button>
                            <button className={styles.btn}>CPT-99211</button>
                        </span>
                    </div>
                    <div className={styles.bodyDiv2}>Prescriptions</div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Card5;