import { ConceptData } from 'interfaces/redux/Store.interface';

export const TagsArrayToHashTagArrayForm = (hashtags: ConceptData[]) => {
    const newForm: string[] = [];

    hashtags.map(hashtag => {
        newForm.push('# '.concat('', hashtag.name));
    });

    return newForm;
};

export const DateToReviewDateForm = (date: Date | string | null) => {
    let dateForm: string = '';

    if (date) {
        if (typeof date === 'string') {
            const transformDate = new Date(date);

            dateForm = `${transformDate.getFullYear()}.${(transformDate.getMonth() + 1).toString().padStart(2, '0')}.${transformDate.getDate().toString().padStart(2, '0')}`;
        } else {
            dateForm = `${date.getFullYear()}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getDate().toString().padStart(2, '0')}`;
        }
    }

    return dateForm;
};

export const UploadReviewDateForm = (date: Date | string | null) => {
    let dateForm: string = '';

    if (date) {
        if (typeof date === 'string') {
            const transformDate = new Date(date);

            dateForm = `${transformDate.getFullYear()}-${(transformDate.getMonth() + 1).toString().padStart(2, '0')}-${transformDate.getDate().toString().padStart(2, '0')}`;
        } else {
            dateForm = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
        }
    }

    return dateForm;
};
