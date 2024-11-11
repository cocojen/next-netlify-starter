import Head from 'next/head'
import Image from 'next/image'  // Image 컴포넌트 추가
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>

        {/* 이미지 섹션 추가 */}
        <div className="image-section">
          {/* Next.js Image 컴포넌트 사용 */}
          <Image
            src="/sample-image.jpg"  // public 폴더 내 이미지 경로
            alt="Sample Image"
            width={500}  // 원하는 너비
            height={300} // 원하는 높이
            priority  // 이미지가 중요한 경우 우선 로딩
            className="main-image"
          />

          {/* 여러 이미지를 그리드로 표시하는 예시 */}
          <div className="image-grid">
            <Image
              src="/image1.jpg"
              alt="Image 1"
              width={200}
              height={200}
              className="grid-image"
            />
            <Image
              src="/image2.jpg"
              alt="Image 2"
              width={200}
              height={200}
              className="grid-image"
            />
            <Image
              src="/image3.jpg"
              alt="Image 3"
              width={200}
              height={200}
              className="grid-image"
            />
          </div>
        </div>
      </main>

      <Footer />

      {/* 스타일 추가 */}
      <style jsx>{`
        .container {
          padding: 0 20px;
        }
        
        .image-section {
          margin: 40px 0;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .main-image {
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .image-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 40px;
        }

        .grid-image {
          border-radius: 8px;
          transition: transform 0.2s;
        }

        .grid-image:hover {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  )
}
