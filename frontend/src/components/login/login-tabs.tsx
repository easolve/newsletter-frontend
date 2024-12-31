"use client";

import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { Tab, Tabs } from "@nextui-org/tabs";

interface LoginTabsProps {}

const LoginTabs: React.FC<LoginTabsProps> = () => {
  return (
    <Tabs aria-label="Options">
      <Tab key="sign-in" title="Sign In">
        <Card
          classNames={{
            base: "w-[300px]",
          }}
        >
          <CardBody className="gap-4">
            <Input label="ID" placeholder="Enter your ID" type="text" />
            <Input
              label="Password"
              placeholder="Enter your password"
              type="password"
            />
            <Button color="primary" size="md">
              Sign In
            </Button>
          </CardBody>
        </Card>
      </Tab>
      <Tab key="sign-up" title="Sign Up">
        <Card
          classNames={{
            base: "w-[300px]",
          }}
        >
          <CardBody className="gap-4">
            <Input label="ID" placeholder="Enter your ID" type="text" />
            <Input label="Email" placeholder="Enter your email" type="email" />
            <Input
              label="Password"
              placeholder="Enter your password"
              type="password"
            />
            <Button color="primary" size="md">
              Sign Up
            </Button>
          </CardBody>
        </Card>
      </Tab>
    </Tabs>
  );
};

export default LoginTabs;
