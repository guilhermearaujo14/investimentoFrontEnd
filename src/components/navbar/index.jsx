import {useNavigate, Link} from 'react-router-dom';
import './style.css';
import { mudar } from './script.js';



function Navbar(){
    const navigate = useNavigate();
    function LogOut(){
        sessionStorage.setItem("UserName", "");
        sessionStorage.setItem("UsuarioID", "");
        navigate('/');
    }
    
    return(
        <nav className="nav">
            <div className='logo' onClick={mudar}>
                <h1>Invest</h1>
            </div>
            <div className="nav-menu">
                <ul className='nav-list'>
                    <li className='list-item'><Link to='/home'>Home</Link></li>
                    <li className='list-item'><Link to='/InvestimentosAgrupados'>Investimentos</Link></li>
                    <li className='list-item'><Link to='/RelatorioCompras'>Relatórios</Link></li>
                </ul>
            </div>
            <div className="log-out">
                    <button onClick={()=> LogOut()} className='btn-log-out'>Sair</button>
                </div>
        </nav>
    )
}

export default Navbar;