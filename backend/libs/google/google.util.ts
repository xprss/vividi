import { drive_v3, google } from 'googleapis';
import * as path from 'path';
import process from 'process';

export function googleDriveAPIInitializer(): drive_v3.Drive {
  const oauth2Client = new google.auth.GoogleAuth({
    keyFile:
      process.env.GOOGLE_APPLICATION_CREDENTIALS ||
      path.join(__dirname, '../../../config/vividivibes-credentials.json'),
    scopes: ['https://www.googleapis.com/auth/drive'],
  });

  return google.drive({
    version: 'v3',
    auth: oauth2Client,
  });
}
