import { useUser } from '../../contexts/UserContext';

import GamesGrid from '../GamesGrid/GamesGrid';

function SavedGames() {
  const { currentUser } = useUser();

  return (
    <div className="saved-games">
      <GamesGrid
        games={currentUser?.games || []}
        title={'Mis Juegos'}
        description={'Aqui encontraras tus juegos guardados'}
        noBorder
      ></GamesGrid>
    </div>
  );
}

export default SavedGames;
