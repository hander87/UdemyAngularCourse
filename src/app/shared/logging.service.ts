export class LoggingService {

  logStatusChanged(status: string) {
    console.log('SERVICE: A server status changed, new status: ' + status);
  }

}
