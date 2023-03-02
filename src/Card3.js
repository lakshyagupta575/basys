import Card from 'react-bootstrap/Card';
import styles from "./Card3.module.css"

function Card3() {
  return (
    <div className={styles.card3}>
        <Card>
            <Card.Header className={styles.heading}>Medical History</Card.Header>
            <Card.Body className={styles.card3Body}>
                <div className={styles.bodyLeftDiv} style = {{display: 'flex', flexWrap: 'wrap'}}>
                    <span className={styles.bodyHeading}>Current Diagnoses</span>
                    <span style={{marginTop:5, marginLeft: 8}}>-(I10) Essential (primary) hypertension</span>
                    <span style={{marginTop:5, marginLeft: 8}}>-(E11.9) Type 2 diabetes mellitus without complications</span>
                    <span style={{marginTop:5, marginLeft: 8}}>-(E11.31) Type 2 diabetes mellitus with unspecified diabetic retinopathy</span>
                </div>
                <div className={styles.bodyRightDiv} style = {{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', flexGrow: 1, rowGap: 10}}>
                    <button className={styles.btn}>
                        Diagnoses
                    </button>
                    <button className={styles.btn}>
                        Patient Risk Score
                    </button>
                    <button className={styles.btn}>
                        Social Determinants 
                    </button>
                    <button className={styles.btn}>
                        Smoking Status
                    </button>
                    <button className={styles.btn}>
                        Allergies
                    </button>
                    <button className={styles.btn}>
                        Medical Certificate
                    </button>
                    <button className={styles.btn}>
                        Connect
                    </button>
                </div>
            </Card.Body>
        </Card>
    </div>
  );
}

export default Card3;