import Image from "next/image"
import Logo from '../../../../public/logo.jpg'

const Brand = ({...props}) => (

    <div className={'flex items-center'}>
        <Image className={'flex-none w-8'} src={Logo} alt={'logo'} />
        <div className={'flex-auto font-bole text-xl ml-2'}>
            蜗壳科技
        </div>
    </div>)
export default Brand