import { Metadata } from 'next'
import Link from 'next/link'
import styles from './page.module.css'
import Image from "next/image";

export const metadata: Metadata = {
  title: 'naokiwakata.com',
}

export default function Page() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>naokiwakata.com</h1>
      </header>
      <main className={styles.main}>
        <section className={styles.section}>
          <h2>About Me</h2>
          <Link href={"https://github.com/naokiwakata"}>
            <p>GitHub</p>
          </Link>
          <Link href={"https://x.com/wakanao_banana"}>
            <p>X</p>
          </Link>
          <p>Naoki Wakata（@wakanao_banana）のプロフィールページです</p>
          <p>Flutter/Dart,Android/Kotlin,iOS/Swift のモバイルアプリエンジニアをしています</p>
          <p>本業では月間アクティブユーザーが数十万人のAndroid/iOSのアプリ開発に運用に携わっています。また副業ではFlutterでのアプリ開発・講師業を行っています</p>
          <p>個人では月間アクティブユーザー数が1~2万人の「ラーメン二郎好きのためのアプリ」をFlutter・Firebaseにて運用中です</p>
        </section>

        <section className={styles.section}>
          <h2>個人開発アプリ</h2>
          <h3>オールウェイズ二郎 -ラーメンマップ検索&クチコミ投稿アプリ-</h3>
          <p>Flutter・Firebaseを用いてアプリを開発・運用中です</p>
          <p>AndroidはFlutterからAndroidネイティブ（JetpackCompose・Kotlin）にリプレイス中</p>

          <Image src={"/always_jiro.png"} alt="オールウェイズ二郎" width={"150"} height={"300"} />
          <Image src={"/always_jiro2.png"} alt="オールウェイズ二郎2" width={"150"} height={"300"} />
          <Image src={"/always_jiro3.png"} alt="オールウェイズ二郎3" width={"150"} height={"300"} />
          <Link href={"https://apps.apple.com/jp/app/%E3%82%AA%E3%83%BC%E3%83%AB%E3%82%A6%E3%82%A7%E3%82%A4%E3%82%BA%E4%BA%8C%E9%83%8E-%E3%83%A9%E3%83%BC%E3%83%A1%E3%83%B3%E3%83%9E%E3%83%83%E3%83%97%E6%A4%9C%E7%B4%A2-%E3%82%AF%E3%83%81%E3%82%B3%E3%83%9F%E3%82%A2%E3%83%97%E3%83%AA/id1604416308"}>
            <Image src={"/app_store.svg"} alt="AppStoreからダウンロード" width={"180"} height={"100"} />
          </Link>
          <Link href="https://play.google.com/store/apps/details?id=com.jiro_tabetai">
            <Image src={"/google_play_store.svg"} alt="Google Playで手に入れよう" width={"180"} height={"100"} />
          </Link>

        </section>

      </main>
      <footer className={styles.footer}>
        <p>&copy; 2024 Naoki Wakata. All rights reserved.</p>
      </footer>
    </div>
  )
}