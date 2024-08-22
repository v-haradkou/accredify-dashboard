import { FunctionComponent, SVGProps } from "react";

export interface NavigationItemType {
    Icon: FunctionComponent<SVGProps<SVGSVGElement>>,
    path: string
}