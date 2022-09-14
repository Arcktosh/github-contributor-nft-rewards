## Getting Started

Create a project using this example:

```bash
npx thirdweb create --template next-typescript-starter
```

To generate a secret run the following command:

`openssl rand -base64 32`

Now, we need to create a GitHub OAuth app. You can do that from the Github Developer Settings and fill out the information

Now, copy the client id and generate a new secret and copy that. Go to your .env.local file and update these variables. Once you have filled all the env vars restart your dev server!

Next, follow Github's Creating a personal access token guide and add this as an environment variable in your project. We'll use this to make requests to GitHub's API without getting rate-limited.


You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

On `pages/_app.tsx`, you'll find our `ThirdwebProvider` wrapping your app, this is necessary for our hooks to work.

on `pages/index.tsx`, you'll find the `useMetamask` hook that we use to connect the user's wallet to MetaMask, `useDisconnect` that we use to disconnect it, and `useAddress` to check the user's wallet address once connected.

## Learn More

To learn more about thirdweb and Next.js, take a look at the following resources:

- [thirdweb React Documentation](https://docs.thirdweb.com/react) - learn about our React SDK.
- [thirdweb TypeScript Documentation](https://docs.thirdweb.com/typescript) - learn about our JavaScript/TypeScript SDK.
- [thirdweb Portal](https://docs.thirdweb.com) - check our guides and development resources.
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

You can check out [the thirdweb GitHub organization](https://github.com/thirdweb-dev) - your feedback and contributions are welcome!

## Join our Discord!

For any questions, suggestions, join our discord at [https://discord.gg/thirdweb](https://discord.gg/thirdweb).
