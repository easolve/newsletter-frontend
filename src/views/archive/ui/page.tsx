import { fetchHistory } from "../api/history";
import { HistoryProvider } from "../store/history";
import HistoryTable from "./table";

interface Props {
  params: Promise<{
    info_id: string;
  }>;
}

const Archive = async ({ params }: Props) => {
  const { info_id } = await params;
  const history = await fetchHistory(info_id);

  return (
    <HistoryProvider history={history}>
      <HistoryTable />
    </HistoryProvider>
  );
};

export default Archive;
