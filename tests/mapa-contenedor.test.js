const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const html = fs.readFileSync(path.join(__dirname, "..", "index.html"), "utf8");

test("T1: el contenedor semantico del mapa de calor existe en el HTML", () => {
  assert.ok(
    html.includes('id="mapa"'),
    "El HTML debe contener el contenedor del mapa de calor"
  );
});
