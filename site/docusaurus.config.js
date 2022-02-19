/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "For form builders",
  tagline:
    "Playbooks, patterns, and approaches to delivering a digital form in civic tech.",
  url: "https://form.builders",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "sawyerh", // Usually your GitHub org/user name.
  projectName: "form.builders", // Usually your repo name.
  themeConfig: {
    announcementBar: {
      backgroundColor: "#303846",
      textColor: "#fff",
      content:
        "<strong>Work in progress.</strong> You can follow progress <a href='https://twitter.com/FormBuilders'>on Twitter</a>.",
      isCloseable: false,
    },
    navbar: {
      title: "Form.builders",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs",
          label: "Topics",
        },
        {
          to: "contributing",
          label: "Contributing",
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
          label: "GitHub",
          href: "https://github.com/sawyerh/form.builders",
        },
        {
          label: "Twitter",
          href: "https://twitter.com/FormBuilders",
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
          editUrl: "https://github.com/sawyerh/form.builders/edit/main/site/",
        },
        blog: {
          showReadingTime: true,
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
