import { Providers } from './providers';
import { AppLayout } from './router';

export function App() {
  return (
    <Providers>
      <AppLayout />
    </Providers>
  );
}

export default App;
