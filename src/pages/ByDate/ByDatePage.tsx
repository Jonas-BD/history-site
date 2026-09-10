import { useState } from "react"
import { HistoryHeader } from "../../components/HistoryHeader/HistoryHeader"
import type { HistoryData } from "../../Types/historyData"
import { useFetch } from "../../hooks/useFetch"
import { Nav } from "../../components/Nav/Nav"
import { TimeLine } from "../../components/TimeLine/TimeLine"

export const ByDatePage = () => {
    const [query, setQuery] = useState<string>('04/12')
    const { data } = useFetch<HistoryData>(`https://history.muffinlabs.com/date/${query.split('/')[1]}/${query.split('/')[0]}`)

    const linksNav = [
        { name: 'Since', path: '/since' },
        { name: 'Today', path: '/' },
        { name: 'By Date', path: '/bydate' }
    ]

    const events = data?.data?.Events || []

    return (
        <>
            <HistoryHeader
                title={'ON: '}
                subTitle={'What happened on this day - Here you can enter a specific date to only get events that happened on this date'}
                searchType="date"
                query={query}
                setQuery={setQuery}
            />

            <Nav linksNav={linksNav} />

            {data && events.length > 0 ? <TimeLine events={events} /> : <p>No events</p>}
        </>
    )
}
