import { defineCliConfig } from "sanity/cli";

// Mismo origen que sanity.config.ts: ver .env.example.
export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID ?? "your-project-id",
    dataset: process.env.SANITY_STUDIO_DATASET ?? "production",
  },
});
