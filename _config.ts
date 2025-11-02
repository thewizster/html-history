import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";

const site = lume({
  src: "./pages",
  dest: "./_site",
});

// Add JSX support
site.use(jsx());

export default site;
