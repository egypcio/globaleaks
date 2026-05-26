import 'cypress-axe';
import "@cypress/code-coverage/support";

import "./commands";

Cypress.on("uncaught:exception", (err) => {
  if (err.message.includes("412")) {
    return false;
  }
});
