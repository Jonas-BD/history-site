import { HistoryHeader } from "../../components/HistoryHeader/HistoryHeader"
import { Nav } from "../../components/Nav/Nav"
import { TimeLine } from "../../components/TimeLine/TimeLine"
import { useFetch } from "../../hooks/useFetch"
import type { HistoryData } from "../../Types/historyData"

export const ThisDayPage = () => {
    const { data } = useFetch<HistoryData>('https://history.muffinlabs.com/date')

    const events = data?.data?.Events || []

    const navLinks = [
        { name: 'Since', path: '/since' },
        { name: 'Today', path: '/' },
        { name: 'By Date', path: '/bydate' }
    ]

    return (
        <>
            <HistoryHeader
                searchType="none"
                title="ON THIS DATE"
                subTitle="What happened on this day - historical events, deaths and births thoughout time"
                query={''}
                setQuery={() => { }}
            />

            <Nav linksNav={navLinks} />

            {data && events.length > 0 ? <TimeLine events={events} /> : <p>No events</p>}
        </>
    )
}
