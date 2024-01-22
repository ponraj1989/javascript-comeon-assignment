// Import React and necessary libs
import React, { useEffect, useState } from 'react'; 
import PlayGame from './PlayGame';
import { getGameDetails } from '../api/apicalls';
import { Icon, Image, Input, Button, Header, Grid, Container } from 'semantic-ui-react';
import '../assets/css/games.css';

// Define the Game component
const Game = ({ user, onLogout }) => {
    //State management
    const [games, setGames] = useState([]);
    const [categories, setCategories] = useState([]);
    const [searchGames, setsearchGames] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [isGameSelected, setisGameSelected] = useState(false);
    const [loading, setLoading] = useState(false);

    // Function to fetch all games from the API
    const getAllGames = async () => {
        try {
            const result = await getGameDetails('games');

            if (result.status === 200) {
                setGames(result.data);
            } else {
                console.error('Error fetching games. Status:', result.status);
            }
        } catch (error) {
            console.error('Error during game fetching:', error);
        }
    };

    // Function to fetch all categories from the API
    const getAllCategories = async () => {
        try {
            const result = await getGameDetails('categories');

            if (result.status === 200) {
                setCategories(result.data);
            } else {
                console.error('Error fetching categories. Status:', result.status);
            }
        } catch (error) {
            console.error('Error during categories fetching:', error);
        }
    };

    // Function to initiate playing a game
    const playGame = (gameCode) => {
        setLoading(true);
        setisGameSelected(true);
        const timer = setTimeout(() => {
            comeon.game.launch(gameCode);
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    };

    // Function to handle going back from the PlayGame component
    const handleBack = () => {
        setisGameSelected(false);
    };

    // useEffect to fetch games and categories on component mount
    useEffect(() => {
        getAllGames();
        getAllCategories();
    }, []);

    // Filtered games based on search input and selected category
    const filteredGames = games
        .filter(game =>
            game.name.toLowerCase().includes(searchGames.toLowerCase())
        )
        .filter(game =>
            selectedCategory ? game.categoryIds.includes(selectedCategory.id) : true
        );

    // Render the Game component UI
    return (
        <Container className="main-container" style={{ backgroundColor: 'white', padding: '20px' }}>
            {!isGameSelected && (
                <><Grid stackable>
                    <Grid.Column width={16}>
                        <div className="ui list">
                            <div className="player item">
                                <Image avatar src={user.avatar} alt="avatar" />
                                <div className="content">
                                    <Header as="h4" className="name">
                                        {user.name}
                                    </Header>
                                    <div className="description event welcome-text">{user.event}</div>
                                </div>
                            </div>
                        </div>
                    </Grid.Column>
                </Grid><Grid stackable>
                        <Grid.Column width={8}>
                            <Button className="logout-btn" onClick={onLogout}>
                            <Icon name="log out" />
                                Log Out
                            </Button>
                        </Grid.Column>
                        <Grid.Column width={8} textAlign="right">
                            <Input
                                className="search-input"
                                icon="search"
                                placeholder="Search Game"
                                value={searchGames}
                                onChange={(e) => setsearchGames(e.target.value)} />
                        </Grid.Column>
                    </Grid><Grid stackable>
                        <Grid.Column width={12}>
                            <Header as="h2" className="ui dividing header">
                                Games
                            </Header>
                            <div className="ui relaxed divided game items links">
                                {filteredGames.length === 0 ? (
                                    <div className="no-result">No Result</div>
                                ) : (
                                    filteredGames.map((game) => (
                                        <div className="game item" key={game.code}>
                                            <div className="ui small image">
                                                <Image src={game.icon} alt="game-icon" />
                                            </div>
                                            <div className="content">
                                                <Header as="h4" className="name">
                                                    {game.name}
                                                </Header>
                                                <div className="description">{game.description}</div>
                                                <div className="extra">
                                                    <Button
                                                    
                                                        className="play-btn"
                                                        onClick={() => playGame(game.code)}
                                                    ><Icon name="play" />
                                                        Play
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Header as="h2" className="ui dividing header">
                                Categories
                            </Header>
                            <div className="ui selection animated list category items custom-category-list">
                                {categories.map((category) => (
                                    <div
                                        className={`category item ${selectedCategory === category ? 'active' : ''}`}
                                        key={category.id}
                                        onClick={() => setSelectedCategory(category)}
                                    >
                                        <div className="content">
                                            <Header as="h4">{category.name}</Header>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Grid.Column>
                    </Grid></>
            )}
            {isGameSelected && <PlayGame onBack={handleBack} />}
            {loading && (
                <div className="spinner-container">
                <div className="spinner"> 
                </div>
            </div>
    )
}
        </Container >
    );
};

export default Game;
