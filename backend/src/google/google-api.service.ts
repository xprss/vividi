import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { drive_v3 } from 'googleapis';
import { googleDriveAPIInitializer } from 'libs/google/google.util';

@Injectable()
export class GoogleAPIService {
  public readonly googleDriveAPI: drive_v3.Drive;
  public readonly googleDriveFolderId: string;

  constructor(private configService: ConfigService) {
    this.googleDriveAPI = googleDriveAPIInitializer(configService);
    this.googleDriveFolderId = process.env.GOOGLE_DRIVE_FOLDER_ID!;
  }
}
