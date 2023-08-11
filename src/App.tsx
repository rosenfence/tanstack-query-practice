import { useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query';

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
    queryKey: ['data'],
    queryFn: () => {
      fetch('https://koreanjson.com/posts/1').then((res) => res.json());
    },
  });

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error</div>;

  return (
    <div>
      <h1>{data.id}</h1>
      <strong>{data.title}</strong>
      <p>{data.content}</p>
      <p>{data.createdAt}</p>
      <p>{data.updatedAt}</p>
      <div>userId : {data.UserId}</div>
    </div>
  );
}

export default App;
