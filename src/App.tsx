import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Datas from './Datas';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Datas />
    </QueryClientProvider>
  );
}

export default App;
