"use client";

import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { subtitle, title } from "@/styles/primitives";

interface ProfileInfoProps {
  newsArr: MyNewsDto[];
}

export interface MyNewsDto {
  name: string;
  description: string;
  send_frequency: string;
}

const dummyNews: MyNewsDto[] = [
  {
    name: "news1",
    description: "도지코인에 대한 모든 것",
    send_frequency: "weekly",
  },
  {
    name: "news2",
    description: "일론 머스크와 테슬라 주식 추적 뉴스레터",
    send_frequency: "bi-weekly",
  },
  {
    name: "news3",
    description: "트럼프와 그의 막무가내 발언에 관한 모든 것",
    send_frequency: "daily",
  },
  {
    name: "news4",
    description: "테슬라의 최신 모델과 주식에 대한 모든 것",
    send_frequency: "monthly",
  },
  {
    name: "news5",
    description: "코로나19 백신에 대한 모든 것",
    send_frequency: "daily",
  },
  {
    name: "news6",
    description: "테슬라의 최신 모델과 주식에 대한 모든 것",
    send_frequency: "monthly",
  },
  {
    name: "news7",
    description: "코로나19 백신에 대한 모든 것",
    send_frequency: "daily",
  },
];

const ProfileInfo: React.FC<ProfileInfoProps> = ({ newsArr = dummyNews }) => {
  return (
    <>
      <h1 className={title({ size: "sm", fullWidth: true })}>My News</h1>
      <div className="flex w-full flex-nowrap gap-6 overflow-x-auto p-6">
        {newsArr.map((news) => (
          <Card
            key={news.name}
            classNames={{
              base: "w-[300px] shrink-0",
            }}
          >
            <CardHeader>
              <h2 className={subtitle()}>{news.name}</h2>
              <p>{news.send_frequency}</p>
            </CardHeader>
            <Divider />
            <CardBody>{news.description}</CardBody>
          </Card>
        ))}
      </div>
    </>
  );
};

export default ProfileInfo;
