export class Quote {
    reset() {
      throw new Error('Method not implemented.');
    }
    constructor(public name: string, public description: string, public author: string, public postedDate: Date){

    }
}
