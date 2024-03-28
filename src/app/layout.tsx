import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "南京蜗壳科技有限公司｜软件开发",
  description:
    "我们是南京蜗壳科技有限公司，专注于提供高质量的软件开发服务。无论您需要定制化的解决方案还是优质的应用程序开发，我们都能够满足您的需求。联系我们了解更多详情！",
  keywords:
    "南京蜗壳科技有限公司, 软件开发, 定制软件开发, 应用程序开发, 云计算服务, 数据库管理, 软件工程, 创新技术解决方案, 技术咨询服务, 客户定制服务",
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="zh-CN">
      <body>
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
