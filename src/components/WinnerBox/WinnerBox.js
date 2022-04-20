import React from "react";
import "./WinnerBox.css";

export default (props) => {
  return (
    <div className="winnerBox">
      <table className="winnerBox_table">
        <thead>
          <tr>
            <td>Code Number</td>
            <td style={{ width: "16px", textAlign: "center" }}>-</td>
            <td>{props.qrCode}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            {props.isPremium ? (
              <td>Premium Gift</td>
            ) : (
              <td>Accessories Gift</td>
            )}
            <td style={{ width: "16px", textAlign: "center" }}>-</td>
            <td>{props.gift}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
