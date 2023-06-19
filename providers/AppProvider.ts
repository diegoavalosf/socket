import { ApplicationContract } from '@ioc:Adonis/Core/Application'

export default class AppProvider {
  constructor(protected app: ApplicationContract) {}

  public async ready() {
    if (this.app.environment === 'web') {
      console.log("corriendo..");
      await import('../start/socket')
    }
  }
}

