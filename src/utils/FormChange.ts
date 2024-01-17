import { HashtagData } from 'interfaces/Location.interface';

export const TagsArrayToHashTagArrayForm = (hashtags: HashtagData[]) => {
    const newForm: string[] = [];
    hashtags.map(hashtag => {
        newForm.push('# '.concat('', hashtag.name));
    });
    return newForm;
};

export const DateToReviewDateForm = (date: Date | null) => {
    let dateForm: string = '';
    if (date) {
        dateForm = `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
    }
    return dateForm;
};
