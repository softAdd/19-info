import React from 'react';

import ContentMain from 'components/ContentMain';
import SearchBar from 'components/SearchBar';
import ContentGrid from 'components/ContentGrid';

const App: React.FC = () => {
  return (
    <ContentMain>
      <SearchBar />
      <ContentGrid />
    </ContentMain>
  )
}

export default App;