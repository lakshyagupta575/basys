import styles from "./Card6.module.css"
import Card from 'react-bootstrap/Card';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';  
import { View } from 'react-native';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

function Card6() {
    return (
        <div className={styles.card6}>
            <Card>
                <Card.Header className={styles.heading}>
                    <ListItemButton>
                        <ListItemIcon className = {styles.header}>
                            <FormatBoldIcon className = {styles.icon} style={{fontSize: 60, marginLeft: -15}}/>
                        </ListItemIcon>
                        <ListItemText primary="basys.ai chat" className = {styles.title} style={{marginLeft: -15, fontSize: 60}}/>
                    </ListItemButton>
                </Card.Header>
                <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
                    <button className = {styles.btn} style={{alignSelf:'flex-start', marginTop: 0}} >Hi, how can I help you today? </button>
                    <button className = {styles.btn2} style={{alignSelf:'flex-end'}} > Does the patient have coverage for insulin? </button>
                    <button className = {styles.btn} style={{alignSelf:'flex-start'}} > Yes, the coverage includes: Insulin vials pens, needles and syringes, glucose monitoring supplies and insulin pump supplies.</button>
                    <button className = {styles.btn2} style={{alignSelf:'flex-end'}} > Thank you!</button>
                    <button className = {styles.btn} style={{alignSelf:'flex-start'}} > You're welcome! Let me know if you have any othe questions.</button>
                </View>
                {/* <button className = {styles.submitBtn}>Type here... <ArrowCircleRightIcon/ ></button> */}
                <button className= {styles.submitBtn}>
                    <ListItemButton>
                        <ListItemText secondary="Type here..." className = {styles.text} style={{marginLeft: -12, marginTop: -4, fontSize: 5}}/>
                        {/* <ListItemIcon>
                            <ArrowCircleRightIcon className = {styles.icon} style={{fontSize: 25}}/>
                        </ListItemIcon> */}
                    </ListItemButton>
                </button>
            </Card>
        </div>
    )
}

export default Card6;