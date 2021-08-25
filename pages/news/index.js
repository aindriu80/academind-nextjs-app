import { Fragment } from 'react'
import Link from 'next/link'
// our-domain.com/news

function NewsPage() {
  return (
    <Fragment>
      <h1>Hello from the News Page.</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-a-great-framework">
            NextJS is a fantastic framework
          </Link>
        </li>
        <li>React too....</li>
      </ul>
    </Fragment>
  )
}
export default NewsPage
