import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
export const Navbar = () => {
const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-dark bg-dark mb-3">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Star_Wars_Logo..png/640px-Star_Wars_Logo..png"
            className="img-fluid col-3"
          />
        </span>
      </Link>
      <div className="ml-auto">
        <div class="btn-group">
          <button
            type="button"
            class="btn btn-warning dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites {store.favorites.length}
          </button>
          <ul class="dropdown-menu dropdown-menu-end">
			{store.favorites.map(name =>  <li className="d-flex justify-content-between align-items-center">
              <a class="dropdown-item" href="#">
                {name}
			</a>
			<a href="#">
				<FontAwesomeIcon className="cursor-pointer" onClick={() => actions.removeFavorite(name)} icon={faTrash} />
			</a>
            </li>)}
          </ul>
        </div>
      </div>
    </nav>
  );
};