'use client'

import { Button } from 'react-bootstrap'
import { useRouter } from 'next/navigation'
import PageTable from '@/components/page.table'

const Page1 = () => {
    const router = useRouter()
    const ClickButton = () => {
        router.push("/")
    }
    return (
        <div>
            <h1 style={{ margin: '40px', textAlign: 'center' }}>-- My Profile --</h1>
            <div style={{ fontSize: '24px', margin: '0px 10px 40px 20px' }}>
                <ul style={{ margin: '6px 0' }}>
                    <li style={{ margin: '12px 0' }}>
                        <span><b>名前</b></span>：長野上田
                    </li>
                    <li style={{ margin: '12px 0' }}>
                        <span><b>性別</b></span>：男性
                    </li>
                    <li style={{ margin: '12px 0' }}>
                        <span><b>国籍</b></span>：日本
                    </li>
                    <li style={{ margin: '12px 0' }}>
                        <span><b>学校</b></span>：エビ学園
                    </li>
                    <li style={{ margin: '12px 0' }}>
                        <span><b>専門</b></span>：感性工学コース
                    </li>
                    <li style={{ margin: '12px 0' }}>
                        <span><b>年齢</b></span>：二十歳
                    </li>
                    <li style={{ margin: '12px 0' }}>
                        <span><b>趣味</b></span>：サッカー、バドミントン
                    </li>
                    <li style={{ margin: '12px 0' }}>
                        <span><b>研究の内容</b></span>：繊維を分析するための機械学習
                    </li>
                    <li style={{ margin: '6px 0' }}>
                        <span><b>プログラミングの経験</b></span>：なし
                    </li>
                </ul >
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                <Button variant='success' onClick={() => ClickButton()}>
                    Back Home
                </Button>
            </div>
        </div >
    )
}
export default Page1;

