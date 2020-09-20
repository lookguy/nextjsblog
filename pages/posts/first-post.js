import Head from 'next/head'
import Layout from "../../components/layout"
import Post from '../../styles/post.module.scss'

export default function firstPost() {
  return (
    <Layout>
      <Head>
        <title>不可思议的FIRST-POST页面</title>
      </Head>
      <h2 className={Post['title-h2']}>目前流浪在广州！</h2>
      <p className={Post['content-p']}>
        李白乘舟将欲行，忽闻岸上踏歌声。
      </p>
    </Layout>
  )
}