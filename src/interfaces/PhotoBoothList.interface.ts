export interface CollectionProps {
  'branch-name': string;
  'repersentative-image': string;
  description: string;
  date: string;
  hashtag: string[];
  'my-branch': boolean;
  mine: boolean;
}

export interface PhotoBoothListProps {
  data: CollectionProps[];
}

export interface PhotoBoothFrameProps {
  data: CollectionProps;
}
