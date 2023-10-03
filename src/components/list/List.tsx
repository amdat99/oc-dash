import React from "react";
import ListItem from "./ListItem";

type Reaction = {
  reaction: string;
  count: number;
};

export type ListData = {
  iconUrl: string;
  name: string;
  nameVerified?: boolean;
  subtitle?: string;
  content?: string;
  memberGroup?: string;
  action?: string;
  actionLink?: string;
  location?: string;
  date?: string;
  locationLink?: string;
  commentNumber?: number;
  shareNumber?: number;
  topTextSize?: string;
  bottomLine?: string;
  reactions?: Reaction[];
  image?: string;
  rightIcon?: string;
};

type ListProps = {
  showHeader?: boolean;
  topTextSize?: string;
  contentTextSize?: string;
  hexagonIcon?: boolean;
  listData: ListData[];
  title?: string;
};

function List({ showHeader = false, listData, topTextSize, contentTextSize, hexagonIcon, title }: ListProps) {
  return (
    <>
      {title && <span className="text-bold text-color bold mb-40"> {title} </span>}

      {listData.map((data: ListData) => {
        return <ListItem showHeader={showHeader} data={data} topTextSize={topTextSize} contentTextSize={contentTextSize} hexagonIcon={hexagonIcon} />;
      })}
    </>
  );
}

export default List;
