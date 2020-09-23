import { GetServerSideProps, NextPage } from "next";
import { UAParser } from "ua-parser-js"

type Props = {
  browser: {
    name: String;
    version: String;
    major: String;
  }
}

const ssrPage: NextPage<Props> = (props) => {
  return (
    <h1>浏览器是{props.browser && props.browser.name}</h1>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context);
  const ua = context.req.headers["user-agent"]
  const ret = new UAParser(ua).getResult()
  return {
    props: {
      browser: ret.browser
    }
  }
}

export default ssrPage