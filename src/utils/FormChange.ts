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
        typeof date === 'string'
            ? (dateForm = date)
            : (dateForm = `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`);
    }
    return dateForm;
};
