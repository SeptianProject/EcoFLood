import { db, dbInitPromis } from "@/lib/connect-db";
import { NextResponse } from "next/server";

interface ContextDeleteReportDisaster {
     params: Promise<{ reportId: string }>
}

export async function DELETE(request: Request, context: ContextDeleteReportDisaster) {
     try {
          const { reportId } = await context.params;
          const id = parseInt(reportId, 10);

          const formData = await request.formData();
          const secretTokenKey = formData.get("secretTokenKey");
          const token = secretTokenKey as string;

          // Verify admin token
          if (token !== process.env.SECRET_TOKEN_KEY) {
               return NextResponse.json(
                    { error: "Anda tidak punya izin akses!" },
                    { status: 401 }
               );
          }

          if (isNaN(id)) {
               return NextResponse.json(
                    { error: "ID laporan tidak valid!" },
                    { status: 400 }
               );
          }

          // Check if report exists
          await dbInitPromis;
          const existingReport = await db.execute({
               sql: "SELECT * FROM reports WHERE id = ?",
               args: [id],
          });

          if (!existingReport.rows || existingReport.rows.length === 0) {
               return NextResponse.json(
                    { error: "Laporan tidak ditemukan" },
                    { status: 404 }
               );
          }

          // Delete the report
          const deleteResult = await db.execute({
               sql: "DELETE FROM reports WHERE id = ?",
               args: [id],
          });

          return NextResponse.json(
               { message: "Laporan berhasil dihapus", reportId: id, result: deleteResult },
               { status: 200 }
          );
     } catch (error) {
          console.error("Error deleting report:", error);
          return NextResponse.json(
               { error: "Gagal menghapus laporan!" },
               { status: 500 }
          );
     }
}
