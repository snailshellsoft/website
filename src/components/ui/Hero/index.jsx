import GradientWrapper from "../../GradientWrapper"
import NavLink from "../NavLink"

const Hero = () => (
    <section>
        <GradientWrapper wrapperClassName="inset-0" className="custom-screen text-gray-600">
            <div className="space-y-5 max-w-4xl mx-auto text-center">
                <h1 className="text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl">
                    快速可靠的 <span
                    className=" bg-clip-text text-transparent bg-gradient-to-r from-[#9867F0] to-[#ED4E50]"> 软件开发 </span>服务商，高效实惠是我们的服务理念
                </h1>
                <p className="max-w-xl mx-auto">
                    深耕软件开发行业多年，不管是系统开发还是小程序实现，你负责提出需求，我们负责实现，助力企业低成本高效的进行软件开发
                </p>
                <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
                    <NavLink
                        href="/pricing"
                        className="flex items-center gap-x-2 text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 "
                    >
                        免费报价
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                             className="w-5 h-5">
                            <path fillRule="evenodd"
                                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                  clipRule="evenodd"/>
                        </svg>
                    </NavLink>
                    <NavLink
                        href="#cta"
                        className="flex items-center gap-x-2 text-gray-700 hover:text-gray-900"
                        scroll={false}
                    >
                        常见问题
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                             className="w-5 h-5">
                            <path fillRule="evenodd"
                                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                  clipRule="evenodd"/>
                        </svg>
                    </NavLink>
                </div>
            </div>
        </GradientWrapper>
    </section>
)

export default Hero