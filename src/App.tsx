import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications'
import '@mantine/notifications/styles.css';
import { Router } from './Router';
import { theme } from './theme';

export default function App() {
  return (
    <MantineProvider theme={theme}>
			<Notifications />
      <Router />
    </MantineProvider>
  );
}
