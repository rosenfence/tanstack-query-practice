import { useQuery } from '@tanstack/react-query';
import { fetchData } from './Api';
import { DataType } from './Interface';

function Datas() {
  const { isLoading, error, data } = useQuery<DataType>({
    queryKey: ['data', 1],
    queryFn: fetchData,
  });

  if (isLoading) return 'Loading...';

  if (error) return 'Error';

  return (
    <div>
      <span>{data!.content}</span>
    </div>
  );
}

export default Datas;
