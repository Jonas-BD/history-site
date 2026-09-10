import type { Birth } from "../../Types/historyData"

import { TimeLineStyled } from "./TimeLine.styled"

import bookLogo from "../../assets/book.png"
import { useEffect, useRef, useState } from "react"

type TimeLineProps = {
    events: Birth[]
}

export const TimeLine = ({ events }: TimeLineProps) => {
    const [visibleEvents, setVisibleEvents] = useState(5)
    const [isLoading, setIsLoading] = useState(false)
    const loaderRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isLoading && visibleEvents < events.length) {
                    setIsLoading(true)
                    
                    
                    setTimeout(() => {
                        setIsLoading(false)
                        setVisibleEvents((prev) => Math.min(prev + 5, events.length))
                    }, 700)
                }
            },
            {
                rootMargin: "0px",
                threshold: 1,
            }
        )

        const currentLoader = loaderRef.current
        if (currentLoader) {
            observer.observe(currentLoader)
        }

        return () => {
            observer.disconnect()
        }
    }, [events])

    const renderedEvents = events.slice(0, visibleEvents).map((event, index) => {
        return (
            <div
                key={`${event.year}-${index}`}
                className={index % 2 === 0 ? "right" : "left"}
            >

                <div className="content">

                    <h2>YEAR: {event.year}</h2>

                    <p>{event.text}</p>

                    <div>
                        <img
                            src={bookLogo}
                            alt="Book"
                        />

                        <a href={event.links[0].link} target="_blank" rel="noopener noreferrer">
                            Read more
                        </a>
                    </div>

                </div>

            </div>
        )
    })

    return (
        <TimeLineStyled>

            <div className="timeline-line">
                {renderedEvents}

                {visibleEvents < events.length && (
                    <div ref={loaderRef} className="scroll-more">
                        <p>{isLoading ? "Loading..." : "Scroll down for more"}</p>
                        <span className="arrow">↓</span>
                    </div>
                )}
            </div>

        </TimeLineStyled>
    )
}