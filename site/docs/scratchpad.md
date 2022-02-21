---
title: Scratchpad
hide_table_of_contents: true
---

# Potential future topics

- Design
  - Question protocol
    - Basic: spreadsheet
    - Advanced: Flow diagram
  - Misconceptions
    - Everyone has a first and last name
    - Everyone has their own email address
    - Reducing number of pages
  - Question page
    - One thing per page
    - Save progress
  - File upload
    - Watch out for the Base64 increase
    - Client-side compression
    - Exif data and privacy
  - Step list
  - Review
  - Success
  - Dashboard
- Build
  - Validation
    - Validation Rules vs. Eligibility Rules
    - Handling partial data when saving progress across multiple pages
  - Routing
    - Conditional logic
    - Backwards navigation
    - State machines
      - JS: xstate
      - Ruby: https://github.com/gocardless/statesman
      - Ruby + Yaml: https://medium.com/just-tech/configuration-driven-state-machines-db26b85d1a67
      - Python, Markdown, Yaml: https://docassemble.org/
  - State management
    - Downstream effects when data changes
  - Internationalization
  - Schema-based forms?
    - https://jsonforms.io/docs/
    - https://github.com/rjsf-team/react-jsonschema-form
    - https://www.taniarascia.com/schema-based-form-system/
    - https://docs.djangoproject.com/en/4.0/topics/forms/modelforms/
  - Developer tooling
    - Storybook
    - State charts
    - Testing
      - End-to-end scenarios, Cypress
- Resources & Examples
  - Likely more complete list is here: https://xgovformbuilder.github.io/x-gov-form-community/tools.html
  - Open Source
    - GOV.UK
      - https://xgovformbuilder.github.io/x-gov-form-community/
      - WTForms https://govuk-frontend-wtf.herokuapp.com/
    - Singapore Form Builder
      - https://form.gov.sg (https://github.com/opengovsg/FormSG)
    - Canada
      - https://forms-formulaires.alpha.canada.ca/en/welcome-bienvenue
      - https://github.com/cds-snc/platform-forms-node/
      - https://cds-snc.github.io/platform-forms-client/
    - https://github.com/ohmyform/ohmyform
    - https://github.com/usdigitalresponse/project-papua
    - https://docassemble.org/
  - Paper forms: https://www.gsa.gov/reference/forms
  - Articles
    - https://www.gov.uk/service-manual/technology/using-progressive-enhancement
    - https://www.w3.org/2001/tag/doc/leastPower.html
    - https://digital.canada.ca/2021/01/11/a-menagerie-of-government-forms
    - https://thoughtbot.com/blog/dynamic-forms-with-stimulus

## Questions for teams

- If you have an intermediary schema (API DB -> CPS DB), how do you keep track of the field mappings during the initial discovery/build phase? Question protocol? Shared names?
