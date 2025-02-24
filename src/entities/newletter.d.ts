namespace Newsletter {
  interface Base {
    name: string;
    description: string;
    custom_prompt: string;
    send_frequency: Frequency;
    send_time: string;
    language: import("countries-list").TLanguageCode;
    is_active: boolean;
    topics: string[];
    sources: string[];
  }

  interface Primitive extends Base {
    language: string;
    id: string;
    created_at: string;
    updated_at: string;
    subscribers_count: number;
    last_send_status: SentStatus;
  }

  interface Info extends Primitive {
    language: import("countries-list").TLanguageCode;
  }
}

type Frequency = "daily" | "weekly" | "bi-weekly" | "monthly";

type SentStatus = "FAILED" | "SENT" | "STANDBY" | "NONE";
