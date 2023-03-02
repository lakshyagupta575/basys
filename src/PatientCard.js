import Card from 'react-bootstrap/Card';
import styles from "./PatientCard.module.css"
import logo from "./assets/profile.jpg";

function PatientCard() {
  return (
    <div className={styles.card}>
        <Card>
        <Card.Header className={styles.header}>
            <Card.Img variant="top" src={logo} className={styles.logo}/>
            <div className={styles.title}>
                <span className={styles.patientName}>Linda Harris</span>
                <span>11/09/1945(76 yrs),F</span>
                <span style={{fontFamily: 'Franklin Gothic Medium' , fontWeight:500}}>Non-smoker</span>
            </div>
        </Card.Header>
        <Card.Body style={{marginLeft: 20, fontFamily: 'sans-serif', fontSize: 15}}>
            <Card.Text>
            <span>EMPI/PRN &nbsp;Phone &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PCP</span>
            <span style={{marginTop:3}}>P078645 &nbsp;&nbsp;&nbsp;&nbsp;512-265-4081 Dr. Karen Carter</span>
            <span style={{marginTop:8}}><a href='www.google.com'>change</a></span>
            </Card.Text>
        </Card.Body>
        </Card>
    </div>
  );
}

export default PatientCard;