import { Injectable } from '@nestjs/common';
import { exec } from 'child_process';
@Injectable()
export class CliRunner {
  constructor() {}

  async run(command: string): Promise<string> {
    return new Promise((resolve, reject) => {
      exec(command, (error, stdout, stderr) => {
        if (error) {
          reject(error);
          return;
        }
        if (stderr) {
          resolve(stderr);
          return;
        }
        resolve(stdout);
      });
    });
  }
}
