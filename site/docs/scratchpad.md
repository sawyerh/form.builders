---
title: Scratchpad
hide_table_of_contents: true
---

# Potential future topics

- Design
  - Question protocol
    - Basic: [text outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/pension/pension-outline.md) or spreadsheet
    - Advanced: Flow diagram
  - Misconceptions
    - Everyone has a first and last name
    - Everyone has their own email address
    - Reducing number of pages
  - Question page
    - One thing per page
      - [Wizards](https://www.nngroup.com/articles/wizards/)
      - [VA.gov wizards](https://design.va.gov/patterns/wizards)
    - Save progress
  - File upload
    - Watch out for the Base64 increase
    - Client-side compression
    - Exif data and privacy
  - Other inputs
    - Phone: https://evilmartians.com/chronicles/phone-inputs-and-you-the-designers-essential-ui-guide
  - Showing progress
    - Step lists
    - Summary menu vs. progress indicator
  - Review
  - Success
  - Dashboard
  - Other resources
    - [Everything](https://www.effortmark.co.uk/category/forms/) from [Caroline Jarrett](https://www.effortmark.co.uk/forms/more-advice-on-creating-better-forms/)
      - [Form design double diamond](https://www.slideshare.net/cjforms/how-to-design-a-better-form)
    - [VA.gov Form Design Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/b5a23efe054ae351306225787f77dee4840cd3fc/teams/vsa/design/getting-started-with-va.gov-forms.md#the-form-design-process) - covers product, design, and engineering
    - Printed forms
      - [Creating accessible forms for print + PDF](https://civicdesign.org/fieldguides/accessible-forms-print-pdf/)
      - [David Sless, Communication Research Institute (CRI), Australia Designing Documents for People to Use](https://scholar.google.com/citations?view_op=view_citation&citation_for_view=ahAiz88AAAAJ:O3NaXMp0MMsC)
- Build
  - Validation
    - Validation Rules vs. Eligibility Rules
    - Handling partial data when saving progress across multiple pages
      - Save partial submissions to file storage?
    - [Accessible form balidation](https://www.smashingmagazine.com/2023/02/guide-accessible-form-validation/)
    - [Write better error messages](https://wix-ux.com/when-life-gives-you-lemons-write-better-error-messages-46c5223e1a2f)
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
    - [Browsers, JSON, and FormData](https://blog.jim-nielsen.com/2022/browsers-json-formdata/)
  - Internationalization
  - Schema-based forms?
    - https://jsonforms.io/docs/
    - https://github.com/rjsf-team/react-jsonschema-form
      -  See link below to VA.gov's usage of this
    - https://www.taniarascia.com/schema-based-form-system/
    - https://docs.djangoproject.com/en/4.0/topics/forms/modelforms/
  - Developer tooling
    - Storybook
    - State charts
    - Testing
      - End-to-end scenarios, Cypress
  - [Accessibility](https://web.dev/learn/accessibility/forms/)
- Resources & Examples
  - Comprehensive list from UK: https://xgovformbuilder.github.io/x-gov-form-community/tools.html
  - [Comprehensive list of resources, tool evaluations, and examples from...City of Austin I think?](https://docs.google.com/spreadsheets/d/1ov27dpfaFW9nk0mVIpshj5Sj5mxoKaQafk8W4oyvqws/edit)
  - Public
    - GOV.UK
      - [Latest effort in UK](https://gds.blog.gov.uk/2021/07/06/making-all-forms-on-gov-uk-accessible-easy-to-use-and-quick-to-process/)
      - https://xgovformbuilder.github.io/x-gov-form-community/
      - WTForms https://govuk-frontend-wtf.herokuapp.com/
    - Singapore Form Builder
      - https://form.gov.sg (https://github.com/opengovsg/FormSG)
    - Canada
      - https://forms-formulaires.alpha.canada.ca/en/welcome-bienvenue
      - https://github.com/cds-snc/platform-forms-node/
      - https://cds-snc.github.io/platform-forms-client/
    - U.S.
      - [VA.gov's fork of `react-jsonschema-form`](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/forms/)
        - [VA.gov form library tech spec](https://github.com/department-of-veterans-affairs/va.gov-team/blob/551d7f17ed1741f290eb6182695dd0984144fc11/platform/engineering/design-docs/2021-05-18-forms-library.md)
        - [VA.gov Platform docs covering the form system](https://depo-platform-documentation.scrollhelp.site/developer-docs/VA-Forms-System-Overview.2085355587.html)
        - [VA.gov Form System docs on Confluence](https://vfs.atlassian.net/wiki/spaces/FLT/pages/1998749743/Engineering+Docs)
      - https://github.com/usdigitalresponse/project-papua
    - Non-govt
      - https://github.com/ohmyform/ohmyform
      - https://docassemble.org/
  - Commercial
    - [VA.gov's form evaluations](https://vfs.atlassian.net/wiki/spaces/FLT/pages/2057634081/Form+Solution+Alternatives)
    - [Austin's form evaluations](https://docs.google.com/presentation/d/e/2PACX-1vQ_SZlJIFEZeSSYx_WwKKbmnnOhk_p3D7LPAyMGvtpCXBrlycSeNdXP6GMpBRGfcWh8MrUIMLrxcNQM/pub?start=false&loop=false&delayms=3000&slide=id.g28f2f0de0c_0_165)
    - Formstack
      - Austin uses: https://city-of-austin.gitbook.io/digital-forms-guide/current-tool/formstack
    - form.io
      - SF uses: https://medium.com/san-francisco-digital-services/how-to-make-a-form-d1d1b67d95d7
        - "City of Philadelphia uses JotForm, City of Austin uses Formstack, and the [State of Georgia uses Drupal’s built-in form tool.](https://georgiagov.atlassian.net/wiki/spaces/KB/pages/598507525/Webform)"
      - [JotForm](https://www.jotform.com/) and [Cognito Forms](https://www.cognitoforms.com/)
        - "We see little reason for someone to re-invent form building — the tools that are out there seem to work well enough for most projects. JotForm and Cognito Forms are both powerful, and you can create both forms and screeners." — [USDR](https://medium.com/u-s-digital-response/strengths-and-weaknesses-of-low-code-no-code-tools-e3e3732b573e) (linked article mentions exceptions, like scale).
  - [The Legal Innovation & Technology Lab's Form Explorer](https://suffolklitlab.org/form-explorer/)
  - Paper forms: https://www.gsa.gov/reference/forms
  - Books
    - [Form Design Patterns](https://www.smashingmagazine.com/printed-books/form-design-patterns/)
    - [Forms that Work](https://www.elsevier.com/books/forms-that-work/krug/978-1-55860-710-1)
    - [Web Form Design: Filling in the Blanks](https://www.lukew.com/resources/web_form_design.asp)
    - [The Form Book](https://thamesandhudson.com/form-book-best-practice-in-creating-forms-for-printed-and-online-use-9780500515082)
  - Guides
    - https://www.gov.uk/service-manual/design/form-structure
    - [PDF: Norwegian ELMER 2 Guidelines- User Interface Guidelines for Governmental Forms on the Internet](/exports/elmer-2-ui-guidelines.pdf)
  - Articles
    - https://www.gov.uk/service-manual/technology/using-progressive-enhancement
    - https://www.w3.org/2001/tag/doc/leastPower.html
    - https://digital.canada.ca/2021/01/11/a-menagerie-of-government-forms
    - https://thoughtbot.com/blog/dynamic-forms-with-stimulus

## Questions for teams

- If you have an intermediary schema (API DB -> CPS DB), how do you keep track of the field mappings during the initial discovery/build phase? Question protocol? Shared names?
