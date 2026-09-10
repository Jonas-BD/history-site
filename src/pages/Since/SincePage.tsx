import { useState } from "react"
import { useFetch } from "../../hooks/useFetch"
import type { HistoryData } from "../../Types/historyData"
import { HistoryHeader } from "../../components/HistoryHeader/HistoryHeader"
import { TimeLine } from "../../components/TimeLine/TimeLine"
import { Nav } from "../../components/Nav/Nav"

export const SincePage = () => {
    const [query, setQuery] = useState('1947')
    const { data } = useFetch<HistoryData>(`https://history.muffinlabs.com/date`)

    const events = data?.data?.Events.filter((event) => parseInt(event.year) >= parseInt(query)) || []

    const navLinks = [
        { name: 'Since', path: '/since' },
        { name: 'Today', path: '/' },
        { name: 'By Date', path: '/bydate' }
    ]

    return (
        <>
            <HistoryHeader
                searchType="year"
                title="SINCE: "
                subTitle="What happened on this day - Here you can enter a specific year to get all the events that happened on this day, since that year."
                query={query}
                setQuery={setQuery}
            />

            <Nav linksNav={navLinks} />
            {data && events.length > 0 ? <TimeLine events={events} /> : <p>No events</p>}
        </>
    )
}
