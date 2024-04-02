import React from "react";
interface IPublicContext {
    onCloseToggle?: () => void;
    onSetBgContainer?: (bgClass: string) => void;
}
const PublicContext = React.createContext<IPublicContext | null>(null);
export default PublicContext;
