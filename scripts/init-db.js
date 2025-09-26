const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function main() {
  console.log("Initializing database...");

  // Create admin user
  const hashedPassword = await bcrypt.hash("admin123", 12);

  const admin = await prisma.admin.upsert({
    where: { email: "admin@inzisandhu.com" },
    update: {},
    create: {
      email: "admin@inzisandhu.com",
      password: hashedPassword,
      name: "Inzamam Sandhu",
    },
  });

  console.log("Admin user created:", {
    email: admin.email,
    name: admin.name,
    password: "admin123", // This is the default password
  });

  // Create sample blog posts
  const samplePosts = [
    {
      title: "Welcome to My Blog",
      slug: "welcome-to-my-blog",
      content: `
        <h2>Welcome to my blog!</h2>
        <p>This is my first blog post where I'll be sharing my thoughts on design, development, and digital marketing.</p>
        <p>I'm excited to share my knowledge and experiences with you. Stay tuned for more content!</p>
      `,
      excerpt:
        "Welcome to my blog where I share insights on design, development, and digital marketing.",
      published: true,
      tags: "welcome, introduction",
      authorName: "Inzamam Sandhu",
    },
    {
      title: "The Future of Web Design",
      slug: "future-of-web-design",
      content: `
        <h2>The Future of Web Design</h2>
        <p>Web design is constantly evolving, and it's important to stay ahead of the curve.</p>
        <p>In this post, I'll discuss the latest trends and technologies that are shaping the future of web design.</p>
        <h3>Key Trends to Watch</h3>
        <ul>
          <li>Dark mode design</li>
          <li>Minimalist interfaces</li>
          <li>Mobile-first approach</li>
          <li>Accessibility improvements</li>
        </ul>
      `,
      excerpt:
        "Exploring the latest trends and technologies shaping the future of web design.",
      published: true,
      tags: "web design, trends, future",
      authorName: "Inzamam Sandhu",
    },
  ];

  for (const post of samplePosts) {
    await prisma.blogPost.upsert({
      where: { slug: post.slug },
      update: {},
      create: post,
    });
  }

  console.log("Sample blog posts created");

  console.log("Database initialization complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
