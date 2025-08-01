export const config = {
  notionPageId: '24277be5750380709c72fce42e9b9d67',  // 填入你的 Notion 页面 ID
  notionAccessToken: 'your-notion-token',  // 可选：Notion API Token (用于访问 Notion 数据)

  // Site Info
  siteName: "普斯摩登启示录",  // 修改为你的博客名称
  siteDescription: "A blog powered by Notion",  // 修改为你想要的描述
  siteUrl: "saintforence.dpdns.org",  // 填入你的自定义域名，或使用默认部署链接
  siteLogo: "/assets/logo.png",  // 你的网站 Logo 图标路径

  // Notion Integration
  notionUrl: 'https://www.notion.so',  // 默认 Notion URL
  notionApiUrl: 'https://api.notion.so/v1',  // Notion API URL

  // Optional: Social Media Links
  socialLinks: {
    twitter: 'https://twitter.com/yourprofile',
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourprofile',
    email: 'mailto:youremail@example.com',
  },

  // Optional: Default theme (light or dark)
  theme: 'light',  // 选择默认的主题样式
}
