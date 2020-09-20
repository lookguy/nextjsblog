import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>一个流浪于广州的前端程序员</p>
        <p>
          博客使用Next.js来搭建，后面会添加一些个人简历和其它功能！
        </p>
      </section>
    </Layout>
  )
}