'use client'

import { Button } from 'react-bootstrap'
import { useRouter } from 'next/navigation'
import PageTable from '@/components/page.table'

const Page2 = () => {
    const router = useRouter()
    const ClickButton = () => {
        router.push("/")
    }
    return (
        <div>
            <h1 style={{ margin: '40px', textAlign: 'center' }}>-- Programming Skill --</h1>
            <PageTable />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                <Button variant='success' onClick={() => ClickButton()}>
                    Back Home
                </Button>
            </div>
        </div>
    )
}
export default Page2;

