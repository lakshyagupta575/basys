import Navbar from "./Navbar"
import HorizontalNavbar from "./HorinzontalNavbar"
import styles from "./MainComponent.module.css"
import PatientCard from "./PatientCard"
import Card2 from "./Card2"
import Card3 from "./Card3"
import Card4 from "./Card4"
import Card5 from "./Card5"
import Card6 from "./Card6"

function MainComponent() {
    return (
        <div className={styles.div1}>
            <div className={styles.div2}> 
                <Navbar /> 
            </div>
            <div className={styles.div3}>
                <HorizontalNavbar /> 
            </div>
            <div className={styles.div3}>
                <PatientCard /> 
                <Card2 />
            </div>
            <div className={styles.div4}>
                <Card3 />
                <Card4 />
            </div>
            <div className={styles.div5}>
                <Card5 />
            </div>
            <Card6 />
        </div>
    )
}

export default MainComponent;