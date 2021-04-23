/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "For form builders",
  tagline:
    "Common playbooks, patterns, and approaches to delivering a form in civic tech.",
  url: "https://form.builders",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "sawyerh", // Usually your GitHub org/user name.
  projectName: "form.builders", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Form.builders",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          href: "https://github.com/sawyerh/form.builders",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Elsewhere",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/sawyerh/form.builders",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/sawyerh",
            },
          ],
        },
      ],
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/sawyerh/form.builders/edit/main/site/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/sawyerh/form.builders/edit/main/site/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
