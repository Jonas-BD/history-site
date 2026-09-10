export type HistoryData = {
  date: string
  url: string
  data: Data
}

export type Data = {
  Events: Birth[]
  Births: Birth[]
  Deaths: Birth[]
}

export type Birth = {
  year: string
  text: string
  html: string
  no_year_html: string
  links: HistoryLink[]
}

export type HistoryLink = {
  title: string
  link: string
}