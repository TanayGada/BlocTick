import { useState, useEffect } from 'react'
const Image = () => {
  const imageUrls = [
    'https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=150/gallery-images/2c/6d90d54b-9b5e-45d9-a48e-8cce794831cf',
    'https://cdn.lu.ma/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=400,height=400/event-defaults/1-1/standard5.png',
    'https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=150/gallery-images/eg/be7f1704-3d5d-4ac2-b698-fe579999fcbb',
    'https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=150/gallery-images/pp/dc7faf50-3dd1-4a62-a9ee-3a7946ea36c3',
    ' https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=150/gallery-images/71/49ac2889-fc4f-49a2-bb0c-bc7a80cb5e8d',
    'https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=150/gallery-images/jd/5dfd6947-479d-4f1f-b28f-38f944af0495 ',
    ' https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=150/gallery-images/qo/ecc415b9-58d7-466e-af46-42cf492a50d9',
    ' https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=150/gallery-images/8p/33dd8650-02c9-4901-96e0-dd04ab23ab7a',
    'https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=150/gallery-images/9t/333ab826-d09d-426a-8b4c-bcb075f376f3 ',
    ' https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=150/gallery-images/ws/b623afd6-71c0-49d3-81fd-24dc3f86e383',
    'https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=150/gallery-images/i2/836eac35-f01b-48ac-a2b8-c03af126f25d ',
    ' https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=150/gallery-images/40/be3d2910-2cf8-478c-9905-992a818cc2ff',
    ' https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=150/gallery-images/fy/be7e3c2c-3c53-4015-b3f4-b102c5fda520',
    'https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=150/gallery-images/10/d507ae56-37b5-48b3-9613-98348dc949c3 ',
    ' https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=150/gallery-images/87/247532fb-2a79-4de4-91b1-752855f5b1b8',
    ' https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=150/gallery-images/o6/663909da-e85d-4475-ad36-ab72b057cc75',
    'https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=150/gallery-images/mc/6f32a8d4-4dea-479a-a127-f839f4c04726 ',
    'https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=150/gallery-images/tk/f4925372-792b-4e8e-8770-956151b34742 ',
    ' https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=150/gallery-images/rw/47afa882-917c-4310-a22e-7d30ae0d94ae',
    'https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=150/gallery-images/wi/ba62c5e1-cdd3-4d50-b61e-113b428586b3 ',
    'https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=150/gallery-images/tw/7e562176-8eaa-4c06-9ef3-98448c6ac3af ',
    ' https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=150/gallery-images/zb/8d4ab832-aa8e-4397-9333-7723de5d05d4',
    'https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=150/gallery-images/2n/94dad58d-ca38-498e-bf7f-b0e22906606f ',
    'https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=150/gallery-images/wd/48c377a0-6b88-4e1b-b0f0-9426a8ae41b4',
    'https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=150/gallery-images/e6/c31ea94d-1aab-4fea-bc0c-db845771e505',
    'https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=150/gallery-images/fu/a196492e-3e5d-4227-bd3e-77036833a73b',
    'https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=150/gallery-images/nk/07a2d2f3-87f1-4166-be35-448735d6d24a',
    'https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=150/gallery-images/qx/80b8508a-6e96-4145-8bf7-b0c00a6ba7d3',
    'https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=150/gallery-images/g1/9309717e-b363-4d94-b071-fa4d71af3f55',
    'https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=150/gallery-images/v7/2194c140-3bc5-429f-a849-47c0d2ed242e',
    'https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=150/gallery-images/9q/b4220b16-8c45-40a8-bb89-5a63d11523b5',
    'https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=150/gallery-images/wc/4c59a379-3e09-414e-847d-e031b3a61444',
    'https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=150/gallery-images/9q/79166afb-c30a-4ae4-93dc-fad14800d2d8',
    'https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=150/gallery-images/25/219f6e33-163b-46f2-a77e-fe46096e9b12',
    'https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=150/gallery-images/cn/362a6bba-1069-4abf-8d46-8cab47e02180',
    'https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=150/gallery-images/8y/d9f86a31-556f-454f-923f-16fecc8e742b',
    'https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=150/gallery-images/x1/11a76033-3f05-479f-97e3-7a140bf272ff',
    'https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=150/gallery-images/7w/8a6af68f-8938-4c48-9aee-20976176e85c',
    'https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=150/gallery-images/k1/d2c75274-ad03-4330-84fb-61d5f5ed3f19',
    'https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=150/gallery-images/l7/4a1cd2ef-1215-4709-a67e-806369974dfe',
  ]

  const [randomImageUrl, setRandomImageUrl] = useState('')

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * imageUrls.length)
    setRandomImageUrl(imageUrls[randomIndex])
  }

  useEffect(() => {
    getRandomImage()
  }, [])
  return <>{randomImageUrl && <img src={randomImageUrl} alt='Random' style={{borderRadius:'10px'}}/>}</>
}
export default Image
