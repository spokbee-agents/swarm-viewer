import { NextResponse } from "next/server";
import { fal } from "@fal-ai/client";

fal.config({ credentials: process.env.FAL_KEY });

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const image = formData.get("image");

    if (!image || !(image instanceof File)) {
      return NextResponse.json(
        { error: "Missing or invalid image file" },
        { status: 400 }
      );
    }

    // Pass the File directly — it implements Blob and works in Edge/Serverless.
    // Do NOT convert to Buffer then re-wrap in Blob, which crashes in Edge runtime.
    const imageUrl = await fal.storage.upload(image);

    const result = await fal.subscribe("fal-ai/trellis", {
      input: { image_url: imageUrl },
      logs: true,
    });

    return NextResponse.json(result.data);
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Mesh generation failed";
    console.error("generate-mesh error:", error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
