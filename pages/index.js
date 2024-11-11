import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>컨텐츠 페이지</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <div className="image-container">
          <Image
            src="/image1.jpg"  // 첫 번째 이미지 경로
            alt="Content 1"
            width={1080}
            height={1920}
            layout="responsive"
            priority  // 첫 번째 이미지는 빠른 로딩을 위해 priority 설정
          />
          <Image
            src="/image2.jpg"  // 두 번째 이미지 경로
            alt="Content 2"
            width={1080}
            height={1920}
            layout="responsive"
          />
        </div>
      </main>

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html, body {
          width: 100%;
          overflow-x: hidden;
        }

        .container {
          width: 100%;
          line-height: 0;  // 이미지 간 간격 제거
        }

        .image-container {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        .image-container > div {
          display: block !important;
        }
      `}</style>
    </div>
  )
}
