export type RootStackParam = {
  Home: undefined;
  Location: undefined;
  Category: undefined;
  MyPage: undefined;
};

export interface NavigationBarListItemProps {
  screen: string;
  selectedScreen: string;
  handleListClick: (screen: string) => void;
}
