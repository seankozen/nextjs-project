import { Fragment } from "react";
import Link from "next/link";

function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href='/news/next-js-framework'>Next JS Framework</Link>
        </li>
        <li><Link href='/news/war-in-ukraine'>War in Ukraine</Link></li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
