export type RootStackParam = {
  Home: undefined;
  HomeSearch: undefined;
  Location: undefined;
  LocationSearch: undefined;
  Category: undefined;
  MyPage: undefined;
  Branch: {branchID: number};
};

export interface NavigationBarListItemProps {
  screen: string[];
  selectedScreen: string;
  handleListClick: (screen: string) => void;
}

export type BranchParamList = {
  branchType: {
    branchID: number;
  };
};
