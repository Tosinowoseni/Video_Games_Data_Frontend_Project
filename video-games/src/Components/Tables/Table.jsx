import StatsButton from "../statsButton";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Table = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>TITLE</th>
                    <th>PLATFORM</th>
                    <th>RELEASE YEAR</th>
                    <th>PUBLISHER</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {props.videoGames.map((videoGame, i) => {
                    return (
                        <tr key={i}>
                            <td>{videoGame.name}</td>
                            <td>{videoGame.platform}</td>
                            <td>{videoGame.year}</td>
                            <td>{videoGame.publisher}</td>
                            <td>
                                <StatsButton
                                    gameName={videoGame.name}
                                    getByName={props.getByName}
                                />
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default Table;