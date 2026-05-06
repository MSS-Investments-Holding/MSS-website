import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";

export default defineConfig({
  name: "mss-investments",
  title: "MSS Investments Holding",
  projectId: "qo567udc",
  dataset: "production",
  plugins: [structureTool(), visionTool()],
  schema: { types: schemaTypes },
});
