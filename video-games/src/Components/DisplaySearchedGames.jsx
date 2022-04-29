const DispalySearchedGames = ({ games, input}) => { 
    console.log(games);
    return (
        <table>
            <thread>
                <tr>
                    <th>Title</th>
                    <th>Platform</th>
                    <th>Release</th>
                    <th>Publisher</th>
                    <th>Genre</th>
                </tr>
            </thread>
        <tbody>
        {games
            .filter(function (el) {
                if (el.name.includes(input)){// || el.platform.includes(`${input}`) || el.release_year.includes(`${input}`) || el.publisher.includes(`${input}`) || el.genre.includes(`${input}`)) {
                    return true;
                }
            })
            .map((game, index) => {
                return (
                    <tr key={index}>
                        <td>{game.name}</td>
                        <td>{game.platform}</td>
                        <td>{game.release_year}</td>
                        <td>{game.publisher}</td>
                        <td>{game.genre}</td>
                    </tr>
                );
            })}
    </tbody>
</table>
);
};

export default DisplaySearchedGames;
    
