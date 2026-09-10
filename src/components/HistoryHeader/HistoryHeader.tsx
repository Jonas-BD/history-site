import type React from "react"
import type { HistoryHeaderProps } from "./HistoryHeader.types"
import { HistoryHeaderStyled } from "./HistoryHeader.styled"

export const HistoryHeader = ({ title, subTitle, searchType, query, setQuery }: HistoryHeaderProps) => {
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setQuery(e.target.value)
    }

    return (
        <HistoryHeaderStyled>
            <div className="plaque">
                <span className="dot top-left"></span>
                <span className="dot top-right"></span>
                <span className="dot bottom-left"></span>
                <span className="dot bottom-right"></span>
                <div className="header-content">
                    {searchType === 'none' ? (
                        <h1>{title}</h1>
                    ) : (
                        <div className="title-input">
                            <label htmlFor="title-input">{title}</label>
                            <input id="title-input" value={query} onChange={handleChange} maxLength={searchType === 'date' ? 5 : 4} />
                        </div>
                    )}

                    <h2>{subTitle}</h2>
                </div>
            </div>
        </HistoryHeaderStyled>
    )
}
