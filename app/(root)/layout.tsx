import { Children } from "react";

interface SetupLaoutProp{
    children: React.ReactNode;
}

const SetupLayout = ({ children }: SetupLaoutProp) => {
    return <div>{children}</div>;
};
 
export default SetupLayout;