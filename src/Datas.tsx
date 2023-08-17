import { useQuery } from '@tanstack/react-query';
import { fetchData } from './Api';
import { DataType } from './Interface';

function Datas() {
  const { isLoading, error, data } = useQuery<DataType[]>({
    queryKey: ['data'],
    queryFn: fetchData,
  });

  if (isLoading) return <div>Loading...</div>;

  if (error) return 'Error';

  return (
    <>
      {data!.map((a: DataType, i: number) => {
        return <p key={i}>{a.title}</p>;
      })}
    </>
  );
}

export default Datas;
