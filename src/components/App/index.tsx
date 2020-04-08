import React from 'react';
import Container from '@material-ui/core/Container';

import SearchBar from 'components/SearchBar';
import ContentGrid from 'components/ContentGrid';

const App: React.FC = () => {
  return (
    <Container maxWidth="lg" disableGutters component="main">
      <SearchBar />
      <ContentGrid />
    </Container>
  )
}

export default App;