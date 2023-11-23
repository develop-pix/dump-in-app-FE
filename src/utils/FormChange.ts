export const TagsArrayToHashTagArrayForm = (hashtags: string[]) => {
  let newForm: string[] = [];
  hashtags.map(hashtag => {
    newForm.push('# '.concat('', hashtag));
  });
  return newForm;
};

export const DateToReviewDateForm = (date: Date) => {
  let dateForm: string = '';
  dateForm = `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
  return dateForm;
};
