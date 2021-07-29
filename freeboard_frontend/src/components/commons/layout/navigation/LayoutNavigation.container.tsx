import { useRouter } from "next/router";
import { MouseEvent } from "react";
import LayoutNavigationUI from "./LayoutNavigation.presenter";

export default function LayoutNavigation() {
  const router = useRouter();
  console.log(router.pathname);

  function onClickMenu(event: MouseEvent<HTMLDivElement>) {
    router.push((event.target as Element).id);
  }

  return <LayoutNavigationUI onClickMenu={onClickMenu} />;
}
