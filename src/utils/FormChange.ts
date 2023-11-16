export const TagsArrayToHashTagArrayForm = (hashtags: string[]) => {
  let newForm: string[] = [];
  hashtags.map(hashtag => {
    newForm.push('#'.concat('', hashtag));
  });
  return newForm;
};
