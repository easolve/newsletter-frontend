"use client";

import { Button, Input, Tab, Tabs } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signUp } from "../api/signup";

interface LoginTabsProps {}

const LoginTabs: React.FC<LoginTabsProps> = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const router = useRouter();

  const handleSignIn = async () => {
    if (!email || !password) {
      console.error("Email and password are required.");
      alert("Email and password are required.");
      return;
    }

    const url = new URL(
      "/v1/user/login",
      process.env.NEXT_PUBLIC_BACKEND_API_URL,
    );
    let loginData = new URLSearchParams();
    loginData.append("username", email);
    loginData.append("password", password);

    try {
      const response: Response = await fetch(url.toString(), {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: loginData,
        credentials: "include",
      });
      if (!response.ok) {
        // TODO: handle error
        // e.g., 401 if invalid token
        console.error("Error signing in:", response.statusText);
        alert("Error signing in.");
        return;
      }
      router.push("/");
      router.refresh(); // NOTE: NOTE: /src/app/layout.tsx 에서 이메일을 보여주기 위해 (fetchUserEmail 을 다시 호출하기 위해) refresh 를 사용
    } catch (error) {
      console.error("Error signing in:", error);
      alert("Error signing in.");
    }
  };

  const handleSignUp = async () => {
    const errorMessage = await signUp(email, password, confirmPassword);
    if (!errorMessage) {
      alert("Successfully signed up.");
      router.refresh();
      return;
    }
    alert(errorMessage);
  };

  return (
    <Tabs aria-label="Options" variant="underlined">
      <Tab key="sign-in" title="Sign In">
        <div className="flex h-64 flex-col justify-between">
          <span className="flex flex-col gap-3">
            <Input
              radius="sm"
              label="Email"
              placeholder="Enter your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              radius="sm"
              label="Password"
              placeholder="Enter your password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </span>
          <Button radius="sm" color="primary" size="md" onPress={handleSignIn}>
            Sign In
          </Button>
        </div>
      </Tab>
      <Tab key="sign-up" title="Sign Up">
        <div className="flex h-64 flex-col justify-between">
          <span className="flex flex-col gap-3">
            <Input
              radius="sm"
              label="Email"
              placeholder="Enter your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              radius="sm"
              label="Password"
              placeholder="Enter your password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              radius="sm"
              label="Confirm Password"
              placeholder="Enter your password to confirm"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </span>
          <Button radius="sm" color="primary" size="md" onPress={handleSignUp}>
            Sign Up
          </Button>
        </div>
      </Tab>
    </Tabs>
  );
};

export default LoginTabs;
