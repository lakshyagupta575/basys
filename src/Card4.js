import styles from "./Card4.module.css"
import Card from 'react-bootstrap/Card';
import { View } from 'react-native';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';

function Card4() {
  return (
    <div className={styles.card4}>
        <Card>
            <Card.Header className={styles.heading}>AGP Report</Card.Header>
            <Card.Body className={styles.card4Body}>
                <div className={styles.card4Div1}>
                    <View style={{flex: 1, flexDirection: 'row', height: 70, justifyContent: 'space-evenly', paddingTop: 13 }}>
                        <View style={{width: 120}} > <span style={{fontWeight: 600, fontSize: 19, textAlign: 'center'}}>Time in</span> <span style={{fontWeight: 600, fontSize: 16, textAlign: 'center'}}>Target Range</span> <span style={{fontSize: 13, textAlign: 'center'}}>70-180 mg/dL</span></View>
                        <View style={{width: 120}} > <span style={{fontWeight: 600, fontSize: 30, textAlign: 'center'}}>52%</span> <span style={{textAlign: 'center'}}>(12h 28min)</span> </View>
                        <View style={{width: 120}} > <span style={{textAlign: 'center'}}><LaptopChromebookIcon style={{fontSize: 60}}/></span> </View>
                    </View>
                </div>
                <div className={styles.card4Div2}>
                    <span style={{backgroundColor:'orange', height: 34, width: 60, borderBottomLeftRadius: 5}}></span>
                    <span style={{backgroundColor:'yellow', height: 34, width: 80}}></span>
                    <span style={{backgroundColor: "green", height: 34, width: 308.024, borderBottomRightRadius: 5}}></span>
                </div>
            </Card.Body>
        </Card>
    </div>
  );
}

export default Card4;