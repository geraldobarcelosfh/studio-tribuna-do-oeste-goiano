import { createClient, ClientConfig } from "next-sanity";
import type { SanityClient } from "next-sanity";

const config: ClientConfig = {
  projectId: "y3gukre0",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
};

export const client: SanityClient = createClient(config);