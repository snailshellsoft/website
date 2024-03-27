import Logo from "../../../public/logo.jpg";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={"relative bg-white"}>
      <div className={"container m-auto max-w-[1300px] p-6 "}>
        <div className={"flex"}>
          <div className={"flex-1"}>
            <Image src={Logo} alt={"logo"} width={100} priority />
          </div>
          <div className={"flex-1"}>
            <div className={"mb-2 text-md "}>资源</div>
            <div className={"mb-2 text-gray-500 text-sm"}>使用文档</div>
            <div className={"mb-2 text-gray-500 text-sm"}>教学视频</div>
            <div className={"mb-2 text-gray-500 text-sm"}>常见问题</div>
          </div>
          <div className={"flex-1"}>
            <div className={"mb-2 text-md "}>更多</div>
            <div className={"mb-2 text-gray-500 text-sm"}>更新日志</div>
            <div className={"mb-2 text-gray-500 text-sm"}>代码仓库</div>
          </div>
          <div className={"flex-1"}>
            <div className={"mb-2 text-md "}>关于我们</div>
            <div className={"mb-2 text-gray-500 text-sm"}>团队</div>
          </div>
          <div className={"flex-1"}>
            <div className={"mb-2 text-md "}>法律</div>
            <div className={"mb-2 text-gray-500 text-sm"}>服务条款</div>
            <div className={"mb-2 text-gray-500 text-sm"}>隐私协议</div>
          </div>
          <div className={"flex-1"}>
            <div className={"mb-2 text-md "}>办公地址</div>
            <div className={"mb-2 text-gray-500 text-sm"}>
              江苏省南京市浦口区江北新区研创园华创路2号天集江来T3栋
            </div>
          </div>
        </div>
        <div className={"flex my-2 items-center"}>
          <div className={"flex-1 text-sm text-gray-500"}>
            <div className={"mb-4 text-sm"}>
              ©️ {new Date().getFullYear()} 南京蜗壳科技有限公司版权所有
            </div>
            <div className={"flex"}></div>
          </div>
          <div className={"flex-1 text-right text-sm"}>
            <a
              href="https://beian.miit.gov.cn/"
              rel="noopener noreferrer"
              className="text-gray-500 ml-1"
              target="_blank"
            >
              苏 ICP 备 2022037141号-3
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
