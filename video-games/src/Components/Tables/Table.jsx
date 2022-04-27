import React, { useState, useEffect } from "react";
import axios from "axios";

const Table = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Video Game Name</th>
                </tr>
            </thead>
            <tbody>
                {props.videoGames.map((videoGame, i) => {
                    return (
                        <tr key={i}>
                            <td>{videoGame.Name}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default Table;