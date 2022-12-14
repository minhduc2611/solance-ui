import {
  DesktopOutlined,
  FileOutlined,
  SettingOutlined,
  TeamOutlined,
  UserOutlined,
  BarChartOutlined,
  LockOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/router";
import { Button, Layout } from "antd";
import CardDetails from "../../components/CardDetails";
import LayoutPage from "../../components/LayoutPage";
const { Content } = Layout;

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Required Staking",
    dataIndex: "requiredStaking",
  },
  {
    title: "Dev Owner",
    dataIndex: "devowner",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];
const data = [];
for (let i = 0; i < 10; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    requiredStaking: 32,
    devowner: `uservi ${i}`,
    action: (
      <Button
        htmlType="submit"
        className="bg-[#512DA8] text-white hover:bg-black h-10 font-bold"
      >
        Action
      </Button>
    ),
  });
}

const description =
  " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
export default function JobDetails() {
  let checkUserLogin;
  let checkRoleUser;
  const router = useRouter();
  // if (typeof window !== "undefined") {
  //   checkUserLogin = Boolean(localStorage.getItem("userlogin"));
  //   checkRoleUser = localStorage.getItem("role");
  //   if (!(checkUserLogin && checkRoleUser === "po")) {
  //     router.push("/job-list");
  //   }
  // }
  return (
    <>
      <LayoutPage>
        <CardDetails
          title="F112345 - Change logic for new UI"
          columns={columns}
          data={data}
          description={description}
        />
      </LayoutPage>
    </>
  );
}
