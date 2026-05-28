import { seedProjectsFromStaticSource } from "../src/lib/server/projects.js";

seedProjectsFromStaticSource()
  .then(() => {
    console.log("Projects seeded from static source.");
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

