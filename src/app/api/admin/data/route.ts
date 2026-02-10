import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const JSON_DATA_DIR = path.join(process.cwd(), "src/data/json");

const fileMap: Record<string, string> = {
  discography: "discography.json",
  links: "socialLinks.json",
  content: "pageContent.json"
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const file = searchParams.get("file");

  if (!file || !fileMap[file]) {
    return NextResponse.json({ error: "Invalid or missing file parameter" }, { status: 400 });
  }

  const filePath = path.join(JSON_DATA_DIR, fileMap[file]);

  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: "Data file not found" }, { status: 404 });
  }

  try {
    const content = fs.readFileSync(filePath, "utf-8");
    return NextResponse.json({ content: JSON.parse(content) });
  } catch (err) {
    console.error("Read error:", err);
    return NextResponse.json({ error: "Failed to read data" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { file, content } = await request.json();

    if (!file || !fileMap[file] || !content) {
      return NextResponse.json({ error: "Missing or invalid parameters" }, { status: 400 });
    }

    const filePath = path.join(JSON_DATA_DIR, fileMap[file]);
    
    // Validate that content is valid JSON (it should be since it comes from JSON.stringify)
    const data = typeof content === "string" ? JSON.parse(content) : content;
    
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Save error:", err);
    return NextResponse.json({ error: "Failed to save data" }, { status: 500 });
  }
}
