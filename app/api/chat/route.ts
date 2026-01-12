import { GoogleGenAI, Type } from "@google/genai"
import { NextRequest, NextResponse } from "next/server"

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" })

// Cache for storing the cached content
let cachedContent: any = null
let cacheExpiry: number = 0

const changeThemeTool = {
  name: "change_theme",
  description: "IMMEDIATELY changes the color theme of the website when the user requests it. Do NOT ask for confirmation or offer choices - just call this function directly with the requested theme. Accepts any color name (e.g., 'dark', 'light', 'blue', 'red', 'green', 'purple', 'pink', 'orange', 'yellow', 'cyan', 'rose', 'slate', 'teal', 'system').",
  parameters: {
    type: Type.OBJECT,
    properties: {
      theme: {
        type: Type.STRING,
        description: "The target theme setting. Can be any color name like 'dark', 'light', 'blue', 'red', 'green', 'purple', 'orange', 'pink', 'yellow', 'cyan', 'rose', 'slate', 'teal', 'system', etc.",
      },
    },
    required: ["theme"],
  },
}

const PORTFOLIO_CONTEXT = `
You are a helpful AI assistant for Ralph Jenrey Loquellano's portfolio website. Here's information about Ralph:

PROFESSIONAL SUMMARY:
- Full-stack engineer with 3+ years of experience
- Expert in Flutter, Next.js, TypeScript, and API-driven architectures
- Based in Cebu City, Philippines, open to remote opportunities worldwide
- Specializes in integrating AI tools to accelerate development workflows

EXPERIENCE:
1. Lead Full-Stack Engineer at EZ Party PH (August 2025 – December 2025)
   - Led distributed engineering team for mobile platform
   - Architected Flutter iOS/Android apps
   - Designed serverless microservices using Next.js
   - Integrated PayMongo payment processing
   - Implemented real-time chat with Fastify and WebSockets
   - Deployed on AWS (S3, Beanstalk, Lightsail)

2. Full-Stack Developer at W3Systems (February 2025 – Present)
   - Built scalable mobile apps with Flutter
   - Migrated legacy systems to Laravel and React.js
   - Integrated Google Gemini AI for automation
   - Migrated MySQL to MongoDB
   - Built WebSocket notification systems

3. Software Developer at Calcmenu Philippines (June 2024 – February 2025)
   - Developed RESTful APIs with Flask and JWT
   - Integrated OpenAI APIs for AI chatbots
   - Built Angular admin dashboards
   - Implemented Azure Functions for PDF generation
   - Developed facial recognition with AWS Rekognition

4. Full-Stack Developer (Freelance) at FluxFusionDev (December 2023 – Present)
   - Designed microservice-based systems
   - Built real-time chat apps
   - Migrated Java apps to Flutter

EDUCATION:
- Bachelor of Science in Information Technology
- Cebu Eastern College, Cebu City, Philippines
- Graduated April 2025, Cum Laude

TECH STACK:
Frontend: React, Next.js, TypeScript, JavaScript, Angular, Tailwind CSS, Bootstrap, Material UI, Shadcn UI, HTML5, CSS3, Redux
Backend: Node.js, Express, Laravel, Django, PHP, Python
Mobile: React Native, Flutter, Android, iOS
Database: MongoDB, PostgreSQL, MySQL, Redis, Firebase
AI & Cloud: OpenAI, Anthropic, Gemini AI, Azure, Google Cloud, AWS, Digital Ocean
DevOps: Docker, Git, GitHub, Vercel, Linux, VS Code, Figma

FEATURED PROJECTS:
1. <strong>EZ Party</strong> - A comprehensive full-stack party booking platform featuring mobile applications for both iOS and Android. Built with Flutter for the mobile apps and Next.js for the backend microservices. Includes real-time chat functionality, payment processing with PayMongo, and deployed on AWS infrastructure.

2. <strong>Toby's Estate Coffee</strong> - A premium loyalty application developed for Toby's Estate Coffee brand. Features include customer rewards tracking, order management, and personalized coffee preferences. Built to enhance customer engagement and retention.

3. <strong>Euromovers</strong> - A professional platform designed for moving and relocation services. Streamlines the booking process, provides real-time quotes, and manages customer requests efficiently.

4. <strong>CalcMenu Lab AI</strong> - An innovative AI-powered recipe management platform that leverages OpenAI APIs. Features include intelligent recipe suggestions, nutritional analysis, and menu planning capabilities. Built with Flask backend and Angular frontend.

SKILLS:
- REST API, Microservices, CI/CD, Agile/Scrum
- Test-Driven Development, Responsive Design
- SEO Optimization, Web Accessibility
- Performance Optimization, UI/UX Design

CONTACT:
- Email: loquellanoralphjenrey@gmail.com
- WhatsApp: +63 922 216 4402
- GitHub: https://github.com/ralphjenrey
- LinkedIn: https://www.linkedin.com/in/ralph-jenrey-loquellano-78a169256

You can help users change the theme to any color they want. IMPORTANT: When a user asks to change the theme, IMMEDIATELY call the change_theme function - DO NOT ask which theme they prefer or offer choices. Just execute the theme change directly. Available themes include: dark, light, blue, red, green, purple, orange, pink, yellow, cyan, rose, slate, teal, or system.

IMPORTANT: Format all responses using HTML tags for better readability:
- Use <strong> for emphasis and important terms
- Use <ul> and <li> for lists
- Use <br> for line breaks
- Use <p> for paragraphs
- Use <a href="url"> for links

Be friendly, professional, and concise. Answer questions about Ralph's experience, skills, projects, and availability.
`

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 })
    }

    // Create or reuse cached content
    const now = Date.now()
    if (!cachedContent || now > cacheExpiry) {
      try {
        cachedContent = await ai.caches.create({
          model: "gemini-2.5-flash",
          config: {
            displayName: "portfolio_context",
            systemInstruction: PORTFOLIO_CONTEXT,
            tools: [{ functionDeclarations: [changeThemeTool] }],
            toolConfig: {
              functionCallingConfig: {
                mode: "AUTO",
              },
            },
            ttl: "3600s", // 1 hour
          },
        })
        // Cache expires in 1 hour
        cacheExpiry = now + (60 * 60 * 1000)
        console.log("Created new cached content:", cachedContent.name)
      } catch (error) {
        console.error("Cache creation failed, falling back to non-cached:", error)
        cachedContent = null
      }
    }

    // Create chat using cached content
    let chat
    if (cachedContent) {
      chat = ai.chats.create({
        model: "gemini-2.5-flash",
        config: {
          cachedContent: cachedContent.name,
        },
      })
    } else {
      chat = ai.chats.create({
        model: "gemini-2.5-flash",
        config: {
          systemInstruction: PORTFOLIO_CONTEXT,
          tools: [{ functionDeclarations: [changeThemeTool] }],
          toolConfig: {
            functionCallingConfig: {
              mode: "AUTO",
            },
          },
        },
      })
    }

    const result = await chat.sendMessage({
      message: message
    })
    
    const responseText = result.text

    // Check for theme function calls
    let theme = null
    if (result.functionCalls && result.functionCalls.length > 0) {
      const themeCall = result.functionCalls.find(call => call.name === "change_theme")
      if (themeCall && themeCall.args) {
        theme = themeCall.args.theme
      }
    }

    return NextResponse.json({
      message: responseText || (theme ? `Switching to ${theme} mode...` : "I processed your request."),
      theme,
    })
  } catch (error) {
    console.error("Chat API Error:", error)
    return NextResponse.json(
      { error: "Failed to process chat message" },
      { status: 500 }
    )
  }
}
