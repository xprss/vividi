import { drive_v3, google } from 'googleapis';
import * as path from 'path';

export function googleDriveAPIInitializer(): drive_v3.Drive {
  const oauth2Client = new google.auth.GoogleAuth({
    keyFile: path.join(
      __dirname,
      '../../../config/vividivibes-credentials.json',
    ),
    scopes: ['https://www.googleapis.com/auth/drive'],
  });

  return google.drive({
    version: 'v3',
    auth: oauth2Client,
  });
}
