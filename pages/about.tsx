import Head from 'next/head';
import Header from '../components/Header';
import Profile from '../components/Profile';
import Footer from '../components/Footer';
import Data from '../data/data.json';


const headerTitle = Data.header.title;
const pageTitle = 'このアプリについて';
const pageText = 'アスペクト比の設定を変更すると画像の縦横比率の見え方とそれを再現するCSS設定値が変化します。';
const headTitle = pageTitle + ' | ' + headerTitle;


// Component
function About() {
    return (
        <>
        <Head>
            <title>{ headTitle }</title>
            <meta name="description" content={ pageText } />
            <meta property="og:title" content={ headTitle } />
            <meta property="og:description" content={ pageText } />
        </Head>

        <Header />
        <main>
            <h1>{ pageTitle }</h1>
            <p dangerouslySetInnerHTML={{ __html: pageText }}></p>
            <section>
                <h2>使い方</h2>
                <section>
                    <h3>アスペクト比の変更</h3>
                    <section>
                        <h4>主なアスペクト比</h4>
                            <p>主要なアスペクト比（縦横比率）である下記に変更できる。初期値はスクエア（正方形）。</p>
                            <ul>
                                <li>スクエア(1:1)</li>
                                <li>白銀比(1.414:1)</li>
                                <li>黄金比(1.618:1)</li>
                                <li>デジカメ4:3(1.333:1)</li>
                                <li>デジカメ3:2(1.5:1)</li>
                                <li>デジカメ16:9(1.777:1)</li>
                            </ul>
                            <p>アスペクト比の詳細は下記を参照。</p>
                            <p>※参考：<a href="https://www.i-ryo.com/entry/2019/02/12/223530">【黄金比、白銀比】代表的なアスペクト比（縦横比率）を一覧にしてみた - クモのようにコツコツと</a></p>
                    </section>
                    <section>
                        <h4>画像の向き</h4>
                        <dd>横向き、縦向きに変更できる。初期値は横向き。</dd>
                    </section>
                    <section>
                        <h4>画像サイズ</h4>
                        <dd>10px〜1000pxの間で画像サイズを変更できる。初期値は600px（画面幅が600pxに満たない場合はその中の最大幅）</dd>
                    </section>
                    <section>
                        <h4>サイズ(幅)の刻み</h4>
                        <dd>画像サイズ(幅)を変更する刻みを1px、5px、10pxから変更できる。初期値は10px。</dd>
                    </section>
                </section>
                <section>
                    <h3>プレビュー画像</h3>
                    <section>
                        <h4>タイトル</h4>
                        <p>タイトルに現在の設定されているアスペクト比と向きが表示されます。</p>
                    </section>
                    <section>
                        <h4>画像</h4>
                        <p>設定項目の下の画像に設定によって変更されたアスペクト、向き、サイズが反映されます。</p>
                    </section>
                    <section>
                        <h4>CSS</h4>
                        <p>CSSには「width」と「height」の値にも反映されます。なお、画像には「object-fit: cover;」を追加しないと画像がトリミングされないので必ず加えてください。</p>
                        <p>※参考：<a href="https://www.i-ryo.com/entry/2018/05/24/223648">私が愛してやまない待望の外接リサイズobject-fitを使うのにIEのせいであと1年半も待ってらんないっ！！（→祝・IEサポート終了！） - クモのようにコツコツと</a></p>
                    </section>
                </section>
            </section>
            <section>
                <h2>GitHub</h2>
                <p>このアプリのリポジトリ</p>
                <p><a href="https://github.com/ryo-i/aspect-ratio-generator">aspect-ratio-generator</a></p>
            </section>
            <Profile />
        </main>
        <Footer />
        </>
    );
}

export default About;