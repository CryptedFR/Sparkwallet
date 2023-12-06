import Logo from '../assets/spark.png';


export default function SplashScreen() {
    return (
        <div className="splashscreen">
            <img src={Logo} alt="Spark logo" />
            <svg className="loader" width="60px" height="60px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <path fill="none" d="M0 0h24v24H0z"/>
                    <path fill="white" d="M18.364 5.636L16.95 7.05A7 7 0 1 0 19 12h2a9 9 0 1 1-2.636-6.364z"/>
                </g>
            </svg>
        </div>
    )
}