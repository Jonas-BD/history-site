import type { Dispatch } from "react";

export type HistoryHeaderProps = {
    title: string;
    subTitle: string;
    searchType: string;
    query: string;
    setQuery: Dispatch<string>;
}