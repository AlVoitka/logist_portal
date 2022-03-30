import Logo from './logo/logo';
import Btn from './buttons/btn';
import DropMenu from './dropdown-menu/dropdown-menu';
import Nav from './nav/nav';

import './header.scss';



function myFunctionDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

 



const Header = () => {
    return (
        <div className='header'>
            <Logo/>
            <Nav/>
            <DropMenu dropdown={myFunctionDropdown}/>
            <Btn/>
        </div>
    )
      

}

export default Header;  