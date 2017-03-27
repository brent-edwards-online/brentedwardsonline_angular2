export class Work {
    constructor(
        public workID: Number, 
        public imageUrl: string, 
        public companyName:string,
        public about: string,
        public website: string,
        public type: string,
        public role: "Installation Engineer and Administrator",
        public description: string[],
        public skillset: string
        ){}
}