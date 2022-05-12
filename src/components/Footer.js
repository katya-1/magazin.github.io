

import React from 'react';
import { Link } from 'react-router-dom';

function Footer(){
    return (
<footer>
    <div style={{display:'flex'}}>
        <img width={200} height={200} style={{margin:'0 30px 0 0'}} src="/img/logo1.png"/>
				<div className="fg1">
					<p className="foot"><b>SECREAT EARTH</b></p>
					<p className="fg">Режим работы интернет-магазина:<br/> ежедневно с 9:00 до 21:00, без выходных.</p>

					<p className="fg">
          Способы доставки ювелирных изделий, часов и иных товаров:
          <br/>• курьером по г. Минску,
          <br/>• почтой по всей Беларуси,
          <br/>• самовывоз из магазинов.
          </p>
          </div>
				</div>
				
				<div className="fg1">
					<p className="foot"><b>КЛИЕНТАМ</b></p>
					<Link to="/company"><p className="fg">О НАС</p></Link>
					<Link to="/news"><p className="fg">КАК ПОДОБРАТЬ КОЛЬЦО</p></Link>
				</div>
				<div className="fg1">
					<p className="foot"><b>ИНФОЦЕНТР</b></p>
					<p className="fg">+375 44 245-67-12 (VELKOM)</p>
					<p className="fg">+375 33 247-79-14 (МТС)</p>
					<p className="foot2">МЫ В СОЦИАЛЬНЫХ СЕТЯХ</p>
          <div className="image-site">
          <a href='https://www.instagram.com/accounts/login/'><img width={45} height={29} src="/img/INST.png" alt="instagram"/></a>
          <a href='https://vk.com/'><img width={30} height={29} src="/img/VK.png" alt="vkontante" /></a>
          <a href='https://web.telegram.org'><img width={40} height={29} src="/img/telega.png" alt="telegram" /></a>
          </div>
		</div>
        </footer>
 );
}
export default Footer;        