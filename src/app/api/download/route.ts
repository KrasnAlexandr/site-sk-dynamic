import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(req: NextRequest {
  const file = req.url.search.;
  console.log('file', file);
  console.log('params', params);
  const fileName = params.fileName;

  console.log('fileName', fileName);
  // Путь к файлу (пример для файла в директории `private`)
  const filePath = path.join(process.cwd(), 'public/file', `${fileName}.pdf`);

  // Чтение файла
  const fileBuffer = fs.readFileSync(filePath);

  return new NextResponse(fileBuffer, {
    headers: {
      'Content-Disposition': `attachment; filename="${encodeURIComponent(fileName)}"`,
    },
  });
}
