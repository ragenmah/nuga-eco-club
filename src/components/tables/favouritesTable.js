import React from "react";
import "./style.css";
const FavoriteListTable = ({ favorites }) => {
  return (
    <div>
      {/* <h2>Your Favorites</h2> */}
      <table className="favorite-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {favorites.map((favorite, index) => (
            <tr key={index}>
              <td>{favorite.name}</td>
              <td>{favorite.type}</td>
              <td>
                {/* <button onClick={() => removeFromFavorites(favorite.id)}>
                  Remove
                </button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FavoriteListTable;
