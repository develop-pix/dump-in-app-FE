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

export const DistanceForm = (distance: number) => {
  if (distance >= 1000) {
    return `${(distance / 1000).toFixed(1)}km`;
  } else if (distance === 0) {
    return '0m';
  } else {
    return `${distance}m`;
  }
};
