interface Newsletter {
  id: string;
  name: string;
  description: string;
  send_frequency: Frequency;
}

type Frequency = "daily" | "weekly" | "bi-weekly" | "monthly";
