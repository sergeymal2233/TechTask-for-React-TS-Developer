import { Route, Routes } from "react-router-dom";
import { routes } from "./Routes";
import { NotFound } from "@/pages/NotFound";

export const Routing = () => {
  return (
    <Routes>
      {routes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
