import Marquee from "react-fast-marquee";
import { Fragment } from "react";
import { Button } from "antd";
import Image from "next/image";
import Logo from "../../public/logo.jpg";
import Flow from "../../public/flow.webp";
import Section1 from "../../public/section1.jpg";
import Brand1 from "../../public/brand/brand1.png";
import Brand2 from "../../public/brand/brand2.png";
import Brand3 from "../../public/brand/brand3.png";
import ContactModal from "@/components/ContactModal";

import Footer from "@/components/Footer";

export default function Home() {
  const config = {
    menu: [
      { title: "小程序开发", icon: "" },
      { title: "APP 开发", icon: "" },
      { title: "管理系统开发", icon: "" },
      { title: "软件定制", icon: "" },
    ],
  };

  return (
    <div
      className={
        "relative w-full min-h-screen overflow-x-hidden bg-[hsl(0,0.0%,98.4%)]"
      }
    >
      {/* 导航栏目 */}
      <header
        className={
          "h-24 relative z-10 container m-auto px-4  flex items-center max-w-[1300px]"
        }
      >
        <div className={"flex-auto flex"}>
          <div className={"flex-none mr-12 flex items-center"}>
            <Image src={Logo} alt={"logo"} width={50} priority />
            <div className={"ml-2 text-2xl font-light"}>蜗壳科技</div>
          </div>
          <div className={"flex-auto  items-center hidden lg:flex"}>
            {config.menu.map((item, index) => {
              return (
                <Fragment key={index}>
                  <ContactModal>
                    <div
                      className={
                        "font-bold  text-sm mr-12 cursor-pointer text-gray-600"
                      }
                    >
                      {item.title}
                    </div>
                  </ContactModal>
                </Fragment>
              );
            })}
          </div>
        </div>
        <div className={"flex-none text-right"}>
          <ContactModal>
            <Button type={"primary"} className={"bg-blue-600"}>
              联系我们
            </Button>
          </ContactModal>
        </div>
      </header>

      {/* hero 模块 */}
      <section
        className={
          "w-full my-32 text-center  lg:text-left container m-auto px-4 max-w-[1300px]"
        }
      >
        {/*底部背景图*/}
        <Image
          alt={"img"}
          src={Section1}
          width={1558}
          height={946}
          className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        />

        {/* 标题 */}
        <div
          className={
            "relative flex flex-col  lg:flex-row space-y-6 lg:space-y-0  justify-center lg:justify-start   items-center mb-16   text-5xl tracking-widest pointer-events-none select-none"
          }
        >
          <div>专业的</div>
          <div className={"relative text-blue-600"}>
            软件开发
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute left-0 top-8 h-[0.58em] w-full fill-blue-400"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
            </svg>
          </div>
          <div>服务商</div>
        </div>

        {/* 简介与视频 */}
        <div className="flex flex-col  lg:flex-row  items-center lg:items-start  relative z-10 lg:space-x-12">
          <div className="flex-auto">
            {/* 标题 */}

            {/* 副标题一 */}
            <div
              className={
                "relative text-xl mb-6   tracking-wide text-gray-500  font-light"
              }
            >
              助力企业搭建各类软件系统
            </div>

            {/* 副标题二 */}
            <div
              className={
                "relative text-xl mb-6 tracking-wide text-gray-500  font-light"
              }
            >
              已服务众多企业开发各类 App，小程序，桌面软件，管理系统...
            </div>
            {/* 副标题三 */}
            <div
              className={
                "relative text-xl mb-6  tracking-wide text-gray-500  font-light"
              }
            >
              提供高质量的服务，是我们的服务宗旨
            </div>

            {/* 副标题四 */}
            <div
              className={
                "relative text-xl mb-12  tracking-wide text-gray-500  font-light"
              }
            >
              诚待你的联系！
            </div>

            {/* 报价按钮 */}
            <div
              className={
                "relative z-10 text-2xl pb-24 text-gray-500 font-light"
              }
            >
              <ContactModal>
                <Button
                  type={"primary"}
                  size={"large"}
                  className={"w-40 shadow-xl shadow-blue-600/50 bg-blue-600"}
                >
                  免费报价
                </Button>
              </ContactModal>
            </div>
          </div>
          <div className="flex-none max-w-[550px]">
            <video className="w-full h-full rounded-xl shadow-2xl " controls>
              <source
                src="https://snailshellsoft.oss-cn-shanghai.aliyuncs.com/video.mov"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </section>

      {/* 特点介绍 */}
      <section className={"container m-auto max-w-[1300px] my-24 px-6"}>
        <div className="relative mx-auto grid max-w-[40rem] grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          <div className="flex">
            <div className="p-0.5">
              <svg
                className="h-10 w-10 shrink-0 transform-cpu rounded-lg shadow-md shadow-blue-600/[.12]"
                viewBox="0 0 40 40"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  d="M.75 8A7.25 7.25 0 018 .75h24A7.25 7.25 0 0139.25 8v24A7.25 7.25 0 0132 39.25H8A7.25 7.25 0 01.75 32V8z"
                  className="fill-sky-50 stroke-blue-600"
                ></path>
                <path
                  d="M31.817 26a13.194 13.194 0 001.433-6c0-7.318-5.932-13.25-13.25-13.25S6.75 12.682 6.75 20c0 2.16.517 4.199 1.433 6"
                  className="stroke-blue-600/40"
                ></path>
                <path
                  d="M15.75 18a4.25 4.25 0 108.5 0 4.25 4.25 0 00-8.5 0z"
                  className="fill-white stroke-blue-600"
                ></path>
                <path
                  d="M28.982 29.74c-.994-2.29-4.638-3.99-8.982-3.99-4.344 0-7.989 1.7-8.982 3.99A13.202 13.202 0 0020 33.25c3.466 0 6.62-1.33 8.982-3.51z"
                  className="fill-white stroke-blue-600"
                ></path>
              </svg>
            </div>
            <div className="ml-6">
              <h2 className="text-sm font-semibold leading-6 text-slate-900">
                定制软件开发
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                根据客户需求定制的软件解决方案，包括业务分析、需求收集、系统设计、编程、测试和部署等全套服务
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="p-0.5">
              <svg
                className="h-10 w-10 shrink-0 transform-cpu rounded-lg shadow-md shadow-blue-600/[.12]"
                viewBox="0 0 40 40"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  d="M.75 8A7.25 7.25 0 018 .75h24A7.25 7.25 0 0139.25 8v24A7.25 7.25 0 0132 39.25H8A7.25 7.25 0 01.75 32V8z"
                  className="fill-sky-50 stroke-blue-600"
                ></path>
                <path
                  opacity="0.4"
                  d="M17.25 33.25h-8.5a2 2 0 01-2-2V8.75a2 2 0 012-2h22.5a2 2 0 012 2v1m-4 3h-18.5"
                  className="stroke-blue-600/40"
                ></path>
                <path
                  d="M31.25 12.75h-8.5a2 2 0 00-2 2v16.5a2 2 0 002 2h8.5a2 2 0 002-2v-16.5a2 2 0 00-2-2z"
                  className="fill-white stroke-blue-600"
                ></path>
                <path d="M26.75 30.25h.5" className="stroke-blue-600"></path>
              </svg>
            </div>
            <div className="ml-6">
              <h2 className="text-sm font-semibold leading-6 text-slate-900">
                云服务与解决方案
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                提供基于云计算的服务，包括云基础设施搭建、云迁移、云应用开发和云管理服务
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="p-0.5">
              <svg
                className="h-10 w-10 shrink-0 transform-cpu rounded-lg shadow-md shadow-blue-600/[.12]"
                viewBox="0 0 40 40"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  d="M.75 8A7.25 7.25 0 018 .75h24A7.25 7.25 0 0139.25 8v24A7.25 7.25 0 0132 39.25H8A7.25 7.25 0 01.75 32V8z"
                  className="fill-sky-50 stroke-blue-600"
                ></path>
                <path
                  d="M24.847 33.25L19.82 20.113c-.324-.846.543-1.656 1.351-1.261L33.25 24.75l-6.426 2-1.977 6.5z"
                  className="fill-white stroke-blue-600"
                ></path>
                <path
                  d="M33.25 20.25V9.75a3 3 0 00-3-3H9.75a3 3 0 00-3 3v20.5a3 3 0 003 3h10.5"
                  className="stroke-blue-600/40"
                ></path>
                <path d="M11.75 11.75v16.5" className="stroke-blue-600"></path>
              </svg>
            </div>
            <div className="ml-6">
              <h2 className="text-sm font-semibold leading-6 text-slate-900">
                持续支持和维护
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                提供软件发布后的持续支持和维护服务，确保软件系统的稳定运行和性能优化
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 服务流程 */}
      <section className={`relative bg-[url('/bg.svg')] my-24 `}>
        <div className={"container m-auto max-w-[1300px]  px-6"}>
          <div className={"text-4xl text-center"}>软件开发流程</div>
          <div className={"text-xl text-center my-8 text-gray-600"}>
            合理高效的开发流程，助力软件快速高效的交付
          </div>
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
              <div className="flex flex-wrap w-full">
                <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                  <div className="flex relative pb-12">
                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                      <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 inline-flex items-center justify-center text-white relative z-10">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </div>
                    <div className="flex-grow pl-4">
                      <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                        需求收集与分析
                      </h2>
                      <p className="leading-relaxed">
                        通过沟通和会议，收集详细的软件需求和业务目标。进行分析以确定项目范围、时间线和预算。
                      </p>
                    </div>
                  </div>
                  <div className="flex relative pb-12">
                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                      <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 inline-flex items-center justify-center text-white relative z-10">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                      </svg>
                    </div>
                    <div className="flex-grow pl-4">
                      <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                        报价
                      </h2>
                      <p className="leading-relaxed">
                        根据需求分析的结果，准备详细的报价单和项目提案，包括成本估算、资源分配、时间表和交付计划。
                      </p>
                    </div>
                  </div>
                  <div className="flex relative pb-12">
                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                      <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 inline-flex items-center justify-center text-white relative z-10">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <circle cx={12} cy={5} r={3} />
                        <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3" />
                      </svg>
                    </div>
                    <div className="flex-grow pl-4">
                      <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                        开发与测试
                      </h2>
                      <p className="leading-relaxed">
                        分阶段编码并进行单元测试，包括集成测试、系统测试和用户验收测试，确保软件的质量和性能。
                      </p>
                    </div>
                  </div>
                  <div className="flex relative pb-12">
                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                      <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 inline-flex items-center justify-center text-white relative z-10">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                        <circle cx={12} cy={7} r={4} />
                      </svg>
                    </div>
                    <div className="flex-grow pl-4">
                      <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                        部署与上线
                      </h2>
                      <p className="leading-relaxed">
                        软件完成后，执行最终的性能测试和安全检查，确保软件的稳定性和可用性，使软件可供最终用户使用。
                      </p>
                    </div>
                  </div>
                  <div className="flex relative">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 inline-flex items-center justify-center text-white relative z-10">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                        <path d="M22 4L12 14.01l-3-3" />
                      </svg>
                    </div>
                    <div className="flex-grow pl-4">
                      <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                        维护与支持
                      </h2>
                      <p className="leading-relaxed">
                        提供持续的技术支持和维护服务，解决任何出现的问题，并根据用户反馈进行必要的软件升级和优化。
                      </p>
                    </div>
                  </div>
                </div>
                <Image
                  className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12 max-h-[620px]"
                  src={Flow}
                  alt="flow"
                />
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* 服务范围 */}
      <section className={`relative py-24 bg-white`}>
        <div className={"container max-w-[1300px]  m-auto px-6 "}>
          <div className={"text-4xl text-center"}>我们的服务</div>
          <div className={"text-xl text-center my-8 text-gray-600"}>
            专业的开发团队，是为客服提供高质量服务的基础
          </div>
          <ul
            role="list"
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
          >
            <li className="rounded-2xl border border-gray-200 p-8">
              <svg viewBox="0 0 32 32" aria-hidden="true" className="h-8 w-8">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
                  fill="#737373"
                ></path>
                <path
                  d="M12 25l8-8m0 0h-6m6 0v6"
                  stroke="#171717"
                  strokeWidth="2"
                  strokeLinecap="round"
                ></path>
                <circle
                  cx="16"
                  cy="16"
                  r="16"
                  fill="#A3A3A3"
                  fillOpacity="0.2"
                ></circle>
              </svg>
              <h3 className="mt-6 font-semibold text-gray-900">软件开发</h3>
              <p className="mt-2 text-gray-700">
                提供全面的软件开发服务，包括桌面软件、企业软件解决方案以及特定行业的软件应用开发
              </p>
            </li>
            <li className="rounded-2xl border border-gray-200 p-8">
              <svg viewBox="0 0 32 32" aria-hidden="true" className="h-8 w-8">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
                  fill="#737373"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9 13a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H10a1 1 0 01-1-1v-2zm0 6a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H10a1 1 0 01-1-1v-2zm1 5a1 1 0 00-1 1v2a1 1 0 001 1h12a1 1 0 001-1v-2a1 1 0 00-1-1H10z"
                  fill="url(#:S2:-gradient)"
                ></path>
                <rect
                  x="9"
                  y="6"
                  width="14"
                  height="4"
                  rx="1"
                  fill="#171717"
                ></rect>
                <circle
                  cx="16"
                  cy="16"
                  r="16"
                  fill="#A3A3A3"
                  fillOpacity="0.2"
                ></circle>
                <defs>
                  <linearGradient
                    id=":S2:-gradient"
                    x1="16"
                    y1="12"
                    x2="16"
                    y2="28"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#737373"></stop>
                    <stop offset="1" stopColor="#737373" stopOpacity="0"></stop>
                  </linearGradient>
                </defs>
              </svg>
              <h3 className="mt-6 font-semibold text-gray-900">APP开发</h3>
              <p className="mt-2 text-gray-700">
                开发针对iOS和Android平台的移动应用程序，包括消费者面向的APP和企业内部使用的应用
              </p>
            </li>
            <li className="rounded-2xl border border-gray-200 p-8">
              <svg viewBox="0 0 32 32" aria-hidden="true" className="h-8 w-8">
                <circle
                  cx="16"
                  cy="16"
                  r="16"
                  fill="#A3A3A3"
                  fillOpacity="0.2"
                ></circle>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5 4a4 4 0 014-4h14a4 4 0 014 4v10h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 002 2h5v2H9a4 4 0 01-4-4V4z"
                  fill="#737373"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24 32a8 8 0 100-16 8 8 0 000 16zm1-8.414V19h-2v5.414l4 4L28.414 27 25 23.586z"
                  fill="#171717"
                ></path>
              </svg>
              <h3 className="mt-6 font-semibold text-gray-900">小程序开发</h3>
              <p className="mt-2 text-gray-700">
                为各种社交媒体平台和电商平台开发小程序，提供快速访问、易于分享和高效互动的用户体验
              </p>
            </li>
            <li className="rounded-2xl border border-gray-200 p-8">
              <svg
                viewBox="0 0 32 32"
                fill="none"
                aria-hidden="true"
                className="h-8 w-8"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
                  fill="#737373"
                ></path>
                <circle cx="11" cy="14" r="2" fill="#171717"></circle>
                <circle cx="11" cy="20" r="2" fill="#171717"></circle>
                <circle cx="11" cy="26" r="2" fill="#171717"></circle>
                <path
                  d="M16 14h6M16 20h6M16 26h6"
                  stroke="#737373"
                  strokeWidth="2"
                  strokeLinecap="square"
                ></path>
                <circle
                  cx="16"
                  cy="16"
                  r="16"
                  fill="#A3A3A3"
                  fillOpacity="0.2"
                ></circle>
              </svg>
              <h3 className="mt-6 font-semibold text-gray-900">管理系统开发</h3>
              <p className="mt-2 text-gray-700">
                开发定制的管理系统软件，如企业资源规划（ERP）、客户关系管理（CRM）和供应链管理（SCM）系统
              </p>
            </li>
            <li className="rounded-2xl border border-gray-200 p-8">
              <svg viewBox="0 0 32 32" aria-hidden="true" className="h-8 w-8">
                <circle
                  cx="16"
                  cy="16"
                  r="16"
                  fill="#A3A3A3"
                  fillOpacity="0.2"
                ></circle>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5 4a4 4 0 014-4h14a4 4 0 014 4v10h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 002 2h5v2H9a4 4 0 01-4-4V4z"
                  fill="#737373"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18 19.5a3.5 3.5 0 117 0V22a2 2 0 012 2v6a2 2 0 01-2 2h-7a2 2 0 01-2-2v-6a2 2 0 012-2v-2.5zm2 2.5h3v-2.5a1.5 1.5 0 00-3 0V22z"
                  fill="#171717"
                ></path>
              </svg>
              <h3 className="mt-6 font-semibold text-gray-900">
                网站开发和设计
              </h3>
              <p className="mt-2 text-gray-700">
                提供从简单的静态网页到复杂的动态网站和电子商务平台的开发和设计服务。确保网站既美观又功能强大。
              </p>
            </li>
            <li className="rounded-2xl border border-gray-200 p-8">
              <svg
                viewBox="0 0 32 32"
                fill="none"
                aria-hidden="true"
                className="h-8 w-8"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
                  fill="#737373"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M23 13.838V26a2 2 0 01-2 2H11a2 2 0 01-2-2V15.65l2.57 3.212a1 1 0 001.38.175L15.4 17.2a1 1 0 011.494.353l1.841 3.681c.399.797 1.562.714 1.843-.13L23 13.837z"
                  fill="#171717"
                ></path>
                <path
                  d="M10 12h12"
                  stroke="#737373"
                  strokeWidth="2"
                  strokeLinecap="square"
                ></path>
                <circle
                  cx="16"
                  cy="16"
                  r="16"
                  fill="#A3A3A3"
                  fillOpacity="0.2"
                ></circle>
              </svg>
              <h3 className="mt-6 font-semibold text-gray-900">私有部署</h3>
              <p className="mt-2 text-gray-700">
                我们支持独立的私有化部署，帮助用户更加安全的使用自己的数据
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* 服务商家 */}
      <section className={"relative bg-white"}>
        <div className={"text-center py-12"}>
          <div className={"text-4xl mb-8 "}>
            与 3 百多家企业用户共同见证改变
          </div>
          <div className={"text-xl mb-24 "}>感谢每一位参与者的信任和支持</div>
          <Marquee className={"mb-12"}>
            <div className={"pl-24"}>
              <Image src={Brand1} alt={"logo"} width={1800} priority />
            </div>
            <div className={"pl-24"}>
              <Image src={Brand2} alt={"logo"} width={1800} priority />
            </div>
            <div className={"pl-24"}>
              <Image src={Brand3} alt={"logo"} width={1800} priority />
            </div>
          </Marquee>
          <Marquee>
            <div className={"pl-24"}>
              <Image src={Brand3} alt={"logo"} width={1800} priority />
            </div>
            <div className={"pl-24"}>
              <Image src={Brand1} alt={"logo"} width={1800} priority />
            </div>
            <div className={"pl-24"}>
              <Image src={Brand2} alt={"logo"} width={1800} priority />
            </div>
          </Marquee>
        </div>
      </section>

      {/* 联系我们 */}
      <section className={`relative bg-[url('/bg.svg')]  py-12`}>
        <div className="container m-auto max-w-[1300px] px-6 relative overflow-hidden my-24">
          <div className={"text-3xl"}>蜗壳科技，让应用制作从未如此简单</div>
          <div className={"text-xl my-8"}>
            如果你有软件定制需求，立即联系我们
          </div>
          <div className={"flex mt-12"}>
            <div className={"flex-none"}>
              <ContactModal>
                <Button type={"primary"} size={"large"} className={"w-32"}>
                  定制应用
                </Button>
              </ContactModal>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
