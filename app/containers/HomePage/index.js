/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { Button, Input } from 'semantic-ui-react';
import { Trash } from 'tabler-icons-react';
import messages from './messages';

export default function HomePage() {
  const [theme, setTheme] = useState('Light');

  useEffect(() => {
    document.body.classList.add(theme);
  }, [theme]);

  const handleSetTheme = () => {
    if (theme === 'Dark') {
      document.body.classList.remove('Dark');
      setTheme('Light');
    } else {
      document.body.classList.remove('Light');
      setTheme('Dark');
    }
  };
  return (
    <div>
      <Button primary onClick={handleSetTheme} size="large">
        <FormattedMessage {...messages.button} />
      </Button>
      <Button secondary onClick={handleSetTheme} size="large">
        <FormattedMessage {...messages.button} />
      </Button>
      <Input type="search" size="mini" />
      <Button color="red" onClick={handleSetTheme} size="large">
        <FormattedMessage {...messages.button} />
      </Button>
      <Button icon={() => <Trash size={48} />} color="red" />
    </div>
  );
}
