import { UserConfig, defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

const config: UserConfig = {
  plugins: [react(), tsconfigPaths()],
};

export default defineConfig(config);
