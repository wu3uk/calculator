import * as fs from 'fs';
import fetch from 'cross-fetch';

interface Logger {
  log(data: string): void;
}

class LogToConsole implements Logger {
  public log(data: string): void {
    console.log(data);
  }
}

class LogToFile implements Logger {
  private path: string;

  constructor(path: string) {
    this.path = path;
  }

  public log(data: string): void {
    fs.appendFile(this.path, data + '\n',
      (err) => {
        if (err) throw err
      }
    );
  }
}

class LogToRemoteServer implements Logger {
  private url: string = 'http://127.0.0.1:3000/logger';

  constructor(url?: string) {
    if (url != undefined) {
      this.url = url;
    }
  }

  public log(data: string): void {
    fetch(this.url, {
      method: 'PUT',
      body: data
    });
  }
}

class NoLogging implements Logger {
  public log(data: string): void { }
}

export type { Logger };
export { LogToConsole, LogToFile, LogToRemoteServer, NoLogging };