import { useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { fetchData } from './Api';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Datas />
    </QueryClientProvider>
  );
}

function Datas() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['data', 1],
    queryFn: fetchData,
  });

  if (isLoading) return 'Loading...';

  if (error) return 'Error';

  return (
    <div>
      <span>{data.content}</span>
    </div>
  );
}

export default App;
