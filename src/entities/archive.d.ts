interface Archive {
  id: string;
  info_id: int;
  title: string;
  content: string;
  sent_status: SentStatus;
  sent_at: string;
  created_at: string;
  updated_at: string;
}

type SentStatus = "" | "STANDBY" | "FAILED" | "SENT";
