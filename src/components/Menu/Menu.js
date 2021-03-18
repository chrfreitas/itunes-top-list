import { Link } from "react-router-dom";

import routes from "../../routes/routes";
import './Menu.css'

const Menu = () => {
    return (
        <div className="menu">
            <Link className="menu__item" to={routes.topAlbums}>Top 100 Albums</Link>
            <Link className="menu__item" to={routes.topSongs}>Top 100 Songs</Link>
        </div>
    )
};

export default Menu;