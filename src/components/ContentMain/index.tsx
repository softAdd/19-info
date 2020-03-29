import React from 'react';
import Container from '@material-ui/core/Container';

const ContentMain: React.FC = ({ children }) => {
  return (
      <Container maxWidth="lg" disableGutters component="main">
        {children}
      </Container>
  )
}

export default ContentMain;