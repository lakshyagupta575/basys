import Card from 'react-bootstrap/Card';
import styles from "./Card2.module.css"
import logo from "./assets/scanImg.jpg";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

function Card2() {
  return (
    <div className={styles.card}>
      <Card>
        <Card.Img variant="top" src={logo} className={styles.logo}/>
        <Card.Body style = {{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
          <span style={{fontWeight:700, marginTop: 2, color: 'rgb(18, 37, 75)'}}>DR Present, moderate</span>
          <span style={{fontWeight:600}}><VerifiedUserIcon style={{height: 18, marginTop: 1}}/>Verified by Dr. Domingo Sanchez</span>
          <span style={{marginTop: 4, fontSize: 14}}><a href='www.google.com'>View Recommendation</a></span>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Card2;