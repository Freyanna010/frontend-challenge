export type Tab = {
  value: string;
  title: string;
};

export type HeaderProps = {
  activeTab: string;
  setActiveTab(tab: string): void;
  tabs: Tab[];
};
