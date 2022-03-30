

import './dropdown-menu.scss'

const DropMenu = (dropdown) => {

    return (
        <div className='dropdown'>
            <div class="dropdown">
                <button onclick="myFunction()" class="dropbtn">Menu</button>
                <div id="myDropdown" class="dropdown-content">
                    <a href="#">Главная</a>
                    <a href="#">О Нас</a>
                    <a href="#">Контакты</a>
                </div>
            </div>
        </div>
    )
      
}

export default DropMenu;  