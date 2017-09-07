
export class Upload {
    $key: string;
    file: File;
    URL: string;
    progress: number;
    createdOn: number;
    userDisplayName: string;
    userPhotoURL: string;
    caption: string;

    constructor(file: File) {
        this.file = file;
    }
}