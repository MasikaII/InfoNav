import HomeSidebar from './HomeSidebar';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import SettingsIcons from '@mui/icons-material/Settings';
//import GoogleAuth from './GoogleAuth';
import { useSelector } from "react-redux";
import Blog from './blog';

function Home() {
        const isLoggedIn = useSelector((state) => state.isLoggedIn);
        console.log(isLoggedIn);

        const navigate = useNavigate();

        const logout = () => {
                localStorage.clear()
                navigate('/')
        };

        return (
                <>
                        {isLoggedIn &&
                                <div>
                                        <div style={{ display: 'flex'}}>                                        
                                                <HomeSidebar />
                                                <div style={{width:'100%', marginTop: '0px'}}>
                                                <div className="all-blogs">
                                                </div>
                                               <Blog />
                                               </div>

                                                
                                        </div>
                                </div>}
                </>
        )
}

export default Home;