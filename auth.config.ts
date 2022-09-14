import { ThirdwebAuth } from "@thirdweb-dev/auth/next";

export const { ThirdwebAuthHandler, getUser } = ThirdwebAuth({
    // Using environment variables to secure your private key is a security vulnerability.
    // Learn how to store your private key securely:
    // https://portal.thirdweb.com/sdk/set-up-the-sdk/securing-your-private-key
    process.env.ADMIN_PRIVATE_KEY!,
  // Set this to your domain to prevent signature malleability attacks.
  const domain = process.env.DOMAIN||"http://localhost:3000";
});