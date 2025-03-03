"use client";

import { Card, CardBody } from "@heroui/react";
import LoginTabs from "@/features/login";

const Login = () => {
  return (
    <Card shadow="sm" radius="sm" className="w-full sm:w-[27rem]">
      <CardBody>
        <LoginTabs />
      </CardBody>
    </Card>
  );
};

export default Login;
