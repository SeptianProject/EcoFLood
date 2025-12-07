import { fileToBase64 } from "@/helper/image-converter";
import cloudinary from "@/lib/cloudinary";
import prisma from "@/lib/connect-db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const reports = await prisma.report.findMany({
            orderBy: { createdAt: 'desc' }
        });
        return NextResponse.json(reports, { status: 200 });
    } catch (error) {
        console.error("Error: ", error);
        return NextResponse.json({ error: "Gagal mengambil data laporan." }, { status: 500 });
    }
}
export async function POST(request: Request) {
    try {
        const formData = await request.formData();

        const latitude = formData.get('latitude');
        const longitude = formData.get('longitude');
        const description = formData.get('description');
        const imageUrl = formData.get('imageUrl') as File | null;
        const status = formData.get('status');

        if (!latitude || !longitude || !description || !imageUrl || !status) {
            return NextResponse.json({
                error: "Semua data wajib diisi!"
            }, { status: 400 });
        }

        const base64Image = await fileToBase64(imageUrl);

        const uploadImage = await cloudinary.uploader.upload(`data:${imageUrl.type};base64,${base64Image}`, {
            folder: "ecoflood_reports",
            resource_type: "image",
            quality: "auto"
        });

        const url = uploadImage.secure_url;

        const newReport = await prisma.report.create({
            data: {
                latitude: parseFloat(latitude as string),
                longitude: parseFloat(longitude as string),
                description: description as string,
                imageUrl: url,
                status: status as string
            }
        });

        return NextResponse.json(newReport, { status: 201 });
    } catch (error) {
        console.error("Error: ", error);
        return NextResponse.json({ error: "Gagal membuat data laporan." }, { status: 500 });
    }
}